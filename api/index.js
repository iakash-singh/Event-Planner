import express from "express";
import { PORT } from "./config/config.js";
import connect from "./db/db.js";
import auth from "./routes/auth.js"
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use('/api/auth', auth)
app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`)
    connect()
})