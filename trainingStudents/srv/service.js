const cds = require('@sap/cds'); 
const { version } = require('@sap/cds/lib/compile/cdsc');
const { INSERT } = require('@sap/cds/lib/ql/cds-ql');

module.exports=cds.service.impl(async function(){
    // this.before('READ')

// const {Students} = this.entities;
// this.on('READ',Students,(req)=>{
//     return "application run"
// })

//     const {Students} = this.entities;
//     this.before('CREATE', Students, (req)=>{
//         console.log("before operation has been triggered")

//         const {age} = req.data;

//         console.log(req.data);

//         if(age<18){
//             req.error('Student age is below 18');
//         }
//     })

// })


 const {Students} = this.entities;
    this.on('CREATE', Students, async (req)=>{
        console.log("on operation has been triggered")


        if(!req.data.id){
            req.data.id=cds.utils.uuid();
            req.data.email="amala@gmail.com"

        }
        console.log(req.data);
        const reqData = req.data;

        const insertoperation = await INSERT.into(Students).entries(reqData);
        console.log(insertoperation);
    })


    





    //select,update,insert,upsert(update+insert)

})

//hooks/events
//before,on and after