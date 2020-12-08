//importing
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";

//app config
const app=express();
const port=process.env.PORT || 9000;

const pusher = new Pusher({
    appId: "1117991",
    key: "1c450aec777ab6610bce",
    secret: "6678c7c7715e17bcbcca",
    cluster: "ap2",
    useTLS: true
  });
//middleware

app.use(express.json());

//DB config
const connection_url="mongodb+srv://admin:CUIxCYqjzD6P78md@cluster0.xvvju.mongodb.net/whatsappdb?retryWrites=true&w=majority";
mongoose.connect(connection_url,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
});

//????

//api routes
app.get("/",(req,res)=>res.status(200).send("hello world"));

app.get("/messages/sync",(req,res)=>{
    Messages.find((err,data)=>{
        if(err){
            res.status(500).send(err)
            .catch(function(err) {
        console.log('error: ', err);
    });
        }
        else{
            res.status(200).send(data);
        }
    });
});

app.post("/messages/new",(req,res)=>{
    const dbMessage=req.body;
    Messages.create(dbMessage,(err,data)=>{
        if(err){
            res.status(500).send(err)
            .catch(function(err) {
        console.log('error: ', err);
    });
        }
        else{
            res.status(201).send(data);
        }
    })
})
//listener
app.listen(port,()=>console.log(`Listening on localhost:${port}`));
