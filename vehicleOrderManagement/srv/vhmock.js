const cds = require('@sap/cds');
// const {INSERT,SELECT,UPDATE,DELETE} = require('@sap/cds/lib/ql/cds-ql');
module.exports=cds.service.impl(async function () {
    // const {Vehicle, Dealer, Order, OrderLineItem, Stock, State} = this.entities;

//---------------BEFORE HOOKS----------------------
//1.VEHICLE
this.before('CREATE','Vehicle',(req)=>{
    const {VehicleId, CurrentPrice,ModelName} = req.data;
    console.log("It will creating vehicle...");

    if(!VehicleId)
        req.error("VehicleId is required. Please give the vehicleID");

    if(CurrentPrice<0)
        req.error(" Current Price cannot be negative value...");

    if(!ModelName)
        req.error("ModelName is required....")
})

this.before('UPDATE','Vehicle',(req)=>{
    const {CurrentPrice} = req.data;
    console.log("Updating Vehicle...");
    
    if(CurrentPrice<0)
        req.error(" Current Price cannot be negative value...");
})

this.before('DELETE','Vehicle',(req)=>{
    if(!req.data.VehicleId)
        req.error("Vehicle ID required for delete. Please give the valid Vehicle ID");
})

//2.DEALER
this.before('CREATE', 'Dealer', (req) => {
    const { DealerId, Dealername, PhoneNumber } = req.data;
    console.log("Creating Dealer...");
    
    if (!DealerId)
        req.error("Dealer ID required.");

    if (!Dealername)
        req.error("Dealer name required.");

    if (PhoneNumber && PhoneNumber.length !== 10)
        req.error("Phone number must be 10 digits");
});

this.before('UPDATE', 'Dealer', (req) => {
    const { PhoneNumber } = req.data;
    console.log("Updating Dealer...");
    
    if (PhoneNumber && PhoneNumber.length !== 10)
        req.error("Phone number must be 10 digits");
});

//3.ORDER
this.before('CREATE', 'Order', (req) => {
    const { OrderId, Quantity } = req.data;
    console.log("Creating Order...");
    
    if (!OrderId)
        req.error("Order ID required");

    if (!Quantity || Number(Quantity) <= 0)
        req.error("Quantity must be greater than zero");
});
    
this.before('UPDATE', 'Order', (req) => {
    const { Quantity } = req.data;
    console.log("Updating Order...");

    if (Quantity && Number(Quantity) <= 0)
        req.error("Quantity must be greater than zero");
});


//4.STATE
this.before('CREATE', 'State', (req) => {
    const { StateId, StateCode, TaxRate } = req.data;
    console.log("Creating State...");

    if (!StateId)
        req.error("State ID required");

    if (!StateCode)
        req.error("State code required");

    if (TaxRate < 0)
        req.error("TaxRate cannot be negative");
});

this.before('UPDATE', 'State', (req) => {
    const { TaxRate } = req.data;
    console.log("Updating State...");
    
    if (TaxRate < 0)
        req.error("TaxRate cannot be negative");
});


//5.OREDR LINE ITEM
this.before('CREATE', 'OrderLineItem', (req) => {
    const { TotalPrice } = req.data;
    console.log("Creating OrderLineItem...");

    if (TotalPrice <= 0)
        req.error("Total price must be greater than zero");
});


//6.STOCK
this.before('CREATE', 'Stock', (req) => {
    const { StockId, QuantityAvailable } = req.data;
    console.log("Creating Stock...");

    if (!StockId)
        req.error("Stock ID required");

    if (QuantityAvailable < 0)
        req.error("Quantity cannot be negative");
});

this.before('UPDATE', 'Stock', (req) => {
    const { QuantityAvailable } = req.data;
    console.log("Updating Stock...");

    if (QuantityAvailable < 0)
        req.error("Quantity cannot be negative");
});





//-------------ON HOOKS---------------
//1.VEHICLE
this.on('CREATE', 'Vehicle', async (req) => {
    console.log("Vehicle CREATE triggered");
    return await INSERT.into(Vehicle).entries(req.data);
});

this.on('UPDATE', 'Vehicle', async (req) => {
    const { VehicleId, CurrentPrice } = req.data;
    console.log("Vehicle UPDATE triggered");

    const vehicleData = await SELECT.one.from(Vehicle).where({ VehicleId });

    if (!vehicleData)
        req.error("Vehicle not found");

    const oldPrice = vehicleData.CurrentPrice;
    await UPDATE(Vehicle).set({ CurrentPrice: CurrentPrice, OldPrice: oldPrice }).where({ VehicleId });
    
    return await SELECT.one.from(Vehicle).where({ VehicleId });
});



this.on('DELETE', 'Vehicle', async (req) => {
    const { VehicleId } = req.data;
    console.log("Vehicle DELETE triggered");

    await DELETE.from(Vehicle).where({ VehicleId });
});


//Dealer

this.on('CREATE', 'Dealer', async (req, next)=>{
 
        const Service = await cds.connect.to('GeoMap');
        //console.log("Inside the Dealer");
       
 
        const details = await getDealersByLocation(Service, req.data);
        console.log("Please don't give any error")
        console.log("details:",details);
        console.log("details.latitude",details.latitude)
        req.data.Latitude = details.latitude;
        req.data.Longitude = details.longitude;
       console.log("After fetching the details : ",req.data);
        console.log("details :" ,details);
        console.log("latitude :" ,details.latitude);
       
 
       /*  req.data.Latitude = details.value[0].lat;
        console.log(req.data.latitude);
        req.data.Longitude = details.value[0].lon; */
  
        console.log("all data : ", req.data);
       
       
       
        console.log("after function");
 
        await next();
        //const insertdata = await INSERT.into(Dealers).entries(req.data);
        //console.log(insertdata);
       
        //return details;
    })
 
    async function getDealersByLocation(Service, dealer){
 
        try{
            console.log('inside try');
 
            console.log(dealer.dealer_HouseNo);
            console.log("OData Path :" , `/odata/v4/location/GetAddressLatLog?doorNo=${encodeURIComponent(dealer.DoorNo)}&street=${encodeURIComponent(dealer.Street)}&area=${encodeURIComponent(dealer.Area)}&state=${encodeURIComponent(dealer.State)}&country=${encodeURIComponent(dealer.Country)}&pincode=${encodeURIComponent(dealer.Pincode)}`);
           
 
            const res = await Service.send({
                method: 'GET',
                path : `/odata/v4/location/GetAddressLatLog?doorNo=${encodeURIComponent(dealer.DoorNo)}&street=${encodeURIComponent(dealer.Street)}&area=${encodeURIComponent(dealer.Area)}&state=${encodeURIComponent(dealer.State)}&country=${encodeURIComponent(dealer.Country)}&pincode='${encodeURIComponent(dealer.Pincode)}'`
            });
 
            console.log('after fetch the data');
            console.log("Result :", res);
 
            // if (res.value && res.value.length > 0) {
            //         dealer.latitude = res.value.lat;
            //         dealer.longitude = res.value.lon;
            //     }
 
            return res;
        }catch(err){
            console.log("Error", err.message);
           
            return dealer;
        }
 
    }
 

// UPDATE Dealer (Refresh Address if Pincode Changes)

    this.on('UPDATE', 'Dealer', async (req) => {

        console.log("Dealer UPDATE triggered");

        const { DealerId, Pincode } = req.data;
        let data = req.data;

        // Re-fetch location if pincode updated
        if (Pincode) {
            const res = await location.get(`/odata/v4/location/GetLocationListbyPincode eq '${Pincode}'`);
            const addressData = res.value || res;

            if (addressData.length > 0) {
                const loc = addressData[0];

                data.City = loc.City;
                data.StateName = loc.StateName;
                data.Address = loc.Address;
                data.DoorNo = loc.DoorNo;
            }
        }

        await UPDATE(Dealer).set(data).where({ DealerId });

        return await SELECT.one.from(Dealer).where({ DealerId });
    });

    // DELETE Dealer
    
    this.on('DELETE', 'Dealer', async (req) => {

        console.log("Dealer delete operation started");

        const { DealerId } = req.data;

        await DELETE.from(Dealer).where({ DealerId });

        return { message: "Dealer deleted successfully" };
    });



//3.ORDER
this.on('CREATE', 'Order', async (req) => {
    console.log("Order CREATE triggered");
    return await INSERT.into(Order).entries(req.data);
});

this.on('UPDATE', 'Order', async (req) => {
    const { OrderId } = req.data;
    console.log("Order UPDATE triggered");

    await UPDATE(Order).set(req.data).where({ OrderId });

    return await SELECT.one.from(Order).where({ OrderId });
});
this.on('DELETE', 'Order', async (req) => {
    const { OrderId } = req.data;
    console.log("Order DELETE triggered");

    await DELETE.from(Order).where({ OrderId });
});


//4.STATE

this.on('CREATE', 'State', async (req) => {
    console.log("State CREATE triggered");
    return await INSERT.into(State).entries(req.data);
});

this.on('UPDATE', 'State', async (req) => {
    const { StateId } = req.data;
    console.log("State UPDATE triggered");

    await UPDATE(State).set(req.data).where({ StateId });

    return await SELECT.one.from(State).where({ StateId });
});

this.on('DELETE', 'State', async (req) => {
    const { StateId } = req.data;
    console.log("State delete operation started");

    await DELETE.from(State).where({ StateId });
});




//5.ORDER LINE ITEM

this.on('CREATE', 'OrderLineItem', async (req) => {

const { order_Orderid, vehicle_Vehicleid, dealer_Dealerid } = req.data;

//---->(i.)Get the dealer data
const DealerDetails = await SELECT.one.from('Dealer').columns('Dealerid', 'state_Stateid').where({ Dealerid: dealer_Dealerid });
const stateID = DealerDetails.state_Stateid;

//---->(ii.) Get the state data
const StateDetails = await SELECT.one.from('State').columns('Statecode', 'Tax').where({ Stateid: stateID });
const stateCode = StateDetails.Statecode;
const tax = Number(StateDetails.Tax);

//---->(iii.) Get the order quantity
const OrderDetails = await SELECT.one.from('Order').columns('Quantity').where({ Orderid: order_Orderid });
const quantity = OrderDetails.Quantity;

//---->(iv.) Get the vehicle price
const VehicleDetails = await SELECT.one.from('Vehicle').columns('CurrentPrice').where({ Vehicleid: vehicle_Vehicleid });
const CurrentPrice = Number(VehicleDetails.CurrentPrice);

const startingNumber = Math.floor(Math.random() * 10000);

const orderLineItems = [];

for (let i = 0; i < quantity; i++) {

    const id = `${stateCode}-${startingNumber + i}`;

    const taxAmount = (CurrentPrice + tax);
    const totalPrice = CurrentPrice + taxAmount;

orderLineItems.push({
     Orderlineitemid: id,
     TotalPrice: totalPrice,
     order_Orderid,
     vehicle_Vehicleid,
     dealer_Dealerid
    });

}

await INSERT.into('OrderLineItem').entries(orderLineItems);
return orderLineItems;

});




this.on('UPDATE', 'OrderLineItem', async (req) => {
    const { Orderlineitemid } = req.data;
    console.log("OrderLineItem UPDATE triggered");

    await UPDATE(OrderLineItem).set(req.data).where({ Orderlineitemid });

    return await SELECT.one.from(OrderLineItem).where({ Orderlineitemid });
});

this.on('DELETE', 'OrderLineItem', async (req) => {
    const { Orderlineitemid } = req.data;
    console.log("OrderLineItem deletion started");

    await DELETE.from(OrderLineItem).where({ Orderlineitemid });
});


//6.STOCK

this.on('CREATE', 'Stock', async (req) => {
    console.log("Stock CREATE triggered");

    return await INSERT.into(Stock).entries(req.data);
});

this.on('UPDATE', 'Stock', async (req) => {
    const { StockId } = req.data;
    console.log("Stock UPDATE triggered");

    await UPDATE(Stock).set(req.data).where({ StockId });

    return await SELECT.one.from(Stock).where({ StockId });
});

this.on('DELETE', 'Stock', async (req) => {
    const { StockId } = req.data;
    console.log("Stock delete operation started");

    await DELETE.from(Stock).where({ StockId });
});

});























