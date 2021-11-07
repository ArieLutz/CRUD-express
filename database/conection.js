import mysql from 'mysql2'

const conection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASWORD,
    database: process.env.DB_DATABASE
})


conection.connect(err => {
    if(err){
        console.log(`${err}`)
        return
    }

    console.log(`Connected to database ${process.env.DB_DATABASE}`)
})


export default conection;