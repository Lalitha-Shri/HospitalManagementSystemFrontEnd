import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getAllDoctor } from './DoctorService';

const BookingNow = () => {
    //React Hook
    const [doctors, setDoctor] = useState([]);
    const navigate=useNavigate();
    //when Book appointment button is clicked calls booknow function
    const handleBookNow=(id)=>{
       navigate(`/addAppointment/${id}`); 
    }
    //useEffect to load all the doctors list to display
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
  return (
    <>
    {/* <div className="container">
    <h2 className="text-center text-danger" style={{ padding: "2rem" }}>
      Find your Doctor here!!
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
                  onClick={() => handleBookNow(doctor.id)}
                >
                  Book Now!!
                </button>
               
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div> */}
  <div className="container text-center">
  <h2 className="text-center text-secondary" style={{ padding: "2rem" }}>
      Find your Doctor here!!
    </h2>
  {doctors.map((doctor) => (
    
  <div className="card text-center border-danger mb-5 ml-5" style={{ width: "60rem" }} >
  <div className="card-header"><h4 className='text-secondary'>
  Dr.{doctor.doctorName}</h4>
  </div>
  <div class="card-body">
    <h5 class="card-title">{doctor.specialist}</h5>
    <h6 class="card-text">{doctor.qualification}</h6>
    <p>Experience:{doctor.experience} years</p>
    <a href="#" class="btn btn-danger" onClick={() => handleBookNow(doctor.id)}>Book Appointment!!</a>
  </div>
</div>

  ))}
  </div>
  </>
 
  )
}

export default BookingNow
