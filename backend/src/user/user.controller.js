import UserModel from "./user.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { sendMail } from "../utils/mail.js";
import { otpTemplate } from "../utils/otp.template.js";
import { generateOtp } from "../utils/generate.otp.js";

export const createUser= async (req,res) =>{

try{
    const data = req.body;

    const existing = await UserModel.findOne({email:data.email});
    if(existing){
        return res.status(400).json({message:"Email already registered"});
    }

    const user = new UserModel(data);
    await user.save();

    res.json({message:"Signup success"});
}
catch(err){
    console.log("CREATE USER ERROR:", err);
    res.status(500).json({message:"Internal Server Error"});
}
}

export const sendEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const otp = generateOtp();

    await sendMail(email, "OTP for Signup", otpTemplate(otp));

    res.json({
      success: true,
      message: "Email sent successfully",
      otp: otp,
      success: true
    });

  } catch (error) {
    res.status(500).json({ message: "Error sending mail" });
  }
}


const createToken= async (user) =>{
    const payload={
        id: user._id,
        fullname: user.fullname,
        email: user.email,
        role: user.role
    }
    const token= await jwt.sign(payload, process.env.AUTH_SECRET,{expiresIn:"1d"});
    return token;
}

export const login= async (req,res) =>{

try{
    const {email, password}= req.body;
    const user= await UserModel.findOne({email});
    if(!user){
        return res.status(404).json({message:"User not found"});
    }
    const isLoged= await bcrypt.compare(password, user.password);
    if(!isLoged){
        return res.status(401).json({message:"Invalid credentials"});
    }
    const token= await createToken(user);
    res.cookie("authToken", token,{
        maxAge: 60*60*24*1000,
        domain: process.env.ENVIRONMENT === "DEV" ? "localhost" : process.env.DOMAIN,
         secure: process.env.ENVIRONMENT === "DEV" ? false : true,
            httpOnly: true

    });
    res.json({message:"Login successful"});

}catch(err){
    res.status(500).json({message:"Internal Server Error"});
}
}