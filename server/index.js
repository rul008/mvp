require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const express = require('express');
const path = require('path');
const router = require('./route');

const app = express();
const logger = require('./middleware/logger');

// Serves up all static and generated assets in ../client/dist.

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// middleware
app.use(morgan('tiny'));
app.use(cors());

// Add a middleware to log HTTP requests
app.use(logger);
app.use('/api', router);
module.exports = app;
// Set up routes
