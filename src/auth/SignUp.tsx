import React, { Component } from "react";

export default class SignUp extends Component {
  render() {
    return (
      <div className="osahan-signup login-page">
        <video loop muted id="vid">
          <source src="img/bg.mp4" type="video/mp4" />
          <source src="img/bg.mp4" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        <div className="d-flex align-items-center justify-content-center flex-column vh-100">
          <div className="px-5 col-md-6 ml-auto">
            <div className="px-5 col-10 mx-auto">
              <h2 className="text-dark my-0">Hello There.</h2>
              <p className="text-50">Sign up to continue</p>
              <form
                className="mt-5 mb-4"
                action="https://askbootstrap.com/preview/swiggiweb/verification.html"
              >
                <div className="form-group">
                  <label className="text-dark">Name</label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="form-control"
                    id="exampleInputName1"
                    aria-describedby="nameHelp"
                  />
                </div>
                <div className="form-group">
                  <label className="text-dark">Mobile Number</label>
                  <input
                    type="number"
                    placeholder="Enter Mobile"
                    className="form-control"
                    id="exampleInputNumber1"
                    aria-describedby="numberHelp"
                  />
                </div>
                <div className="form-group">
                  <label className="text-dark">Password</label>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <button className="btn btn-primary btn-lg btn-block">
                  SIGN UP
                </button>
                <div className="py-2">
                  <button className="btn btn-facebook btn-lg btn-block">
                    <i className="feather-facebook"></i> Connect with Facebook
                  </button>
                </div>
              </form>
            </div>
            <div className="new-acc d-flex align-items-center justify-content-center">
              <a href="login.html">
                <p className="text-center m-0">Already an account? Sign in</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
