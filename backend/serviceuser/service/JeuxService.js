const Jeux =require('../models/jeux')
const mongoose=require('mongoose')





//ajouter une sondage
const Addjeux =async (req,res)=>{
     
    const { user}= req.body;
     console.log(req.body)
      try{
          const jeux =await Jeux.create({user });
          console.log(jeux);
          // create token
        
          res.status(200).json(jeux)
         }catch(error){
             console.log(error)
             res.status(400).json({error:"jeux invalide"})
 
      }

};


//get feedback
/*const GetHigScore= async (req,res) => {
    const {id}=req.params

}*/

module.exports={
    Addjeux,
   // GetHigScore

}