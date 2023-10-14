const express = require("express");
const serv=require("../service/empService");

const servic=require("../service/FeedServi")

const servjeu=require("../service/JeuxService");
const servBon = require('../service/bonheurServ')

const empRouter =express.Router()

// Routes swag
/**
 * @swagger
 * components:
 *    schemas:
 *      Users:
 *          type: 
 *               object
 *          required:
 *                  -matricule
 *                  -nom
 *                  -prenom
 *                  -datenaiss
 *                  -email
 *                  -username
 *                  -password
 *                  -departement
 *                  -chef
 *                  -poste
 *                  -tel
 *                  -typeus
 *                  -score
 *          properties:
 *                     id:
 *                        type: string
 *                        description: The auto-generated ID for the user collection
 *                     matricule:
 *                               type: number
 *                               description: Matricule user collection
 *                     nom:
 *                         type: string
 *                         description: Nom user collection
 *                     prenom:
 *                            type: string
 *                            description: Prenom user collection
 *                     datenaiss:
 *                               type: string
 *                               description: Date of birth user collection
 *                     username:
 *                              type: string
 *                              description: Username user collection
 *                     email:
 *                           type: string
 *                           description: Email user collection
 *                     password:
 *                              type: string
 *                              description: Password user collection
 *                     chef:
 *                                type: string
 *                                description: Taille de l'entreprise user collection
 *                     poste:
 *                          type: string
 *                          description: Type de user collection
 *                     typeus:
 *                            type: string
 *                            description: Type user admin employee collection
 *                     tel: 
 *                             type: number
 *                             description: Matricule user collection
 *                     score:
 *                             type: number
 *                             description: Matricule user collection
 *                     departement:
 *                             type: string
 *                             description: Type user admin employee collection
 *          example:
 *                  id: 125544a5zqsqss  
 *                  matricule: 12345678910   
 *                  nom: hanibbn   
 *                  prenom: bounagra
 *                  datenaiss: 07/03/1999
 *                  username: hani03
 *                  email: hanibenjemaa38@gmail.com
 *                  password: azerty1234
 *                  tel: 21546225
 *                  chef: false
 *                  poste: devweb
 *                  departement: informatique
 *                  score: 1
 *                  typeus: Admin
 */
/** 
 * @swagger
 *components:
 *   schemas:
 *      Feedbacks:
 *          type: 
 *               object
 *          required:
 *               -sujet
 *               -reponse
 *               -userval 
 *          properties:
 *                     id:
 *                        type: string
 *                        description: The auto-generated ID for the user collection
 *                     sujet:
 *                        type: string
 *                        description: The auto-generated ID for the user collection
 *                     reponse:
 *                        type: string
 *                        description: The auto-generated ID for the user collection
 *                     userval:
 *                        type: Object
 *                        description: The auto-generated ID for the user collection
 *          example: 
 *                   id: 1125544a5zqsqss
 *                   sujet: azerezhuihqs
 *                   reponse: fndfdfiuhgs
 *                   userval: '{ "username": "hani" ,"typeus": "Employee"} '
 */
/** 
 * @swagger
 *components:
 *   schemas:
 *      Defis:
 *          type: 
 *               object
 *          required:
 *               -objet
 *               -date_debut
 *               -date_fin 
 *               -user
 *          properties:
 *                     id:
 *                        type: string
 *                        description: The auto-generated ID for the user collection
 *                     objet:
 *                        type: string
 *                        description: The auto-generated ID for the user collection
 *                     date_debut:
 *                        type: date
 *                        description: The auto-generated ID for the user collection
 *                     date_fin:
 *                        type: date
 *                        description: The auto-generated ID for the user collection
 *                     user:
 *                        type: Object
 *                        description: The auto-generated ID for the user collection     
 *          example: 
 *                   id: 1125544a5zqsqss
 *                   objet: azerezhuihqs
 *                   date_debut: 29/05/2023
 *                   date_fin: 31/05/2023   
 *                   userval: '{ "username": "hani" ,"dat_val": "30/05/2023"} '
 */
/** 
 * @swagger
 *components:
 *   schemas:
 *      Sondage:
 *          type: 
 *               object
 *          required:
 *               -question
 *               -option
 *               -valide
 *          properties:
 *                     id:
 *                        type: string
 *                        description: The auto-generated ID for the user collection
 *                     question:
 *                        type: string
 *                        description: The auto-generated ID for the user collection
 *                     option:
 *                        type: string
 *                        description: The auto-generated ID for the user collection
 *                     valide:
 *                        type: Object
 *                        description: The auto-generated ID for the user collection
 *          example: 
 *                   id: 1125544a5zqsqss
 *                   question: azerezhuihqs
 *                   option: fndfdfiuhgs
 *                   valide: '{ "username": "hani" } '
 */
/** 
 * @swagger 
 *  tags:
 *      name: EmployeeService
 *      descreption: Employee apis
*/
/** 
 * @swagger 
 *  tags:
 *      name: AdminService
 *      descreption: Employee apis
*/

//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
/**
 * @swagger
 * /api/employee/Addemp:
 *  post:
 *      summary: Ajoute employee
 *      tags: [AdminService]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Users'
 *      responses:
 *          200:
 *              description: employee done
 *              content:
 *                  applicatin/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Sondage'
 *          500:
 *              description: somthing wrong
 * 
 */
/**
 * @swagger
 * /api/employee/emp/:id':
 *  delete:
 *      summary: Supprimier employee
 *      tags: [AdminService]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Users'
 *      responses:
 *          200:
 *              description: employee done
 *              content:
 *                  applicatin/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Users'
 *          500:
 *              description: somthing wrong
 * 
 */
/**
 * @swagger
 * /api/employee/updateEmp/:id':
 *  patch:
 *      summary: updatee employee
 *      tags: [AdminService]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Users'
 *      responses:
 *          200:
 *              description: employee updated
 *              content:
 *                  applicatin/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Users'
 *          500:
 *              description: somthing wrong
 * 
 */
/**
 * @swagger
 * /api/employee/allemp':
 *  get:
 *      summary:  Affichier les employee
 *      tags: [AdminService]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Users'
 *      responses:
 *          200:
 *              description: les employee affichier
 *              content:
 *                  applicatin/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Users'
 *          500:
 *              description: somthing wrong
 * 
 */

/**
 * @swagger
 * /api/employee/employee/:id':
 *  get:
 *      summary:   affichier employee
 *      tags: [AdminService]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Users'
 *      responses:
 *          200:
 *              description: employe affichier
 *              content:
 *                  applicatin/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Users'
 *          500:
 *              description: somthing wrong
 * 
 */

//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
/**
 * @swagger
 * /api/employee/Signin:
 *  post:
 *      summary: login page
 *      tags: [EmployeeService]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Users'
 *      responses:
 *          200:
 *              description: login done
 *              content:
 *                  applicatin/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Users'
 *          500:
 *              description: somthing wrong
 * 
 */
/** 
 * @swagger 
 *  tags:
 *      name: Defis
 *      descreption:  Defis apis
*/
/** 
 * @swagger 
 *  tags:
 *      name: Sondage
 *      descreption: Sondage apis
*/

/**
 * @swagger
 * /api/employee/Signin:
 *  post:
 *      summary: login page
 *      tags: [EmployeeService]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Users'
 *      responses:
 *          200:
 *              description: login done
 *              content:
 *                  applicatin/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Users'
 *          500:
 *              description: somthing wrong
 * 
 */
//Sign-in
empRouter.post('/Signin',serv.SigninEmp)
/** 
* @swagger
* /api/employee/employeprofile/:username:
*  get:
*      summary: get Employee Profile
*      tags: [EmployeeService]
*      requestBody:
*          required: true
*          content:
*              application/json:
*                  schema:
*                      $ref: '#/components/schemas/Users'
*      responses:
*          200:
*              description: Users done
*              content:
*                  applicatin/json:
*                      schema:
*                          $ref: '#/components/schemas/Users'
*          500:
*              description: somthing wrong
* 
*/
empRouter.get('/employee/:id',serv. GetEmployee) 
empRouter.get('/employeprofile/:username',serv.GetProf)
empRouter.get('/allemp',serv.GetAllEmpl)
empRouter.delete('/emp/:id',serv.deletEmpl)
empRouter.post('/Addemp',serv.AddEmpl)
empRouter.patch('/updateEmp/:id',serv.updateEmpl)
empRouter.patch('/updateScore/:username',serv.updateEmplScore)
empRouter.patch('/employeprofile/modifier/:username',serv.updateEmplProfile)
// //get Sondage
// /** 
// * @swagger
// * /api/employee/sondage:
// *  get:
// *      summary: get single Sondage
// *      tags: [EmployeeService]
// *      requestBody:
// *          required: true
// *          content:
// *              application/json:
// *                  schema:
// *                      $ref: '#/components/schemas/Sondage'
// *      responses:
// *          200:
// *              description: Sondage done
// *              content:
// *                  applicatin/json:
// *                      schema:
// *                          $ref: '#/components/schemas/Sondage'
// *          500:
// *              description: somthing wrong
// * 
// */
// empRouter.get('/sondage',servi.AllSond);
// empRouter.get('/sondage/:id',servi.GetSond)
//Feedback Routes
/** 
 * @swagger 
 *  tags:
 *      name: Feedbacks
 *      descreption: Employee apis
*/
/**
 * @swagger
 * /api/employee/ajouterFeedback:
 *  post:
 *      summary: Ajout Feedback
 *      tags: [EmployeeService]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Feedbacks'
 *      responses:
 *          200:
 *              description: Feedback done
 *              content:
 *                  applicatin/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Feedbacks'
 *          500:
 *              description: somthing wrong
 * 
 */
//add feedback
//empRouter.patch('/validerSondage/:id',servi.ValSond)
empRouter.post('/ajouterFeedback',servic.AddFeed);
/** 
* @swagger
* /api/employee/feedback/:id:
*  delete:
*      summary: delete Feedback
*      tags: [EmployeeService]
*      requestBody:
*          required: true
*          content:
*              application/json:
*                  schema:
*                      $ref: '#/components/schemas/Feedbacks'
*      responses:
*          200:
*              description: Feedback done
*              content:
*                  applicatin/json:
*                      schema:
*                          $ref: '#/components/schemas/Feedbacks'
*          500:
*              description: somthing wrong
* 
*/
//delete feedback
empRouter.delete('/feedback/:id',servic.deletFeed)
/** 
* @swagger
* /api/employee/feedback/:id:
*  patch:
*      summary: update Feedback
*      tags: [EmployeeService]
*      requestBody:
*          required: true
*          content:
*              application/json:
*                  schema:
*                      $ref: '#/components/schemas/Feedbacks'
*      responses:
*          200:
*              description: Feedback done
*              content:
*                  applicatin/json:
*                      schema:
*                          $ref: '#/components/schemas/Feedbacks'
*          500:
*              description: somthing wrong
* 
*/
//update feedback
empRouter.patch('/feedback/:id',servic.updateFeed)
/** 
* @swagger
* /api/employee/feedback/:username:
*  get:
*      summary: avoir tout les feedbacks de l'employee
*      tags: [EmployeeService]
*      requestBody:
*          required: true
*          content:
*              application/json:
*                  schema:
*                      $ref: '#/components/schemas/Feedbacks'
*      responses:
*          200:
*              description: Feedback done
*              content:
*                  applicatin/json:
*                      schema:
*                          $ref: '#/components/schemas/Feedbacks'
*          500:
*              description: somthing wrong
* 
*/
//get all feedback
empRouter.get('/feedback/:username',servic.AllFeed);
//get a single feedback
/** 
* @swagger
* /api/employee/feedback/Single/:username:
*  get:
*      summary: get single Feedback
*      tags: [EmployeeService]
*      requestBody:
*          required: true
*          content:
*              application/json:
*                  schema:
*                      $ref: '#/components/schemas/Feedbacks'
*      responses:
*          200:
*              description: Feedback done
*              content:
*                  applicatin/json:
*                      schema:
*                          $ref: '#/components/schemas/Feedbacks'
*          500:
*              description: somthing wrong
* 
*/
empRouter.get('/feedback/Single/:id',servic.GetFeed)

//Add score a un jeux

/** 
* @swagger
* /api/employee/jeux/:id:
*  get:
*      summary: Participer a un defis
*      tags: [EmployeeService]
*      requestBody:
*          required: true
*          content:
*              application/json:
*                  schema:
*                      $ref: '#/components/schemas/Defis'
*      responses:
*          200:
*              description: Feedback done
*              content:
*                  applicatin/json:
*                      schema:
*                          $ref: '#/components/schemas/Defis'
*          500:
*              description: somthing wrong
* 
*/

empRouter.post('/jeux/:id',servjeu.Addjeux)
//Add score a un jeux
//empRouter.get('/jeux/:id',servjeu.GetHigScore)
//get defis
/** 
* @swagger
* /api/employee/defis:
*  get:
*      summary: get  Defis
*      tags: [EmployeeService]
*      requestBody:
*          required: true
*          content:
*              application/json:
*                  schema:
*                      $ref: '#/components/schemas/Defis'
*      responses:
*          200:
*              description: Defis done
*              content:
*                  applicatin/json:
*                      schema:
*                          $ref: '#/components/schemas/Defis'
*          500:
*              description: somthing wrong
* 
*/
// empRouter.get('/defis',servdef.AllDef);
// //participer a un defis
// /** 
// * @swagger
// * /api/employee/defis/:id:
// *  patch:
// *      summary: modifis score
// *      tags: [EmployeeService]
// *      requestBody:
// *          required: true
// *          content:
// *              application/json:
// *                  schema:
// *                      $ref: '#/components/schemas/Defis'
// *      responses:
// *          200:
// *              description: Defis done
// *              content:
// *                  applicatin/json:
// *                      schema:
// *                          $ref: '#/components/schemas/Defi'
// *          500:
// *              description: somthing wrong
// * 
// */
empRouter.get('/Allfeedback',servic.AllFeedback);
empRouter.post('/ajouterbonheur',servBon.AddBon)

empRouter.get("/percbonh",servBon.Percent)


empRouter.get("/percbonh/:month", servBon.Percentmonth);

empRouter.get("/totalEmp",serv.countEmpl)
module.exports = empRouter;