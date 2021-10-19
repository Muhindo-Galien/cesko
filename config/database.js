const mongoose = require("mongoose");

// connnecting to MongoDB
const connectDatabase = ()=>{
    mongoose.connect(process.env.DB_URI,{
   useNewUrlParser: true, 
   useUnifiedTopology: true
    })
    .then((data)=>{
        console.log(`MongoDB connected successfully with the server: ${data.connection.host}`);
    }).catch((err)=>{
        console.log(err);
    });
}

module.exports = connectDatabase