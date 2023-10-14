//const Employee =require('../models/employee')
const mongoose=require('mongoose')
const jwt =require('jsonwebtoken');
const User=require('../models/user')



const createToken =(_id) =>{
   return jwt.sign({_id},process.env.SECRET,{expiresIn:'2d'})
}


//Sign-in 
const SigninEmp = async (req,res) =>{
    const {username,password}= req.body;
    try{
        const emp =await User.Signin(username,password);
        
        // create token
        const token = createToken(emp._id)
        res.status(200).json({username,token})
       }catch(error){
           res.status(400).json({error:error.message})

    }
};
const GetEmployee= async (req,res) => {
    const {id}=req.params
 
   


    const user= await User.find({_id:id});
    
    if (!user){
    return res.status(400).json({error: 'user introvable'})
}
    res.json({status:200,data:user})

}
//Profile
const GetProf= async (req,res) => {
    const {username}=req.params
 
   


    const user= await User.find({username:username});
    
    if (!user){
    return res.status(400).json({error: 'user introvable'})
}
    res.json({status:200,data:user})

}

    const AddEmpl =async (req,res)=>{

       const {matricule,nom,prenom,datenaiss,email,username,password,departement,chef,poste,tel,typeus,score}= req.body;
      
         try{
             const employee =await User.create({matricule,nom,prenom,datenaiss,email,username,password,departement,chef,poste,tel,typeus,score});
             console.log(employee);
             // create token
            const token = createToken(employee._id)
             res.status(200).json({username,token})
            }catch(error){
                console.log(error)
                res.status(400).json({error:"invalide"})
    
         }
 
};
//get all employee
const GetAllEmpl= async (req,res) => {
   try{
    const Emplo= await User.find({typeus:'Employe'})
      console.log(Emplo)
    res.status(200).json(Emplo)
    }catch (error) {
        console.log(error)
        res.status(500).send(err);
      }
}
//get employee
const GetEmpl= async (req,res) => {
    const {id}=req.params
    console.log(id)
   //console.log(req.body)
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'employee is invalide'})
    }


    const Emplo= await User.findById(id);
    console.log(Emplo)
    if (!Emplo){
    return res.status(400).json({error: 'employée introvable'})
}
    res.status(200).json(Emplo)

}

//delete employée

const deletEmpl= async (req,res) => {
    const {id}=req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'employee is invalide'})
    }
    const Emplo= await User.findOneAndDelete({_id: id});
    console.log(Emplo)
    if (!Emplo){
    return res.status(400).json({error: 'employée introvable'})
}
res.status(200).json(Emplo)

}
const updateEmpl= async (req,res) => {
    const {id}=req.params
     
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'employee is invalide'})
    }
    const Emplo= await User.findOneAndUpdate({_id: id},{...req.body});
    if (!Emplo){
    return res.status(400).json({error: 'employée introvable'})
}
res.status(200).json(Emplo)
}
const countEmpl= async (req,res) => {
try {
    const count = await User.countDocuments({ typeus:"Employe" });
    res.json({ count });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
}
  

const updateEmplScore= async (req,res) => {
    const {username}=req.params
    const {score}=req.body
   
    const Empl =await User.findOne({username: username})
    let NewScore=score+Empl.score
    console.log(NewScore)
    const Emplo= await User.findOneAndUpdate({username: username},{score: NewScore});
    if (!Emplo){
    return res.status(400).json({error: 'employée introvable'})
 }
 res.status(200).json(Emplo)
}
const updateEmplProfile= async (req,res) => {
    const {username}=req.params
 
    const Emplo= await User.findOneAndUpdate({username: username},{...req.body});
    if (!Emplo){
    return res.status(400).json({error: 'employée introvable'})
}
res.status(200).json(Emplo)
}

module.exports={
    SigninEmp,
    AddEmpl,
    GetAllEmpl,
    GetEmpl,
    deletEmpl,
    updateEmpl,
    GetProf,
    countEmpl,
    GetEmployee,
    updateEmplScore,
    updateEmplProfile

}

