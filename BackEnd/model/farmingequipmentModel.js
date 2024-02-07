const db = require('../DataBase-Mysql');

// Create a new equipment
exports.create = async (equipmentData) => {
  const [result] = await db.query('INSERT INTO farmequipment SET ?', equipmentData);
  return { id: result.insertId, ...equipmentData };
};

// Get all equipment
exports.getAll = async () => {
  const [rows] = await db.query('SELECT * FROM farmequipment');
  return rows;
};

// Get equipment by ID
exports.getById = async (equipmentId) => {
  const [rows] = await db.query('SELECT * FROM farmequipment WHERE ID = ?', [equipmentId]);
  return rows[0];
};

// Update equipment by ID
exports.updateById = async (equipmentId, equipmentData) => {
  await db.query('UPDATE farmequipment SET ? WHERE ID = ?', [equipmentData, equipmentId]);
  return { id: equipmentId, ...equipmentData };
};

// Delete equipment by ID
exports.deleteById = async (equipmentId) => {
  await db.query('DELETE FROM farmequipment WHERE ID = ?', [equipmentId]);
};
