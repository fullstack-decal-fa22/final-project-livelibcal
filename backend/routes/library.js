const Library = require("../models/Library")
const express = require("express");
const router = express.Router();
const updateHourAndBusyness = require("../middleware/updateHourAndBusyness")

// let template = new Library({
//     name:,
//     open_time:,
//     close_time:,
//     latitude:,
//     longitude:,
//     short_description:,
//     long_description:,
//     image1_link:,
//     image2_link:,
// })

//adding libraries
const createLibrary = async () => {
    // adding more libraries
    let moffit = await Library.findOne({name: "moffit"});
    if (!moffit) {
        moffit = new Library({
            name: "moffit",
            full_name: "James K. Moffitt Undergraduate Library",
            open_time: 8,
            close_time:6,
            latitude:37.872672419959436,
            longitude:-122.26056838146692,
            short_description:"Moffit has the best scene on campus",
            long_description:"Moffitt Library, located next to Memorial Glade, is one of the busiest libraries on campus. The library includes the Copy Center, Free Speech Movement Café, and convenient access to the collections in the Main (Gardner) Stacks. Reserved for UC Berkeley students and faculty, Moffitt is food- and drink-friendly, serves students of all majors, and is open the longest hours.",
            image1_link:"https://www.lib.berkeley.edu/sites/default/files/styles/library_hours_image/public/2022-03/hours-moffitt-.jpg.webp?itok=rDFDP0mS",
            image2_link:"https://static2.gensler.com/uploads/hero_element/11231/thumb_desktop/thumbs/project_MoffittLibrary_1024x576_01_1509396775_1024x576.jpg",
            base_noise_level: 70,
            venue_id: "ven_55686b35347473535f383452415968385a4375734557784a496843",
        })
        await moffit.save()
    }
    let kresge = await Library.findOne({name: "kresge"});
    if (!kresge) {
        kresge = new Library({
            name: "kresge",
            full_name: "Kresge Engineering Library",
            open_time : 9,
            close_time : 24,
            latitude: 37.87388090865484, 
            longitude : -122.25832257833491,
            short_description : "The perfect library to last minute grind that cs project",
            long_description : "The Kresge Engineering Library is a meeting and study hub in the Bechtel Engineering Center. Our extensive collections and services support the research and teaching programs of the College of Engineering and beyond. ",
            image1_link : "https://www.lib.berkeley.edu/sites/default/files/styles/library_hours_image/public/2022-03/hours-engineering-.jpg.webp?itok=kIqyqIKE",
            image2_link : "https://lh5.googleusercontent.com/p/AF1QipON-jkYMcZ-fR1qI2x1LqGBhM1fHAVRBhXui5Fu=w408-h306-k-no",
            base_noise_level: 90,
            venue_id: "ven_496a6c6172504976315a4c52415968384e7969734234464a496843"
        })
        await kresge.save()
    }
    let mainstack = await Library.findOne({name: "mainstack"});
    if (!mainstack) {
        mainstack = new Library({
            name:"mainstack",
            full_name: "Main (Gardner) Stacks",
            open_time:9,
            close_time:2,
            latitude:37.87235256259323,
            longitude:-122.25916374878575,
            short_description:"A basement style library.",
            long_description:"The David Pierpont Gardner Stacks is a large multi-level space housing 2.3 million volumes, of the approximately 4.5 million volumes that constitute Doe Library’s research collection. Access to the Main (Gardner) Stacks is via Moffitt Library or Doe Library. Open tables, study carrels, and group study rooms are arranged throughout the floors and serve as a primary study area for UC Berkeley students and faculty.",
            image1_link:"https://i.pinimg.com/originals/69/06/37/6906377a15dd28c53b3f5c7b75cf952e.jpg",
            image2_link:"https://live.staticflickr.com/7582/28551141222_5a4227da65_b.jpg",
            base_noise_level: 20,
            venue_id: "ven_385048586949466a2d447552415968393556786f7035514a496843",
        })
       await mainstack.save()
    }
    // let anthropology = await Library.findOne({name: "anthropology"});
    // if (!anthropology) {
    //     anthropology = new Library({
    //         name: "anthropology",
    //         full_name: "Anthropology Library",
    //         open_time : "1300",
    //         close_time : "1700",
    //         latitude: "37.86995158885346", 
    //         longitude : "-122.25536120961735",
    //         short_description : "Closed indefinitely",
    //         long_description : "The George and Mary Foster Anthropology Library holds academic works covering sociocultural anthropology, traditional cultures, archaeology, folklore methods and theory, and physical anthropology. The library has 59,000 print volumes, with several thousand more stored off-site, and provides access to more than 12,000 e-books on archaeology, ethnography, or anthropology.",
    //         image1_link : "https://www.lib.berkeley.edu/sites/default/files/inline-images/anthro_4349_0.jpg",
    //         image2_link : "https://d12hrbxctjickz.cloudfront.net/wp-content/uploads/2022/02/library_William-Webster_ss.jpg",
    //         base_noise_level : 0,
    //         venue_id: "ewweewe",
    //     })
    //     anthropology.save()
    // }
    // let business = await Library.findOne({name: "business"});
    // if (!business) {
    //     business = new Library({
    //         name:"business",
    //         full_name: "The Thomas J. Long Business Library",
    //         open_time:7,
    //         close_time:22,
    //         latitude:37.8716258950288,
    //         longitude:-122.25298366227898,
    //         short_description:"I've never been there.",
    //         long_description:"The Thomas J. Long Business Library is your hub for business information at UC Berkeley. We'll help you find company, industry, and financial market data for your coursework, research, or job search.",
    //         image1_link:"https://www.lib.berkeley.edu/sites/default/files/styles/library_hours_image/public/2022-03/hours-BUSINESS-02.jpg.webp?itok=9F1P2hpI",
    //         image2_link:"https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=e9vAYNJIaQmaX9iUA-1myQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=269.92892&pitch=0&thumbfov=100",
    //         base_noise_level : 70,
    //         venue_id: "ven_55645a645242433332476652415968387044734237596d4a496843"
    //     })
    //     await business.save()
    // }
    
    let bancroft = await Library.findOne({name: "bancroft"})
    if (!bancroft) {
        bancroft = new Library({
            name:"bancroft",
            full_name: "Bancroft Library",
            open_time:10,
            close_time:16,
            latitude:37.872361720548746,
            longitude:-122.25851615874734,
            short_description:"Find rare books here !",
            long_description:"The Bancroft Library is the primary special collections library at UC Berkeley, and one of the largest and most heavily used libraries of manuscripts, rare books, and unique materials in the United States. Bancroft supports major research and instructional activities and plays a leading role in the development of the university's research collections.",
            image1_link:"https://www.lib.berkeley.edu/sites/default/files/styles/library_hours_image/public/2022-03/BANC-06515.jpg.webp?itok=koeFZNaE",
            image2_link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR38w3vEP1Y-OOk0KW3GrljFH_4e-x1-pj9eg&usqp=CAU",
            base_noise_level : 50,
            venue_id: "ven_6b6848532d444c57624541524159683856435343705a6f4a496843"
        })
        await bancroft.save()
    }
    
    let doe = await Library.findOne({name: "doe"})
    if (!doe) {
        doe = new Library({
            name:"doe",
            full_name: "Doe Library",
            open_time:8,
            close_time:16,
            latitude:37.87238039710386,
            longitude:-122.25880754894214,
            short_description:"Immerse yourself in a beautiful library.",
            long_description:"Doe Library supports the teaching, research, and instructional needs associated with more than 50 academic departments and programs in the Arts and Humanities, Social Sciences, and International and Area Studies. The Doe Library building is home to several libraries and is connected to the Main (Gardner) Stacks, where the collections of Doe and Moffitt libraries are shelved.",
            image1_link:"https://www.lib.berkeley.edu/sites/default/files/styles/library_hours_image/public/2022-03/hours-Doe-05041.jpg.webp?itok=3yp7XnLo",
            image2_link:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Doe_Library%2C_main_facade%2C_July_2018.jpg",
            base_noise_level : 50,
            venue_id: "ven_4d433362757470306b4b715241596838526949705851484a496843"
        })
        await doe.save()
    }
    
    let eastasian = await Library.findOne({name: "eastasian"})
    if (!eastasian) {
        eastasian = new Library({
            name:"eastasian",
            full_name: "C. V. Starr East Asian Library",
            open_time:9,
            close_time:17,
            latitude:37.87374505939565,
            longitude:-122.25940024531846,
            short_description:"Really great facilities and view.",
            long_description:"The C. V. Starr East Asian Library (EAL) contains one of the most comprehensive collections of materials in East Asian languages in the United States. Its combined holdings, totaling over 1 million print volumes in Chinese, Japanese, Korean, and other East Asian languages, make it one of the top two such collections in the U.S. outside of the Library of Congress.",
            image1_link:"https://www.lib.berkeley.edu/sites/default/files/styles/library_hours_image/public/2022-03/hours-EAL-4692.jpg.webp?itok=7pfe3ClH",
            image2_link:"https://give.lib.berkeley.edu/sites/default/files/inline-images/EALbuilding04.jpg",
            base_noise_level : 60,
            venue_id: "ven_49563459436d73422d656852415968385a6968774351414a496843"
        })
        await eastasian.save()
    }
    libs = await Library.find({})
    console.log(libs.map(lib => lib.name))
}
createLibrary()

router.get("/", updateHourAndBusyness, async (req, res) => {
    const libname = req.query.libname
    console.log("Get library info from : " + libname)
    try{
        let library = await Library.findOne({name: libname})
        if (!library) {
            return res.status(404).json({msg: "Library not Exist"});
        } else {
            return res.send(JSON.stringify(library))
        }
    } catch(e){
        console.log(e)
        res.status(500).send("Error in Fetching");
    }
})

router.get("/prefer", updateHourAndBusyness, async (req, res) => {
    const isNear= req.query.isNear
    const isOpen= req.query.isOpen
    const isQuiet = req.query.isQuiet
    const isBusy = req.query.isBusy
    let latitude_user = req.query.latitude
    let longitude_user = req.query.longitude

    const CalculateScore = async (library) => { // Score calculation 
        let distanceScore = 0
        let estimatedUserRequestedDistance = isNear / 2000;
        let distance = Math.sqrt(Math.pow((latitude_user - library.latitude), 2) + Math.pow((longitude_user - library.longitude),2))
        if (distance>estimatedUserRequestedDistance){
                distanceScore = 10000;
        } else {
            distanceScore = distance * 10000;
        }
        let currentBusy = 0;
        if (library.busyness_info.analysis.venue_live_busyness_available) {
            currentBusy = library.busyness_info.analysis.venue_live_busyness
        } else if (library.busyness_info.analysis.venue_forecasted_busyness_available) {
            currentBusy = library.busyness_info.analysis.venue_forecasted_busyness
        }
        let quietScore = Math.abs(library.base_noise_level - isQuiet)
        let busyScore = Math.abs(isBusy - currentBusy)
        if (library.is_open != 1 && isOpen == 1) {
            return Infinity // lowest priority
        } 
        return  distanceScore +  quietScore +  (busyScore || 0)
    }

    try{
        let libs = await Library.find({})
        console.log(libs)
        let libKeys = libs.map(x => x.name);
        console.log(libKeys);
        let libValues = await Promise.all(libs.map(async (x) => await CalculateScore(x)))
        var libmap = libKeys.map(function(e, i) {
            return [e, libValues[i]];
          });
        libmap.sort((x,y) => x[1]-y[1])
        console.log(libmap)
        let newlist = libmap.map((x) => x[0])
        console.log(newlist)
        res.send(JSON.stringify(newlist))
    } catch(e){
        console.log(e)
        res.status(500).send("Error in fetching prefered library");
    }   
})


module.exports = router
