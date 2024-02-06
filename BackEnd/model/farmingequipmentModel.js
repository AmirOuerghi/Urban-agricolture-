const db = require('../DataBase-Mysql/index');

exports.create = async (equipmentData) => {
  const [result] = await db.query('INSERT INTO FarmEquipment SET ?', equipmentData);
  const equipment = { id: result.insertId, ...equipmentData };
  return equipment;
};

exports.getAll = async () => {
  const [rows] = await db.query('SELECT * FROM FarmEquipment');
  return rows;
};

exports.getById = async (id) => {
  const [rows] = await db.query('SELECT * FROM FarmEquipment WHERE id = ?', [id]);
  return rows[0];
};

exports.updateById = async (id, equipmentData) => {
  await db.query('UPDATE FarmEquipment SET ? WHERE id = ?', [equipmentData, id]);
  return { id, ...equipmentData };
};

exports.deleteById = async (id) => {
  await db.query('DELETE FROM FarmEquipment WHERE id = ?', [id]);
};
