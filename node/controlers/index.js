//lugar de configuracion de nuestro servidor...

//importamos express

const express = require('express');
const routes = require('../routs/routs');
const {database} = require('../database/db');
// Express: es una clase configurable como servidor http o https que se vincula a un requerimiento.
//Nota: se necesita crear una instancia


const server_app = express(); //Inicializando la instancia del servidor.

server_app.set('port',process.env.PORT||4000)//verifica un puerto libre o elije el puerto 4000

//conectarnos a la base de datos
try{
    database.authenticate();
    console.log("Conectado");    
}catch(error){
    console.log("Algo esta mal, revisemos")
};

server_app.listen(server_app.get('port'),()=>{
    console.log('server on port',server_app.get('port'))
})

server_app.use('/movie',routes.inicio);

console.log("Terminando");