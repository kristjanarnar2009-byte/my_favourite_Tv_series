const express = require('express');
const router = express.Router();
const characterController = require('../controllers/characterController');

router.get('/', characterController.getHomePage);

router.get('/character/ny', characterController.getAddCharacterForm);

router.post('/character/ny', characterController.createNewCharacter);

router.get('/character/:id', characterController.getCharacterDetails);

module.exports = router;