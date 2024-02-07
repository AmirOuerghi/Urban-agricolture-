const { getAll, insertPlant , deletePlantById ,updatePlantById  , searchPlantsByName} = require('../model/plants');

const getplants = (req, res) => {
  getAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const addPlantToDatabase = (req, res) => {
  const { img, Name, Size, Price } = req.body;

  if (!img || !Name || !Size || !Price) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  insertPlant({ img, Name, Size, Price })
    .then((id) => {
      res.status(201).json({ message: 'Plant added successfully.', id });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const deletePlant = (req, res) => {
  const { id } = req.params;

  deletePlantById(id)
    .then((result) => {
      if (result > 0) {
        res.status(200).json({ message: 'Plant deleted successfully.' });
      } else {
        res.status(404).json({ error: 'Plant not found.' });
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const updatePlant = (req, res) => {
  const { id } = req.params;
  const { img, Name, Size, Price } = req.body;

  updatePlantById(id, img, Name, Size, Price)
    .then(() => {
      res.status(200).json({ message: 'Plant updated successfully.' });
    })
    .catch((err) => {
      res.status(500).json({ message: 'Error updating plant' });
    });
};

const searchPlants = (req, res) => {
  const { name } = req.params;

  searchPlantsByName(name)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};




module.exports = {
  getplants,
  addPlantToDatabase ,
  deletePlant, 
  updatePlant , 
  searchPlants

};