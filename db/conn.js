import pg from 'pg-promise'

const pgp = pg()

// esto es para conectarse a la base de datos que creamos, aqui se debe escribir contrasenia de postgress

const cnstr = `postgresql://postgres:N1706e18ls.@localhost:5432/api_attacktitans`; 
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



