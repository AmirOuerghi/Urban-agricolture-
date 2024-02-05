const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');






const app = express();
const corsOptions = {
  origin: 'http://localhost:3000/', // Replace with your frontend URL
  credentials: true,
};

app.use(bodyParser.json());
app.use(cors(corsOptions));





const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
