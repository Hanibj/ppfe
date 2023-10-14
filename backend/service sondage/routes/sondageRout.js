const express = require("express");

const servi=require("../service/Sondageservi");

const multer =require('multer')
//Service Admin


const router = express.Router();

/** 
 * @swagger
 *components:
 *   schemas:
 *      Sondage:
 *          type: 
 *               object
 *          required:
 *               -question
 *               -option1
 *               -option2
 *               -answers    
 *          properties:
 *                     id:
 *                        type: string
 *                        description: The auto-generated ID for the user collection
 *                     question:
 *                        type: string
 *                        description: The auto-generated ID for the user collection
 *                     option1:
 *                        type: string
 *                        description: The auto-generated ID for the user collection
 *                     option2:
 *                        type: string
 *                        description: The auto-generated ID for the user collection
 *                     answers:
 *                        type: Object
 *                        description: The auto-generated ID for the user collection
 *          example: 
 *                   id: 1125544a5zqsqss
 *                   question: azerezhuihqs
 *                   option1: oui
 *                   option2: non   
 *                   userval: '{ "username": "hani" ,"answer": "non"} '
 */
/** 
 * @swagger 
 *  tags:
 *      name: SondageService
 *      descreption: Sondage apis
*/
/**
 * @swagger
 * /api/sondage/ajouterSondage:
 *  post:
 *      summary: Ajoute sondage
 *      tags: [SondageService]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Sondage'
 *      responses:
 *          200:
 *              description: sondage done
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
 * /api/sondage/sondage/:id:
 *  delete:
 *      summary: Supprimier sondage
 *      tags: [SondageService]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Sondage'
 *      responses:
 *          200:
 *              description: sondage done
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
 * /api/sondage/updatesondage/:id':
 *  patch:
 *      summary: updatee sondage
 *      tags: [SondageService]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Sondage'
 *      responses:
 *          200:
 *              description: sondage updated
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
 * /api/sondage/sondage':
 *  get:
 *      summary:  Affichier les sondage
 *      tags: [SondageService]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Sondage'
 *      responses:
 *          200:
 *              description: les sondage affichier
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
 * /api/sondage/sondage/:id':
 *  get:
 *      summary:  get une sondage
 *      tags: [SondageService]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Sondage'
 *      responses:
 *          200:
 *              description: sondage affichier
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
 * /api/sondage/validerSondage/:id':
 *  patch:
 *      summary:  sondage valider
 *      tags: [SondageService]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Sondage'
 *      responses:
 *          200:
 *              description: sondage valider
 *              content:
 *                  applicatin/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Sondage'
 *          500:
 *              description: somthing wrong
 * 
 */
//Sondage Routes

//add Sondage
router.post('/ajouterSondage',servi.AddSond);
//delete Sondage
router.delete('/sondage/:id',servi.deletSond)
//update Sondage
router.patch('/updatesondage/:id',servi.updateSond)
//get all Sondage
router.get('/sondage',servi.AllSond);
//get a single Sondage
router.get('/sondage/:id',servi.GetSond)
//pourcentage Sondage
router.get('/PourSondage/:id',servi.calcluePorcentageSondage)
//valider sondage
router.patch('/validerSondage/:id',servi.ValSond)
module.exports = router;