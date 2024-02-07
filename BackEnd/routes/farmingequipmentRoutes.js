const express = require('express');
const equipmentController = require('../controllers/farmingequipmentController');

const router = express.Router();

router.post('/', equipmentController.createEquipment);
router.get('/', equipmentController.getAllEquipment);
router.get('/:id', equipmentController.getEquipmentById);
router.put('/:id', equipmentController.updateEquipmentById);
router.delete('/:id', equipmentController.deleteEquipmentById);

module.exports = router;
