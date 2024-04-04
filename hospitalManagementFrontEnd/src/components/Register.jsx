//this is used by new user to register to use this app
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import signup from './images/signup.png'
import signup1 from './images/signup1.png'

import Swal from "sweetalert2";
import { registerAPICall } from "./AuthService";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  //check for validation and make post API call to add user to user database
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (name === "") {
        setError(true);
      } else if (username === "") {
        setError(true);
      } else if (email === "") {
        setError(true);
      } else if (password === "") {
        setError(true);
      } else {
        const register = { name, username, email, password };
        const response = await registerAPICall(register); //APICALL made to add user
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Registered Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="">
        <div className= "col bg-danger text-center " style={{height:"120px"}}>
        <img
            src={signup1}
            width="200"
            height="auto"
            className="float-left mr-5"
            alt=""
          />
      
      <h4 className="text-center text-white pt-5 ">SIGN UP!!</h4>
      <h4 className="float-left text-white ">"Lets get registered now!!!!"</h4>
     
         </div>
        <img
            src={signup}
            width="500"
            height="auto"
            className="float-right mr-5"
            alt=""
          />
      <div className="container mt-3 ml-2 ">
        <div className="row">
          <div className="col-md-7 offset-md-3">
            <div className="card bg-secondary">
              <div className="card-header text-white bg-danger">
                <h2 className="text-center">Registration form</h2>
              </div>
              <div className="card-body">
                <form>
                  <div className="row mb-1">
                    <label className="col-md-4 control-label">Name</label>

                    <div className="col-md-12">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter your Name"
                        value={name}
                        error={!!error}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                      {!!error && (
                        <p className="text-danger">Name field cannot be null</p>
                      )}
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label className="col-md-4 control-label">UserName</label>

                    <div className="col-md-12">
                      <input
                        type="text"
                        name="username"
                        error={!!error}
                        className="form-control"
                        placeholder="Enter your UserName"
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        required
                      />
                      {!!error && (
                        <p className="text-danger">
                          User Name field cannot be null
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label className="col-md-4 control-label">Email</label>

                    <div className="col-md-12">
                      <input
                        type="email"
                        name="email"
                        error={!!error}
                        className="form-control"
                        placeholder="Enter your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      {!!error && (
                        <p className="text-danger">
                          Email field cannot be null
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label className="col-md-4 control-label">Password</label>

                    <div className="col-md-12">
                      <input
                        type="password"
                        name="password"
                        error={!!error}
                        className="form-control"
                        placeholder="Enter your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      {!!error && (
                        <p className="text-danger">
                          Password field cannot be null
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="form-group mb-1 text-center">
                    <button
                      className="btn btn-danger"
                      onClick={(e) => handleRegister(e)}
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
    </section>
  );
};

export default Register;
