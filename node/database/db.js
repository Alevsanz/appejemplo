const sequelize = require('sequelize');

const database = new sequelize.Sequelize('peliculas','root','',{
    host: 'localhost',
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