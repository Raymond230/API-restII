const express = require('express');

const app = express()

app.get('/',(req,res)=>{
    res.send('hello,world igor')
})

const PORT = 3333;
app.listen(PORT,()=> console.log(`Serve is running on Port ${PORT}` ));