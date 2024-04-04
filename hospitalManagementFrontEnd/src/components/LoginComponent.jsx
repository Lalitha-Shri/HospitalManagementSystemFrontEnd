//it uses spring security from backend to validate the login user and generate JWT token
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import login from './images/login.png'
import login1 from './images/login1.png'
import Swal from "sweetalert2";
import {
  loginAPICall,
  saveLoggedInUser,
  storeToken,
} from "./AuthService";

const LoginComponenet = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginForm = async (e) => {
    e.preventDefault();
    try {
      const response = await loginAPICall(username, password); //API CALL TO LOGIN
      const token = "Bearer " + response.data.accessToken; // add token to header for all other API call
      const role = response.data.role;
      storeToken(token);
      saveLoggedInUser(username, role);
      console.log(role);
      if (role === "ROLE_ADMIN") {
        navigate("/admin");
      } else if(role==="ROLE_DOCTOR"){
        navigate("/doctor");
      }else{
        navigate("/patient");
      }
      window.location.reload(false);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Logged in Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section className="">
      <>
      <div className= "col bg-danger text-center " style={{height:"160px"}}>
      
     <h4 className="text-center text-white pt-5 ">WELCOME BACK!!</h4>
     <h4 className="float-left text-white ">"Expert Advice from top doctors"</h4>
    
        </div>
       <img
            src={login}
            width="500"
            height="auto"
            className="float-left ml-4"
            alt=""
          />
      <div className="container mt-5">
     
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card text-white bg-secondary mb-3">
              <div className="card-header bg-danger">
                <h2 className="text-center text-white">Login form</h2>
              </div>
              <div className="card-body ">
                <form>
                  <div className="row mb-3">
                    <label className="col control-label">UserName</label>

                    <div className="col-md-12">
                      <input
                        type="text"
                        name="username"
                        className="form-control"
                        placeholder="Enter your Name"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label className="col-md-4 control-label">Password</label>

                    <div className="col-md-12">
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Enter your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group mb-3 text-center">
                    <button
                      className="btn btn-danger"
                      onClick={(e) => handleLoginForm(e)}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    </section>
    
  );
};

export default LoginComponenet;
