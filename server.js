const express = require("express");
const app = express();
const home_routes = require('./routes/homepage');

app.use('/', home_routes);
app.listen("5000");