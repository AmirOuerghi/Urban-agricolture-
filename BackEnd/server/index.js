const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const farmingEquipmentRoutes = require('../routes/farmingEquipmentRoutes');
const userRoutes = require('../routes/userRoutes')
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(cors());

// Chatroom array to store messages
let chatroom = [];

// Endpoint to get chatroom messages
app.get('/api/chatroom', (req, res) => {
  res.json(chatroom);
});

// Endpoint to send a new message to the chatroom
app.post('/api/chatroom', (req, res) => {
  const { message } = req.body;
  chatroom.push(message);
  io.emit('message', message); // Emit the new message to all connected clients
  res.status(201).send('Message sent to chatroom');
});

io.on('connection', (socket) => {
  console.log('A user connected');

  // Send chat history to newly connected client
  socket.emit('chatHistory', chatroom);

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)});
app.use('/api/users', userRoutes); 
//app.use('/api/farmingequipment', farmingEquipmentRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
