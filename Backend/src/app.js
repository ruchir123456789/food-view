import express from "express"
const app = express()

import cookieParser from "cookie-parser"
import authroute from "./routers/authroute.js"
//middleware 
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routers 
app.use("/api/v1/", authroute)


app.get("/", (req, res) => {
    res.send("hello")
})



export default app
