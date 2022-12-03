const jwt = require("jsonwebtoken");

module.exports = function(req, res, next){ // next is the special for middleware function, pass into the next function
    const token = req.header("token");
    if (!token) return res.status(401).json({msg: "Authentication error !"});
    try{
        const decode = jwt.verify(token, "randomString");
        req.user = decode.user;
        next();
    } catch(e) {
        console.error(e);
        res.status(500).send({message: "Invalid Token"});
    }
}
