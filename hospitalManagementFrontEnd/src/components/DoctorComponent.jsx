import React, { useEffect, useState } from "react";
import { deleteDoctor, getAllDoctor } from "./DoctorService";
import { useNavigate } from "react-router-dom";

const DoctorComponent = () => {
  const [doctors, setDoctor] = useState([]);
  const navigate=useNavigate();
  useEffect(() => {
    listDoctor();
  }, []);
  const listDoctor = async () => {
    try {
      const response = await getAllDoctor();
      // console.log(response.data);
      setDoctor(response.data);
      //console.log(doctors);
    } catch (error) {
      console.error(error);
    }
  };
  const handleUpdate = (id) => {
    navigate(`/update-doctor/${id}`);
  };
  const handleDelete = async (id) => {
    try {
      const response = await deleteDoctor(id);
      window.location.reload(false);
      navigate("/listDoctor");
    } catch (error) {
      console.error(error);
    }
  };
 
  return (
  <>
    <div className="container">
      <h2 className="text-center text-danger" style={{ padding: "2rem" }}>
        Doctor's List
      </h2>
      <div>
        <table className="table table-bordered table-striped" style={{border: "2px striped rgb(165, 42, 42)"}}>
          <thead >
            <tr >
              <th className="text-center text-danger">Doctor Id</th>
              <th className="text-center text-danger">Doctor Name</th>
              <th className="text-center text-danger">Specialist</th>
              <th className="text-center text-danger">Qualification</th>
              <th className="text-center text-danger">Experience</th>
              <th className="text-center text-danger">Age</th>
              <th className="text-center text-danger">Contact Number</th>
              <th className="text-center text-danger">Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr key={doctor.id} >
                <td className="text-center">{doctor.id}</td>
                <td className="text-center">{doctor.doctorName}</td>
                <td className="text-center">{doctor.specialist}</td>
                <td className="text-center">{doctor.qualification}</td>
                <td className="text-center">{doctor.experience}</td>
                <td className="text-center">{doctor.age}</td>
                <td className="text-center">{doctor.contactNo}</td>

                <td>
                  <button
                    className="btn btn-outline-danger"
                    style={{ marginLeft: "25px" }}
                    onClick={() => handleUpdate(doctor.id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger"
                    style={{ marginLeft: "25px" }}
                    onClick={() => handleDelete(doctor.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
  </>
   
  );
};

export default DoctorComponent;
