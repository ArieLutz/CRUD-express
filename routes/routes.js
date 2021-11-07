import conection from '../database/conection.js'
import mysql from "mysql";
import  express  from 'express';
import  {register, registerMuni, updateClient}  from '../controllers/authController.js';
//import Connection from 'mysql2/typings/mysql/lib/Connection';
//Dentro de express hay una clase que se llama router
const router = express.Router()


// rutas para las vistas 

// --------- Ruta CRUD Cliente ----------
//todas con metodo get solo son para mostrar plantillas
router.get('/', (req, res) => {
    let sql = "SELECT * FROM clientes";
    let query = conection.query(sql, (err, rows) => {
        if(err) throw err;
        res.render('clientes_index',{
            title : 'CRUD de Clientes y Municipios',
            clients : rows
        }) 
    });
    

});

// --------- Ruta registrar Cliente ----------
router.get('/regiClient', (req, res) => {

    res.render('registerClient')
})

//--------- Ruta cargar datos para editar cliente
router.get('/edit/:id_cliente', (req, res) => {

    const clientId = req.params.id_cliente;
    let sql = `SELECT * FROM clientes WHERE id_cliente = ${clientId}`;
    let query = conection.query(sql, (err, result) => {
        if(err) throw err;
        res.render('editClient', {
            title: 'Editar Cliente',
            client : result[0]
        });
    });
    
});

// --------- Ruta CRUD municipalidad
router.get('/municipio', (req, res) => {
    let sql = "SELECT * FROM municipios";
    let query = conection.query(sql, (err, rows) => {
        if(err) throw err;
        res.render('municipios',{
            title : 'CRUD de Clientes y Municipios',
            municipios : rows
        })

    })
    
})

//Rut

// --------- Ruta registrar municipalidad ----------
router.get('/regiMuni', (req, res) => {

    res.render('registerMuni')
})


// rutas para los cotroles
router.post('/registerClient', register ) // la ruta que esta en el formulario (procesada con post) le voy asociar la funcion que exporto en authcontrolers
router.post('/registerMuni', registerMuni)

//Ruta para actualizar clientes
router.post('/UpdateClient', updateClient)


//finalmente exportar la ruta

export default router