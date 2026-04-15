const cds = require('@sap/cds');
module.exports = cds.service.impl(function () {
const { Emp, Dept } = this.entities;

// Before CREATE Employee
  this.before('CREATE', Emp, (req) => {
    if (!req.data.name) {
      req.error(400, 'Employee name is required');
    }
  });

// Before UPDATE Department
  this.before('UPDATE', Dept, (req) => {
    if (req.data.budget && req.data.budget < 0) {
      req.error(400, 'Budget cannot be negative');
    }
  });

 // FUNCTION: Get Employee Count
this.on('getEmployeeCount', async (req) => {

    const empID = req.params[0].ID;

    const employees = await SELECT.from('schema.db.Employee')
      .where({ ID: empID });

    return employees.length;
  });

 // FUNCTION: Get Employee By ID

 this.on('getEmployeeById', async (req) => {

    const empID = req.data.ID || req.params[0].ID;

    const emp = await SELECT.one.from('schema.db.Employee')
      .where({ ID: empID });

    if (!emp) {
      req.error(404, 'Employee not found');
    }

    return emp;
  });

 // ACTION: GIVE BONUS (INCREMENT)
this.on('giveBonus', async (req) => {

  const empID = req.params[0].ID;
  const bonus = Number(req.data.bonus);

  const emp = await SELECT.one.from('schema.db.Employee')
    .where({ ID: empID });

  if (!emp) {
    req.error(404, 'Employee not found');
  }

  const newSalary = Number(emp.Salary) + bonus;

  await UPDATE('schema.db.Employee')
    .set({ Salary: newSalary })
    .where({ ID: empID });

  return {
    Salary: newSalary
  };
});



// ACTION: DELETE EMPLOYEE
  
this.on('deleteEmployee', async (req) => {

    const empID = req.params[0].ID;

    const emp = await SELECT.one.from('schema.db.Employee')
      .where({ ID: empID });

    if (!emp) {
      req.error(404, 'Employee not found');
    }

    await DELETE.from('schema.db.Employee')
      .where({ ID: empID });

    return `Employee ${empID} deleted successfully`;
  });

});