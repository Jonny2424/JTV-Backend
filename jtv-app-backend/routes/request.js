const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/all', ctrl.request.getAll);
router.delete('/:requestId', ctrl.request.deleteRequest);
// router.get('/:request', ctrl.request.getRequestById);

module.exports = router;