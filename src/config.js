import {config} from 'dotenv'
config();
console.log(process.env.NICK)
export default {
    port: 4000
}