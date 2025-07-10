const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const paymentRoutes = require('./routes/payment');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/payment', paymentRoutes);

app.get('/', (req, res) => {
  res.send('Student Registration Backend is Running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});