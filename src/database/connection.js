import sql from 'mssql' // Se importa el modulo
import config from '../config'

const settings = { //Se configura la coneccion
    user: config.userdb,
    password: config.password,
    server: config.server,
    database: config.database,
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
      },
}

export async function getConnection(){
   try{
        const pool =  await sql.connect(settings)
        return pool
    }catch(error){
       console.log(error)
   }
}
export {sql}