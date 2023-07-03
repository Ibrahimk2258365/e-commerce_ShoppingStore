import mongoose from "mongoose";




const productStructure=mongoose.Schema(
    {
      name: String,
      price: Number,
      image: String
    }
);
const productModel=mongoose.model('Customer',productStructure);
export  {productModel};