const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const farmingEquipmentRoutes = require('./routes/farmingEquipmentRoutes');

const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(cors());


app.use('/api/users', userRoutes); 
app.use('/api/farmingequipment', farmingEquipmentRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
