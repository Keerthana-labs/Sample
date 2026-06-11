namespace service.srv;

using { my.hospital as db } from '../db/schema';

service hospitalAPI {

    @odata.draft.enabled

    entity Hos  as projection on db.Hospital;
    entity Pat  as projection on db.Patient;
    entity Doc   as projection on db.Doctor;

    // Optional Actions

    action updatePatientName(ID   : String,name : String) returns String;

    action updateTeacherName(ID   : String,name : String) returns String;

    action assignPatientToHospital(patientID  : String,hospitalID : String) returns String;

    function getPatientCount(hospitalID : String) returns Integer;

    function getTeacherCount(hospitalID : String) returns Integer;
}