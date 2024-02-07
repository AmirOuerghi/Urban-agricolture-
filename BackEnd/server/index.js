const cors = require('cors');
const express = require('express');
const userRoutes = require('../routes/userRoutes');
const plantsRoutes = require('../routes/plants');
const bodyParser = require('body-parser');

const app = express();

// Enable CORS before defining routes
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// Use bodyParser for parsing JSON data
app.use(bodyParser.json());

// Define your routes after setting up middleware
app.use('/api', userRoutes);
app.use('/hiba', plantsRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
