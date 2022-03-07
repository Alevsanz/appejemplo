const{ModeloPelicula}=require('./models');

//la funcion para mostrar las instancias
//select * from table

const getAllMovies = async(req,res)=>{
    try{
        const Peliculas = await ModeloPelicula.findAll({attributes:['id_pelicula','titulo','content','inicio_creacion']});
        res.json(Peliculas);
    }catch(error){
        res.json({message: 'No se encontraron instancias'})
    }
}


//la funcion para mostrar solo 1 instancia
//select * from table where id_pelicula =1;

const getOneMovie = async(req,res)=>{
    try{
        const Pelicula_unica = await ModeloPelicula.findAll({where: {id: req.params.id}});
        res.json(Pelicula_unica);
    }catch(error){
        res.json({message:'No se encontraron instancias'})
    }
}


//la funcion para crear un registro
//sql: insert into table ...('300',...)

const createOneMovie = async(req,res)=>{
    try{
        await ModeloPelicula.create(req.body);
        res.json({message: "Registro creado satisfactoriamente"});
    }catch(error){
        res.json({message:"No se ha realizado ningun registro"});
    }
}


//la funcion para Actualizar un registro
const updateOneMovie = async(req,res)=>{
    try{
        await ModeloPelicula.update(req.body({
            where: {id: req.params.id}
        }));
        res.json({message: "Registro actualizado"});
    }catch(error){
        res.json({message: "No se ha podido actualizar el registro"})
    }
}


//la funcion para eliminar un registro(=> ModeloPelicula)
const deleteOneMovie = async(req,res)=>{
    try{
        await ModeloPelicula.destroy({
            where: {id: req.params.id}
        });
        res.json({message: "Eliminado correctamente"});
    }catch(error){
        res.json({message: "No se pudo eliminar"})
    }
}

module.exports = {getAllMovies,getOneMovie,createOneMovie,updateOneMovie,deleteOneMovie}