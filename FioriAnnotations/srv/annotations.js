const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {

  const { Patients, Doctor } = this.entities;

  this.on('updatePatientName', async (req) => {
    const { ID, name } = req.data;
    await UPDATE(Patients).set({ name }).where({ ID });
    return 'Patient name updated';
  });

  this.on('updateDoctorName', async (req) => {
    const { ID, name } = req.data;
    await UPDATE(Doctor).set({ name }).where({ ID });
    return 'Doctor name updated';
  });

  this.on('assignPatientToHospital', async (req) => {
    const { patientID, hospitalID } = req.data;
    await UPDATE(Patients).set({ hospitalID }).where({ ID: patientID });
    return 'Patient assigned to hospital';
  });

  this.on('getPatientCount', async (req) => {
    const { hospitalID } = req.data;
    const result = await SELECT.from(Patients).where({ hospitalID });
    return result.length;
  });

  this.on('getTeacherCount', async (req) => {
    const { hospitalID } = req.data;
    const result = await SELECT.from(Teachers).where({ hospitalID });
    return result.length;
  });

});