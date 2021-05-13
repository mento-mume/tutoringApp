const express = require('express');
const router = express.Router();
const {Tutor} = require('../models/tutors')

//get
router.get('/',async (req,res)=>{
   res.send('welcome to tutoring App!')
  
});

router.get('/',async (req,res)=>{
     const tutor = await Tutor.find().sort('name');
     res.send(tutor);
   
 });
 
 //post
 router.post('/',  async (req,res)=>{   
     const tutor = new Tutor({name: req.body.name});
      await tutor.save();
     res.send(tutor);
 
 });
 //put
 router.put('/:id', async (req,res)=>{
    
    const tutor =await Tutor.findByIdAndUpdate(req.params.id,{name:req.body.name},{new:true});
 
     if(!tutor) return res.status('404').send('the tutor with the id could not be found');
  
     res.send(tutor);
 
 });
 //delete
 router.delete('/:id',async (req,res)=>{
     const tutor =await Tutor.findByIdAndRemove(req.params.id);
 
     if(!tutor) return res.status('404').send('the tutor with the id could not be found');
 
     res.send(tutor);
 });
 

 
 module.exports =router;
