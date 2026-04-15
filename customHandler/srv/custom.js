const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {

    const {emp} = this.entities;

    console.log(emp);

    this.on ('getAnnualSalary',async(req)=>{
        const {id} = req.data;

        if (!id) req.error('employee id is missing');

        const emp = await SELECT.from(emp).where({id:id})

       return emp.salary*10;
        
    }
     ) 
    this.on ('getEmployee',async(req)=>{
        const {name} = req.data;

        if (!name) req.error("Employee name is missing");

    })

    
    })

