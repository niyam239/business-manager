const express = require('express');
const homeCtrl = require('../controllers/home.controller');

const router = express.Router();

router.get('/', 
    homeCtrl.default
);

router.get('/index', 
    homeCtrl.index
);

module.exports = router;