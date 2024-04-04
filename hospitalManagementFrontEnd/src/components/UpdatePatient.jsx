import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPatient, updatePatient } from "./PatientService";
import Swal from "sweetalert2";

const UpdatePatient = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [patientName, setPatientName] = useState("");
  const [email, setEmail] = useState("");
  const [problem, setProblem] = useState("");
  const [contactNo, setContactNo] = useState();
  const [age, setAge] = useState();

  const updatePatients = async (e) => {
    console.log("clicked");
    e.preventDefault();
    const patient = {
      patientName,
      email,
      problem,
      age,
      contactNo,
      
    };
   
    console.log(patient);
    await updatePatient(id, patient); //API call to make put API call to spring boot
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
        const response = await getPatient(id);
        const patient = response.data;
        console.log(patient);
        console.log(id);
        setPatientName(patient.patientName);
        setEmail(patient.email);
        setAge(patient.age);
        setProblem(patient.problem);
        setContactNo(patient.contactNo);
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
                <label className="form-label">Patient Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter the Patient Name"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                />

                <label className="form-label">Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter the email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="form-label">Problem</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter the problem"
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                />
                <label className="form-label">Contact Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter the experience"
                  value={contactNo}
                  onChange={(e) => setContactNo(e.target.value)}
                />
                <label className="form-label">Age</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter the age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />

                <div className="text-center">
                  <button
                    className="btn btn-outline-danger"
                    style={{ marginTop: "10px" }}
                    onClick={(e) => updatePatients(e)}
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
  );
};

export default UpdatePatient;
