/**
 * Controllers are used to serve the views (which are also known as dynamic files )
 * Naming of controllers are done in this fashion : -- product.controller.js
 */

/**
 * If we use any modules here , we have to include only that module
 * other than that we have to include models data only.
 */
import ProductModel from '../models/product.model.js';

export class ProductController{

    getProducts(req,res){
        let products = ProductModel.get() ;

        /** To render the views , only name of view is enough with data that is to be placed inside it 
         *  Render method is different from send method. Send sent response to the client
        */
        res.render("products", {products:products}) ;
    }

    getAddForm(req,res) {
        return res.render('new-product', { errorMessage: null });
    }

    addnewProduct(req,res){

        /** Form Data = request.body */
        ProductModel.add(req.body) ;

        let products = ProductModel.get();
        res.render('products', {products: products});

    }

    getUpdateProductView(req, res) {
        // 1. if product exists then return view
        const id  = req.params.id;
        const productFound = ProductModel.getById(id);

        if (productFound) {
          res.render('update-product', {product: productFound,errorMessage: null});
        }
        // 2. else return errors.
        else {
          res.status(401).send('Product not found');
        }
      }

      postUpdateProduct(req,res,next)
      {
        ProductModel.update(req.body) ;

        let products = ProductModel.get();
        res.render('products', {products: products});
      }

      deleteProduct(req,res,next){
        const id = req.params.id ;

        const productFound = ProductModel.getById(id);

        if (!productFound) {
          return res.status(401).send('Product not found');
        }
        ProductModel.delete(id) ;
        let products = ProductModel.get();

        res.render('products', {products: products});
      }
}
/**
 * This file contains all functions related to controllers ,like fetching data from models or data-base ,
 * then putting that data into our dynamic files views.
 * 
 * While importing you should remember what kind of export , import you are doing like named or default.
 */