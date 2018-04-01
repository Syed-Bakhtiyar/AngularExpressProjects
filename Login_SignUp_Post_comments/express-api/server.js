const dbModule = require('./modules/DbHelper.js');
const cors = require('cors');
const body_parser = require('body-parser');
const express = require('express');
const app = express();
app.use(body_parser.urlencoded({extended:true}));
app.use(cors);

app.post('/createUser',(req,res)=>{

});

app.post('/userlogin',(req,res)=>{
    dbModule.getAuthenticatedUser(req.body.email, req.body.password, res);
});

app.listen(3000, ()=>{
    console.log('Port Started On Port 3000');
});