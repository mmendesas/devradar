const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');

const app = express();
const server = http.Server(app);

// db connection
mongoose.connect(
  'mongodb+srv://omnistack:devradar@omnistack-mm-uyryo.mongodb.net/db_devradar?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
