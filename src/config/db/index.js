const mongoose = require('mongoose');

async function  connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/KN_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,        
        });
        console.log("Connect Succesfully")
    } catch (error) {
        console.log("Connect Failure")
    }

}

module.exports = {connect};



