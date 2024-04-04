import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { deletePatient, getAllPatient } from './PatientService';

const PatientComponent = () => {
  const [patients, setPatient] = useState([]);
  const navigate=useNavigate();
  useEffect(() => {
    listPatient();
  }, []);
  const listPatient = async () => {
    try {
      const response = await getAllPatient();
      console.log(response.data);
      setPatient(response.data);
      console.log(patients);
    } catch (error) {
      console.error(error);
    }
  };
  const handleUpdate = (id) => {
    navigate(`/update-patient/${id}`);
  };
  const handleDelete = async (id) => {
    try {
      const response = await deletePatient(id);
      window.location.reload(false);
      navigate("/listPatient");
    } catch (error) {
      console.error(error);
    }
  };
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
                <td className="text-center">{patient.id}</td>
                <td className="text-center">{patient.patientName}</td>
                <td className="text-center">{patient.email}</td>
                <td className="text-center">{patient.problem}</td>
                <td className="text-center">{patient.contactNo}</td>
                <td className="text-center">{patient.age}</td>
               

                <td>
                  <button
                    className="btn btn-outline-danger"
                    style={{ marginLeft: "25px" }}
                    onClick={() => handleUpdate(patient.id)}
                  >
                    Update
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

export default PatientComponent