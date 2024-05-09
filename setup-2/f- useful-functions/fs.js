import {viewer} from './viewer.js'
import { fs } from '../e-modules/core-modules.js';
/*
By default function is synchronous , for async operations mention 'async'.
Every parameter will be in string format.

- operation - read ,write,append,delete ,
- filename  - string format ,
- content   - object format ,
- type      - 'sync' , 'async'
*/

export const operateFile = (operation, fileName ,content = null, type = 'sync'  )=>
{
    try
    {
        if(type == 'async')
        {
            // Read
            if(operation == 'read')
            {
                fs.readFile(fileName,(err,buffer)=>
                {
                    if(err) throw err ;
                    console.log(`Data present in ${fileName} is following: -\n` ,buffer.toString()) ;
                })
            }
            // write
            else if(operation == 'write')
            {
                const writtenObjectString = viewer(content);
                fs.writeFile(fileName,writtenObjectString,(err)=>
                {
                    if(err) throw err ;
                })
            }
            // append 
            else if(operation == 'append')
            {
                const appendedObjectString = viewer(content) ;
                fs.appendFile(fileName , appendedObjectString,(err)=>
                {
                    if(err) throw err ;
                })
            }
            // delete
            else if( operation == 'delete')
            {
                fs.unlink(fileName,(err)=>
                {
                    if(err) throw err ;
                })
            }
        }
        // 
        else
        {
            // Read
            if(operation == 'read')
            {
                const buffer = fs.readFileSync(fileName) 
                console.log(`Data present in ${fileName} is follwing: -` ,buffer.toString()) ;
            }
            // write
            else if(operation == 'write')
            {
                const writtenObjectString = viewer(content);
                fs.writeFileSync(fileName ,writtenObjectString ); 
            }
            // append 
            else if(operation == 'append')
            {
                const appendedObjectString = viewer(content) ;
                fs.appendFileSync(fileName ,appendedObjectString) ;
            }
            // delete
            else if( operation == 'delete')
            {
                fs.unlinkSync(fileName) ;
            }
        }
        console.log("operation successful !") ;
    }
    catch(err)
    {
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
    }
}
