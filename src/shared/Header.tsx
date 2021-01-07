import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header className="section-header">
        <section className="header-main shadow-sm bg-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-1">
                <a href="home.html" className="brand-wrap mb-0">
                  <img alt="#" className="img-fluid" src="img/logo_web.png" />
                </a>
              </div>
              <div className="col-3 d-flex align-items-center m-none">
                <div className="dropdown mr-3">
                  <a
                    className="text-dark dropdown-toggle d-flex align-items-center py-3"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <div>
                      <i className="feather-map-pin mr-2 bg-light rounded-pill p-2 icofont-size"></i>
                    </div>
                    <div>
                      <p className="text-muted mb-0 small">Select Location</p>
                      Jawaddi Ludhiana...
                    </div>
                  </a>
                  <div
                    className="dropdown-menu p-0 drop-loc"
                    aria-labelledby="navbarDropdown"
                  >
                    <div className="osahan-country">
                      <div className="search_location bg-primary p-3 text-right">
                        <div className="input-group rounded shadow-sm overflow-hidden">
                          <div className="input-group-prepend">
                            <button className="border-0 btn btn-outline-secondary text-dark bg-white btn-block">
                              <i className="feather-search"></i>
                            </button>
                          </div>
                          <input
                            type="text"
                            className="shadow-none border-0 form-control"
                            placeholder="Enter Your Location"
                          />
                        </div>
                      </div>
                      <div className="p-3 border-bottom">
                        <a href="home.html" className="text-decoration-none">
                          <p className="font-weight-bold text-primary m-0">
                            <i className="feather-navigation"></i> New York, USA
                          </p>
                        </a>
                      </div>
                      <div className="filter">
                        <h6 className="px-3 py-3 bg-light pb-1 m-0 border-bottom">
                          Choose your country
                        </h6>
                        <div className="custom-control  border-bottom px-0 custom-radio">
                          <input
                            type="radio"
                            id="customRadio1"
                            name="location"
                            className="custom-control-input"
                          />
                          <label className="custom-control-label py-3 w-100 px-3">
                            Afghanistan
                          </label>
                        </div>
                        <div className="custom-control  border-bottom px-0 custom-radio">
                          <input
                            type="radio"
                            id="customRadio2"
                            name="location"
                            className="custom-control-input"
                            checked
                          />
                          <label className="custom-control-label py-3 w-100 px-3">
                            India
                          </label>
                        </div>
                        <div className="custom-control  border-bottom px-0 custom-radio">
                          <input
                            type="radio"
                            id="customRadio3"
                            name="location"
                            className="custom-control-input"
                          />
                          <label className="custom-control-label py-3 w-100 px-3">
                            USA
                          </label>
                        </div>
                        <div className="custom-control  border-bottom px-0 custom-radio">
                          <input
                            type="radio"
                            id="customRadio4"
                            name="location"
                            className="custom-control-input"
                          />
                          <label className="custom-control-label py-3 w-100 px-3">
                            Australia
                          </label>
                        </div>
                        <div className="custom-control  border-bottom px-0 custom-radio">
                          <input
                            type="radio"
                            id="customRadio5"
                            name="location"
                            className="custom-control-input"
                          />
                          <label className="custom-control-label py-3 w-100 px-3">
                            Japan
                          </label>
                        </div>
                        <div className="custom-control  px-0 custom-radio">
                          <input
                            type="radio"
                            id="customRadio6"
                            name="location"
                            className="custom-control-input"
                          />
                          <label className="custom-control-label py-3 w-100 px-3">
                            China
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-8">
                <div className="d-flex align-items-center justify-content-end pr-5">
                  <a
                    href="search.html"
                    className="widget-header mr-4 text-dark"
                  >
                    <div className="icon d-flex align-items-center">
                      <i className="feather-search h6 mr-2 mb-0"></i>{" "}
                      <span>Search</span>
                    </div>
                  </a>

                  <a
                    href="offers.html"
                    className="widget-header mr-4 text-white btn bg-primary m-none"
                  >
                    <div className="icon d-flex align-items-center">
                      <i className="feather-disc h6 mr-2 mb-0"></i>{" "}
                      <span>Offers</span>
                    </div>
                  </a>

                  <a
                    href="login.html"
                    className="widget-header mr-4 text-dark m-none"
                  >
                    <div className="icon d-flex align-items-center">
                      <i className="feather-user h6 mr-2 mb-0"></i>{" "}
                      <span>Sign in</span>
                    </div>
                  </a>

                  <div className="dropdown mr-4 m-none">
                    <a
                      href="#"
                      className="dropdown-toggle text-dark py-3 d-block"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img
                        alt="#"
                        src="img/user/1.jpg"
                        className="img-fluid rounded-circle header-user mr-2 header-user"
                      />{" "}
                      Hi Osahan
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a className="dropdown-item" href="profile.html">
                        My account
                      </a>
                      <a className="dropdown-item" href="faq.html">
                        Delivery support
                      </a>
                      <a className="dropdown-item" href="contact-us.html">
                        Contant us
                      </a>
                      <a className="dropdown-item" href="terms.html">
                        Term of use
                      </a>
                      <a className="dropdown-item" href="privacy.html">
                        Privacy policy
                      </a>
                      <a className="dropdown-item" href="login.html">
                        Logout
                      </a>
                    </div>
                  </div>

                  <a
                    href="checkout.html"
                    className="widget-header mr-4 text-dark"
                  >
                    <div className="icon d-flex align-items-center">
                      <i className="feather-shopping-cart h6 mr-2 mb-0"></i>{" "}
                      <span>Cart</span>
                    </div>
                  </a>
                  <a className="toggle" href="#">
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    );
  }
}
