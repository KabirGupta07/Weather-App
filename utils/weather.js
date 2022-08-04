const constants = require('../config');
const axios = require('axios').default;

exports.weatherDataByCity = (address) => {
    // console.log(constants.openWeatherApi.BASE_URL);
    // console.log(constants.openWeatherApi.SECRET_KEY);
    const datapromise =
        axios(constants.openWeatherApi.BASE_URL, {
            params: {
                q: address,
                appid: constants.openWeatherApi.SECRET_KEY
            }
        })
        .then((res) => {
            return res.data
        })
    return datapromise;
}

exports.weatherDataByLocation= (latitude, longitude) =>{
    const datapromise =
        axios(constants.openWeatherApi.BASE_URL, {
            params: {
                lat: latitude,
                lon: longitude,
                appid: constants.openWeatherApi.SECRET_KEY
            }
        })
        .then((res) => {
            return res.data
        })
    return datapromise;
};
