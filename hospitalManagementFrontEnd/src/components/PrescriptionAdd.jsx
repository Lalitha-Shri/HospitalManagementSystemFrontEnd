import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { addMedicines, getAppointmentById } from './Booking';

const PrescriptionAdd = () => {
    const navigate = useNavigate();
    const [patientName, setPatientName] = useState("");
    const [appoinmentDate, setAppointmentDate] = useState("");
    const [medicationName, setMedicine] = useState("");
    const [morning, setMorning] = useState();
    const [afternoon, setAfternoon] = useState();
    const [night, setNight] = useState();
    const[count,setcount]=useState(1);
    const {id}=useParams();

   
    useEffect(() => {
       getAppointments();
        
    })
    const getAppointments = async () => {
        try {
          const response = await getAppointmentById(id);
          const appointment=response.data;
          setPatientName(appointment.patient.patientName);
          setAppointmentDate(appointment.bookingDate);
        } catch (error) {
          console.error(error);
        }
      };
      const addMedicine = async (e) => {
        e.preventDefault();
        const medicines1 = {
          patientName,
          appoinmentDate,
          medicationName,
          morning,
          afternoon,
          night,
          
        };
        await addMedicines(medicines1); //API call to make put API call to spring boot
        setcount(count+1);
       setMedicine("");
       setAfternoon("");
       setMorning("");
       setNight("");
    }
    const finish = async (e) => {
        e.preventDefault();
        navigate("/listDoctorPatient")
    }
  return (
    <div className="container mt-4">
    <div className="row">
      <div className="card col-md-6 offset-md-3 offset-md-3">
        <div className="card-body">
          <form>
            <div className="form-group mb-2">
              <label className="form-label">Patient Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the Patient Name"
                value={patientName}
                onChange={(e)=>setPatientName(e.target.value)}
              />
             
              <label className="form-label">Appointment Date</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the Appointment date"
                value={appoinmentDate}
                onChange={(e)=>setAppointmentDate(e.target.value)}
                
              />
              <label className="form-label">Medicine {count} Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the medicine"
                value={medicationName}
                onChange={(e)=>setMedicine(e.target.value)}
               
              />
            <label className="form-label">Morning Dose</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the number of tablets to be taken"
                value={morning}
                onChange={(e)=>setMorning(e.target.value)}
              />
             <label className="form-label">Afternoon Dose</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the number of tablets to be taken"
                value={afternoon}
                onChange={(e)=>setAfternoon(e.target.value)}
              />
              <label className="form-label">Evening Dose</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the number of tablets to be taken"
                value={night}
                onChange={(e)=>setNight(e.target.value)}
              />
              <div className="text-center">
                <button
                  className="btn btn-outline-danger"
                  style={{ marginTop: "10px" }}
                  onClick={(e)=>addMedicine(e)}
                >
                  Add
                </button>
                <button
                  className="btn btn-danger ml-4"
                  style={{ marginTop: "10px" }}
                  onClick={(e)=>finish(e)}
                >
                  Finish
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PrescriptionAdd