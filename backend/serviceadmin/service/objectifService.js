
const Objectif =require('../models/objectif')
const mongoose=require('mongoose')





//ajouter une sondage
const AddObject =async (req,res)=>{
     
    const { objectif,statue}= req.body;
     console.log(req.body)
      try{
          const objec =await Objectif.create({ objectif,statue});
          console.log(objec);
          // create token
        
          res.status(200).json(objec)
         }catch(error){
             console.log(error)
             res.status(400).json({error:"Objectif invalide"})
 
      }

};

//delete objectif

const deletObject= async (req,res) => {
    const {id}=req.params
    console.log (req.params)
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'Objectif is invalide'})
    }
    const objec= await Objectif.findOneAndDelete({_id: id});
    console.log(objec)
    if (!objec){
    return res.status(400).json({error: 'Objectif introvable'})
}
res.status(200).json(objec)

}
//update objectif
const updateObject= async (req,res) => {
    const {id}=req.params
     console.log(id)
     console.log(req.body)
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'feedback is invalide'})
    }
    const Objec= await Objectif.findOneAndUpdate({_id: id},{...req.body});
    console.log(Objec)
    if (!Objec){
    return res.status(400).json({error: 'Objectif introvable'})
}


res.status(200).json(Objec)
}
const ValideObject= async (req,res) => {
    const {id}=req.params
     console.log(id)
     console.log(req.body)
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'feedback is invalide'})
    }
    const Objec= await Objectif.findOneAndUpdate({_id: id},{...req.body});
    console.log(Objec)
    if (!Objec){
    return res.status(400).json({error: 'Objectif introvable'})
}


res.status(200).json(Objec)
}
//get Objectif
const GetObject= async (req,res) => {
    const {id}=req.params
    console.log(id)
   console.log(req.body)
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'Objectif is invalide'})
    }


    const objec= await Objectif.findOne({_id:id});
    console.log(objec)
    if (!objec){
    return res.status(400).json({error: 'Objectif introvable'})
}
    res.status(200).json(objec)

}
//get all feedback
const AllObject= async (req,res) => {
   

    try{
     const Objec= await Objectif.find( {} )

     res.status(200).json(Objec)
     }catch (error) {
         console.log(error)
         res.status(500).send(err);
       }
 }
 const PercentObj =async (req,res) =>{
    try {
        // Fetch all happiness records from the database
        const objectifData = await Objectif.find({});
        const objectifTerminer= await Objectif.find({ statue: true})
        const objectifNonTerminer= await Objectif.find({ statue: false})
        // Calculate the total count and average happiness level
        const totalCount = objectifData.length;
        const totalTerminer= objectifTerminer.length;
        const totalNonTerminer= objectifNonTerminer.length;
        // Calculate the percentage
        const percentage = (totalTerminer / totalCount) * 100;
    
        // Prepare the response JSON
        const responseData = {
            totalCount,
            totalTerminer,
            totalNonTerminer,
            percentage
        };
    
        // Send the response
        res.json(responseData);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    };
    
module.exports={
    AddObject,
    deletObject,
    updateObject,
    GetObject,
    AllObject,
    ValideObject,
    PercentObj

}