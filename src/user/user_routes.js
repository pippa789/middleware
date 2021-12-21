const { Router } = require("express");
const { addUser, listUser, updateUser, deleteuser } = require("./user_controller");
const { hashPassword, compare } = require ("../middlewear");
const userRouter = Router();

userRouter.post("/user", hashPassword, addUser);
userRouter.get("/user", listUser);
userRouter.put("updateUser");
userRouter.delete("/user", deleteUser);
userRouter.get("/user/checkEmail", checkEmail);

module.exports = userRouter;