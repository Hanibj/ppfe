const Partdefis =require('../models/partdefis')
const mongoose=require('mongoose')



 

const AddDef =async (req,res)=>{
     const {id}=req.params
     console.log(id)
    const { objet,reponse,valeur,date_fin,date_debut,username}= req.body;
    
      try{
          const defis =await Partdefis.create({idDef:id,objet:objet,reponse:reponse,valeur:valeur,date_fin:date_fin,date_debut:date_debut,user:username});
          
          // create token
        console.log(defis)
          res.status(200).json(defis)
         }catch(error){
             console.log(error)
             res.status(400).json({error:"defis invalide"})
 
      }

};
const GetParticpant =async (req,res)=>{
   const {id} =req.params


   const Emp =await Partdefis.find({ idDef: id })
   console.log(Emp)
   if (!Emp){
    return res.status(400).json({error: 'Defis introvable'})
}
    res.status(200).json({Emp})

}
module.exports={
    AddDef,
    GetParticpant
}