// import models
const Todo=require("../model/Trans");

// define routr handler

exports.createEntry= async(req,res) => {

try{
 
    const{name,price,description,datetime}=req.body;
    // new to do object create aur db me daal diya h 

    const response=await Todo.create({name,price,description,datetime});
    res.status(200).json(
        {
            success:true,
            data:response,
            message:'Entry Created Successfully'
        }
    );

}

catch(err){
    console.error(err);
    console.log(err);
    res.status(500)
    .json({
        success:false,
        data:"internal server error",
        message:err.message,
    })

}


}