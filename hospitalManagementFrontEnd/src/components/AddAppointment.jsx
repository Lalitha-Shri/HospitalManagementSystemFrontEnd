import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getDoctor } from './DoctorService';
import { addAppointment } from './Booking';
import Select from "react-select";
import Swal from "sweetalert2";
const AddAppointment = () => {
    //React hooks
    const {id}=useParams();
    const[doctorName,setDoctorname]=useState("");
    const[prescription1,setPrescription]=useState("");
    const[patientName,setPatientName]=useState("");
    const[email,setEmail]=useState("");
    const[problem,setProblem]=useState("");
    const[contactNo,setContactNo]=useState();
    const[age,setAge]=useState();
    const[bookingDate,setDate]=useState("");
    const[fee,setfee]=useState(300);
    const [error, setError] = useState(false);
   
    const[cancelStatus,setCancelStatus]=useState(false);
    const navigate=useNavigate();
    //select option list
    const optionsFrom = [
      { value: "4-5 pm", label: "4-5 pm" },
      { value: "5-6 pm", label: "5-6 pm" },
      { value: "6-7 pm", label: "6-7 pm" }]
   



    const [bookId] = useState(Math.random().toString(36).substr(2, 8));
    //useeffect to get doctor details while loading the page 
    useEffect(() => {
        const fetchData = async () => {
          try {
            //console.log(id);
            const response = await getDoctor(id);
            const doctor=response.data;
            setDoctorname(doctor.doctorName);
            console.log(doctorName);
            console.log(prescription1);
         }
            catch (error) {
                console.error(error);
              }
            };
            fetchData();
          }, [id]);
    //validation and api call made in handle add to add details to backend
          const handleAdd=async(e)=>{
            e.preventDefault();
            if (patientName === "") {
              setError(true);
              console.log(error);
            } else if (!contactNo) {
              setError(true);
              console.log(error);
            } else if (email === "") {
              setError(true);
              console.log(error);
            } else if (problem === "") {
              setError(true);
              console.log(error);
            } else if (!age) {
              setError(true);
              console.log(error);
            } else if (!bookingDate) {
              setError(true);
              console.log(error);
            } else{
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Appointment Booked Successfully!!",
              showConfirmButton: false,
              timer: 1500
            });
            const bookingId="MM"+bookId;
            const prescription=prescription1.label;
            const patient={patientName,email,problem,contactNo,age}
            const book={bookingId,doctorName,prescription,patient,bookingDate,fee,cancelStatus};
            console.log(book);
            const res=await addAppointment(book);
            console.log(res);
            setPatientName("");
            setEmail("");
            setDate("");
            setProblem("");
            setContactNo(0);
            setAge(0);
            navigate("/patient");
          }
          }

  return (
    <>
   
    <div className="container mt-3">
        <h4 className='text-center text-secondary'>Kindly fill in the details to proceed!!</h4>
    <div className="row mt-3">
      <div className="card col-md-6 offset-md-3 offset-md-3">
        <div className="card-body">
          <form>
            <div className="form-group mb-2">
              <label className="form-label">Patient Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the patient Name"
                error={!!error}
                value={patientName}
                onChange={(e)=>setPatientName(e.target.value)}
               
              />
               {!!error && (
                  <p className="text-danger">Patient Name field cannot be null</p>
                )}
             
              <label className="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                error={!!error}
                placeholder="Enter the patient email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                
                
              />
               {!!error && (
                  <p className="text-danger">Email field cannot be null</p>
                )}
               <label htmlFor="location_from" className="form-label ll">
                Select your slots:
              </label>
              <Select
                value={prescription1}
                onChange={setPrescription}
                options={optionsFrom}
              />
              <label className="form-label">Date of appointment</label>
              <input
                type="date"
                className="form-control"
                placeholder="Enter the date "
                error={!!error}
                value={bookingDate}
                onChange={(e)=>setDate(e.target.value)}
                
                
              />
               {!!error && (
                  <p className="text-danger">Appointment date field cannot be null</p>
                )}
              <label className="form-label">Problem</label>
              <input
                type="text"
                className="form-control"
                error={!!error}
                placeholder="Enter your illness"
                value={problem}
                onChange={(e)=>setProblem(e.target.value)}
                
               
              />
               {!!error && (
                  <p className="text-danger">Problem field cannot be null</p>
                )}
            <label className="form-label">Contact Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the contact no"
                error={!!error}
                value={contactNo}
                onChange={(e)=>setContactNo(e.target.value)}
                
              />
               {!!error && (
                  <p className="text-danger">Contact No field cannot be null</p>
                )}
             <label className="form-label">Age</label>
              <input
                type="text"
                className="form-control"
                error={!!error}
                placeholder="Enter the age"
                value={age}
                onChange={(e)=>setAge(e.target.value)}
              />
               {!!error && (
                  <p className="text-danger">Age field cannot be null</p>
                )}
              
              <div className="text-center">
                <button
                  className="btn btn-outline-danger"
                  style={{ marginTop: "10px" }}
                  onClick={(e)=>handleAdd(e)}
                >
                  Next
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export default AddAppointment
