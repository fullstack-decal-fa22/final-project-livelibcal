const Library = require("../models/Library")
const fetch = require("node-fetch")
const { forEach } = require('p-iteration');

module.exports = async function(req, res, next){
    console.log("Starting update library info")
    let now = new Date().getHours()
    let libs = await Library.find({})
    if (now == libs[0].current_hour && libs[0].busyness_info != "No info") {
        console.log("No need to update")
        next()
        return
    } else {
        await forEach(libs, async function(library) {
            let busy_info = await fetch(`http://localhost:3000/busyness?libname=${library.name}`).then(res => res.json())
            let open_time = library.open_time
            let close_time = library.close_time
            let current = now
            if (close_time < open_time) close_time += 24
            if (current >= open_time && current < close_time) { // Ex: open = 8, close 6,  now = 7 => now = 0
                current = 1  // Is open                                   // Ex: open = 8, close 22, now = 23 => now = 0
            } else {
                current = 0 // Is close
            }
            console.log(library.name + " : is_open = "+ current)
            await Library.updateOne({name: library.name}, {$set:{current_hour: now, busyness_info: busy_info, is_open: current}})
        })
        next()
        return 
    }
}