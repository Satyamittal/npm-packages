/**
 * We will be using ES6 syntax all over the files
 */
/********************************************************************************************************* */
/** Step-1 
 *          Inlclude modules....
 */

/** Importing external modules */
import express from 'express' ;
import ejsLayouts from 'express-ejs-layouts' ;

/** Importing internal modules: - Only those functions and classes which are required */
import ProductController from './src/controllers/product.controller.js';
import { validateRequest } from './src/middlewares/validation.middleware.js';

/** Importing core modules */
import path from 'path' ;
/********************************************************************************************************* */
/**
 * Step-2
 *         Making of server and setting up view engine for serving dynamic content
 *         Setting up path of views(dynamic content), so that we don't have to write absolute path again and again
 *         and using ejs-layouts for common layout of the website. Such that we don't have to write redundant code again n again.
 *         Setting up path of static files
 *         Parsing the form data , because it sent in encoded form.
 */

const server = express() ;
server.set('view engine' ,'ejs') ;
server.set('views' ,path.join(path.resolve(),"src",'views')) ;
server.use(ejsLayouts) ;
server.use(express.static('public') ) ;
server.use(express.urlencoded({extended: true})) ;
/********************************************************************************************************* */
/**
 * Step-3
 *       Making of requests at specific routes and triggers controllers and middlewares.
 */

// create an instance of ProductController class, Because we cannot call the method directly at it
const productController = new ProductController(); 

server.get('/', productController.getProducts);

server.get('/new', productController.getAddForm);

server.post('/',validateRequest, productController.addnewProduct);

server.get('/update-product/:id', productController.getUpdateProductView );
server.post('/delete-product/:id',productController.deleteProduct) ;

server.post('/update-product',validateRequest, productController.postUpdateProduct);
/********************************************************************************************************* */
/**
 * Step-4
 *       Exporting the server , take care of named and default.
 */
export {server} ;
