// Import all internal modules here...
import { operateFile } from "../f- useful-functions/fs.js";
import { sendMail } from "../f- useful-functions/sendEmail.js";
import { parser } from "../d-middlewares/parser.middleware.js";
import { callApi } from "../f- useful-functions/callApi.js";
import { uploader } from "../d-middlewares/upload.middleware.js";
import { authenticate } from "../d-middlewares/authenticate.middleware.js";
import { authenticateCookie } from "../d-middlewares/authenticate.middleware.js";


import { router as productRouter } from "../h-features/user/user.route.js";
// Export them here...

export 
{
    operateFile,
    sendMail,
    parser,
    callApi,
    uploader ,
    authenticate,
    authenticateCookie,
    productRouter,
            
}