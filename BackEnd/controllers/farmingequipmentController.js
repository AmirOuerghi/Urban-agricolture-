const FarmingEquipment = require('../model/farmingequipmentModel');

exports.createEquipment = async (req, res) => {
  try {
    const equipment = await FarmingEquipment.create(req.body);
    res.status(201).json(equipment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllEquipment = async (req, res) => {
  try {
    const equipment = await FarmingEquipment.getAll();
    res.status(200).json(equipment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getEquipmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const equipment = await FarmingEquipment.getById(id);
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
    const equipment = await FarmingEquipment.getById(id);
    if (!equipment) {
      return res.status(404).json({ message: 'Equipment not found' });
    }
    const updatedEquipment = await FarmingEquipment.updateById(id, req.body);
    res.status(200).json(updatedEquipment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteEquipmentById = async (req, res) => {
  try {
    const { id } = req.params;
    await FarmingEquipment.deleteById(id);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
