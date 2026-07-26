const cds = require('@sap/cds');
module.exports=cds.service.impl(async function () {
    const {dept,emp} = this.entities;

    this.on('READ',dept,async(req)=>{
        const dept = await SELECT.from(dept).where({ID:req.data.ID})
        return dept 
    })
})