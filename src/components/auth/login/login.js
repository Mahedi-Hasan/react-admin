import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import './Login.css';

const LoginPage = () => {
  return (
    <MDBContainer className="mt-3">
      <MDBRow>
        <MDBCol md="6" className="offset-md-3">
          <MDBCard>
            <div className="header pt-2 deep-orange lighten-1">
              <MDBRow className="d-flex justify-content-center">
                <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                  Log in 1
                </h3>
              </MDBRow>
            </div>
            <MDBCardBody className="mx-4 mt-4">
              <MDBInput label="E-mail" group type="text" validate />
              <MDBInput
                label="Password"
                group
                type="password"
                validate
                containerClass="mb-0"
              />
              <p className="font-small grey-text d-flex justify-content-end">
                
                <Link to={'/forgot-password'} className="dark-grey-text font-weight-bold ml-1">Forgot Password !</Link>
                
              </p>
              <div className="text-center mb-4 mt-5">
                
                <Link to={'/dashboard'} className="dark-grey-text font-weight-bold ml-1"><MDBBtn
                  color="unique"
                  type="button"
                  className="btn-block z-depth-2"
                >
                  Log in
                </MDBBtn></Link>
                
              </div>
              <p className="font-small grey-text d-flex justify-content-center">
                Don't have an account?
                <Link to={'/register'} className="dark-grey-text font-weight-bold ml-1">Register</Link>
                
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default LoginPage;