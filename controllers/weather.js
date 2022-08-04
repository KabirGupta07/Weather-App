const weather = require('../utils/weather');

exports.getWeatherByCity = (req, res,next) => {
    const location = req.body.location;
    // console.log(location);
    weather.weatherDataByCity(location)
        .then((data) => {
            // console.log(data);
            const main = data.main; 
            const name =  data.name;
            const weather = data.weather[0];
            const coord = data.coord;
            res.render('weather-details',{
                pageTitle: name,
                main: main,
                weather: weather,
                location: name,
                coord: coord
            });
        })
        .catch((err) => {
            console.log(err);
        });
    
}; 

exports.getWeatherByLocation = (req, res,next) => {
    const location = req.body.latitude;
    const longitude = req.body.longitude;
    // console.log(req.body);
    weather.weatherDataByLocation(location, longitude)
        .then((data) => {
            // console.log(data);
            const main = data.main; 
            const name =  data.name;
            const weather = data.weather[0];
            const coord = data.coord;
            res.render('weather-details',{
                pageTitle: name,
                main: main,
                weather: weather,
                location: name,
                coord: coord
            });
        })
        .catch((err) => {
            console.log(err);
        });
    
}; 

exports.searchForLocation = (req, res, next ) =>{
    res.render('../views/Search',{
        pageTitle: "WEATHER APP",
    })
};

