
const Feedback =require('../models/feedback')
const mongoose=require('mongoose')





//ajouter une sondage
const AddFeed =async (req,res)=>{
     
    const { sujet,reponse,userval}= req.body;
     console.log(req.body)
      try{
          const feedback =await Feedback.create({ sujet,reponse,userval:JSON.parse(userval)});
          console.log(feedback);
          // create token
        
          res.status(200).json(feedback)
         }catch(error){
             console.log(error)
             res.status(400).json({error:"feedback invalide"})
 
      }

};

//delete feedback

const deletFeed= async (req,res) => {
    const {id}=req.params
    console.log (req.params)
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'feedback is invalide'})
    }
    const feedback= await Feedback.findOneAndDelete({_id: id});
    console.log(feedback)
    if (!feedback){
    return res.status(400).json({error: 'feedback introvable'})
}
res.status(200).json(feedback)

}
//update feedback
const updateFeed= async (req,res) => {
    const {id}=req.params
     console.log(id)
     console.log(req.body)
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'feedback is invalide'})
    }
    const feedback= await Feedback.findOneAndUpdate({_id: id},{...req.body});
    console.log(feedback)
    if (!feedback){
    return res.status(400).json({error: 'feedback introvable'})
}
res.status(200).json(feedback)
}
//get feedback
const GetFeed= async (req,res) => {
    const {id}=req.params
    console.log(id)
   console.log(req.body)
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'feedback is invalide'})
    }


    const feedback= await Feedback.findOne({_id:id});
    console.log(feedback)
    if (!feedback){
    return res.status(400).json({error: 'feedback introvable'})
}
    res.status(200).json(feedback)

}
//get all feedback by username
const AllFeed= async (req,res) => {
    const {username}=req.params

    try{
     const feedback= await Feedback.find( {"userval.username":username} )

     res.status(200).json(feedback)
     }catch (error) {
         console.log(error)
         res.status(500).send(err);
       }
 }
 const AllFeedback= async (req,res) => {


    try{
     const feedback= await Feedback.find( {} )

     res.status(200).json(feedback)
     }catch (error) {
         console.log(error)
         res.status(500).send(err);
       }
 }
// all feedback admin

module.exports={
    AddFeed,
    deletFeed,
    updateFeed,
    GetFeed,
    AllFeed,
    AllFeedback

}