//Configuraciones

//Esta linea nos permite config. las variables de entorno y no de problema
//al intentar utilizar las importaciones de modulos al estilo ecmascript
import './loadEnv.js'

//Importamos las rutas
import router from './routes/routes.js';

//const path =  require('path');
import express from "express";
//import ejs from "ejs";
//--------------
//import bodyparser from "body-parser";


//-------------
//import constants from "constants";
//const exp = constants;
const app = express();

// Definir el sistema de vistas (Plantillas) a utlizar
//app.set('view engine', 'ejs') //buscara archivos ejs dentro de la carpeta de views 
app.set('view engine', 'ejs') //Aqui trabajaria solo con archivos pug
//Definir la ubicacion de los archivos publicos
app.use(express.static('public'))

//Configuracion para procesar formularios
app.use(express.urlencoded({extended: true}));
app.use(express.json())


app.use('/', router)

//Prueba de coneccion
//import conection from './database/conection.js'

//server listening
app.listen(3000, () => {
    console.log('Server is running at port 3000');
});