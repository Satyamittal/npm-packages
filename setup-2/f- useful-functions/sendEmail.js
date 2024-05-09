import nodemailer from 'nodemailer' ;

export async function sendMail(mailOptions){

// 1. Create an email transporter.
// SMTP (Simple Mail Transfer Protocol)
const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: mailOptions.from,
        pass:'dqemovoztxcmnhne'  // 2-step verification key
    },
    tls: {
        rejectUnauthorized: false
    }
});

// 3. Send the email
try
{
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
}
catch(err) { throw err ;}

}


