import React from 'react'
import doctor from './images/doctor.png'
import appointment from './images/appointment.png'
import prescription from './images/prescription.png'
import covid1 from './images/covid1.png'
import { useNavigate } from 'react-router-dom'
import patient from './images/patient.png'
import germs from './images/germs.png'
const PatientDashboard = () => {
  //React hook
  const navigate=useNavigate();
  //when Book Appointmnet button is clicked navugate to BookingNow component
  const bookNow=(e)=>{
    e.preventDefault();
    navigate("/bookNow");
  
  }
   //when view Appointmnet button is clicked navigate to ViewAppointment component
  const handleViewAppointment=(e)=>{
    e.preventDefault();
    navigate("/viewAppointment");
  }
  //when view Prescription button is clicked navigate to ViewPrescriptions component
  const handleViewPrescription=(e)=>{
    e.preventDefault();
    navigate("/viewPrescription");
  }
   //when view Guidelines button is clicked navigate to ViewGuidelines component
  const handleGuideline=(e)=>{
    e.preventDefault();
    navigate("/viewGuidelines");
  }
  return (
    <>
    <section className="">
    <div className='container ml-5'>
     <div class="row bg-white ml-5">
    <div class= "col bg-danger text-center ml-5">
   <h2 className=' text-white text-center pt-5'> Lifting you up with Healing vibes</h2>
   <h4 className=' text-white text-center'>Once you choose hope....Anything is POSSIBLE!!!</h4>
    </div>
    <div class="col-md-auto">
    <img
            src={germs}
            width="200"
            height="auto"
            className="d-inline-block align-top text-center"
            alt=""
          />
    </div>
    <div class="col col-lg-2">
    <img
            src={patient}
            width="400"
            height="auto"
            className="d-inline-block align-top"
            alt=""
          />
    </div>
      </div>
      </div>
    <div className="container  " style={{padding:"2rem"}}>
    <div className="row mt-1">
    <div className="col-sm mb-4 text-center">
    <div class="card" style={{width: "15rem"}}>
    <img
            src={doctor} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Find a Doctor</h5>
      <p class="card-text">Consult worlds finest doctors at Magizh Hospital and improve your health and give the best gift to yourself.</p>
      <a href="#" class="btn btn-danger" onClick={(e)=>bookNow(e)}>Book Appointment</a>
    </div>
    </div>
    </div>
 
    <div className="col-sm mb-4 text-center">
    <div class="card" style={{width: "15rem"}}>
    <img
            src={appointment} height="160px" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">View Appointment</h5>
      <p class="card-text">Exceptional Health care at Magizh Hospital and Our doctors care for your Health.View your Appoinment details here.</p>
      <a href="#" class="btn btn-danger" onClick={(e)=>handleViewAppointment(e)}>View Appointment</a>
    </div>
  </div>
  </div>
  <div className="col-sm mb-4 text-center">
    <div class="card" style={{width: "15rem"}}>
    <img
            src={prescription} height="160px" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">View Prescription</h5>
      <p class="card-text">A physcian's guess at what will best prolong the situation with least harm to the patient. View your prescrition here </p>
      <a href="#" class="btn btn-danger" onClick={(e)=>handleViewPrescription(e)}>View Prescription</a>
    </div>
  </div>
  </div>
  <div className="col-sm mb-4 text-center">
    <div class="card" style={{width: "15rem"}}>
    <img
            src={covid1} height="160px" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">COVID-19 Guideline</h5>
      <p class="card-text">Education is the bedrock of a just society in the post-COVID world.Be SMART and inform yourself about it.Learn about COVID-19.</p>
      <a href="#" class="btn btn-danger" onClick={(e)=>handleGuideline(e)}>Visit Guidelines</a>
    </div>
  </div>
  </div>
  

  </div>
  
  </div>
  </section>
  </>
  )
}

export default PatientDashboard
