import userModel from "../models/user.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const Secret_key = "Mysecretkey@123"

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
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).send({ message: "login user data not recived , in login api" })
    }
    const usercheck = await userModel.findOne({ email })
    if (!usercheck) {
        return res.status(400).send({
            message: "user not registered , please register first"
        })
    }
    const passwordcheck = await bcrypt.compare(password, usercheck.password)
    if (!passwordcheck) {
        return res.status(400).send({
            message: "password incorrect"
        })
    }

    const token = jwt.sign({ id: usercheck._id, email: usercheck.email }, Secret_key, { "expiresIn": "4h" })

    res.cookie("token", token)
    res.status(200).send({
        message: "user login",
        token: token
    })
}

export { registerUser, login }