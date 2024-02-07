const pool = require('../DataBase-Mysql/index');

const getAll = () => {
  return new Promise((resolve, reject) => {
    const q = 'SELECT * FROM `plants`';
    pool.query(q)
      .then((result) => {
        resolve(result[0]); // assuming you want to return the result
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const insertPlant = (plant) => {
  const { img, Name, Size, Price } = plant;

  const q = 'INSERT INTO `plants` (`img`, `Name`, `Size`, `Price`) VALUES (?, ?, ?, ?)';

  return pool.query(q, [img, Name, Size, Price])
    .then((result) => {
      return result[0].insertId;
    })
    .catch((err) => {
      throw err;
    });
};


const deletePlantById = (id) => {
  const q = 'DELETE FROM `plants` WHERE `id` = ?';

  return pool.query(q, [id])
    .then((result) => {
      return result[0].affectedRows;
    })
    .catch((err) => {
      throw err;
    });
};
const updatePlantById = (id, img, Name, Size, Price) => {
  const q = 'UPDATE `plants` SET `img` = ?, `Name` = ?, `Size` = ?, `Price` = ? WHERE `id` = ?';

  return pool.query(q, [img, Name, Size, Price, id])
    .then((result) => {
      return result;
    })
    .catch((err) => {
      throw err;
    });
};
const searchPlantsByName = (name) => {
  const q = 'SELECT * FROM `plants` WHERE `Name` LIKE ?';
  const searchTerm = '%' + name + '%';

  return pool.query(q, [searchTerm])
    .then((result) => {
      return result[0];
    })
    .catch((err) => {
      throw err;
    });
};


module.exports = { getAll , insertPlant , deletePlantById , updatePlantById , searchPlantsByName };