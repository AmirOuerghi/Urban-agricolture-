const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const farmingEquipmentRoutes = require('./routes/farmingEquipmentRoutes');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());


let chatroom = [];

app.get('/api/chatroom', (req, res) => {
  res.json(chatroom);
});


app.post('/api/chatroom', (req, res) => {
  const { message } = req.body;
  chatroom.push(message);
  io.emit('message', message); 
  res.status(201).send('Message sent to chatroom');
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.emit('chatHistory', chatroom);

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

app.use('/api/users', userRoutes); 
app.use('/api/farmingequipment', farmingEquipmentRoutes);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
