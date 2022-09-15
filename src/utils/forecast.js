const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=18d0b747c0c3cdf8374c07b3423e40d6&query=${latitude},${longitude}&units=f`;

  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback("Network issue!", undefined);
    } else if (body.error) {
      callback("Wrong location", undefined);
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]} .It is currently ${body.current.temperature} degress out. It feels like ${body.current.feelslike} degress out. The humidity is ${body.current.humidity}%.`
      );
    }
  });
};

module.exports = forecast;
