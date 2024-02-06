const express = require('express');
const equipmentController = require('../controllers/farmingequipmentController');

const router = express.Router();

router.post('/equipment', equipmentController.createEquipment);
router.get('/equipment', equipmentController.getAllEquipment);
router.get('/equipment/:id', equipmentController.getEquipmentById);
router.put('/equipment/:id', equipmentController.updateEquipmentById);
router.delete('/equipment/:id', equipmentController.deleteEquipmentById);

module.exports = router;
