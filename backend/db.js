const mongoose = require('mongoose')

// mongodb+srv://darshanprogramming06:<db_password>@cluster0.7xtdk.mongodb.net/
const mongooseURL = "mongodb+srv://darshanprogramming06:h7WCWOsaLAbZW2Qn@cluster0.7xtdk.mongodb.net/to-do"

const connectToMongo = () =>{

    mongoose.connect(mongooseURL, {useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 50000} ,()=>{
        console.log("MongoDb")
        
    })
}

module.exports = connectToMongo;