const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('../routes/userRoutes');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const farmingEquipmentRoutes = require('../routes/farmingequipmentRoutes');
const Plants = require('../routes/plants');
const axios = require('axios').default;

const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(cors());


let chatroom = [];

app.get('/api/chatroom', (req, res) => {
  res.json(chatroom);
});

// app.use('/api/users', userRoutes); 
// app.use('/api/farmingequipment', farmingEquipmentRoutes);



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



 
//   return res.json ({username:username , secret:"sh256..."})
//   res.json({ success: true })
// })
 

app.use('/api/users', userRoutes); 
app.use('/api/farmingequipment', farmingEquipmentRoutes);
app.use('/api/Plants', Plants);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
