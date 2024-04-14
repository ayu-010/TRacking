

const user=require("../../model/User");

const mailSender=require("../../utils/nodemailer");
const bcrypt=require("bcrypt");
const crypto=require("crypto");



exports.resetPasswordToken=async (req,res) =>
{
 
    try{
       // get email from req body
        const email=req.body.email;
        const userfound=await user.findOne({email:email});

  // check email validation
        if(!userfound)
        {
            return res.json({
                success:false,
                message:"your email is not registered with us"
            })
        }
      
    // genreate token
     const token=crypto.randomUUID();


        // update user by token and exzpiration time 
    const updatedDetails= await user.findOneAndUpdate(
        {email:email},
         {
            token:token,
            resetPasswordExpires:Date.now() +5*60*1000,
        },
        {new:true});
    

        console.log("updated detail after putting new token in to the user",updatedDetails);
        
        //Creating Password Reset URL it is a frontend generated link 

        const url=`http://localhost:3000/update-password/${token}`;
         console.log("frontend url that will contain tyoken in ",url);
        // Sending Email with Reset Link
        
        await mailSender(email,      
                         "passowrd reset link",
                         `password reset link:${url}`);
       
 //  send response

 return res.json({
    success: true,
    message: "Email sent successfully. Please check email and change password",
});

 }

 catch (error) {
    
    return res.status(500).json({
        error: error.message,
        success: false,
        message: "Something went wrong while sending the reset password email",
    });
}
}



// reset passsword
exports.resetPassword=async(req,res) =>
{
// data fetch

const{token,password,confirmPassword}=req.body;
// validation

if(!token || !password || !confirmPassword)
{
 return res.json({
        sucess:false,
        message:"fill details carefullly"
    })
}

if(password !== confirmPassword)
{
   return res.json({
        sucess:false,
        message:"password are not matching"
    })
}

// get user detail from db using token

try{
    const userDetails= await user.findOne({token:token});
    
    // if no entry THAN token time expires OR  invalid token
    if(!userDetails)
    {
        return res.json({
            sucess:false,
            message:"token is invalid"
        })
    }

    if(userDetails.resetPasswordExpires < Date.now())
    {
        return res.json({
            sucess:false,
            message:"token is expired please regenErate yor link again"
        })
    }
// hash password
    const hashedPassword= await bcrypt.hash(password,10);

    // passwrod update isse hoga ya nhai mein khud check karunga working fine but it will not update as true is missing from here 
    // userDetails.password=hashedPassword;


    await user.findOneAndUpdate(
        {token:token},
        {password:hashedPassword},
        {new:true},
)
    
    // return response 

    return res.status(200).json({
        sucess:true,
        message:"password reset sucessfully"
    })

}

catch(error)
{
    return res.status(500).json({
        sucess:false,
        message:"something went wrong while reseting password"
    })
}







}