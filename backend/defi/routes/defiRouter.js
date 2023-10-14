const express = require("express");

const servDef=require("../service/defis")
const servpardef = require('../service/partiDefis')
const multer =require('multer')
//Service Admin


const router = express.Router();



/** 
 * @swagger
 *components:
 *   schemas:
 *      Defis:
 *          type: 
 *               object
 *          required:
 *               -objet
 *               -valeur
 *               -date_debut
 *               -date_fin    
 *          properties:
 *                     id:
 *                        type: string
 *                        description: The auto-generated ID for the user collection
 *                     objet:
 *                        type: string
 *                        description: The auto-generated ID for the user collection
 *                     valeur:
 *                        type: string
 *                        description: The auto-generated ID for the user collection
 *                     date_debut:
 *                        type: date
 *                        description: The auto-generated ID for the user collection
 *                     date_fin:
 *                        type: date
 *                        description: The auto-generated ID for the user collection
 *          example: 
 *                   id: 1125544a5zqsqss
 *                   objet: azerezhuihqs
 *                   valeur: oui
 *                   date_debut: 2023/02/06   
 *                   date_fin: 2023/02/07
 */
/** 
 * @swagger 
 *  tags:
 *      name: DefisService
 *      descreption: Defis apis
*/
/**
 * @swagger
 * /api/defi/ajouterDefi:
 *  post:
 *      summary: Ajoute Defis
 *      tags: [DefisService]
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
/**
 * @swagger
 * /api/defi/Defi/:id:
 *  delete:
 *      summary: Supprimier Defis
 *      tags: [DefisService]
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
/**
 * @swagger
 * /api/defi/Defi/:id':
 *  patch:
 *      summary: Defis updated
 *      tags: [DefisService]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Defis'
 *      responses:
 *          200:
 *              description: Defis updated
 *              content:
 *                  applicatin/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Defis'
 *          500:
 *              description: somthing wrong
 * 
 */
/**
 * @swagger
 * /api/defi/Defi':
 *  get:
 *      summary:  Affichier les Defis
 *      tags: [DefisService]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Defis'
 *      responses:
 *          200:
 *              description: les Defis affichier
 *              content:
 *                  applicatin/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Defis'
 *          500:
 *              description: somthing wrong
 * 
 */
/**
 * @swagger
 * /api/defi/Defi/:id':
 *  get:
 *      summary:  get une Defis
 *      tags: [DefisService]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Defis'
 *      responses:
 *          200:
 *              description: Defis affichier
 *              content:
 *                  applicatin/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Defis'
 *          500:
 *              description: somthing wrong
 * 
 */
/**
 * @swagger
 * /api/defi/participerdefis/:id':
 *  patch:
 *      summary:  defis valider
 *      tags: [DefisService]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Defis'
 *      responses:
 *          200:
 *              description: defi valider
 *              content:
 *                  applicatin/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Defis'
 *          500:
 *              description: somthing wrong
 * 
 */





//add defis
router.post('/ajouterDefi',servDef.AddDef);
//delete defis
router.delete('/Defi/:id',servDef.deletDef)
//update defis
router.patch('/Defi/:id',servDef.updateDef)
//get all defis
router.get('/Defi',servDef.AllDef);
//get a single defis
router.get('/Defi/:id',servDef.GetDef)
//
router.post('/participerdefis/:id',servpardef.AddDef)
router.get('/GetParticpant/:id',servpardef.GetParticpant)
module.exports = router;