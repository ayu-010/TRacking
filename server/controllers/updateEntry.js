
const Todo=require("../model/Trans");



exports.updateEntry= async(req,res) => {

try{
     
    // method1-- const id=req.params.id;
     
    const{id}=req.params;

    const{title,description}=req.body;

    const todo= await Todo.findByIdAndUpdate(
        {_id:id},
        {title,description,updateAt:Date.now()},
    )

    res.status(200)
    .json(
      {
          sucess:true,
          data:todo,
          message:`updated sucessfully`,
      })

  
}

catch(err){
   
    console.log("error aa gya h update to do by    me");
    console.error(err);
    res.status(500)
    .json(
        {
            sucess:false,
           message:err.message,

message:"server error aa gya h ",
 } );
}


}