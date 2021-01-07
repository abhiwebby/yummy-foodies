import React, { Component } from "react";
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
              <aside className="col-md-4 footer-about">
                <article className="d-flex pb-3">
                  <div>
                    <img alt="#" src={logo} className="logo-footer mr-3" />
                  </div>
                  <div>
                    <h6 className="title text-white">About Us</h6>
                    <p className="text-muted">
                      Some short text about company like You might remember the
                      Dell computer commercials in which a youth reports.
                    </p>
                    <div className="d-flex align-items-center">
                      <a
                        className="btn btn-icon btn-outline-light mr-1 btn-sm"
                        title="Facebook"
                        target="_blank"
                        href="#"
                      >
                        <FeatherIcon.Facebook size="12" />
                      </a>
                      <a
                        className="btn btn-icon btn-outline-light mr-1 btn-sm"
                        title="Instagram"
                        target="_blank"
                        href="#"
                      >
                        <FeatherIcon.Instagram size="12" />
                      </a>
                      <a
                        className="btn btn-icon btn-outline-light mr-1 btn-sm"
                        title="Youtube"
                        target="_blank"
                        href="#"
                      >
                        <FeatherIcon.Youtube size="12" />
                      </a>
                      <a
                        className="btn btn-icon btn-outline-light mr-1 btn-sm"
                        title="Twitter"
                        target="_blank"
                        href="#"
                      >
                        <FeatherIcon.Twitter size="12" />
                      </a>
                    </div>
                  </div>
                </article>
              </aside>
              <aside className="col-sm-3 col-md-2 text-white">
                <h6 className="title">Error Pages</h6>
                <ul className="list-unstyled hov_footer">
                  <li>
                    {" "}
                    <a href="not-found.html" className="text-muted">
                      Not found
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="maintence.html" className="text-muted">
                      Maintence
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="coming-soon.html" className="text-muted">
                      Coming Soon
                    </a>
                  </li>
                </ul>
              </aside>
              <aside className="col-sm-3 col-md-2 text-white">
                <h6 className="title">Services</h6>
                <ul className="list-unstyled hov_footer">
                  <li>
                    {" "}
                    <a href="faq.html" className="text-muted">
                      Delivery Support
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="contact-us.html" className="text-muted">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="terms.html" className="text-muted">
                      Terms of use
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="privacy.html" className="text-muted">
                      Privacy policy
                    </a>
                  </li>
                </ul>
              </aside>
              <aside className="col-sm-3  col-md-2 text-white">
                <h6 className="title">For users</h6>
                <ul className="list-unstyled hov_footer">
                  <li>
                    {" "}
                    <a href="login.html" className="text-muted">
                      {" "}
                      User Login{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="signup.html" className="text-muted">
                      {" "}
                      User register{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="forgot_password.html" className="text-muted">
                      {" "}
                      Forgot Password{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="profile.html" className="text-muted">
                      {" "}
                      Account Setting{" "}
                    </a>
                  </li>
                </ul>
              </aside>
              <aside className="col-sm-3  col-md-2 text-white">
                <h6 className="title">More Pages</h6>
                <ul className="list-unstyled hov_footer">
                  <li>
                    {" "}
                    <a href="trending.html" className="text-muted">
                      {" "}
                      Trending{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="most_popular.html" className="text-muted">
                      {" "}
                      Most popular{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="restaurant.html" className="text-muted">
                      {" "}
                      Restaurant Details{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="favorites.html" className="text-muted">
                      {" "}
                      Favorites{" "}
                    </a>
                  </li>
                </ul>
              </aside>
            </div>
          </section>

          <section className="footer-center border-top padding-y py-5">
            <h6 className="title text-white">Countries</h6>
            <div className="row">
              <aside className="col-sm-2 col-md-2 text-white">
                <ul className="list-unstyled hov_footer">
                  <li>
                    {" "}
                    <a href="#" className="text-muted">
                      India
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="text-muted">
                      Indonesia
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="text-muted">
                      Ireland
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="text-muted">
                      Italy
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="text-muted">
                      Lebanon
                    </a>
                  </li>
                </ul>
              </aside>
              <aside className="col-sm-2 col-md-2 text-white">
                <ul className="list-unstyled hov_footer">
                  <li>
                    {" "}
                    <a href="#" className="text-muted">
                      Malaysia
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="text-muted">
                      New Zealand
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="text-muted">
                      Philippines
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="text-muted">
                      Poland
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="text-muted">
                      Portugal
                    </a>
                  </li>
                </ul>
              </aside>
              <aside className="col-sm-2 col-md-2 text-white">
                <ul className="list-unstyled hov_footer">
                  <li>
                    {" "}
                    <a href="#" className="text-muted">
                      Australia
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="text-muted">
                      Brasil
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="text-muted">
                      Canada
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="text-muted">
                      Chile
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="text-muted">
                      Czech Republic
                    </a>
                  </li>
                </ul>
              </aside>
              <aside className="col-sm-2 col-md-2 text-white">
                <ul className="list-unstyled hov_footer">
                  <li>
                    {" "}
                    <a href="#" className="text-muted">
                      Turkey
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="text-muted">
                      UAE
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="text-muted">
                      United Kingdom
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="text-muted">
                      United States
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="text-muted">
                      Sri Lanka
                    </a>
                  </li>
                </ul>
              </aside>
              <aside className="col-sm-2 col-md-2 text-white">
                <ul className="list-unstyled hov_footer">
                  <li>
                    {" "}
                    <a href="#" className="text-muted">
                      Qatar
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="text-muted">
                      Singapore
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="text-muted">
                      Slovakia
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="text-muted">
                      South Africa
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="text-muted">
                      Green Land
                    </a>
                  </li>
                </ul>
              </aside>
              <aside className="col-sm-2 col-md-2 text-white">
                <ul className="list-unstyled hov_footer">
                  <li>
                    {" "}
                    <a href="#" className="text-muted">
                      Pakistan
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="text-muted">
                      Bangladesh
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="text-muted">
                      Bhutaan
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="text-muted">
                      Nepal
                    </a>
                  </li>
                </ul>
              </aside>
            </div>
          </section>
        </div>

        <section className="footer-copyright border-top py-3 bg-light">
          <div className="container d-flex align-items-center">
            <p className="mb-0"> © 2020 Company All rights reserved </p>
            <p className="text-muted mb-0 ml-auto d-flex align-items-center">
              <a href="#" className="d-block">
                <img alt="#" src={appstore} height="40" />
              </a>
              <a href="#" className="d-block ml-3">
                <img alt="#" src={playmarket} height="40" />
              </a>
            </p>
          </div>
        </section>
      </footer>
    );
  }
}
