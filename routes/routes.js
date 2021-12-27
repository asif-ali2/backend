const {login, getUsers} = require('../controller/userController');
const express = require("express");
const router = express.Router();

router.post('/login',login);
router.get("/data",getUsers);


module.exports=router;