const express = require('express');
const app = express();
try{
    const dbModule = require('./dbModule/dbModule');
}catch(e){
    console.log(e);
}

app.get('/',(req, res)=>{
    res.send('hello');
});

app.listen(3000, ()=>{
    console.log('api is running');
});