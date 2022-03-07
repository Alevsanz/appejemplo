const {Sequelize} = require('sequelize');

const database = new Sequelize('peliculas','root','',{
    host: '127.0.0.1',
    port:'3306',
    dialect: 'mysql'
});

module.exports.database = database;



/*probar la coneccion de la base de datos nomas
try{
    database.authenticate();
    console.log("Conectado");    
}catch(error){
    console.log("Algo esta mal, revisemos")
}
*/