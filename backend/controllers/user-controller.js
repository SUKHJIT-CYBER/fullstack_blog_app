import User from "../model/User";
import bcrypt from "bcryptjs";
export const getAllUser = async(req , res , next)=>{
    let users;
    try{
        users = await User.find();
    }catch(err){
        console.log(err);
    }
    if(!users){
        return res.status(404).json({message: "No user Found"});
    }
    return res.status(200).json({users});
}

export const signup =async(req , res  , next) => {
    const {name , email , password} = req.body;
    let isExist;
    try{
        isExist = await User.findOne({email});
    } catch (err){
        console.log(err);
    }
    if(isExist){
        return res.status(400).json({message:"User Exits , Login"});
    }
    const hashedpass = bcrypt.hashSync(password);
    const user = new User({
        name , email, password:hashedpass
    });
    

    try{
        await user.save();
    } catch(err){
        console.log(err);
    }
    return res.status(201).json({user});
}

export const login = async(req , res, next)=>{
    const {email , password} = req.body;
    let isExist;
    try{
        isExist = await User.findOne({email});
    } catch (err){
        console.log(err);
    }
    if(!isExist){
        return res.status(404).json({message:"No User Found , Signup"});
    }

    const isPassOK = bcrypt.compareSync(password , isExist.password);
    if(!isPassOK){
        return res.status(400).json({message:"Incorrect Password"});
    }
    return res.status(200).json({message:"Welocome !!"});
}