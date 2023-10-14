const Bonheur =require('../models/bonheur')
const mongoose=require('mongoose')


//ajouter une sondage
const AddBon =async (req,res)=>{

    const { bonheur }= req.body;
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;


   
      try{
          const bonh =await Bonheur.create({ bonheur,month: currentMonth });
          console.log(bonh);
          // create token
        
          res.status(200).json(bonh)
         }catch(error){
             console.log(error)
             res.status(400).json({error:"invalide"})
 
      }

};
/*const Percent =async (req,res) =>{
  try {
      // Fetch all happiness records from the database


   const bonheurData = await Bonheur.find();
  
      // Calculate the total count and average happiness level
      const totalCount = bonheurData.length;
      const totalBonheur = bonheurData.reduce(
        (sum, data) => sum + data.bonheur,
        0
      );
      const moyenne = totalCount
        ? totalBonheur / totalCount
        : 0;
  
      // Calculate the percentage
      const percentage = (moyenne / 100) * 100;
  
      // Prepare the response JSON
      const responseData = {
        totalCount,
        moyenne,
        percentage,
      };
  console.log(moyenne)
      // Send the response
      res.json(responseData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };*/
  const Percent = async (req, res) => {
    try {
      // Fetch all happiness records from the database
      const bonheurData = await Bonheur.find();
  
      console.log('bonheurData:', bonheurData);
  
      // Calculate the total count and average happiness level
      const totalCount = bonheurData.length;
      const totalBonheur = bonheurData.reduce((sum, data) => sum + data.bonheur, 0);
      const moyenne = totalCount ? totalBonheur / totalCount : 0;
  
      console.log('totalCount:', totalCount);
      console.log('totalBonheur:', totalBonheur);
      console.log('moyenne:', moyenne);
  
      // Calculate the percentage
      const percentage = (moyenne / 100) * 100;
  
      // Prepare the response JSON
      const responseData = {
        totalCount,
        moyenne,
        percentage,
      };
  
      // Send the response
      res.json(responseData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  const Percentmonth = async (req,res) =>{
    try {
      const { month } = req.params;
  
      // Fetch all happiness records for the specified month
      const bonheurDataMouth = await Bonheur.find({ month });
  
      // Calculate the total count and average happiness level for the month
      const totalCountMouth = bonheurDataMouth.length;
      const totalBonheurMouth = bonheurDataMouth.reduce((sum, data) => sum + data.bonheur, 0);
      const moyenneMouth = totalCountMouth ? totalBonheurMouth / totalCountMouth : 0;
      const percentageMouth = (moyenneMouth / 100) * 100;
  
      // Prepare the response JSON
      const responseData = {
        totalCountMouth,
        moyenneMouth,
        percentageMouth,
      };
  
      // Send the response
      res.json(responseData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  
  }

module.exports={
    AddBon,
    Percent,
    Percentmonth
}