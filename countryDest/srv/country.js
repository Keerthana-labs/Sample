const cds = require('@sap/cds');
const axios = require('axios');

module.exports=cds.service.impl(async function () {
    

this.on('getPlaceList', async (req) => {
  const District = req.data.District; 
  try {
    const placeSearchUrl = `http://api.geonames.org/searchJSON?q=${District}&featureCode=PPL&type=json&username=Keeri`;
    const placeSearchResp = await fetch(placeSearchUrl);
    const placeSearchData = await placeSearchResp.json();

    if (!placeSearchData.geonames || placeSearchData.geonames.length === 0) {
      return req.error(404, `No places found in district ${District}`);
    }

    const placeList = placeSearchData.geonames.map(place => ({
      placeName: place.name,
      lat: place.lat,
      lng: place.lng,
        
    }));

    return placeList;

  } catch (err) {
    console.error('Error fetching places:', err);
    return req.error(500, 'Failed to fetch places from GeoNames API');
  }
});

 
})