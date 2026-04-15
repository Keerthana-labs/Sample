const cds = require('@sap/cds');
const axios = require('axios');

module.exports = cds.service.impl(function () {

this.on('GetLocation', async (req) => {
const pincode = req.data.pincode;
if (!pincode) {
      return req.error('Pincode is required');
    }
    try {
      const response = await axios.get('https://nominatim.openstreetmap.org/search',{
          params: {format: 'json',q: pincode},
          headers: {'User-Agent': 'cap-app'}
      }
);

const data = response.data;
if (!data || data.length === 0) {
    return req.error('Invalid pincode');
}
const location = data[0];
  return {
        pincode: pincode,
        latitude: location.lat,
        longitude: location.lon,
        place: location.display_name
      };
    } 
    catch (error) {
      console.error(error);
      return req.error('Error fetching data');
    }

  });

});