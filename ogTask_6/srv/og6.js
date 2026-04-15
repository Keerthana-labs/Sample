const cds = require('@sap/cds');
const axios = require('axios');

module.exports = cds.service.impl(function () {

//1.GET DISTRICT BY STATE

this.on('GetDistrictList', async (req) => {
  const stateName = req.data.stateName; 
  try {
    const stateSearchUrl = `http://api.geonames.org/searchJSON?q=${stateName}&maxRows=1&featureCode=ADM1&username=Keeri`;
    const stateSearchResp = await fetch(stateSearchUrl);
    const stateSearchData = await stateSearchResp.json();
 
    if (!stateSearchData.geonames || stateSearchData.geonames.length === 0) {
      return req.error(404, 'State not found');
    }
 
    const stateGeoId = stateSearchData.geonames[0].geonameId;
 
    const districtUrl = `http://api.geonames.org/childrenJSON?geonameId=${stateGeoId}&username=Keeri`;
    const districtResp = await fetch(districtUrl);
    const districtData = await districtResp.json();
 
    if (!districtData.geonames || districtData.geonames.length === 0) {
      return req.error(404, 'No districts found');
    }

 
    // Map GeoNames to CDS structure
    const districtList = districtData.geonames.map(dist => ({
      distName: dist.name,
      lat: dist.lat,
      lng: dist.lng,
      population: dist.population
    }));
 
    return districtList;
 
  } catch (err) {
    console.error('Error fetching districts:', err);
    return req.error(500, 'Failed to fetch districts');
  }
});


// 2. GetPlaceList by District
this.on('GetPlaceList', async (req) => {
  const District = req.data.District; 
  try {
    const placeSearchUrl = `http://api.geonames.org/searchJSON?q=${District}&featureCode=PPL&type=json&username=amala`;
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


  // 3. GET lOCATION LIST BY PINCODE
  this.on('GetLocationListbyPincode', async (req) => {
    const pincode = req.data.Pincode;

    if (!pincode) {
      return req.error('Pincode is required');
    }

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${pincode}`,
        {
          headers: { 'User-Agent': 'cap-app' }
        }
      );

      const data = await response.json();

      if (!data || data.length === 0) {
        return [];
      }

      return data.map(loc => ({
        place: loc.display_name,
        latitude: loc.lat,
        longitude: loc.lon
      }));

    } catch (error) {
      console.error(error);
      return req.error('Error fetching pincode data');
    }
  });


//4.GET LOCATION LIST BY PLACE
  this.on('GetLocationListbyPlace', async (req) => {
    const placeName = req.data.Place;
    if (!placeName) 
      return req.error(400, 'Place name is required');
 
    try {
        // Nominatim API 
        const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(placeName)}&format=json&countrycodes=IN&limit=10`;
        const response = await fetch(url, { headers: { 'User-Agent': 'cap-app' } });
        const data = await response.json();
 
        if (!data || data.length === 0) return req.error(404, 'No location found');

        const locations = data.map(loc => ({
            place: loc.display_name,
            latitude: loc.lat,
            longitude: loc.lon,
           }));
 
        return locations;
 
    } catch (err) {
        console.error(err);
        return req.error(500, 'Failed to fetch location');
    }
});

//5. GET ADDRESS WITH LAT AND LOG
this.on('GetAddressLatLog', async (req) => {
    const {
        doorNo,
        street,
        area,
        district,
        state,
        pincode,
        country
    } = req.data;
        
//Here I used validation part
    if (!street || !state || !country) {
        return req.error(400, "street, state and country are required");
    }

//Build full address
    const fullAddress = [
        doorNo,
        street,
        area,
        district,
        state,
        pincode,
        country
    ]
    .filter(Boolean)
    .join(', ');

    //Here I called the OpenStreetMap(Nominatim)
    try {
        const response = await axios.get(
            'https://nominatim.openstreetmap.org/search',
            {
                params: {
                    q: fullAddress,
                    format: 'json',
                    addressdetails: 1,
                    limit: 1
                },
                headers: {
                    'User-Agent': 'CAP-App'
                }
            }
        );
        if (!response.data || response.data.length === 0) {
            return req.error(404, "No location found for given address");
        }

        const loc = response.data[0];

        return {
            inputAddress: fullAddress,
            latitude: parseFloat(loc.lat),
            longitude: parseFloat(loc.lon),
            displayName: loc.display_name,

            //Optional more details used here
            doorNo: loc.address?.house_number || doorNo,
            street: loc.address?.road || street,
            area: loc.address?.suburb || area,
            district: loc.address?.county || district,
            state: loc.address?.state || state,
            country: loc.address?.country || country,
            pincode: loc.address?.postcode || pincode
        };

    } catch (error) {
        console.error("Error:", error.message);
        return req.error(500, "Failed to fetch location");
    }
});

});

