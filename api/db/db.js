import mongoose from "mongoose";
import { dbUri } from "../config/config.js";

mongoose.set('strictQuery', true);  
const connect =  ()=>{
    return mongoose.connect(dbUri).then(()=>console.log("Connected to database ")).catch(err=>console.log(err))
}
export default connect