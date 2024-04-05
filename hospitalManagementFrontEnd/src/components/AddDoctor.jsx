import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addDoctor } from './DoctorService';
import Swal from "sweetalert2";

const AddDoctor = () => {
  //React hooks
  const navigate = useNavigate();
  const [doctorName, setDoctorName] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [qualification, setQualification] = useState("");
  const [experience, setExperience] = useState();
  const [age, setAge] = useState();
  const [contactNo, setContact] = useState();
  const [error, setError] = useState(false);
//validation of forms and api call to add doctor details is done in adddoc funtion when add button is clicked
  const addDoc = async (e) => {
    e.preventDefault();
    const doc = {
      doctorName,
      specialist,
      experience,
      age,
      qualification,
      contactNo,
      
    };
    if(doctorName==="")
    {
      setError(true);
      console.log(error);

    }else if(specialist==="")
    {
      setError(true);
      console.log(error);

    }
    else if(qualification==="")
    {
      setError(true);
      console.log(error);

    }
    else if(!experience)
    {
      setError(true);
      console.log(error);

    }
    else if(!contactNo)
    {
      setError(true);
      console.log(error);

    }
    else if(!age)
    {
      setError(true);
      console.log(error);

    }
    else{

    
    await addDoctor(doc); //API call to make put API call to spring boot
    navigate("/admin");
    let timerInterval;
Swal.fire({
  title: "Addedd Successfully",
  html: "I will close in <b></b> milliseconds.",
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log("I was closed by the timer");
  }
});
}}
  return (
    <div className="container mt-4">
    <div className="row">
      <div className="card col-md-6 offset-md-3 offset-md-3">
        <div className="card-body">
          <form>
            <div className="form-group mb-2">
              <label className="form-label">Doctor Name</label>
              <input
                type="text"
                className="form-control"
                error={!!error}
                placeholder="Enter the Doctor Name"
                value={doctorName}
                onChange={(e)=>setDoctorName(e.target.value)}
              />
              {!!error && (
                  <p className="text-danger">Doctor Name field cannot be null</p>
                )}
             
              <label className="form-label">Specialist</label>
              <input
                type="text"
                className="form-control"
                error={!!error}
                placeholder="Enter the Specialized stream"
                value={specialist}
                onChange={(e)=>setSpecialist(e.target.value)}
                
              />
              {!!error && (
                  <p className="text-danger">This field cannot be null</p>
                )}
              <label className="form-label">Qualification</label>
              <input
                type="text"
                className="form-control"
                error={!!error}
                placeholder="Enter the qualification"
                value={qualification}
                onChange={(e)=>setQualification(e.target.value)}
               
              />
              {!!error && (
                  <p className="text-danger">Qualification field cannot be null</p>
                )}
            <label className="form-label">Experience</label>
              <input
                type="text"
                className="form-control"
                error={!!error}
                placeholder="Enter the experience"
                value={experience}
                onChange={(e)=>setExperience(e.target.value)}
              />
              {!!error && (
                  <p className="text-danger">Experience field cannot be null</p>
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
              <label className="form-label">Contact No</label>
              <input
                type="text"
                className="form-control"
                error={!!error}
                placeholder="Enter the Contact number"
                value={contactNo}
                onChange={(e)=>setContact(e.target.value)}
              />
              {!!error && (
                  <p className="text-danger">Contact number field cannot be null</p>
                )}
              <div className="text-center">
                <button
                  className="btn btn-outline-danger"
                  style={{ marginTop: "10px" }}
                  onClick={(e)=>addDoc(e)}
                >
                  Add
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

export default AddDoctor
