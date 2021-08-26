import {config} from 'dotenv'
config();
console.log( 'Cordial Saludo', process.env.PORT)
export default {
    port: process.env.PORT || 3000
}