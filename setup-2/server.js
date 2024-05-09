import { connectToMongodb } from "./a-databaseConfig/mongodb.js";
import { server } from "./e-modules/index.js";

// Error handling
server.use((err,req,res,next)=>
{
    console.log(err);
    if(err instanceof ApplicationError)
    {
        return res.status(err.code).send(err.message) ;
    }

    // server errors
    res.send("Something Went Wrong") ;    // This will be send to user

    //  This will be logged for developer for better prefrence
    console.log(err) ;  // Complete Stack Trace
    
    // Half Stack trace
    const stackLines = err.stack.split('\n').map(line => line.trim());
    const error =
    {
        "error": stackLines[0] ,
        "error-path": stackLines[1] ,
        "calling-path": stackLines[2],
        "error-code": err.code
    }
    const stringError = viewer(error);
    console.log(stringError) ;
});

// How to call application level error ?
// throw new ApplicationError('User not found',400);

server.listen(3100, ()=>
{
    console.log("server is listening on port 3100") ;
    // connectToMongodb();
})
