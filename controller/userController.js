const {compareSync} = require("bcrypt");
const {sign}=require("jsonwebtoken");
const {getUserByUserEmail,getUsersModel} = require("../model/userModel");
module.exports = {
    login:(req,res)=>{
        const body = req.body;
        getUserByUserEmail(body.email,(err,results)=>{
            if(err){
                console.log(err);
            }
            if(!results){
                return res.json({
                    success:0,
                    data:"Invalid Email or password"
                });
            }
            //const result = compareSync(body.password,results.password);
            console.log(results.password)
            console.log(body.password);
            let result="";
            if(results.password==body.password){
                result=true
            }else{
                result=false;
            }
            console.log(result)
            if(result){
                body.password=undefined;
                // console.log(body);
                const jsontoken = sign(body,"qwe1234",{
                    expiresIn:"1h"
                });
                return res.json({
                    success:1,
                    message:"Login Successfully",
                    token:jsontoken
                });
            }else{
                return res.json({
                    success:0,
                    message:"Invalid email or password "
                })
            }
        })
    },
    getUsers:(req,res)=>{
        getUsersModel((err,results)=>{
            if(err){
                throw err;
                return;
            }
            res.json({
                success:1,
                data:results
            });
        })
    }
}