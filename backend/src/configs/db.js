const mongoose = require("mongoose");

const connect = ()=>{
    return mongoose.connect("mongodb+srv://Mahi:mahi123@cluster0.u7hqmbv.mongodb.net/movies")
}

module.exports = connect;