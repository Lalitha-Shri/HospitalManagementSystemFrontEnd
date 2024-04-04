import Button from 'react-bootstrap/Button';
import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from './AuthService';
import Swal from 'sweetalert2'

const AdminComponent = () => {
  const navigate=useNavigate();
  const handleLogOut=()=>{
    logout();
    navigate("/");
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to log out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Logged out!",
          text: "Thank you admin!!",
          icon: "success"
        });
        
        
        
      }
    });}
  return (
    <section className="gradient_background">
    <div className="container " style={{padding:"6rem"}}>
    <h2 className="text-center mb-4 text-secondary">Welcome to the Admin Dashboard!</h2>
    <div className="row">
      <div className="col-md-6 mb-4 text-center">
        <Card>
          <Card.Body>
            <Card.Title>Doctor's List</Card.Title>
            <Card.Text>View the list of doctors.</Card.Text>
            <Link to="/listDoctor">
              <Button variant="danger">Go to doctor's List</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-6 mb-4 text-center">
        <Card>
          <Card.Body>
            <Card.Title>Patient's List</Card.Title>
            <Card.Text>View the list of patient.</Card.Text>
            <Link to="/listPatient">
              <Button variant="danger">Go to Patient's List</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-6 mb-4 text-center">
        <Card>
          <Card.Body>
            <Card.Title>Add Doctors</Card.Title>
            <Card.Text>Add a new doctor to the system.</Card.Text>
            <Link to="/addDoctor">
              <Button variant="danger">Add Doctors</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-6 mb-4 text-center">
        <Card>
          <Card.Body>
            <Card.Title>Log-out</Card.Title>
            <Card.Text>Click here to logout.</Card.Text>
            <Link to="/logout" onClick={handleLogOut}>
            <Button variant="danger" >
              Logout
            </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  </div>
  </section>
  )
}

export default AdminComponent