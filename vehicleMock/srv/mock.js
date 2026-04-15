const cds = require('@sap/cds');
const { DELETE, SELECT, INSERT, UPDATE } = require('@sap/cds/lib/ql/cds-ql');
module.exports=cds.service.impl(async function(){
  const { Vehicle, Dealer, Order, LineItem, Stock, State} = this.entities;


//------------------ON Hooks--------------------- 

 // ---------------- VEHICLE ----------------
    this.on('CREATE', 'Vehicle', async (req) => {
        await INSERT.into('Vehicle').entries(req.data);
        return req.data;
    });

    this.on('UPDATE', 'Vehicle', async (req) => {
        await UPDATE('Vehicle').set(req.data).where({ VehicleId: req.data.VehicleId });
        return req.data;
    });

    this.on('DELETE', 'Vehicle', async (req) => {
        await DELETE.from('Vehicle').where({ VehicleId: req.data.VehicleId });
        return { VehicleId: req.data.VehicleId };
    });



    // ---------------- DEALER ----------------
    this.on('CREATE', 'Dealer', async (req) => {
        await INSERT.into('Dealer').entries(req.data);
        return req.data;
    });

    this.on('UPDATE', 'Dealer', async (req) => {
        await UPDATE('Dealer').set(req.data).where({ DealerId: req.data.DealerId });
        return req.data;
    });

    this.on('DELETE', 'Dealer', async (req) => {
        await DELETE.from('Dealer').where({ DealerId: req.data.DealerId });
        return { DealerId: req.data.DealerId };
    });

    



    // ---------------- ORDER ----------------
    this.on('CREATE', 'Order', async (req) => {
        await INSERT.into('Order').entries(req.data);
        return req.data;
    });

    this.on('UPDATE', 'Order', async (req) => {
        await UPDATE('Order').set(req.data).where({ OrderId: req.data.OrderId });
        return req.data;
    });

    this.on('DELETE', 'Order', async (req) => {
        await DELETE.from('Order').where({ OrderId: req.data.OrderId });
        return { OrderId: req.data.OrderId };
    });



    // ---------------- STATE ----------------
    this.on('CREATE', 'State', async (req) => {
        await INSERT.into('State').entries(req.data);
        return req.data;

    });

    this.on('UPDATE', 'State', async (req) => {
        await UPDATE('State').set(req.data).where({ StateId: req.data.StateId });
        return req.data;
    });

    this.on('DELETE', 'State', async (req) => {
        await DELETE.from('State').where({ StateId: req.data.StateId });
        return { StateId: req.data.StateId };
        

    });



    // ---------------- STOCK ----------------
    this.on('CREATE', 'Stock', async (req) => {
        await INSERT.into('Stock').entries(req.data);
        return req.data;
    });

    this.on('UPDATE', 'Stock', async (req) => {
        await UPDATE('Stock').set(req.data).where({ StockId: req.data.StockId });
        return req.data;
    });

    this.on('DELETE', 'Stock', async (req) => {
        await DELETE.from('Stock').where({ StockId: req.data.StockId });
        return { StockId: req.data.StockId };
    });



    // ---------------- ORDER LINE ITEM ----------------
    this.on('CREATE', 'OrderLineItem', async (req) => {
        await INSERT.into('OrderLineItem').entries(req.data);
        return req.data;
    });

    this.on('UPDATE', 'OrderLineItem', async (req) => {
        await UPDATE('OrderLineItem').set(req.data).where({ Orderlineitemid: req.data.Orderlineitemid });
        return req.data;
    });

    this.on('DELETE', 'OrderLineItem', async (req) => {
        await DELETE.from('OrderLineItem').where({ Orderlineitemid: req.data.Orderlineitemid });
        return { Orderlineitemid: req.data.Orderlineitemid };
    });





//-----------------BEFORE HOOKS---------------

 // 1. VEHICLE
    this.before('CREATE', 'Vehicle', (req) => {
        const data = req.data;
        if (!data.Modelname) {
            req.error("Model name is required");
        }
    });

// It Perform the update with Oldprice = previous Newprice
  await UPDATE(Vehicle).set({OldPrice: vehicleData.CurrentPrice,
    CurrentPrice: currentPrice
    
    })
    .where({ Vehicleid });
    console.log("currentPrice updated")
    
  // Return updated record
  return await SELECT.one.from(Vehicle).where({ VehicleId });






    // 2. DEALER
    this.before('CREATE', 'Dealer', (req) => {
        const data = req.data;
        console.log("Dealer CREATE:", data);

        if (!data.Dealername) {
            req.error("Dealer name required");
          
        }
    });

    
    // 3. ORDER
    this.before('CREATE', 'Order', (req) => {
        const data = req.data;
        console.log("Order CREATE:", data);

        if (!data.Quantity) {
            req.error("Quantity required");
        }
    });
    
//4.State
    this.before('CREATE','Order',(req)=>{
        const data = req.data;
        console.log("Order CREATE:",data);

      if (!StateId){
        console.log ("State is required")
      }
    })

//5.Dealer
    this.before('CREATE','Order',(req)=>{
        const data = req.data;
        console.log ("Dealer is required")
    })

    this.before ('CREATE','Order',(req)=>{
        const data = req.data;
        console.log("Dealer id is required")
    })


//4. LineItem
this.before('CREATE','State',(req)=>{
    const data = req.data;
    console.log("State CREATE:",data);

    if(!StateId){
        req.error("StateId required")
    }
})

   


//------------AFTER HOOKS-------------
//1.VEHICLE
    this.after(['CREATE','UPDATE','DELETE'], 'Vehicle', () => {
        console.log("Vehicle operation successfully completed");
    });
//2. DEALER
    this.after(['CREATE','UPDATE','DELETE'],'Dealer',()=>{
        console.log("Dealer operation successfully completed")
    })
//3.ORDER
 this.after(['CREATE','UPDATE','DELETE'],'Order',()=>{
        console.log("Order operation successfully completed")
    })

//4.State 
 this.after(['CREATE','UPDATE','DELETE'],'State',()=>{
        console.log("State operation successfully completed")
    })
//5.OrderLineItem
this.after(['CREATE','UPDATE','DELETE'],'OrderLineItem',()=>{
        console.log("OrderLineItem operation successfully completed")
    })


//6.Stock
this.after(['CREATE','UPDATE','DELETE'],'Stock',()=>{
        console.log("Stock operation successfully completed")
    })

});




























