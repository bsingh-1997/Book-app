import express, { response } from "express"
import mongoose from "mongoose";
import {PORT , mongoDBURL} from "./config.js";
import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoutes.js'
import cors from 'cors'
const app = express();

// middelware for parsing req body
app.use(express.json()) 


app.use(cors());

//middelwares for using cors policy
//opt 1 ,allows all origins with default of cors
// app.use(cors());
// opt2 ,allow custom origins
// app.use(
//     cors({
//     origin:['https://book-app-mern.vercel.app/'],
//     methods:['GET','POST','PUT','DELETE'],
//     allowedHeaders:['Content-Type'],
//     credentials: true
// })
// )

app.get('/',(req,res)=>{
    console.log(req);
    return res.status(234).send("welcome to mern tut")
})

app.use('/books', booksRoute)

mongoose
.connect(mongoDBURL)
.then(()=>{
    console.log("app connected to db")
app.listen(PORT,()=>{
    console.log(`app is listened on port : ${PORT}`)
}) 
})
.catch((error)=>{
    console.log(error)
})

export default app
