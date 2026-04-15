const cds=require('@sap/cds');
const { SELECT, UPDATE } = require('@sap/cds/lib/ql/cds-ql');
module.exports=cds.service.impl(function(){
 
 
const { Vehicle, Dealer,Order} = this.entities;
//Vehicle
this.before('CREATE', 'Vehicle', async (req) => {
 
  const { Vehicleid, dealers_Dealerid } = req.data;
 
  const dealer = await SELECT.one.from(Dealer).where({ Dealerid: dealers_Dealerid });
 
  if (!dealer)
   return req.error( "Dealer not found");
 
  if (dealer.State === "TamilNadu") {
    req.data.Vehicleid = "TN-" + Vehicleid;
  }
  else if (dealer.State === "Karnataka") {
    req.data.Vehicleid = "KA-" + Vehicleid;
  }
 
   if(!Modelname)
    {
        req.error("Model name is required")
    }
 
        //find duplicate Modelname
     const existingModel = await SELECT.one.from('Vehicle')
        .where({ Modelname: Modelname });
 
    if (existingModel) {
        return req.error(`Model "${Modelname}" already exist`);
    }
   
});
 
 
   //Dealer
 
this.before('CREATE','Dealer',async(req)=>{
    const{Dealerid,Dealername,Location}=req.data
 
    if(!Dealerid)
    req.error("Dealerid is required.you cannot create without id")
if(!Dealername)
    req.error("Dealername is required")
if(!Location)
    req.error("Location is must")
})
// //Order
this.before('CREATE','Order',async(req)=>{
    const{Orderid,Quantity}=req.data;
    if(!Orderid)
    req.error("Orderid is must.you cannot create dealer without Orderid")
if(Quantity<=0)
  req.error("You cannot give the price as negative")
})
 
  //action  
    this.on('approveVehicle',async(req)=>{  
        const {Vehicleid}=req.data;
        const result=await SELECT.one.from(Vehicle).where({Vehicleid:Vehicleid});
        if(result.Status=="NA")
        {
            await UPDATE(Vehicle).set({Status:"Approved"}).where({Vehicleid:Vehicleid})
             return "Approved Successfully"
        }
    })
   //function
    //getTotalOrderValue
    this.on('getTotalOrderValue', async(req)=> {
        const {Vehicleid}=req.data;
       
        const vehicle=await SELECT.one.from(Vehicle).where({Vehicleid:Vehicleid});
        const order=await SELECT.one.from(Order).where({vehicles_Vehicleid:Vehicleid})
        console.log(vehicle);
        console.log(order);
       
       
    if(Vehicleid.startsWith('TN'))
{
   const tax=3000;
const price=vehicle.Price
       
        const quantity=Number(order.Quantity)
        console.log(quantity);
       
      const total=(price*quantity)+(tax*quantity)
      return total;
}
 
      else
      {
         const tax=2000;
      const price=vehicle.Price
 
        const quantity=Number(order.Quantity)
      const total=(price*quantity)+(tax*quantity)
      return total;
      }
   })
   
})