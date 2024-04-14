const express=require("express");
const app=express();
const cors=require("cors");
require("dotenv").config();

const PORT=process.env.PORT || 80;

app.use(express.json());
app.use(cors());
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true,
})
)

const Routes=require("./routes/transroutes");
const Routes1=require("./routes/user")

app.use("/api/v1",Routes);
app.use("/api/v1",Routes1);


require("./config/config").connect();




app.listen(PORT, () =>
    {
        console.log(` connection is done on port  ${PORT}`);
    })

    app.get("/",(req,res) =>{
        res.send("This is a homepage ");
    })


