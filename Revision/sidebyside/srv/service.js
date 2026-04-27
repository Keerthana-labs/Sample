const cds = require('@sap/cds');

module.exports=cds.service.impl(async function () {
    const s4 = await cds.connect.to('API_BUS_SOLUTION_ORDER_SRV');

    this.on('READ','project', async(req)=>{
        return await s4.run(req.query);
    })

    this.on('READ','Language', async(req)=>{
        return await s4.run(req.query);
    })

    this.on('READ','BusSolnOrdDescription', async(req)=>{
        return await s4.run(req.query);
    })

    this.on('READ','PaymentTerms', async(req)=>{
        return await s4.run(req.query);
    })


})

//npm i @sap-cloud-sdk/connectivity npm i @sap-cloud-sdk/http-client npm i @sap-cloud-sdk/resilience 