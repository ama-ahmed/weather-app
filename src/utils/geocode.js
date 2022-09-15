const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )} 
    .json?access_token=pk.eyJ1IjoiYWhtZWQ5OTc5OCIsImEiOiJjbDcxNWMwb3Qwa21sM3BzOTlzbDJmZDZsIn0.rNWImh5DO2K-7Zd7Y9hbyg&limit=1`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Network issue!", undefined);
    } else if (!body.features.length) {
      callback("Wrong location", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
