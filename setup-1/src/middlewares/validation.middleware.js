/**
 * middle-wares are used to the tasks in between the controller functions like
 * validating data , maniupulating responses ,etc.
 * 
 */
import { body ,validationResult} from "express-validator";

export const validateRequest = async (req,res,next) =>
{
    // validate the form data
/*
    const { name, price, imageUrl } = req.body;
    let errors = [];
    // trim function removes the space from start and end of the string
    if (!name || name.trim() == '') {
        errors.push('Name is required');
    }
    if (!price || parseFloat(price) < 1) {
        errors.push(
        'Price must be a positive value'
        );
    }
    try {
        const validUrl = new URL(imageUrl);
    } catch (err) {
        errors.push('URL is invalid');
    }

    if (errors.length > 0) {
        // we have to show the first error only
        return res.render('new-product', { errorMessage: errors[0] });
    }
    
    next() ;

*/

// Alternate-2 Using express validator

// step-1  setup rules for validation
const rules = [
    body('name').notEmpty().withMessage('Name is required') ,
    body('price').isFloat({gt:0}).withMessage("price should be a positive value"),
    body('imageUrl').isURL().withMessage('Invalid Url') ,
]
// step-2  run those rules
await Promise.all(rules.map(rule=>rule.run(req)));

// step-3 check if there are any errors after running the rules
var validationErrors = validationResult(req) ;
console.log(validationErrors );

    if (!validationErrors.isEmpty()) {
        // console.log("abcd") ;
        return res.render('new-product', {
        errorMessage: validationErrors.array()[0].msg,
        });
    }
    next() ;

}

