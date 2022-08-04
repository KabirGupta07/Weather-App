const WeatherRoute = require('./routes/weather');
const ErrorController  = require('./controllers/error');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(WeatherRoute);
app.use(ErrorController.get404);

app.listen(3000);
