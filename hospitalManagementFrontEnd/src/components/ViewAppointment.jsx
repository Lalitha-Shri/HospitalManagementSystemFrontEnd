import React, { useEffect, useState } from 'react'
import { cancelAppointment, getAllAppointment } from './Booking';
import Swal from "sweetalert2";

const ViewPrescription = () => {
    const[appointment,setAppointment]=useState([]);
    const [cancelStatus, setCancelStat] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    useEffect(() => {
        listAppointments();
      }, []);
      const listAppointments = async () => {
        try {
          const response = await getAllAppointment();
          console.log(response.data);
          setAppointment(response.data);
          console.log(appointment.patient.patientName);
        } catch (error) {
          console.error(error);
        }
      };
      const handleUpdate=async(id)=>{
        Swal.fire("Appointment Cancelled");
        try{
        const response = await cancelAppointment(id); //API call to update cancel status to true
      console.log(response.data);
      console.log(response.data.id);
      setCancelStat(response.data.cancelStatus);
      listAppointments();
     // setPassengerid(response.data.id);
      console.log(response.data.cancelStatus);
    } catch (error) {
      console.log(error);
    }
    const handleClick = () => {
      // Update the state to disable the button
      setIsButtonDisabled(true);
      // Additional logic or actions can be performed here
    };

      }
  return (
    <div className="container">
    <h2 className="text-center text-secondary" style={{ padding: "2rem" }}>
     View and Cancel appointments
    </h2>
    <div>
      <table className="table table-bordered table-striped" style={{border: "2px striped rgb(165, 42, 42)"}}>
        <thead >
          <tr >
           {/* <th className="text-center text-danger">Appointment Id</th> */}
            <th className="text-center text-danger">Patient Name</th>
            <th className="text-center text-danger">Doctor Name</th>
            {/* <th className="text-center text-danger">Prescription</th> */}
            <th className="text-center text-danger">Illness</th>
            <th className="text-center text-danger">Age</th>
            <th className="text-center text-danger">Contact Number</th>
            <th className="text-center text-danger">Timing</th>
            <th className="text-center text-danger">Appoinment Date</th>
            <th className="text-center text-danger">Fee</th>
          </tr>
        </thead>
        <tbody>
          {appointment.map((app) => (
            <tr key={app.id} >
              {/* <td className="text-center">{app.bookingId}</td> */}
              <td className="text-center">{app.patient.patientName}</td>
              <td className="text-center">{app.doctorName}</td>
             
              <td className="text-center">{app.patient.problem}</td>
              <td className="text-center">{app.patient.age}</td>
              <td className="text-center">{app.patient.contactNo}</td>
               <td className="text-center">{app.prescription}</td>
              <td className="text-center">{app.bookingDate}</td>
              <td className="text-center">{app.fee}</td>
              <td className="text-center">
                  {app.cancelStatus
                    ? "Appointmnet Status:Cancelled"
                    : "Appointment Status:Confirmed"}
                </td>

              <td>
                <button
                  className="btn btn-outline-danger"
                  style={{ marginLeft: "25px" }}
                  onClick={() => handleUpdate(app.id)}
                  disabled={isButtonDisabled}
                  
                >
                  CancelAppointment
                </button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
 
  )
}

export default ViewPrescription