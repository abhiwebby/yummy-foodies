import React, { Component } from "react";
import * as FeatherIcon from "react-feather";
import { Link } from "react-router-dom";

import logo from "../assets/img/logo_web.png";
import user_pic1 from "../assets/img/user/user_pic1.jpg";
import Login from "../auth/Login";
import Cart from "../cart/Cart";
import Checkout from "../cart/Checkout";
import Home from "../components/Home";
import Contact from "../components/Contact";
import Faqs from "../extras/Faqs";
import Privacy from "../extras/Privacy";
import Terms from "../extras/Terms";
import Profile from "../user/Profile";
import Search from "../search/Search";

export default class Header extends Component {
  render() {
    return (
      <header className="section-header">
        <section className="header-main shadow-sm bg-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-1">
                <Link to="/" className="brand-wrap mb-0">
                  <img alt="logo" className="img-fluid" src={logo} />
                </Link>
              </div>
              <div className="col-3 d-flex align-items-center m-none">
                <div className="dropdown mr-3">
                  <Link
                    className="text-dark dropdown-toggle d-flex align-items-center py-3"
                    to="/location"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <div>
                      <FeatherIcon.MapPin
                        className="mr-2 bg-light rounded-pill p-2"
                        size="32"
                      />
                      {/* <i className="feather-map-pin mr-2 bg-light rounded-pill p-2 icofont-size"></i> */}
                    </div>
                    <div>
                      <p className="text-muted mb-0 small">Select Location</p>
                      Jawaddi Ludhiana...
                    </div>
                  </Link>
                  <div
                    className="dropdown-menu p-0 drop-loc"
                    aria-labelledby="navbarDropdown"
                  >
                    <div className="osahan-country">
                      <div className="search_location bg-primary p-3 text-right">
                        <div className="input-group rounded shadow-sm overflow-hidden">
                          <div className="input-group-prepend">
                            <button className="border-0 btn btn-outline-secondary text-dark bg-white btn-block">
                              <FeatherIcon.Search size="20" />
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
                        <Link to="/home" className="text-decoration-none">
                          <p className="font-weight-bold text-primary m-0">
                            <FeatherIcon.Navigation size="20" /> New York, USA
                          </p>
                        </Link>
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
                  <Link to="/search" className="widget-header mr-4 text-dark">
                    <div className="icon d-flex align-items-center">
                      <FeatherIcon.Search className="h6 mr-2 mb-0" size="20" />
                      <span>Search</span>
                    </div>
                  </Link>

                  <Link
                    to="/offers"
                    className="widget-header mr-4 text-white btn bg-primary m-none"
                  >
                    <div className="icon d-flex align-items-center">
                      <FeatherIcon.Disc className="h6 mr-2 mb-0" size="20" />
                      <span>Offers</span>
                    </div>
                  </Link>

                  <Link
                    to="/login"
                    className="widget-header mr-4 text-dark m-none"
                  >
                    <div className="icon d-flex align-items-center">
                      <FeatherIcon.User className="h6 mr-2 mb-0" size="20" />
                      <span>Sign in</span>
                    </div>
                  </Link>

                  <div className="dropdown mr-4 m-none">
                    <Link
                      to="/login"
                      className="dropdown-toggle text-dark py-3 d-block"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img
                        alt="user image"
                        src={user_pic1}
                        className="rounded-circle header-user mr-2"
                      />{" "}
                      Hi Osahan
                    </Link>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <Link to="/profile" className="dropdown-item">
                        My account
                      </Link>
                      <Link to="/faqs" className="dropdown-item">
                        Delivery support
                      </Link>
                      <Link to="/contact" className="dropdown-item">
                        Contant us
                      </Link>
                      <Link to="/terms" className="dropdown-item">
                        Term of use
                      </Link>
                      <Link to="/privacy" className="dropdown-item">
                        Privacy policy
                      </Link>
                      <Link to="/login" className="dropdown-item">
                        Logout
                      </Link>
                    </div>
                  </div>

                  <Link to="/cart" className="widget-header mr-4 text-dark">
                    <div className="icon d-flex align-items-center">
                      <FeatherIcon.ShoppingCart
                        className="h6 mr-2 mb-0"
                        size="20"
                      />
                      <span>Cart</span>
                    </div>
                  </Link>
                  <button className="toggle">
                    <FeatherIcon.Menu className="h6 mr-2 mb-0" size="20" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    );
  }
}
