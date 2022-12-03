const express = require("express");
const bodyParser = require("body-parser");
const InitiateMongoServer = require("./config/db");
const user = require("./routes/user");
const cors = require('cors');
const library = require("./routes/library");
const review = require("./routes/review");
const busyness = require("./routes/busyness");

InitiateMongoServer();
const app = express();
const PORT = process.env.PORT || 3000
app.use(cors());
app.use(bodyParser.json());
app.use("/user", user)
app.use("/review", review)
app.use("/busyness", busyness)

// Change to true when you want to restart the database
if (false) {
    const clear = require("./clearDB");
    app.use(clear);
}

app.use("/library", library)

app.get("/", (req, res) => { 
    res.json({ message: "API Working" });
})

app.listen(PORT, (req, res) => {
    console.log(`Server started at PORT ${PORT}`);
})