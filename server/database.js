const mongoose = require("mongoose")
const url = 'YOUR MONGODB STRING';
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
