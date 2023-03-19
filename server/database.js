const mongoose = require("mongoose")
const url = 'mongodb://127.0.0.1:27017/Recipes';
const mongo_connect = ()=>{
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to database!');
    // your code here
  })
  .catch((error) => {
    console.error('Error connecting to database:', error);
  });
}

module.exports=mongo_connect