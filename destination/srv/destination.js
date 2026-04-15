const cds = require('@sap/cds');
const axios = require('axios');

module.exports = cds.service.impl(async function () {

    const { Bank } = this.entities;

    /* //create handler
    this.on('CREATE', 'Bank', async (req, next) => {

        try {
            console.log("Incoming Data:", req.data);

            // Connect to external service
            const Service = await cds.connect.to('BankAPI');

            // Fetch details using pincode
            const details = await getBankDetailsByPincode(Service, req.data);

            console.log("Fetched Details:", details);

            if (details && details.value && details.value.length > 0) {
                req.data.City = details.value[0].city;
                req.data.State = details.value[0].state;
            } else {
                console.log("No data found for given pincode");
            }

            console.log("Final Data Before Insert:", req.data);

            await next();

        } catch (error) {
            console.error("Error in CREATE handler:", error.message);
            req.error(500, "Error processing bank data");
        }

    });

    //here I call the external API (function)
    async function getBankDetailsByPincode(Service, bank) {

        try {
            console.log("Inside getBankDetailsByPincode");

            if (!bank.Pincode) {
                console.log("Pincode is missing");
                return null;
            }

            const path = `/odata/v4/location/GetAddressByPincode?pincode=${encodeURIComponent(bank.Pincode)}`;

            console.log("Calling API:", path);

            const res = await Service.send({
                method: 'GET',
                path: path
            });

            console.log("API Response:", res);

            return res;

        } catch (err) {
            console.error("Error fetching bank details:", err.message);
            return null;
        }
    }
 */

//getPlacebyPincode
this.on('GetPlaceList', async (req) => {
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

});