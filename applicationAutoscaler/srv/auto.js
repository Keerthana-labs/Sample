const cds = require('@sap/cds')
module.exports = cds.service.impl(async function () {
    const {teach,stud} = this.entities;

    this.on('READ',teach,async(req)=>{
        
    })
})