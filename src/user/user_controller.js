const User = require("./user_model");
 
exports.addUser = async (req, res) => {
    try{
        const newUser = new User(req.body);
        await newUser.save();
        res.status(200).send({message: "successfully add user", newUser})
       
    }catch(error){
        console.log(error)
        res.status(500).send({message:"ehla"});
    }
}
