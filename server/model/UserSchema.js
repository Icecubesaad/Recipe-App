const mongoose = require("mongoose")
const {Schema} = mongoose
const UserSchema = new Schema({
    Email:{
            type:String
    },
    Password:{
            type:String
    }
})
const user = mongoose.model("user",UserSchema)
user.createIndexes()
module.exports = user