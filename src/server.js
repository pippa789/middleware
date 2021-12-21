const express = require("express");
const app = express();
const port = 5001;
require("./db/connection")
const cors = require("cors")
const userRouter = require("./user/user_routes")

app.use("/static", express.static("publicfiles"));
app.use(express.json())
app.use(cors())
 
app.use(userRouter)
app.listen(port, () => {
    console.log("bol")
})
 
 
