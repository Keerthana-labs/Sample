const cds = require('@sap/cds');
module.exports=cds.service.impl(async function () {
    const {customer,order} = this.entities;

//ACTION
this.on('giveValidateEmail', async (req) => {
    const { ID } = req.data;
    const result = await SELECT.one.from(customer).where({ ID });


    if (!result) {
      req.error(404, 'Invalid Customer ID');
    }
    return result.email;
  });


  this.on('updateCustomer', async (req) => {

  const { ID, email, phone } = req.data;

  // 🔍 Validate ID exists
  const existing = await SELECT.one.from(customer).where({ ID });

  if (!existing) {
    req.error(404, 'Invalid Customer ID');
  }

  await UPDATE(customer)
    .set({
      email: email ?? existing.email,
      phone: phone ?? existing.phone
    })
    .where({ ID });

  return 'Updated';
});


this.on('deleteCustomer', async (req) => {

  const { ID } = req.data;

  // 🔍 Validate ID exists
  const existing = await SELECT.one.from(customer).where({ ID });

  if (!existing) {
    req.error(404, 'Invalid Customer ID');
  }

  await DELETE.from(customer).where({ ID });

  return 'Deleted';
});


 /*  this.on('updateCustomer', async (req) => {
    const { ID, email, phone } = req.data;

    await UPDATE(customer).set({ email, phone }).where({ ID });

    return 'Updated';
  });


  this.on('deleteCustomer', async (req) => {
    const { ID } = req.data;

    await DELETE.from(customer).where({ ID });

    return 'Deleted';
  }); */



//FUNCTION
this.on('giveTotalAmount', async (req) => {

  const { OrderID } = req.data;

  if (!OrderID) {
    req.error(400, 'OrderID is required');
  }

  const ord = await SELECT.one
    .from(this.entities.order)
    .where({ ID: OrderID });

  if (!ord) {
    req.error(404, 'Order not found');
  }

  const amount = parseFloat(ord.amount);
  const discountValue = parseFloat(ord.Discount); // ✅ from DB

  if (isNaN(discountValue) || discountValue < 0) {
    req.error(400, 'Invalid Discount in Order');
  }

  const finalAmount = amount - (amount * discountValue / 100);

  return finalAmount.toFixed(2);
});
    
})
