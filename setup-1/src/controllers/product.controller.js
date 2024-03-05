/**
 * Controllers are used to serve the views (which are also known as dynamic files )
 * Naming of controllers are done in this fashion : -- product.controller.js
 */

/**
 * Importing Data and Modules
 */
import ProductModel from '../models/product.model.js';

export class ProductController{

    /** Data sent by form is placed in "req.body" */

    example(req,res){

        let products = ProductModel.get() ;
        // Fetching the product which is triggered
        const id  = req.params.id;

        /** Rendering and send are both different 
         * 
         *  res.render("products", {products , errorMessage:null ,}) ;
         *  res.status(200).send("Welcome") ;
        */
    }







}
