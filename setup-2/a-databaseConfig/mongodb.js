// All configurations about mongoDB.js
import { MongoClient } from "mongodb";

/* Connnect to database */
const client = '' ;
export const connectToMongodb = ()=>
    {
        MongoClient.connect(process.env.url) 
        .then(clientInstance=>{
            client = clientInstance
            console.log('Mongodb is connected') ;
        })
        .catch(err=>
            {
                throw new Error(err);
            }) 
    }
        
/* 
One address may have multiple servers
Connect to particular database
*/
export const getDB = ()=>
{
    return client.db();
}


// Write all useful commands of mongodb here..