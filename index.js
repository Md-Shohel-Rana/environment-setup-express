require("dotenv").config();
const express = require('express');
const app = express();
const PORT= process.env.PORT || 3000;

app.get('/', (req,res)=>{
    res.send("hello hi i am mern stack developer");
});


app.listen(PORT, ()=>{
    console.log(`server run success insa-allah http://localhost:${PORT}`);
});
