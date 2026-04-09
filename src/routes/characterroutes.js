const express = require('express');
const router = express.Router();
const characterController = require('../controllers/characterController');

router.get('/', characterController.getHomePage);

router.get('/hlutir/:id',characterController.getCharacterDetails);

module.exports = router;