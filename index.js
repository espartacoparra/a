const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.json('hola');
})


app.set('port',3000 );

app.listen(3000);