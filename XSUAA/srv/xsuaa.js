const cds = require('@sap/cds');
module.exports=cds.service.impl(async function () {
    const {order} = this.entities;

    this.on('READ',order,async(req)=>{
        const app = await SELECT.from(order).where({ID:req.data.ID})
        return app
        
    })
})