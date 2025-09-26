import userModel from "../models/user.model"
import bcrypt from "bcrypt"

const registerUser = async (req, res) => {
    const { fullName, email, password, role } = req.body

    const existingUser = await userModel.findOne({
        email
    })
    if (existingUser) {
        return res.status(400).send({
            message: "user already registerd ,, login in regiter api"
        })
    }

    const hashpassword = await bcrypt.hash(password, 10)

    const usercreate = await userModel.create({
        fullName,
        email,
        password: hashpassword
    })



    res.status(200).send({
        message: "user Registered",
        userdata: usercreate
    })

}

const login = async (req, res) => {

}

export { registerUser }