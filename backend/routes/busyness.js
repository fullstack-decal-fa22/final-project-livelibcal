const Library = require("../models/Library");
const express = require("express");
const router = express.Router();
const fetch = require('node-fetch');

router.get("/", async (req, res) => {
    const libname = req.query.libname
    console.log("Getting live busyness data for " + libname);
    try{
        let library = await Library.findOne({name: libname})
        if (!library) {
            return res.status(404).json({msg: "Library not Exist"});
        } else {
            const params = new URLSearchParams({ 
                'api_key_private': 'pri_798c977b71214a3799214dbbac6aa87e',
                'venue_id' : library.venue_id
              });
              await fetch(`https://besttime.app/api/v1/forecasts/live?${params}`, {
                method: 'POST'
              }).then(async function(data) { 
                res.send(await data.json())
              });
        }
    } catch(e){
        console.log(e)
        res.status(500).send("Error in Fetching");
    }
})

module.exports = router