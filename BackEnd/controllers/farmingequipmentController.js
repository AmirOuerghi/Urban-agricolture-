const FarmEquipment = require('../model/farmingequipmentModel');

exports.createEquipment = async (req, res) => {
  try {
    const equipment = await FarmEquipment.create(req.body);
    res.status(201).json(equipment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllEquipment = async (req, res) => {
  try {
    const equipment = await FarmEquipment.getAll();
    res.status(200).json(equipment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getEquipmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const equipment = await FarmEquipment.getById(id);
    if (!equipment) {
      return res.status(404).json({ message: 'Equipment not found' });
    }
    res.status(200).json(equipment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateEquipmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const equipment = await FarmEquipment.getById(id);
    if (!equipment) {
      return res.status(404).json({ message: 'Equipment not found' });
    }
    const updatedEquipment = await FarmEquipment.updateById(id, req.body);
    res.status(200).json(updatedEquipment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteEquipmentById = async (req, res) => {
  try {
    const { id } = req.params;
    await FarmEquipment.deleteById(id);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
