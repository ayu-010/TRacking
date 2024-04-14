const Todo=require("../model/Trans");



exports.getEntry=async(req,res) => {

    try
    {
          const todos=await Todo.find({});

          res.status(200)
          .json(
            {
                sucess:true,
                data:todos,
                message:"mil gya bhai entry",
            });
    }

    catch(err)
    {
        console.log("error aa gya h get to do me");
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

exports.getTodoById=async(req,res) =>
{

    try
    {          
        // id fetching
          const id=req.params.id;
         
        const  todo=await Todo.findById({_id:id})
           
        //  data for  given id not found 

        if(!todo)
        {
            return res.status(404).json({
                sucess:false,
                message:"no data found with given id ",

            })
        }

        // data found for given id 
          res.status(200)
          .json(
            {
                sucess:true,
                data:todo,
                message:`Todo ${id}data for given id is found `,
            });
    }

    catch(err)
    {
        console.log("error aa gya h get to do by id   me");
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