const bcrypt = require("bcrypt");
const res = require("express/lib/response");
const User = require("../user/userModel")
 
exports.hashPassword = async (req, res, next) =>{ 
   
       
    } catch (error){
        console.log(error);
        res.status(500).send({message: "unsuccessfull"});
    }
};  
exports.checkEmail = async ( req, res )  => {
    try{
        const email = req.body.email;
        const regex = /.\@.+\.+/;
        if (regex.test(email)){
            res.status(200).send({message: "Valid email, woohoo!"});
        } else{
            res.status(500).send({message: "Invalid email, please try again"});
        }
    } catch (error){
        res.status(500).send({message: "Unsuccessful, please try again"});
    }
};    

