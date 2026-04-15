const cds =require('@sap/cds') 

module.exports=cds.service.impl(async function () {
  
    const {A_MaintenanceItemObjList} = this.entities;

    const s4 = await cds.connect.to('API_INBOUND_DELIVERY_SRV_0002');
    //cds.connect.to----->It'll check the package.json whether there is any key value for it.

    this.on('READ',A_MaintenanceItemObjList,async(req)=>{

         console.log(req.query)

         const businessPartner=await s4.run(req.query)

         console.log(businessPartner)

         return businessPartner;

    })


})