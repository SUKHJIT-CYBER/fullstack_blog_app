import mongoose from "mongoose";
import { stringify } from "querystring";

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name:{
        type:String,
        required:true


    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength: 6
    }
});

export default mongoose.model("User" , UserSchema);