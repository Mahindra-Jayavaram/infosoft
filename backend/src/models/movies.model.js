const mongoose = require("mongoose")

const movieSchema= new mongoose.Schema({
    movieName:{type:String ,require:true },
    title:{type:String ,require:true },
    rating:{type:Number,require:true},
    category:{type:String , require:true},
    price:{type:Number,require:true },
    image:{type:String,require:true}
},{
    versionKey:false,
    timestamps:true
});
              

const Movie=mongoose.model("movie",movieSchema);
module.exports= Movie;