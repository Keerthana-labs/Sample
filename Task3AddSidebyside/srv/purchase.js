const cds=require('@sap/cds')
module.exports=cds.service.impl(async function(){

    const{output1,output2}=this.entities;
    const s4=await cds.connect.to('API_PURCHASECONTRACT_PROCESS_SRV_0002')

 this.on('READ',output1,async(req)=>{
  console.log(req.query);
    const  purchaseContract=await s4.run(req.query)
    return purchaseContract
  })

 
this.on('READ',output2,async(req)=>{
 
  const  purchaseContract=await s4.run(req.query)
  console.log(purchaseContract)
        await UPSERT.into(output2).entries(purchaseContract);
        return purchaseContract;
 
  })

})