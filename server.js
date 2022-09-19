var express = require("express");
var app= express();
var HTTP_PORT = process.env.PORT || 8080;
var path = require("path");
app.use(express.static('public'));

app.get('/',(req,res)=>{
res.sendFile(path.join(__dirname,"/views/index.html"));
});

app.get('/game',(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/game.html"));
});

app.get('/description',(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/description.html"));
});

app.use((req,res)=>{
    res.status(404).send("Can't road Page!");
})

onHttpServer=()=>{
    console.log(`server is running on ${HTTP_PORT}`);
}

app.listen(HTTP_PORT,onHttpServer());