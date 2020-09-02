require('dotenv').config()

const username= process.env.BMS_DB_USERNAME; 
const password= process.env.BMS_DB_PASSWORD;
const server=process.env.BMS_DB_SERVER;


const dbname='booksdb';
const collectionName='authors';

const uri = `mongodb+srv://${username}:${password}@${server}/${dbname}?retryWrites=true&w=majority`;


console.log('uri',uri);