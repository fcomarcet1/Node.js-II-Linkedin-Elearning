const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res)=> {
    res.status(200).send('Hola Mundo desde express');
});

app.listen(port, () => { 
    console.log(`escuchando el puerto ${port}!`)
});