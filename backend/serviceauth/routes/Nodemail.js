
const express = require("express");
const serv = require("../service/NodemailService");

// Service Authentication

const router = express.Router();

router.post('/Sendemail', serv.sendmail);



module.exports = router;



