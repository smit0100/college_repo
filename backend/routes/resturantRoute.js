const express = require('express');
const router = express.Router();
const resturantController = require('../controller/ResturantController');



router.post("/add", resturantController.createResturnat);




module.exports = router;