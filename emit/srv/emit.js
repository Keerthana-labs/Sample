const cds = require('@sap/cds');
module.exports=cds.service.impl(async function () {
    const {hos} = this.entities;

   

        this.on('updateLocation',async(req)=>{
            const {ID,Location,Rating} = req.data;
            await UPDATE(hos).set({Location:Location}).where({ID:ID})
            const data = await SELECT.from(hos).where({ID:ID})
            console.log(data)
            // const senddata=await this.send({event:'updateRating',data:{ID:ID,Rating:Rating}})
            const senddata=await this.emit({event:'updateRating',data:{ID:ID,Rating:Rating}})
            // return senddata
            console.log(senddata)
        })

        this.on('updateRating',async(req)=>{
            const{ID,Rating}=req.data;
            await UPDATE(hos).set({Rating:Rating}).where({ID:ID})
            const data = await SELECT.from(hos).where({ID:ID})
            console.log(data)
            console.log("Rating updated successfully")
            return data;
        })
    })