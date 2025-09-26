import express from "express"
const app = express()

import cookieParser from "cookie-parser"

//middleware 
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    res.send("hello")
})



export default app
