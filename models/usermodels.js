const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userFName : {
        type : String,
    },
    userLName : {
        type : String,
    },
    userRoll : {
        type : String,
    },
    userEMail : {
        type : String,
    },
    userMobile : {
        type : String,
    },
    userPassword : {
        type : String,
    },
})


module.exports = mongoose.model('userData',userSchema)