const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { createLicense, getLicenses } = require('../controllers/licenseController');

router.post('/create', auth, createLicense);
router.get('/', auth, getLicenses);

module.exports = router;
