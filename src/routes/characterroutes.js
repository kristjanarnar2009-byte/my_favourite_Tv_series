const express = require('express');
const router = express.Router();
const charactercontroller = require('../controllers/charactercontroller');

router.get('/', charactercontroller.getHomePage);

module.exports = router;