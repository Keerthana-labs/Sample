const cds = require('@sap/cds');
const { SELECT, UPDATE, DELETE } = require('@sap/cds/lib/ql/cds-ql');

module.exports = cds.service.impl(function () {

  const { stud,teacher} = this.entities;
  
  this. before('CREATE', stud, async (req) => {
        console.log("Before Handler");
      
        const {Age}=req.data;
 
        if(Age <18) {
            req.data.Criticality = 1;
        }
        else if (Age > 18) {
            req.data.Criticality = 3;
        }
 
    })

    // ACTION: updateContact
    this.on('updateContact',async (req) => {
        const {ID,Contact} = req.data;
        await UPDATE(stud).set({Contact}).where({ID});
    })

      this.on('promoteStudent', async (req) => {
        const { ID,Department } = req.data;

      await UPDATE(stud).set({Department}).where({ ID });
});

    this.on('updateName', async (req)=>{
      const{ID,Name}=req.data;
      if(!ID)
      {
        req.error('Give correct ID');

        return;
      }
      await UPDATE(stud).set({Name}).where({ID});

      req.notify(`Name Updated Successfully`)
      // req.info(`Name Updated Successfully`)
    })

this.on('NewData', async (req) => {
        const { ID, Name, Department, Contact, Age } = req.data;

        await INSERT.into(stud).entries({
            ID,
            Name,
            Department,
            Contact,
            Age
        });

        return "Data created successfully";
    });

//Bound Action 

  this.on('updateStatus', async (req) => {

    // Get the ID from bound context
    const { ID } = req.params[0];

    await UPDATE('stud')
      .set({
        Status: 'UPDATED',
        Criticality: 'High'
      })
      .where({ ID });

    return await SELECT.one.from('stud').where({ ID });

  });

//criticality for status update
this.before('CREATE', teacher, async (req) => {
    const { Status } = req.data;
 
    if (Status === 'Active') {
        req.data.criticality = 3;
    } else if (Status === 'Inactive') {
        req.data.criticality = 1;
    } else if (Status === 'Promoted') {
        req.data.criticality = 2;
    }
});

this.on('getStudentCount',async(req)=>{
  const{Department} = req.data;
  console.log(Department);
  
  if(!Department){
    return req.data('Department is required');
  }

  const result = await SELECT.from(stud).where({Department});

  console.log(result);
  console.log(result.length);
  
  
  req.info(`result:${result.length}`)
  return;
});

//Rating ---> bound action
this.on('giveRating',async (req)=>{

  const rating = req.data.rating;
  console.log(rating);
  

  const studentID = req.params[0].ID;
  console.log(studentID);
  

  await UPDATE(stud).set({Rating:rating}).where({ID:studentID});

  return true;

});

//delete student 
/* this.on('deleteStudent',async (req)=>{
 
  const {studentID} = req.data;

  const result = await DELETE.from('stud').where({ID:studentID});

  return result;
}) */

});
