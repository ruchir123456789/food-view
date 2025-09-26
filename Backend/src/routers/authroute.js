import express from "express"
const router = express.Router()
import { registerUser } from "../controllers/authcontroller.js"

router.post("/register", registerUser)




export default router