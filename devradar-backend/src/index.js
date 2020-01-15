const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

// db connection
mongoose.connect(
  'mongodb+srv://omnistack:devradar@omnistack-mm-uyryo.mongodb.net/db_devradar?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json());
app.use(routes);

app.listen(3333);
