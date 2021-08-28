const express = require("express");

const router = express.Router();
const Item = require("../models/user.models");
router.get("/:id", async function (req, res) {
  let data= await Item.find().lean().exec()
  let arr=[]
  data.forEach((item)=>{
      let x=item.name;
      let query=req.params.id
      let z=x.slice(0,query.length)
    if(z.toLowerCase()==query.toLowerCase()){
        arr.push(item)
    }
    
  })

  res.send(arr)
  });
  
  module.exports=router