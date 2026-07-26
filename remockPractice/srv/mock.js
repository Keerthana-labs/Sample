const cds = require('@sap/cds');
const { UPDATE } = require('@sap/cds/lib/ql/cds-ql');
module.exports=cds.service.impl(async function() {
    const {stud} = this.entities;

    this.on('updateAge',async(req)=>{
        return await UPDATE(stud).set({Age:req.data.Age}).where({ID:req.data.ID})
    })
})