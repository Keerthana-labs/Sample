const cds = require('@sap/cds');
const { SELECT } = require('@sap/cds/lib/ql/cds-ql');

module.exports = cds.service.impl(async function () {

  const { cust, order } = this.entities;

/*   // Unbounded Action
  this.on('giveValidateEmail', async (req) => {
    const { ID } = req.data;

    if (!ID) return 'Invalid ID';

    const customer = await SELECT.one.from(cust).where({ ID });

    if (!customer)  return 'Customer not found';

    const email = customer.email;

    // Simple email validation
    const isValid = email && email.includes('@');

    return isValid ? 'Valid Email' : 'Invalid Email';
  }); */

 this.on('giveValidId', async (req) => {
  const { ID } = req.data;

  if (!ID) return "Invalid ID";

  const updated = await UPDATE('Customers').set({ PhoneNumber: '9999999999' }).where({ ID });

  if (updated === 0) return "Customer not found";

  return "Phone number updated successfully";
});

  // Unbounded Function
  this.on('giveTotalAmount', async (req) => {
    const { ID } = req.data;

    if (!ID) return 'Invalid ID';

    const orders = await SELECT.from(order).where({ customer_ID: ID });

    if (!orders.length) return '0';

    const total = orders.reduce((sum, o) => sum + (o.amount || 0), 0);

    return total.toString();
  });

});