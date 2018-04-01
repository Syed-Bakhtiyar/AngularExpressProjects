const express = require('express');
const body_parser = require('body-parser');
const cors = require('cors');
const db_module = require('./model/dbHelper');
const app = express();
app.use(body_parser.urlencoded({ extended: true }))
app.use(cors());

app.post('/insertEmployee', (req,res)=>{
  console.log(req.body.emp_id, req.body.f_name, req.body.l_name, req.body.position, req.body.emp_code, req.body.office,"\n");
  db_module.insertInEmployee(req.body.emp_id, req.body.f_name, req.body.l_name, req.body.position, req.body.emp_code, req.body.office,res);
});

app.get('/getEmployeeRecord',(req,res)=>{
  db_module.getEmployee(res);
});

app.put('/updateEmployeeRecord',(req,res)=>{
  console.log(req.body.emp_id, req.body.f_name, req.body.l_name, req.body.position, req.body.emp_code, req.body.office);
  db_module.updateEmployee(req.body.emp_id, req.body.f_name, req.body.l_name, req.body.position, req.body.emp_code, req.body.office, res);
});

app.delete('/deleteEmployeeRecord',(req,res)=>{
  console.log(req.query.emp_id);
  db_module.deleteEmployee(req.query.emp_id,res);
});

app.listen(3000, ()=>{
    console.log('port 3000');
});