const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/all', ctrl.request.getAll);
// router.get('/:request', ctrl.request.getRequestById);

module.exports = router;