import express from "express";
import mongoose from "mongoose";
import bodyparser from "body-parser";
import cors from "cors";
import { routes } from "./src/routes/soccerRoutes.js"

const app=express()
const PORT=3000;

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/soccerDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.use(cors());

routes(app);

app.get('/',(req,res)=>
            res.send(`Our Backend Application is running on ${PORT}`)
);

app.listen(PORT, ()=>{
    console.log(`The server is running on ${PORT}`)
})