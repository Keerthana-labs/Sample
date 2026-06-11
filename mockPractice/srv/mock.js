const cds = require('@sap/cds');
const { UPDATE, INSERT, SELECT } = require('@sap/cds/lib/ql/cds-ql');     
module.exports=cds.service.impl(async function () {
    const {order} = this.entities;

/*    this.on('updateSalary',async(req)=>{
    const {ID,Salary} = req.data;

    const salary = await UPDATE(teach).set({Salary}).where({ID});
    return salary
   }) */

/*     this.on('READ',teach,async(req)=>{
        // const insert = await INSERT.into(teach).entries(req.data)
        // await SELECT.from(teach).where({})
        // await UPDATE(teach).set({Salary}).where({ID})
        // await DELETE.from(teach).where({ID:req.data.ID})
        const like = await SELECT.from(teach).where({Salary:{'>=':80000}})
        return like 
}) */

   this.on('updateStatus',async(req)=>{
    const status = await UPDATE(order).set({status}).where({ID})
    return status
    
   })
    
})