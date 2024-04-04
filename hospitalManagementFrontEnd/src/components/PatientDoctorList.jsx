import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {  getAllPatient } from './PatientService';
import { getAllAppointment } from './Booking';

const PatientDoctorList = () => {
  const [patients, setPatient] = useState([]);
  const navigate=useNavigate();
  useEffect(() => {
    listDoctor();
  }, []);
  const listDoctor = async () => {
    try {
      const response = await getAllAppointment();
      console.log(response.data);
      setPatient(response.data);
      console.log(patients);
    } catch (error) {
      console.error(error);
    }
  };
  const handlePrescription=(id)=>{
    navigate(`/addPrescription/${id}`);
  }
  return (
    <div className="container">
    <h2 className="text-center text-danger" style={{ padding: "2rem" }}>
      Patient's List
    </h2>
    <div>
      <table className="table table-bordered table-striped" style={{border: "2px striped rgb(165, 42, 42)"}}>
        <thead >
          <tr >
            <th className="text-center text-danger">Patient Id</th>
            <th className="text-center text-danger">Patient Name</th>
            <th className="text-center text-danger">Doctor Name</th>
            <th className="text-center text-danger">Appointment Date</th>
            <th className="text-center text-danger">Appointment Time</th>
            <th className="text-center text-danger">Email</th>
            <th className="text-center text-danger">Problem</th>
            <th className="text-center text-danger">Contact number</th>
            <th className="text-center text-danger">Age</th>
            <th className="text-center text-danger">Action</th>
          </tr>
        </thead>
        <tbody>
            {patients.map((patient) => (
              <tr key={patient.id} >
                <td className="text-center">{patient.patient.id}</td>
                <td className="text-center">{patient.patient.patientName}</td>
                <td className="text-center">{patient.doctorName}</td>
                <td className="text-center">{patient.bookingDate}</td>
                <td className="text-center">{patient.prescription}</td>
                <td className="text-center">{patient.patient.email}</td>
                <td className="text-center">{patient.patient.problem}</td>
                <td className="text-center">{patient.patient.contactNo}</td>
                <td className="text-center">{patient.patient.age}</td>
               

                <td>
                {patient.cancelStatus &&(<p className='text-center text-danger'>Appointment cancelled</p> )}
                {!patient.cancelStatus &&(
                  <button
                    className="btn btn-danger"
                    style={{ marginLeft: "25px" }}
                    onClick={() => handlePrescription(patient.patient.id)}
                  >
                    AddPrescription
                  </button>)}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
        </div>
        </div>
  )
}

export default PatientDoctorList