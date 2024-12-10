const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
}));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb+srv://brafikwidad:wMV7TvLLGUZssZT5@cluster-1.1fmyc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-1")
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

const appointmentRoutes = require('./routes/appointment');
app.use('/api/appointments', appointmentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
