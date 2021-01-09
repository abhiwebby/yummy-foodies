import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as FeatherIcon from "react-feather";

import logo from "../assets/img/logo_web.png";
import appstore from "../assets/img/appstore.png";
import playmarket from "../assets/img/playmarket.png";
export default class Footer extends Component {
  render() {
    return (
      <footer className="section-footer border-top bg-dark">
        <div className="container">
          <section className="footer-top padding-y py-5">
            <div className="row">
              <aside className="col-md-5 footer-about">
                <article className="d-flex pb-3">
                  <Link to="/">
                    <img
                      alt="logo image"
                      src={logo}
                      className="logo-footer mr-3"
                    />
                  </Link>
                  <div>
                    <h6 className="title text-white">About Us</h6>
                    <p className="text-muted">
                      Some short text about company like You might remember the
                      Dell computer commercials in which a youth reports.
                    </p>
                    <div className="d-flex align-items-center">
                      <Link
                        to="/fblink/1"
                        className="btn btn-icon btn-outline-light mr-1 btn-sm"
                        title="Facebook"
                      >
                        <FeatherIcon.Facebook size="12" />
                      </Link>
                      <Link
                        to="insta/1"
                        className="btn btn-icon btn-outline-light mr-1 btn-sm"
                        title="Instagram"
                        target="_blank"
                      >
                        <FeatherIcon.Instagram size="12" />
                      </Link>
                      <Link
                        to="/youtube/1"
                        className="btn btn-icon btn-outline-light mr-1 btn-sm"
                        title="Youtube"
                        target="_blank"
                      >
                        <FeatherIcon.Youtube size="12" />
                      </Link>
                      <Link
                        to="/twitter/1"
                        className="btn btn-icon btn-outline-light mr-1 btn-sm"
                        title="Twitter"
                        target="_blank"
                      >
                        <FeatherIcon.Twitter size="12" />
                      </Link>
                    </div>
                  </div>
                </article>
              </aside>
              <aside className="col-md-2 col-sm-4 text-white">
                <h6 className="title">Services</h6>
                <ul className="list-unstyled hov_footer">
                  <li>
                    <Link to="/faqs" className="text-muted">
                      Delivery Support
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-muted">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms" className="text-muted">
                      Terms of use
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy" className="text-muted">
                      Privacy policy
                    </Link>
                  </li>
                </ul>
              </aside>
              <aside className="col-md-2 col-sm-4 text-white">
                <h6 className="title">For users</h6>
                <ul className="list-unstyled hov_footer">
                  <li>
                    <Link to="/login" className="text-muted">
                      User Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/register" className="text-muted">
                      User register
                    </Link>
                  </li>
                  <li>
                    <Link to="/forgot-password" className="text-muted">
                      Forgot Password
                    </Link>
                  </li>
                  <li>
                    <Link to="/profile" className="text-muted">
                      Account Setting
                    </Link>
                  </li>
                </ul>
              </aside>
              <aside className="col-md-2 col-sm-4  text-white">
                <h6 className="title">More Pages</h6>
                <ul className="list-unstyled hov_footer">
                  <li>
                    <Link to="/trending" className="text-muted">
                      Trending{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/popular" className="text-muted">
                      Most popular{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/restaurant" className="text-muted">
                      Restaurant Details{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/favorites" className="text-muted">
                      Favorites{" "}
                    </Link>
                  </li>
                </ul>
              </aside>
            </div>
          </section>
        </div>

        <section className="footer-copyright border-top py-3 bg-light">
          <div className="container d-flex align-items-center">
            <p className="mb-0"> © 2021 Yummy Foodies. All Rights Reserved </p>
            <p className="text-muted mb-0 ml-auto d-flex align-items-center">
              <Link to="/" className="d-block">
                <img alt="appstore image" src={appstore} height="40" />
              </Link>
              <Link to="/" className="d-block ml-3">
                <img alt="playstore image" src={playmarket} height="40" />
              </Link>
            </p>
          </div>
        </section>
      </footer>
    );
  }
}
