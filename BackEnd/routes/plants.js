// const express = require("express")
const { getplants , addPlantToDatabase , deletePlant , updatePlant , searchPlants} = require('../controllers/plants');
const router = require('express').Router();

router.get("/get", getplants);
router.post('/add',  addPlantToDatabase)
router.delete('/:id', deletePlant)
router.put("/update/:id", updatePlant);
router.get("/get/search/:name",searchPlants);
module.exports = router;