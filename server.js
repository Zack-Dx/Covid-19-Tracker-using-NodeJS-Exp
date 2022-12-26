const dotenv = require('dotenv').config();
const express = require('express');
const path = require('path');
const router = express.Router();
const { initRoutes } = require('./routes/web.js');
const app = express();
const port = process.env.PORT;

//Middlewares
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views'));
app.use(router);

// Router
initRoutes(router);
app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
