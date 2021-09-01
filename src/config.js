import {config} from 'dotenv'
config();
console.log( 'Cordial Saludo', process.env.PORT)
export default {
    port: process.env.PORT || 3000,
    userdb: process.env.USERDB || '',
    password: process.env.PASSWD || '',
    server: process.env.SERVER || '',
    database: process.env.DATABASE || ''
}