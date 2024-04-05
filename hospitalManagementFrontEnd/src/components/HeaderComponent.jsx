import React from 'react'
import logo from './images/logo.png'
import plus from './images/plus.png'
import magizh from './images/magizh.png'
import Swal from 'sweetalert2'

import FancyText from "@carefully-coded/react-text-gradient";
import { Link } from 'react-router-dom';
import { isAdminUser, isDoctorUser, isLoggedInUser, logout } from './AuthService';

const HeaderComponent = () => {
  //styles for header
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "#8b0000",
  };
  const divStyle = {
    height: "80px",
  };
  const divstyle1 = {
    marginRight: "20px",
  };
  //navigate to home page and clear session and local storage by calling logout function from Authservice
  const handleLogOut = () => {
      logout();
    navigate("/");
    
  };
  const isAuth = isLoggedInUser(); //check whether the user is logged in 
  const isAdmin = isAdminUser();//check if its admin logged in
  const isDoctor= isDoctorUser();
  return (
    <header>
       <nav
        className="navbar navbar-expand-md navbar-light bg-light bg-opacity-50"
        style={divStyle}
      >
         <div>
          <img
            src={logo}
            width="60"
            height="auto"
            className="d-inline-block align-top"
            alt=""
          />
          <FancyText
            gradient={{ from: "#702963", to: "#FF0000", type: "linear" }}
            animate
            animateDuration={1000}
          ><a href="http://localhost:5173" className="navbar-brand fw-bold">
          Magizh Hospital
        </a></FancyText>
        <div className='text-danger'>Hands heal...Hearts mend...Lives are saved</div>
          </div>
          <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
          {!isAuth && (
          <li className="nav-item">
                <Link to="/login" className="nav-link" style={linkStyle}>
                  Login
                </Link>
              </li>)}
              {!isAuth && (
              <li className="nav-item">
                <Link to="/register" className="nav-link" style={linkStyle}>
                  Register
                </Link>
              </li>)}
              {isAuth && (
              <li className="nav-item">
                <Link
                  to="/logout"
                  className="nav-link"
                  onClick={handleLogOut}
                  style={linkStyle}
                >
                  Logout
                </Link>
              </li>)}
              {isAuth && !isAdmin && !isDoctor &&(
            <li className="nav-item">
            <Link to="/patient" className="nav-link" style={linkStyle}>
                  Patient
                </Link>
            </li>)}
            {isAuth && !isAdmin && isDoctor &&(
            <li className="nav-item">
            <Link to="/doctor" className="nav-link" style={linkStyle}>
                  Doctor
                </Link>
            </li>)}
            {isAuth && isAdmin && !isDoctor &&(
            <li className="nav-item">
            <Link to="/admin" className="nav-link" style={linkStyle}>
                  Admin
                </Link>
            </li>)}
            </ul>
            </div>
            <img
          style={divstyle1}
          src={magizh}
          width="150"
          height="auto"
          className="d-inline-block align-top"
          alt=""
        />
            <img
          style={divstyle1}
          src={plus}
          width="60"
          height="auto"
          className="d-inline-block align-top"
          alt=""
        />
      </nav>

    </header>
  )
}

export default HeaderComponent
