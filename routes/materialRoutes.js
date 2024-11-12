const express = require('express');
const {handleCreateMaterial, handleGetMaterials} = require('../controllers/materialController');
const {verifyToken} = require ('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', verifyToken, handleCreateMaterial);
router.get('/', verifyToken, handleGetMaterials);

module.exports = router;