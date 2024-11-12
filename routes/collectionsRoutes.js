const express = require('express');
const {handleCreateCollection, handleGetCollections} = require('../controllers/collectionsController');
const {verifyToken} = require ('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', verifyToken, handleCreateCollection);
router.get('/', verifyToken, handleGetCollections);

module.exports = router;