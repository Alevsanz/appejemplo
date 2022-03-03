const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    console.log("Paso1 realizado")
    res.send(`<h1>Todo bien y funcionando</h1>`)
});

module.exports.inicio = router;
