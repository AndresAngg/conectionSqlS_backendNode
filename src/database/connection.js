import sql from 'mssql' // Se importa el modulo

const settings = { //Se configura la coneccion
    user: 'andre',
    password: 'qwerty',
    server: 'localhost',
    database: 'inmueble',
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