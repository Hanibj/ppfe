const Sondage =require('../models/Sondage')
const mongoose=require('mongoose')





//ajouter une sondage
const AddSond =async (req,res)=>{

    const { question,option1,option2}= req.body;
   
      try{
          const sondage =await Sondage.create({question,option1,option2});
          console.log(sondage);
          // create token
        
          res.status(200).json(sondage)
         }catch(error){
             console.log(error)
             res.status(400).json({error:"invalide"})
 
      }

};

//delete Sondage

const deletSond= async (req,res) => {
    const {id}=req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'Sondage is invalide'})
    }
    const Sond= await Sondage.findOneAndDelete({_id: id});
    console.log(Sond)
    if (!Sond){
    return res.status(400).json({error: 'Sondage introvable'})
}
res.status(200).json(Sond)

}
//update sondage
const updateSond= async (req,res) => {
    const {id}=req.params
     console.log(id)
     console.log(req.body)
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'Sondage is invalide'})
    }
    const Sond= await Sondage.findOneAndUpdate({_id: id},{...req.body});
    console.log(Sond)
    if (!Sond){
    return res.status(400).json({error: 'Sondage introvable'})
}
res.status(200).json(Sond)
}
//get Sondage
const GetSond= async (req,res) => {
    const {id}=req.params
   //console.log(req.body)
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'Sondage is invalide'})
    }


    const Sond= await Sondage.findById(id);
    if (!Sond){
    return res.status(400).json({error: 'Sondage introvable'})
}
    res.status(200).json(Sond)

}
//get all employee
// const AllSond= async (req,res) => {
//     try{
//      const Sond= await Sondage.find({})
//        console.log(Sond)
//      res.status(200).json(Sond)
//      }catch (error) {
//          console.log(error)
//          res.status(500).send(err);
//        }
//  }
const AllSond = async (req, res) => {
  try {
    const sondages = await Sondage.find({});
    
    const sondagesAvecPourcentage = sondages.map((sondage) => {
      const { _id,question, option1,option2,answers } = sondage;
      console.log(sondage)
      const yes = answers.filter((answer) => answer.answer === 'oui');
      const no = answers.filter((answer) => answer.answer === 'non');
      const yesCount = yes.length;
      const noCount = no.length;
      const totalCount = yesCount + noCount;
      const pourcentageYes = (yesCount / totalCount) * 100;
      const pourcentageNo = (noCount / totalCount) * 100;
      console.log(typeof pourcentageYes)
      console.log(pourcentageYes)
      return {
        _id,
        question,
        option1,
        option2,
        totalCount,
        pourcentageYes,
        pourcentageNo,
      };
    });
     
    res.status(200).json(sondagesAvecPourcentage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

 const ValSond= async (req,res) => {
    const {id}=req.params
    console.log(req.body)
    const {question,option1,option2,username,answerss}=req.body
     console.log(id)
     console.log(req.body)
     console.log(answerss)
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'Sondage is invalide'})
    }
    //const Sond= await Sondage.findOneAndUpdate({_id:id}, {$push: {answers: {username: username, answer: answer}}});
   /* const Sond = await Sondage.findOneAndUpdate(
        { _id: id },
        { $push: { username: username,answer: answer  } }
      );*/
      const Sond = await Sondage.findOneAndUpdate(
        { _id: id },
        { $push: { answers: { username: username, answer: answerss } } },
        { new: true }
      );
    console.log(Sond)
    if (!Sond){
    return res.status(400).json({error: 'Sondage introvable'})
}
res.status(200).json(Sond)
}
/*const calcluePorcentageSondage = async (req,res) =>{
    const {id}=req.params
    try {
      const sondages = await Sondage.findById(id);
  
      const counts = Array.isArray(sondages)&& sondages.map((sondage) => {
        const { question } = sondage;
        const yesCount = sondage.answers.filter((answer) => answer.answer === 'yes').length;
        const noCount = sondage.answers.filter((answer) => answer.answer === 'no').length;
        const totalCount= yesCount+ noCount
        const porceSond=(yesCount/totalCount)*100
        console.log(yesCount)
        console.log(noCount)
        console.log(totalCount)
        console.log()
        return {
          question,
          yesCount,
          noCount,
          totalCount,porceSond
        };
      });
  
      res.json(counts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  }*/
  const calcluePorcentageSondage = async (req, res) => {
    const { id } = req.params;
    try {
      const sondage = await Sondage.findById(id);
  
      if (!sondage) {
        return res.status(404).json({ error: 'Sondage not found' });
      }
  
      const { question, answers } = sondage;
  
      const yes = answers.filter((answer) => answer.answer === 'oui');
      const no = answers.filter((answer) => answer.answer === 'non');
  
      const yesCount = yes.length;
      const noCount = no.length;
      const totalCount = yesCount + noCount;
      const porceSond = (yesCount / totalCount) * 100;
   console.log(yesCount)
      const result = {
        question,
        yesCount,
        noCount,
        totalCount,
        porceSond,
      };
  
      res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  };
  
  
module.exports={
    AddSond,
    deletSond,
    updateSond,
    GetSond,
    AllSond,
    ValSond,
    calcluePorcentageSondage

}