const mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "bakhtiyar",
    password: "pakistan",
    database: "todo"
  });
  const EMPLOYEE_TABLE = "employees";
  const sql = "CREATE TABLE IF NOT EXISTS "+EMPLOYEE_TABLE+" \
  (employeeID int NOT NULL primary key,\
    first_name VARCHAR(255) not null default '',\
    last_name varchar(255) not null default '',\
    position VARCHAR(255) not null default '',\
    emp_code varchar(255) not null default '', \
    office varchar(50) not null default '')";
  
  con.connect((err)=> {
    if (err) throw err;
    console.log("Connected!");    
    con.query(sql, (err, result)=>{
      if (err) throw err;
      console.log("Table created");
    });
  });

  function insertInEmployee(empId, f_name, l_name, position, emp, office, res){
        console.log("Connected!");
        var sql = "INSERT INTO "+EMPLOYEE_TABLE+"(employeeID, first_name, last_name, position, emp_code, office) \
        VALUES ("+empId+", '"+f_name+"', '"+l_name+"', '"+position+"', '"+emp+"', '"+office+"')";
        con.query(sql, function (err, result) {
          if (err) {
            console.log(err);
            res.json({error:'error'});
          }
          console.log(result);
          res.json({error:'no error'})
        });
    }

  function getEmployee(res){
    var query = "SELECT * FROM "+EMPLOYEE_TABLE;
        con.query(query, function (err, result, fields) {
          if (err) {
            console.log(err);
            res.json({Employee:[]});
          }          
          newResult = result.map(x => ({EmployeeID :x.employeeID, FirstName : x.first_name, Lastname : x.last_name, Position : x.position, EmpCode : x.emp_code, Office : x.office}));
          console.log(newResult);
          res.json(newResult);
        });    
  }
  
  function updateEmployee(emp_id, first_name, last_name, position, emp_code, office, res){
    var sql = "UPDATE "+EMPLOYEE_TABLE+" SET first_name = '"+first_name+"', last_name = '"+last_name+"', position = '"+position+"', emp_code = '"+emp_code+"', office = '"+office+"' WHERE employeeID = "+emp_id+"";
        con.query(sql, function (err, result) {
            if (err){
                console.log(err);
                res.json({data:'',error:1});
            }
            console.log(result);
            res.json({data:result,error:-1});
        });
  }

  function deleteEmployee(emp_id,res){
      var sql = "DELETE FROM "+EMPLOYEE_TABLE+" Where employeeID = "+emp_id+"";
        con.query(sql, function (err, result) {
          if (err){
            console.log(err);
            res.json({data:'',error:1});
          }
          console.log(result);
          res.json({data:result,error:-1});
        });
  }
  
  module.exports = {con:con,
                    insertInEmployee:insertInEmployee,
                    getEmployee:getEmployee,
                    updateEmployee:updateEmployee,
                    deleteEmployee:deleteEmployee};