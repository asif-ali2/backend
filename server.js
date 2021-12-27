const express = require("express");
const app = express();
const db = require("./config/db");
const port = 4201;
const router = require('./routes/routes');
app.use(express.json());

app.use('/user',router);



app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
});