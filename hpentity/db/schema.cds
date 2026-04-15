namespace hpentity.db;

//one to one 
// entity hospital{
//     key id : String;
//         name : String;
//         location: String;
//         hospital_type: String;
//         contact: String;
//         doctor: Association to doctor;
        
// }

// entity doctor{
//     key id: String;
//         name:String;
//         department: String;
//         address:String;
       
// }

 
entity Hospital{
    key id : UUID;
        name : String;
        location: String;
        hospital_type: String;
        contact: String;
        departments:Composition of many Department on departments.hospital=$self;
}

entity Department{
    key id: UUID;
        name:String;
        no_of_doctors:Integer;
        no_of_nurse:Integer;
        hospital:Association to Hospital;
        nurse:Composition of Nurse;
        doctors:Composition of many Doctor on doctors.department=$self;
}

 
entity Doctor{
    key id: UUID;
        name:String;
        address:String; 
        hospital:Association to Hospital;
        patient:Association to many Patient on patient.doctor=$self;
        department:Association to Department;
        
}


entity Patient{
    key id:UUID;
        name:String;
        gender:String;
        age:String;
        bloodgroup:String;
        doctor:Association to Doctor;
        appointment:Association to  Appointment;
        Prescription:Association to Prescription;
        billing: Association to Billing;
        // nurse:Composition of many Nurse on nurse.patient=$self;
}

entity Appointment{
    key id:UUID;
        date:Date;
        time: Time;
        status:String;
        patient:Association to Patient;

}

entity Prescription{
    key id:UUID;
        date:Integer;
        diagnosis:String;
        dosage:String;
        medicine_name:String;
        patient:Association to Patient;
}



entity Billing{
    key id:UUID;
        amount:Integer;
        date:Integer;
        payment_mode:String;
        patient:Association  to Patient;
}


entity Ward{
    key id:UUID;
        type:String;
        availability_bed:String;
        total_bed:String;
        patient: Composition of  Patient;
}

entity Nurse{
    key id:UUID;
        name:String;
        contactNo:Integer;
        location:String;
        ShiftTime:Time;
        Expreience:String;
        // patient:Composition of many Patient on patient.nurse=$self;
        department:Composition of many Department on department.nurse=$self;
}

entity nursePatient{
        key id:UUID;
            patient:Association to Patient;
            nurse:Association to Nurse;
}





 