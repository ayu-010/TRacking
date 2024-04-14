
// const user=require("../model/User");


// const jwt=require("jsonwebtoken");
// require("dotenv").config();



// exports.auth=async(req,res,next) =>
// {
//   try{
     
//     const token=req.cookies.token||
//                     req.body.token ||
//                     req.header("Authorisation").replace("Bearer ","");
  

//     // token missing

//     if(!token)
//     {
//         return res.status(401).json({
//             sucess:false,
//             message:"token missing",
//         })
//     }


//     // verfiy token
//     try{
//           const decode= jwt.verify(token,process.env.JWT_SECRET);
//           console.log(decode);
//         //   imp line h pure project ki
//           req.user=decode;
//     }

//     catch(error)
//     {
//         return res.status(401).json({
//             sucess:false,
//             message:"token is invalid",
//         })
//     }

//     next();

//   }

//   catch(error)
//   {
//     return res.status(401).json({
//         sucess:false,
//         message:"something went wroong while validating",
//     });

//   }
 


// }