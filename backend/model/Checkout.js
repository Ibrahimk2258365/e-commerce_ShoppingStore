import mongoose from "mongoose";

const CheckoutStructure=mongoose.Schema(
    {

        fullName:String,
      email:String,
      address:String,
      paymentMethod:String,
     }
);
const CheckoutModel=mongoose.model('Checkout',CheckoutStructure);
export  {CheckoutModel};