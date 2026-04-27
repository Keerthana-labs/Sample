const cds = require('@sap/cds');
const axios = require('axios');


module.exports = cds.service.impl(function () {

  this.on('getPlaceList', async (req) => {
    const District = req.data.District;

    try {
      const url = `http://api.geonames.org/searchJSON?q=${District}&featureCode=PPL&type=json&username=Keeri`;

      const response = await fetch(url);
      const data = await response.json();

      if (!data.geonames || data.geonames.length === 0) {
        return req.error(404, `No places found in district ${District}`);
      }

      const placeList = data.geonames.map(place => ({
        placeName: place.name,
        lat: place.lat,
        lng: place.lng
      }));

      return placeList;

    } catch (err) {
      console.error(err);
      return req.error(500, 'Failed to fetch places');
    }
  });

});