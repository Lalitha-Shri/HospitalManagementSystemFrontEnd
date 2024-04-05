import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import { getMedicationByName } from './Booking';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PrescriptionList = () => {
    //React Hook
    const {patientName}=useParams();
    const[patientPrescription,setPatientPrescription]=useState([]);
    const[display,setDisplay]=useState(false);
    const navigate=useNavigate();
    //useEffect will get the medication list based on patient name
    useEffect(() => {
        const fetchData = async () => {
            try {
               // console.log(patientName);
            const response= await getMedicationByName(patientName);
            console.log(response.data);
           
            setPatientPrescription(response.data);
            
            // if(patientPrescription.length>0)
            // {
            // setDisplay(true);
            // console.log(patientPrescription.length); 
            // }else{
             
            //   setDisplay(false);
            // }
           
             }
                catch (error) {
                    console.error(error);
                  }
                };
                fetchData();
              }, [patientName]);
     const handleHome=(e)=>{
                e.preventDefault();
                navigate("/patient")


              }
  return (
    <>
   
    <div className="container mt-5">
          <div className="py-4">
          <Container>
                 <Row>
                   <Col><h4 className='text-secondary'>Hello {patientName}!!</h4></Col>
                 </Row>
               </Container>
             
            <table className="table border shadow t2 mt-5">
              <thead>
                <tr>
                 
                  
                  <th scope="col">Appointment Date</th>
                  <th scope="col">Medicine Name</th>
                  <th scope="col">Morning(no of tablets)</th>
                  <th scope="col">Afternoon(no of tablets)</th>
                  <th scope="col">Night(no of tablets)</th>
                  
                </tr>
              </thead>

              <tbody>
              {patientPrescription.map((res1) => (
               
                <tr key={res1.id}>
                  
                  <td className='text-center'>{res1.appoinmentDate}</td>
                  <td className='text-center'>{res1.medicationName}</td>
                  <td className='text-center'>{res1.morning}</td>
                  <td className='text-center'>{res1.afternoon}</td>
                  <td className='text-center'>{res1.night}</td>
                
                </tr>
              ))}
              </tbody>
            </table>
          </div>
          <div className='text-center'>
          <button
                  className="btn btn-outline-danger "
                  style={{ marginTop: "10px" }}
                  onClick={(e)=>handleHome(e)}
                >
                  Back to home page
                </button>
                </div>
        </div>
        </>
  )
}

export default PrescriptionList
