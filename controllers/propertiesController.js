const express = require('express');
const Properties = require('../models/propertiesSchema');
const asyncHandler = require('express-async-handler');




const createProperty = asyncHandler(async (req, res) => {
  const property = new Properties({ ...req.body});
  console.log(property)
  try {
    await property.save();
    res.status(201).send(property);
  } catch (error) {
    res.status(400).send(error);
  }
});

const getProperties = asyncHandler(async  (req, res) => {
  const properties = await Properties.find().populate('sellerId');
  console.log('Properties:', properties);
  res.send(properties);
});
const getIdProperties = asyncHandler(async  (req, res) => {
  const { id } = req.params;
  
  try {
    const properties = await Properties.find({sellerId: id });
    res.send(properties);
  } catch (error) {
    res.status(500).send(error);
  }
})

const updateProperty = asyncHandler(async  (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const property = await Properties.findOneAndUpdate({ _id: id }, updates, { new: true });
    res.send(property);
  } catch (error) {
    res.status(400).send(error);
  }
});

const deleteProperty= asyncHandler(async  (req, res) => {
  const { id } = req.params;

  try {
    await Properties.findOneAndDelete({ _id: id});
    res.status(204).send();
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports={createProperty,getProperties,updateProperty,deleteProperty,getIdProperties}

