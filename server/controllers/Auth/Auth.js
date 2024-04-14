

const User=require("../../model/User")
const bcrypt=require("bcrypt"); 
// const jwt=require("jsonwebtoken");
const otpGenerator = require('otp-generator')
const otpmodel=require("../../model/OTP");


require("dotenv").config();


exports.sendOTP=async(req,res) =>
{
try {
     const{email}=req.body;
     const userexist=await User.findOne({email});
     if(userexist)
     {
        return res.status(401).json({
            success:false,
            message:"user already exist"
        })
     }

   let otp= otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false,
lowerCaseAlphabets:false });

console.log("otp genrated sucessfully which is ",otp);


let otpexist=await otpmodel.findOne({otp:otp});

while(otpexist)
{
    
    otp= otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false,
    lowerCaseAlphabets:false });
     otpexist=await otpmodel.findOne({otp:otp});
}

const otpINdb=await otpmodel.create({
    email,
    otp,
})

console.log("oTP that is enterd in db is ",otpINdb);

return res.status(200).json({
    success:true,
    message:"opt sent sucessfully check your mail",
    otp:otp
})

} catch (error) {
    
console.log(error);
return res.status(500).json({
    success:false,
    message:error.message
})
}
}


exports.signUp = async (req, res) => {
    try {
        const {
            firstname,
            lastname,
            email,
            password,
            confirmPassword,
            otp
        } = req.body;

        console.log("before data validation fields are", firstname, lastname, email, password, confirmPassword,otp);

        // Data validation
        if (!email || !password || !confirmPassword || !firstname || !lastname || !otp) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        // Match both the password
        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Password and confirm password are not matching",
            });
        }

        // Checking existing user
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(403).json({
                success: false,
                message: "User already exists",
            });
        }
        
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            firstname,
            lastname,
            email,
            password: hashedPassword,
            image:`https://api.dicebear.com/5.x/initials/svg?seed=${firstname} ${lastname}`,
        });

        return res.status(200).json({
            success: true,
            message: "User is registered successfully",
            user,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "User cannot be registered, please try later",
        });
    }
};

 


exports.login=async(req,res) =>
{ 
    try{
       
        const {email,password}=req.body;
   
        if(!email || !password)
        {
            return res.status(403).json({
                success:false,
                message:"please fill all the detail carefully",
            });
        }

        const user= await User.findOne({email});
    
       
       
 
        if(!user)
        {
            res.status(401).json({
                success:false,
                message:"user is not registered sign up first",
            });
        } 

           

        // verify password and generate a jwt token
        if(await bcrypt.compare(password,user.password))
        {    
              
        //     const payload={
        //         email:user.email,
        //         id:user._id,
        //         // accountType:user.accountType,
        //        }
        //     //  password matched 
        //     // to genrate token we are using sign method in jwt library
        //     const  token=jwt.sign(payload, process.env.JWT_SECRET,
        // {expiresIn:"2h",
        // });
            
          
         
        // //   user=user.toObject();                     
        //   user.token=token;
       
         user.password=undefined;
        //  console.log(user);
        


            //   const options={
            //        expiresIn:new Date(Date.now() + 3*24*60*60*1000),
            //        httpOnly:true,
            //   }

            //   res.cookie("token",token,options).status(200).json({
            //     success:true,
            //     token,
            //     user,
            //     message:"user logged in  sucessfuly",
            //   });

         return   res.status(200).json({
                success:true,
                message:"login sucessfully"
            })
        }

        else{
            // password do not matched
            return res.status(401).json({
                success:false,
                message:"Password Incorrect",
            });
        }
    }
    catch(error)
    {
console.log(error);
return res.status(500).json({
    success:false,
    message:"login failure",
});
    }
};

