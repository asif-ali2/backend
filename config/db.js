const mysql = require("mysql");

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Tech@901",
    database:"userData"
});
db.connect((err)=>{
    if(err){
        console.log(err);
    }
    console.log("DB connected");
})
module.exports=db;