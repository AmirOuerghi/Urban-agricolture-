const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('../routes/userRoutes');
const app = express();
const server = http.createServer(app);
const farmingEquipmentRoutes = require('../routes/farmingequipmentRoutes');
const Plants = require('../routes/plants');
const axios = require('axios').default;
const connection = require("../DataBase-Mysql/index2")

const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(cors());









app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  
  try {
    const response = await axios.put(
      'https://api.chatengine.io/users/',
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "e72422c1-d3c4-4a1f-bcd8-8b099bdc689d" } }
    );

    return res.status(response.status).json(response.data);
  } catch (error) {

    if (error.response) {
      // If there's a response, extract the status code and response data
      const { status, data } = error.response;
      return res.status(status).json(data);
    } else {
      // If there's no response, handle the error as a generic server error
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }


});
app.post("/upload-image", (req, res) => {
  const { imageUrl } = req.body;

  // Insert image URL into MySQL database
  const sql = 'INSERT INTO images (url) VALUES (?)';
  connection.query(sql, [imageUrl], (err, result) => {
    if (err) {
      console.error('Error inserting image URL into database:', err);
      res.status(500).json({ error: 'An error occurred while storing the image URL.' });
      return;
    }
    res.status(200).json({ success: true });
  });
});
app.get("/get-images", (req, res) => {
  // Fetch all image URLs from the database
  const sql = 'SELECT url FROM images';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching image URLs from database:', err);
      res.status(500).json({ error: 'An error occurred while fetching the image URLs.' });
      return;
    }
    const imageUrls = results.map(result => result.url);
    res.status(200).json({ imageUrls });
  });
});



app.use('/api/users', userRoutes); 
app.use('/api/farmingequipment', farmingEquipmentRoutes);
app.use('/api/Plants', Plants);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
