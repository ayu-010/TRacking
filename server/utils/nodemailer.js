const nodemailer = require("nodemailer");

const mailSender= async(email,title,body) => {

    try {

        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            auth: {
              user: process.env.MAIL_USER,
              pass: process.env.MAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false
            }
        })

             
  let info = await transporter.sendMail({
    from: 'Money Tracker', 
    to: `${email}`,
    subject:`${title}`,
    html:`${body}`
  });

  console.log(info);
  return info;
    } 
    
    catch(error)
    {
      // crossOriginIsolated.log("error nodemailer ke nadeh h kya ??");
console.log(error.message);
throw error;
    }
}

module.exports=mailSender; 