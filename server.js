const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect( 'mongodb://localhost:27017/nodeapi',{ useNewUrlParser: true, useUnifiedTopology: true });

requireDir('./src/models')

//routes
app.use('/api', require('./src/routes'))

app.listen(process.env.PORT || 3001);