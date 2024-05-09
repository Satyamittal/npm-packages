import multer from 'multer'

/*
If we are recieving multipart form data in request. Then this middleware is used before any middleware.
First all data of request is recueved in "req.body". Now it is recieved in "req.body" & "req.file" .
*/
// This middleware is applied 
const storageConfig = multer.diskStorage({
    destination:(req,file,cb)=>
        {
            cb(null,'c-uploads/');
        },
    filename:(req,file,cb)=>
        {
            const fileName = Date.now() + '-' + file.originalname ;
            cb(null,fileName) ;
        }
});

export const uploader = multer({storage:storageConfig}) ;

// How to apply this middleware ?
// uploader.single('nameOfInputField') ;

/*
<form enctype='multipart/form-data'>

<input type= 'file' accept='images/*' >
*/
