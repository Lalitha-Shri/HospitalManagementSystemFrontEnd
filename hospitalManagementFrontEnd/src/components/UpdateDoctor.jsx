import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { getDoctor, updateDoctor } from './DoctorService';
import Swal from "sweetalert2";
const UpdateDoctor = () => {
    //React hook
    const navigate = useNavigate();
    const [doctorName, setDoctorName] = useState("");
    const [specialist, setSpecialist] = useState("");
    const [qualification, setQualification] = useState("");
    const [experience, setExperience] = useState();
    const [age, setAge] = useState();
    const [contactNo, setContact] = useState();
    const {id}=useParams();
    //make update api call to update doctor to Db
    const updateDoc = async (e) => {
        e.preventDefault();
        const doc = {
          doctorName,
          specialist,
          experience,
          age,
          qualification,
          contactNo,
          
        };
        await updateDoctor(id, doc); //API call to make put API call to spring boot
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Updated Successfully!!",
          showConfirmButton: false,
          timer: 1500
        });
        navigate("/admin");
    }
   
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await getDoctor(id);
          const doc = response.data;
          console.log(doc);
          setDoctorName(doc.doctorName);
          setSpecialist(doc.specialist);
          setQualification(doc.qualification);
          setExperience(doc.experience);
          setAge(doc.age);
          setContact(doc.contactNo);
          
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }, [id]);
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
                placeholder="Enter the Doctor Name"
                value={doctorName}
                onChange={(e)=>setDoctorName(e.target.value)}
              />
             
              <label className="form-label">Specialist</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the Specialized stream"
                value={specialist}
                onChange={(e)=>setSpecialist(e.target.value)}
                
              />
              <label className="form-label">Qualification</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the qualification"
                value={qualification}
                onChange={(e)=>setQualification(e.target.value)}
               
              />
            <label className="form-label">Experience</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the experience"
                value={experience}
                onChange={(e)=>setExperience(e.target.value)}
              />
             <label className="form-label">Age</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the age"
                value={age}
                onChange={(e)=>setAge(e.target.value)}
              />
              <label className="form-label">Contact No</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the Contact number"
                value={contactNo}
                onChange={(e)=>setContact(e.target.value)}
              />
              <div className="text-center">
                <button
                  className="btn btn-outline-danger"
                  style={{ marginTop: "10px" }}
                  onClick={(e)=>updateDoc(e)}
                >
                  Update
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

export default UpdateDoctor
