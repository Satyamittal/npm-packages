import multer from "multer";
import bodyParser from "body-parser";

export function parser(req,res,next)
{
    const contentType = req.headers['content-type'];

    if (contentType && contentType.includes('application/json')) 
    {
        bodyParser.json()(req,res,next);
    } 
    else if (contentType && contentType.includes('application/x-www-form-urlencoded')) 
    {
        bodyParser.urlencoded({extended:true})(req,res,next);
    } 
    else if (contentType && contentType.includes('multipart/form-data')) 
    {
        multer().any()(req,res,next)  ;
    }
    else
    {
        next();
    }
}
