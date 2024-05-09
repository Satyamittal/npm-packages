import { body,validationResult } from "express-validator";

export async function validator(req,res,next)
{
    // 1. Setup rules
    const rules = 
    [
        body('name').notEmpty().withMessage('Name is required') ,

    ]

    // 2. Run all rules
    await Promise.all(rules.map(rule=>rule.run(req))) ;

    // 3. Check for errors
    var validationErrors = validationResult(req) ;

    if(!validationErrors.isEmpty())
    {
        return res.render('viewName' ,{error: validationErrors.array()[0].msg})
    }
    next() ;
}