const express = require("express");
const app = express();
const port = 5001;
require("./database/connection")
const cors = require("cors")
const userRouter = require("./user/user_routes")
 
// app.use("/static", express.static("publicfiles"));
app.use(express.json())
app.use(cors())
 
app.use(userRouter)
app.listen(port, () => {
    console.log("bol")
})
 
 
app.listen(port, () => {
    console.log("listening on port 3000")
});
