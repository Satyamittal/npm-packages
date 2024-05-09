// 1. Import core modules
import * as cModules from './core-modules.js';

// 3. Import External modules
import * as eModules from './external-modules.js'

// 2. Import internal modules
import * as iModules from './internal-modules.js' ;

// call global middlewares
// server.use(first,second,third,express.static(staticFilePath))

// Request at home route of server

/* 1. HTTP Server

export const server = cModules.http.createServer((req,res)=>
{
    if(req.method == 'GET')
    {
        if(req.url == '/') { res.end('Hello') }
        else if(req.url == '/home') { res.end('Namaskar') } 
    }
    else if(req.method == "POST")
    {
        let body = "" ;
        
        //  New data is available
        req.on("data",(chunk)=> body += chunk.toString() ) ;

        // All data is recieved
        req.on("end" ,()=>
        {
            res.write("All data is recieved: ");
            res.end(body) ;
        })
    }
})

*/

/* 2. File System operation

const content =
{
    "name":"Satyam Mittal",
    "age":21 
}

// 'sync' operation
iModules.operateFile('read','data.txt');                           // read
iModules.operateFile('write','data.txt',content) ;                 // write
iModules.operateFile('append','data.txt',content) ;                // append 
iModules.operateFile('delete','data.txt')                          // delete

// 'async' operation
iModules.operateFile('read','data.txt',null,'async') ;              // read
iModules.operateFile('write','data.txt',content,'async');           // write
iModules.operateFile('append','data.txt',content,'async') ;        // append
iModules.operateFile('delete','data.txt',null,'async') ;            // delete

*/

/* 3. Send Email to user

//2. Configure email content
const mailOptions = 
{
    from: 'satyam7696@gmail.com',
    to: 'coder7696@gmail.com',
    subject: 'Welcome to NodeJS App',
    text: 'This is an email using nodemailer in NodeJS',
};

iModules.sendMail(mailOptions);

*/

/* 4. Path Module 

// path from mentioned directory
const filePath = cModules.path.join('src','home','data.txt') ;

// path from root directory
const resolvedPath = cModules.path.resolve('src','home','data.txt') ;

// Extension of file
const extOfPath = cModules.path.extname(filePath);

console.log(cModules.path.resolve()) ; // gives path of current executing directory

- Instead of using hard-coded paths , use these filePaths 

*/

/* 5. Readline module

const interfaceq = cModules.readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
);

interfaceq.question("Who is prime minister of INDIA ? " ,(ans1)=>{
    // First You have to answer the question ?
    
    {
        // Do some task here , This will be executed as soon as we type ans1  
        console.log("Answer: Narendra Modi\n");
        console.log("Now , my second question\n");
    }
    // From here , we can start chain of callbacks...
    interfaceq.question("Who is President of USA ?", (ans2)=>{

        // Answer here
        {
            console.log("Answer: Joe Biden") ;
            interfaceq.close() ;
        }
    })
});

*/

/* 6. Express Server

*/
export const server = eModules.express() ;

server.set('view engine', 'ejs');
server.set('views', cModules.path.join(cModules.path.resolve(), 'b-public/dynamic'));

// Call Global middlewares here
const global = 
[
    iModules.parser ,
    eModules.express.static('b-public/static'),
    eModules.ejsLayouts ,
    eModules.session({
        secret: 'Secret-Key',
        resave: false,
        saveUninitialized: true,
        cookie: {secure:false}
    }),
    eModules.cookieParser(),
    eModules.cors(),


] ;
server.use(global) ;

// Make local middleware arrays here 
// const midllemanArray = [local1,local2,local3]

// call routes
server.get('/',iModules.authenticateCookie, (req,res)=>
{
    // res.set('HeaderName' ,'value') ;
    res.status(200).send('Hello world') ;
});

server.post('/', (req,res)=>
{
    console.log(req.body) ;
    res.send(req.body) ;
})
server.get('/staticFiles',(req,res)=>
{
    // To serve static files we have to specify root parameter
    res.status(200).sendFile('index.html', { root: 'b-public/static' });
})

var products = [
    {
        id: 1,
        name: 'Product 1',
        desc: 'Description for Product 1',
        price: 19.99,
        imageUrl: 'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg'
    },
    {
        id: 2,
        name: 'Product 2',
        desc: 'Description for Product 2',
        price: 100.56,
        imageUrl: 'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg'
    },
    {
        id: 3,
        name: 'Product 3',
        desc: 'Description for Product 3',
        price: 15.45,
        imageUrl: 'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg'
    }
];

server.get('/dynamicFiles',(req,res)=>
{
    res.render('product', {products}) ;
})
server.get('/dynamicRoute/:id',(req,res)=>
{
    const {id} = req.params ;
    res.send(id) ;
})


/* For API's , instead of GET,POST,PUT,DELETE requests

server.use('/api/user' ,productRouter) ;

- For documentation use swagger-ui-express
*/


