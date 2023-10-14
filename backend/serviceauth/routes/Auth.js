
const express = require("express");
const serv = require("../service/AuthServi");

// Service Authentication

const router = express.Router();

// Routes swag
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *          type: 
 *               object
 *          required:
 *                  - matricule
 *                  - nom
 *                  - prenom
 *                  - datenaiss
 *                  - username
 *                  - email
 *                  - password
 *                  - tailleentr
 *                  - type
 *                  - typeus
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
 *                     tailleentr:
 *                                type: number
 *                                description: Taille de l'entreprise user collection
 *                     type:
 *                          type: string
 *                          description: Type de user collection
 *                     typeus:
 *                            type: string
 *                            description: Type user admin employee collection
 *          example:
 *                  id: 125544a5zqsqss  
 *                  matricule: 12345678910   
 *                  nom: hanibbn   
 *                  prenom: bounagra
 *                  datenaiss: 07/03/1999
 *                  username: hani03
 *                  email: hanibenjemaa38@gmail.com
 *                  password: azerty1234
 *                  tailleentr: 200
 *                  type: HR
 *                  typeus: Admin
 */





/** 
 * @swagger 
 *  tags:
 *      name: Authentification
 *      descreption: Authentification apis
*/
/**
 * @swagger
 * /api/authentification/Signin:
 *  post:
 *      summary: login page
 *      tags: [Authentification]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          200:
 *              description: login done
 *              content:
 *                  applicatin/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *          500:
 *              description: somthing wrong
 * 
 */

// Sign-in
router.post('/Signin', serv.SigninUser);
/**
 * @swagger
 * /api/authentification/Signup:
 *  post:
 *      summary: registre page
 *      tags: [Authentification]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          200:
 *              description: registre done
 *              content:
 *                  applicatin/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *          500:
 *              description: somthing wrong
 * 
 */

// Sign-up
router.post('/Signup', serv.SignupUser);
router.post('/Signingoogle', serv.SigninUsergoole);
router.post('/Facebook', serv.SigninUserFacebook);
// Get admin profile
router.get('/profile/:username', serv.GetProf);
//router.get('/admin/:username',serv.Redirc)
//router.post('/admin/:username', serv.Redirc);
router.patch('/resetpassword',serv.ResetPassword)
module.exports = router;
