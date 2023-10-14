const Defis =require('../models/defis')
const mongoose=require('mongoose')



 

//ajouter une sondage
const AddDef =async (req,res)=>{
     
    const { objet,valeur,reponse,date_fin,date_debut}= req.body;
    const dateDebut = new Date(date_debut);
    const dateFin = new Date(date_fin);
  
    const defi = new Defis({
      date_debut: `${dateDebut.getFullYear()}/${dateDebut.getMonth() + 1}/${dateDebut.getDate()}`,
      date_fin: `${dateFin.getFullYear()}/${dateFin.getMonth() + 1}/${dateFin.getDate()}`,
      objet: objet,
      valeur: valeur,
      reponse:reponse
    });
      try{
          const defis =await defi.save();
          
          // create token
        console.log(defis)
          res.status(200).json(defis)
         }catch(error){
             console.log(error)
             res.status(400).json({error:"defis invalide"})
 
      }

};

//delete feedback

const deletDef= async (req,res) => {
    const {id}=req.params
    console.log (req.params)
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'defis is invalide'})
    }
    const defis= await Defis.findOneAndDelete({_id: id});
    console.log(defis)
    if (!defis){
    return res.status(400).json({error: 'defis introvable'})
}
res.status(200).json(defis)

}
//update feedback
const updateDef= async (req,res) => {
    const {id}=req.params
     console.log(id)
     console.log(req.body)
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'defis is invalide'})
    }
    const defis= await Defis.findOneAndUpdate({_id: id},{...req.body});
    console.log(defis)
    if (!defis){
    return res.status(400).json({error: 'Defis introvable'})
}
res.status(200).json(defis)
}
const updateDefScor= async (req,res) => {
    const {id}=req.params
    const {user}=req.body
     console.log(id)
     console.log(req.body)
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'defis is invalide'})
    }
    const defis= await Defis.findOneAndUpdate({_id: id},{user:JSON.parse(user)});
    console.log(defis)
    if (!defis){
    return res.status(400).json({error: 'Defis introvable'})
}
res.status(200).json(defis)
}
//get feedback
const GetDef= async (req,res) => {
    const {id}=req.params
   
  
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'Defis is invalide'})
    }


    const defis= await Defis.findOne({_id:id});
    console.log(defis)
    if (!defis){
    return res.status(400).json({error: 'Defis introvable'})
}
    res.status(200).json(defis)

}
//get all feedback
const AllDef= async (req,res) => {
    const {username}=req.params

    try{
     const defis= await Defis.find(  )

     res.status(200).json(defis)
     }catch (error) {
         console.log(error)
         res.status(500).send(err);
       } 
 }
module.exports={
    AddDef,
    deletDef,
    updateDef,
    GetDef,
    AllDef

}