const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'datinee001@gmail.com', // generated ethereal user
        pass: '001datinee', // generated ethereal password
    },
});
class SendMailHelper {
    public static async sendAnMail(toMail:string)
    {
        var mailOptions = {
            from: 'datinee001@gmail.com',
            to: 'dangtinha2@gmail.com',
            subject: 'Sending Email using Node.js',
            text: 'That was easy!',
            html: "<b>Hello world?</b>", // html body
        };

        await transporter.sendMail(mailOptions, function(error:Error, info:any){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }

    // public static transporter():any
    // {
    //     return  nodemailer.createTransport({
    //         service: 'gmail',
    //         auth: {
    //             user: 'youremail@gmail.com',
    //             pass: 'yourpassword'
    //         }
    //     });
    // }
}
export default SendMailHelper