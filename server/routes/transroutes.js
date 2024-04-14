const express=require("express");

const router=express.Router();


const {createEntry}=require("../controllers/createEntry")
const{ getEntry}=require("../controllers/getEntry");
const{updateEntry}=require("../controllers/updateEntry");
const{ deleteEntry}=require("../controllers/deleteEntry");





router.post("/createEntry",createEntry);
// router.get("/getTodos",getTodo);
router.get("/getEntry/:id",getEntry);
router.put("/updateEntry/:id",updateEntry);
// router.delete("/deleteEntry/:id",deleteEntry);
router.delete('/deleteEntry/:id', deleteEntry);

module.exports = router;