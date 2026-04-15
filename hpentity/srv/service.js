const cds=require('@sap/cds');
const { UPDATE,SELECT,DELETE } = require('@sap/cds/lib/ql/cds-ql');
module.exports=cds.service.impl(async function(){
    //1.Hospital(update on)
    const {hp} = this.entities;
    this.on('UPDATE',hp, async(req)=>{
        return await UPDATE(hp).set(req.data).where({id:req.data.id})
    })

    // const {hp}=this.entities;
    // this.on('')

    //2.Patient (read on)

    // const {dept}=this.entities;
    // this.on('READ',dept,async(req)=>{
    //     return await SELECT.from(dept);
    // })
    

})

