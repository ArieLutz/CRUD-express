//import conection from '../database/conection.js'


import conection from '../database/conection.js'

export const register = (req, res) => {

    //console.log(req.body) //probar si viene la informacion

    //realizo un destructuring 
    const {Nombre, Apellido, Telefono, Correo } =req.body

    const IdMunicipio = 1
    //Insert
    const data = {
        Nombre : Nombre,
        Apellido : Apellido,
        Telefono : Telefono,
        Correo : Correo,
        id_municipio: IdMunicipio
    }

    //Query para insertar
    conection.query('INSERT INTO clientes SET ?', data, (err, result) => {
        if(err){
            console.log('Ocurrio un errro al insertar el registro')
            return
        }

        res.redirect('/')
    })

}

//--------------- Actualizar cliente
export const updateClient = (req, res) => {

    //console.log(req.body) //probar si viene la informacion

    //realizo un destructuring 
    const idCliente = req.body.id_cliente;

    const IdMunicipio = 1

    //Query para insertar
    let sql = "UPDATE clientes SET Nombre= '"+req.body.Nombre+"', Apellido= ', Nombre= '"+req.body.Nombre+"'"+req.body.Apellido+"', Telefono= '"+req.body.Telefono+"', Correo= '"+req.body.Correo+"' WHERE id_cliente = '"+idCliente;
    let query = conection.query(sql, (err, results) => {
        if(err) throw err;
        res.redirect('/');
    });

}




export const registerMuni = (req, res) => {

    //console.log(req.body) //probar si viene la informacion

    const {nombreMunicipio} = req.body

    const data = {
        nombreMunicipio: nombreMunicipio
    }

    //query
    conection.query('INSERT INTO municipios SET ?', data, (err, result) => {
        if(err){
            console.log('Ocurrio un errro al insertar el municipio')
            return
        }

        res.redirect('/municipio')
    })
}



