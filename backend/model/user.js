import mongoose from "mongoose";

const userStructure=mongoose.Schema(
    {
        FirstName:String,
        LastName:String,
        email:String,
        password:String
    }
);
const userModel=mongoose.model('Custome',userStructure);
export  {userModel};
