const express = require('express');
const {getProperties, createProperty,updateProperty,deleteProperty,getIdProperties} = require('../controllers/propertiesController')

const router = express.Router();

router.post('/properties',createProperty)
router.get('/properties',getProperties)
router.get('/properties/:id',getIdProperties)
router.put('/properties/:id',updateProperty)
router.delete('/properties/:id',deleteProperty)

module.exports = router

