import mongoose from "mongoose";
export const connectdb = async ()=>{
    let url = process.env.DB_URL;
    try{
        await mongoose.connect(url);
        console.log("Database connected");
        
    }
    catch(err){
        console.log("Database is not connected")
    }
}
