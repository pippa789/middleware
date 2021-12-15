const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
 
    },
    email: {
        type: String,
        required: true,
        unique: true,
        //this makes sure it's an email
        match: /.+\@.+\..+/,
    },
    password: {
        type: String,
        required:true,
    }
});
   
const User = mongoose.model("User", userSchema);
 
module.exports = User
