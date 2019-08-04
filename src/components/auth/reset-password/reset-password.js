import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import './forgot-password.css';

const ResetPassword = () => {
  return (
    <MDBContainer className="mt-3">
      <MDBRow>
        <MDBCol md="6" className="offset-md-3">
          <MDBCard>
            <div className="header pt-2 red lighten-1">
              <MDBRow className="d-flex justify-content-center">
                <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                  Reset Password
                </h3>
              </MDBRow>
            </div>
            <MDBCardBody className="mx-4 mt-4">
              <MDBInput
                label="New Password"
                group
                type="password"
                validate
                containerClass="mb-0"
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Confirm Password"
                group
                type="password"
                validate
                containerClass="mb-0"
                error="wrong"
                success="right"
              />
              
              <div className="text-center mb-4 mt-5">
                <MDBBtn
                  color="danger"
                  type="button"
                  className="btn-block z-depth-2"
                >
                  Reset
                </MDBBtn>
              </div>
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ResetPassword;