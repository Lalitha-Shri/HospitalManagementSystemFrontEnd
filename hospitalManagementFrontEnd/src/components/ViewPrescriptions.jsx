import React, { useState } from 'react'
import { Form } from "react-bootstrap";

import { useNavigate } from 'react-router-dom';

const ViewPrescriptions = () => {
  const[patientName,setPatientName]=useState("");
  const navigate=useNavigate();
  const[prescription,setPrescription]=useState(false);
  const[patientPrescription,setPatientPrescription]=useState([]);
  const handleSearch=async(e)=>{
    e.preventDefault();
    navigate(`/prescriptionList/${patientName}`)
    // const response= await getMedicationByName(patientName);
    // const res=response.data.id;
    // setPatientPrescription(res);
    // setPrescription(true);
  }
  return (
    <div className="cont2">
      <div className="card w-50 mx-auto mt-5 mb-5">
        <div className="card-header text-center text-danger"><h4>Prescription!!</h4></div>
        <div className="card-body">
          <Form id="myForm">
            <div className="mb-3 ">
              <label htmlFor="name" className="form-label ">
                Enter Patient's name
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="name"
                value={patientName}
                onChange={(e)=>setPatientName(e.target.value)}
              />
               <label htmlFor="name" className="form-label ">
                Enter Appointment Date
              </label>
              <input
                type="date"
                className="form-control"
                id="email"
                name="name"
              />
            </div>
            <div class="text-center">
              <button
                type="button"
                className="btn btn-danger text-center"
                onClick={(e)=>handleSearch(e)}
              >
                Search
              </button>
            </div>
          </Form>
        </div>
      </div>
     
      {/* {prescription && (
        <div className="container">
          <div className="py-4">
            <table className="table border shadow t2">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Patient Name</th>
                  <th scope="col">Appointment Date</th>
                  
                </tr>
              </thead>

              <tbody>
              {patientPrescription.map((res1) => (
                <tr key={res1.id}>
                  <td>{res1.id}</td>
                  <td>{res1.patientName}</td>
                  <td>{res1.appoinmentDate}</td>
                  
                  <td>
                    <button
                      type="submit"
                      className="btn btn-outline-warning"
                      onClick={(e) => handleViewTicket(passengerid)}
                    >
                      View Prescription
                    </button>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      )} */}
       </div>
  )
}

export default ViewPrescriptions