// 1. Authenticate using sessions

/* 
Upon login attach the object session.userEmail = email to 'request'
Upon logout destroy the object  = req.session.destroy((err)=> if(err) console.log(err)) ;
*/
export const authenticate = (req,res,next) =>
{
    if(req.session.userEmail)   next() ;
    else
    {
        // res.redirect('/login') ;
        res.send('not exists') ;
    }
}

// 2. Authenticate using Cookies
export const authenticateCookie = (req,res,next)=>
{
    // If cookie exists then set it's value
    if(req.cookies.cookieName)
    {
        res.locals.cookieName = 'extra' ;
    }   
    // If not exists then make a new one
    else
    {
        res.cookie('cookieName' ,'firstTimer', {maxAge: 2*24*60*60*1000});
    }
    next() ;

}

// How to delete cookie ?  res.clearCookie('cookieName') ;

// 3. Basic Authentication
export const basicAuthenticator = (req,res,next)=>
{
    const authHeader = req.headers['authorization'];
    if(!authHeader) return res.send('No authorization') ;
    const credentials = authHeader.replace('Basic','');
    
    // [username:password]
    const decodedAns = Buffer.from(credentials,'base64').toString('utf8');
    const creds =decodedAns.split(':');

    // match username & password with database
    const matched = true ;

    if(matched) next();
    res.status(400).send('Incorrect credentials') ;
}

// 4. JWT Token authentication
import jwt from 'jsonwebtoken' ;

// Make a JWT Token
const token = jwt.sign(
    {
        userId: id,
        email:email
    },
    'Secret-Key',{expiresIn:'1h'}
);

// Send this token in authorization header

// verify the token
export const JWTverifier = (req,res,next)=>
    {
        const token = req.headers['authorization'];

        if(!token)
            {
                return res.status(401).send('Unauthorized');
            }
        try
        {
            const payload = jwt.verify(token,'Secret-Key') 
            // const {userId,email} = payload ;
        }
        catch(err)
        {
            // unauthorized
        }
        next() ;
    }
