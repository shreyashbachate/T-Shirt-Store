const express=require('express');
const app=express();
const port=process.env.PORT||8000;
const ad=(req,res)=>{
    res.send("Hey,Samruddhi here!");
};
app.get('/',ad);
app.get('/admin',(req,res)=>{
   return res.send("This is admin");
})
const isMe=(req,res,next)=>{
console.log("I am the middleware");
next();
}
app.get('/me',isMe,ad);
app.get('/sam',(req,res)=>{
    res.send("Sam!");
})
app.listen(port,()=>{ 
    console.log("Server Created");
})