import mongoose from 'mongoose' ;

export const connectUsingMongoose = async ()=>
{
    try
    {
        await mongoose.connect( process.env.DB_Url,
            {
                useNewUrlParser: true,
                useUnifiedTopology:true
            });
            console.log("MongoDb connected using Mongoose") ;
    }
    catch(err)
    {
        console.log("error in connecting to database") ;
        console.log(err) ;
    }
}

// Read Docs and write here short commands