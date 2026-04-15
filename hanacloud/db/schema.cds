namespace hanacloud.db;

entity hospital{
    key id : String;
        name : String;
        location: String;
        hospital_type: String;
        contact: String;
        doctor: Association to doctor;
        
}

entity doctor{
    key id: String;
        name:String;
        department: String;
        address:String;

}
       