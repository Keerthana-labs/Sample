const cds = require('@sap/cds');
module.exports=cds.service.impl(async function () {
    const {hospital} = this.entities;

    this.on('READ',hospital,async(req)=>{
        console.log(cds.context)
        return await SELECT.from(hos)
    })
})
