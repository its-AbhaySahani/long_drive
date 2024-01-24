const mongoose = require('mongoose');


const DB = "mongodb://127.0.0.1:27017/admin";

const connectDb = async () => {
    try{
        await mongoose.connect(DB);
        console.log("connection successful to DB");
        } catch (error) {
          console.error("database connection failed");
          process.exit(0);
        }
    
};

module.exports = connectDb;