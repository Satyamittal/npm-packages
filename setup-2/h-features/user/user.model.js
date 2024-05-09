/* Structure of data will be here and its all methods
Here we will modify arrays of data .
Static methods are called without creating instance of class.
*/

export class UserModel
{
    constructor(_id,_name,_email,_password)
    {
        this.id = _id;
        this.name =_name;
        this.email = _email;
        this.password = _password;
    }

    // prototype functions
    static signIn = (user) => 
    { 
        
    } 
};

