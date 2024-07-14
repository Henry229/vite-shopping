const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    'mongodb+srv://Henry:eaz1RpBaa8ks0orF@cluster0.e5uomlj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
