import React from 'react'
import doctors from './images/doctors.png'
import quote from './images/quote.png'
import { useNavigate } from 'react-router-dom'
const DoctorDashboard = () => {
  const navigate=useNavigate();
  const handleViewPatient=(e)=>{
    e.preventDefault();
    navigate("/listDoctorPatient");
  }
    const handleCancelPatient=(e)=>{
      e.preventDefault();
      navigate("/viewAppointment");
  
    }
  
  return (
    <>
    <div className='container ml-5'>
     <div class="row">
    <div class= "col bg-danger">
   <h2 className=' text-white text-center pt-5'> Wear the white coat with dignity and pride, it is an honour and privilege to get to serve the public as a physician</h2>
    </div>
    <div class="col-md-auto">
    <img
            src={quote}
            width="200"
            height="auto"
            className="d-inline-block align-top text-center"
            alt=""
          />
    </div>
    <div class="col col-lg-2">
    <img
            src={doctors}
            width="400"
            height="auto"
            className="d-inline-block align-top"
            alt=""
          />
    </div>
      </div>
      </div>
      <div className='text-center mt-5'>
      <button
                  className="btn btn-outline-danger mt-5 text-center btn-lg"
                  onClick={(e)=>handleViewPatient(e)}
                >
                  Go to Patients List to add prescription
                </button>
                <button
                  className="btn btn-outline-danger mt-5 text-center btn-lg ml-5"
                  onClick={(e)=>handleCancelPatient(e)}
                >
                  Go to Patients List to cancel appointments
                </button>
                </div>
      </>
  )
}

export default DoctorDashboard