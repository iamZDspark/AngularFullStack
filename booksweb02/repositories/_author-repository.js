let Author=require('../entities/author');

const MongoClient = require('mongodb').MongoClient;

require('dotenv').config()

const username= process.env.BMS_DB_USERNAME; 
const password= process.env.BMS_DB_PASSWORD;
const server=process.env.BMS_DB_SERVER;

const dbname='booksdb';
const collectionName='authors';

const uri = `mongodb+srv://${username}:${password}@${server}/${dbname}?retryWrites=true&w=majority`;


const client = new MongoClient(uri, { useNewUrlParser: true,useUnifiedTopology: true });

// client.connect()

// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });



class AuthorRepository{

    constructor(){
        
    }

    async getAuthorCollection(){
        await client.connect();
        return  await client.db(dbname).collection(collectionName);
    }

    


    async getAll(){
        
        let collection =await this.getAuthorCollection();
        return await collection.find().toArray();
    
    }

    async add(author){
        //this.authors.push(author); //store locally in memory
        //await this.save();  //also save it in the file

        let collection=await this.getAuthorCollection();
        collection.insert(author);
        
    }

    async getById(id){
        //let author=await (await this.getAll()).find(a=>a.id===id);
        let collection=await this.getAuthorCollection();
        let author =await collection.findOne({id:id});
        return author;
    }

    async remove(id){
       let collection=await this.getAuthorCollection();
       await collection.deleteOne({id:id});
    }

    save(){
        return new Promise(resolve=>{
            setTimeout(()=>resolve(), 10);
        });
    }

}


module.exports=AuthorRepository;