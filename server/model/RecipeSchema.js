const mongoose = require("mongoose")
const {Schema} = mongoose
const RecipeSchema = new Schema({
    Name:{
        type:String
    },
    Category:{
        type:String
    },
    Url:{
        type:String
    },
    Unique:{
        type:String
    },
    user:{
        type:String
    }
})
const model = mongoose.model("recipe",RecipeSchema)
model.createIndexes()
module.exports = model