const express = require('express');
const {getProperties, createProperty,updateProperty,deleteProperty,getIdProperties} = require('../controllers/propertiesController')

const router = express.Router();

router.post('/',createProperty)
router.get('/',getProperties)
router.get('/:id',getIdProperties)
router.put('/:id',updateProperty)
router.delete('/:id',deleteProperty)


module.exports = router

