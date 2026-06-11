const cds = require('@sap/cds');
const { SELECT, where } = require('@sap/cds/lib/ql/cds-ql');
module.exports = cds.service.impl(async function () {
    const {teach,stud} = this.entities;

   /*  this.on('READ',teach,async(req)=>{
        const vehicle = await SELECT.from(teach).where({Salary:{'>=':20000}})
        return vehicle
    }) */

    //like operator
  /*   this.on('READ',teach,async(req)=>{
        const like = await SELECT.from(teach).where({Name:{'like':'A%'}})
        return like 
    }) */

    //and 

  /*   this.on('READ',teach, async(req)=>{
        const and = await SELECT.from(teach).where({Salary:{'=':10000},Name:{'=':'Arun Kumar'}})
        return and 
    }) */

    //or
/*       this.on('READ',teach, async(req)=>{
        const and = await SELECT.from(teach).where(`Salary=10000 or Name='Meena Devi'`)
        return and 
    }) */
    
    //not 
  /*   this.on('READ',teach,async(req)=>{
        const not = await SELECT.from(teach).where({Name:{'!=':'Arun Kumar'}})
        return not
    }) */

    //between
   /*  this.on('READ',teach,async(req)=>{
        const between = await SELECT.from(teach).where(`Salary BETWEEN 10000 AND 40000`)
        return between
    }) */

    //in
   /*  this.on('READ',teach,async(req)=>{
        const inOPP = await SELECT.from(teach).where({Name:{'in':['Meena Devi','Arun Kumar']}});
        return inOPP
    }) */

    //aggregation
  /*   this.on('READ',teach,async(req)=>{
      const data = await SELECT.from(teach).columns({func : 'count', args: ['*'], as : 'total'});
      return data
    }) */

    //min salary
 /*  this.on('READ',teach,async(req)=>{
    const data =  await SELECT.from(teach).columns('min(Salary) as maximumsalary')
    return data;
}) */

//Average
this.on('READ',teach,async(req)=>{   
    const avg = SELECT.from(teach).columns(`avg(Salary) as averageSalary`)
    return avg;
})


   
    

// 'S%' --> starts with
// '%an%' --> Middle 
// '%k' --> ends with

})
