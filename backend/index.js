const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
var dotenv = require('dotenv');
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.log(err));
const userSchema = new mongoose.Schema({
  question: String,
  options : [String],
  answer : String
});

const User = mongoose.model('question', userSchema);

app.get('/quiz', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const PORT = process.env.PORT ;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}/quiz`);
  });
