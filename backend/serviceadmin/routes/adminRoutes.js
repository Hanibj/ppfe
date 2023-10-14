const express = require("express");
const serv=require("../service/adminServi");



const servEvent=require("../service/evntServ")
const servObject=require("../service/objectifService")
const multer =require('multer')
//Service Admin


const router = express.Router();


const upload = multer({ dest: 'uploads/' })
//Sign-in
router.post('/Signin',serv.SigninAdmin);


//Sign-up
router.post('/Signup',serv.SignupAdmin)
//get admin profile
router.get('/adminprofile/:username',serv.GetProf)
router.get('/SingleAdmin/:id',serv.GetAdmin)
//get
router.patch('/adminprofile/modifier/:id',serv.updateAdmin)
//delete employee
router.delete('/adminprofile/:id',serv.deletAdmin)

//Add admin
router.post('/addAdmin',serv.AddAdmin);
//get all admin
router.get('/allAdmin',serv.GetAllAdmin);




//add Objectif
router.post('/ajouterObjectif',servObject.AddObject);
//delete Objectif
router.delete('/Objectif/:id',servObject.deletObject)
//update Objectif
router.patch('/Objectif/:id',servObject.updateObject)
//update Objectif
router.patch('/Objectif/valide/:id',servObject.ValideObject)
//get all Objectif
router.get('/Objectif',servObject.AllObject);
//get a single Objectif
router.get('/Objectif/:id',servObject.GetObject)

router.get("/percObjectif",servObject.PercentObj)
//Add Evenement
router.post('/AjouterEvenement',upload.single('imageevent') ,servEvent.AddEvent)
//affichier evenement
router.get('/AllEvenement',servEvent.AllEvenement)
//delete evenement
router.delete('/Event/:id',servEvent.deletEvent)
//get evenement
router.get('/event/:id',upload.single('imageevent'),servEvent.getEvent)
//update evenement
router.patch('/ModifierEvenement/:id',upload.single('imageevent'),servEvent.updateEvent)
//paiement
router.post ('/checkout',servEvent.payer)
router.get ('/payer',servEvent.getpayer)
module.exports = router;