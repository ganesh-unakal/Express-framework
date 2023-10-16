// const path = require('path');

const express = require('express');

const contactController = require('../controllers/contactus');

const router = express.Router();

// const rootDir = require('../util/path');

router.get('/contact',contactController.getcontact );
router.post('/success', contactController.postMsg);

module.exports = router;
