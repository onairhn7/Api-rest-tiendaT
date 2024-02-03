import pg from 'pg-promise'
import dotenv from 'dotenv';

dotenv.config();
const pgp = pg()

// variable de entorno
const user= process.env.USER;
const pass= process.env.PASS;
const dataBase= process.env.DB;
const host= process.env.HOST;
const portDB= process.env.PORT_DB;

// esto es para conectarse a la base de datos que creamos, aqui se debe escribir contrasenia de postgress

const cnstr = `postgresql://${user}:${pass}@${host}:${portDB}/${dataBase}`; 
const db = pgp (cnstr);

// esta es una operacion conect (esta es un sntaxis de promesa)
db.connect()
    .then(()=>{
        console.log("Conexion exitosa")

    })
    .catch((err)=>{

        console.log(`erro de Conexion ${err}`)

    })

    export {db}



