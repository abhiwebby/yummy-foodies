import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as FeatherIcon from "react-feather";

import FriesPic from "../assets/img/icons/Fries.png";
import PizzaPic from "../assets/img/icons/Pizza.png";
import BurgerPic from "../assets/img/icons/Burger.png";
import SandwichPic from "../assets/img/icons/Sandwich.png";
import CoffeePic from "../assets/img/icons/Coffee.png";
import SteakPic from "../assets/img/icons/Steak.png";
import ColaCanPic from "../assets/img/icons/ColaCan.png";
import BreakfastPic from "../assets/img/icons/Breakfast.png";
import SaladPic from "../assets/img/icons/Salad.png";

import offer_pic1 from "../assets/img/offer_pic1.jpg";
import offer_pic2 from "../assets/img/offer_pic2.jpg";
import offer_pic3 from "../assets/img/offer_pic3.jpg";
import offer_pic4 from "../assets/img/offer_pic4.jpg";

import trending_pic1 from "../assets/img/trending1.png";
import trending_pic2 from "../assets/img/trending2.png";
import trending_pic3 from "../assets/img/trending3.png";
import trending_pic4 from "../assets/img/trending4.png";
import trending_pic5 from "../assets/img/trending5.png";
import trending_pic6 from "../assets/img/trending6.png";
import trending_pic7 from "../assets/img/trending7.png";
import trending_pic8 from "../assets/img/trending8.png";

import popular_pic1 from "../assets/img/popular1.png";
import popular_pic2 from "../assets/img/popular2.png";
import popular_pic3 from "../assets/img/popular3.png";
import popular_pic4 from "../assets/img/popular4.png";
import popular_pic5 from "../assets/img/popular5.png";
import popular_pic6 from "../assets/img/popular6.png";
import popular_pic7 from "../assets/img/popular7.png";
import popular_pic8 from "../assets/img/popular8.png";

import sales_pic1 from "../assets/img/sales1.png";
import sales_pic2 from "../assets/img/sales2.png";
import sales_pic3 from "../assets/img/sales3.png";
import CategoryService from "../services/DataService";

export default class Home extends Component {
  render() {
    return (
      <div className="mainContent">
        <div className="osahan-home-page">
          <div className="bg-primary p-3 d-none">
            <div className="text-white">
              <div className="title d-flex align-items-center">
                <Link className="toggle" to="#">
                  <span></span>
                </Link>
                <h4 className="font-weight-bold m-0 pl-5">Browse</h4>
                <Link
                  className="text-white font-weight-bold ml-auto"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  to="#"
                >
                  Filter
                </Link>
              </div>
            </div>
            <div className="input-group mt-3 rounded shadow-sm overflow-hidden">
              <div className="input-group-prepend">
                <button className="border-0 btn btn-outline-secondary text-dark bg-white btn-block">
                  <FeatherIcon.Search
                    className="mr-2 bg-light rounded-pill p-2"
                    size="20"
                  />
                </button>
              </div>
              <input
                type="text"
                className="shadow-none border-0 form-control"
                placeholder="Search for restaurants or dishes"
              />
            </div>
          </div>

          <div className="container">
            <div className="cat-slider">
              <div className="cat-item px-1 py-3">
                <Link
                  className="bg-white rounded d-block p-2 text-center shadow-sm"
                  to="trending"
                >
                  <img alt="#" src={FriesPic} className="img-fluid mb-2" />
                  <p className="m-0 small">Fries</p>
                </Link>
              </div>
              <div className="cat-item px-1 py-3">
                <Link
                  className="bg-white rounded d-block p-2 text-center shadow-sm"
                  to="trending"
                >
                  <img alt="#" src={PizzaPic} className="img-fluid mb-2" />
                  <p className="m-0 small">Pizza</p>
                </Link>
              </div>
              <div className="cat-item px-1 py-3">
                <Link
                  className="bg-white rounded d-block p-2 text-center shadow-sm"
                  to="trending"
                >
                  <img alt="#" src={BurgerPic} className="img-fluid mb-2" />
                  <p className="m-0 small">Burger</p>
                </Link>
              </div>
              <div className="cat-item px-1 py-3">
                <Link
                  className="bg-white rounded d-block p-2 text-center shadow-sm"
                  to="trending"
                >
                  <img alt="#" src={SandwichPic} className="img-fluid mb-2" />
                  <p className="m-0 small">Sandwich</p>
                </Link>
              </div>
              <div className="cat-item px-1 py-3">
                <Link
                  className="bg-white rounded d-block p-2 text-center shadow-sm"
                  to="trending"
                >
                  <img alt="#" src={CoffeePic} className="img-fluid mb-2" />
                  <p className="m-0 small">Coffee</p>
                </Link>
              </div>
              <div className="cat-item px-1 py-3">
                <Link
                  className="bg-white rounded d-block p-2 text-center shadow-sm"
                  to="trending"
                >
                  <img alt="#" src={SteakPic} className="img-fluid mb-2" />
                  <p className="m-0 small">Steak</p>
                </Link>
              </div>
              <div className="cat-item px-1 py-3">
                <Link
                  className="bg-white rounded d-block p-2 text-center shadow-sm"
                  to="trending"
                >
                  <img alt="#" src={ColaCanPic} className="img-fluid mb-2" />
                  <p className="m-0 small">ColaCan</p>
                </Link>
              </div>
              <div className="cat-item px-1 py-3">
                <Link
                  className="bg-white rounded d-block p-2 text-center shadow-sm"
                  to="trending"
                >
                  <img alt="#" src={BreakfastPic} className="img-fluid mb-2" />
                  <p className="m-0 small">Breakfast</p>
                </Link>
              </div>
              <div className="cat-item px-1 py-3">
                <Link
                  className="bg-white rounded d-block p-2 text-center shadow-sm"
                  to="trending"
                >
                  <img alt="#" src={SaladPic} className="img-fluid mb-2" />
                  <p className="m-0 small">Salad</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white">
            <div className="container">
              <div className="offer-slider">
                <div className="cat-item px-1 py-3">
                  <Link className="d-block text-center shadow-sm" to="trending">
                    <img
                      alt="#"
                      src={offer_pic1}
                      className="img-fluid rounded"
                    />
                  </Link>
                </div>
                <div className="cat-item px-1 py-3">
                  <Link className="d-block text-center shadow-sm" to="trending">
                    <img
                      alt="#"
                      src={offer_pic2}
                      className="img-fluid rounded"
                    />
                  </Link>
                </div>
                <div className="cat-item px-1 py-3">
                  <Link className="d-block text-center shadow-sm" to="trending">
                    <img
                      alt="#"
                      src={offer_pic3}
                      className="img-fluid rounded"
                    />
                  </Link>
                </div>
                <div className="cat-item px-1 py-3">
                  <Link className="d-block text-center shadow-sm" to="trending">
                    <img
                      alt="#"
                      src={offer_pic4}
                      className="img-fluid rounded"
                    />
                  </Link>
                </div>
                <div className="cat-item px-1 py-3">
                  <Link className="d-block text-center shadow-sm" to="trending">
                    <img
                      alt="#"
                      src={offer_pic2}
                      className="img-fluid rounded"
                    />
                  </Link>
                </div>
                <div className="cat-item px-1 py-3">
                  <Link className="d-block text-center shadow-sm" to="trending">
                    <img
                      alt="#"
                      src={offer_pic1}
                      className="img-fluid rounded"
                    />
                  </Link>
                </div>
                <div className="cat-item px-1 py-3">
                  <Link className="d-block text-center shadow-sm" to="trending">
                    <img
                      alt="#"
                      src={offer_pic3}
                      className="img-fluid rounded"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="pt-4 pb-2 title d-flex align-items-center">
              <h5 className="m-0">Trending this week</h5>
              <Link className="font-weight-bold ml-auto" to="trending">
                View all{" "}
                <FeatherIcon.ChevronsRight
                  className="mr-2 bg-light rounded-pill p-2"
                  size="16"
                />
              </Link>
            </div>

            <div className="trending-slider">
              <div className="osahan-slider-item">
                <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                  <div className="list-card-image">
                    <div className="star position-absolute">
                      <span className="badge badge-success">
                        <FeatherIcon.Star
                          className="mr-2 bg-light rounded-pill"
                          size="16"
                        />
                        3.1 (300+)
                      </span>
                    </div>
                    <div className="favourite-heart text-danger position-absolute">
                      <Link to="#">
                        <FeatherIcon.Heart
                          className="mr-2 bg-light rounded-pill"
                          size="16"
                        />
                      </Link>
                    </div>
                    <div className="member-plan position-absolute">
                      <span className="badge badge-dark">Promoted</span>
                    </div>
                    <Link to="restaurant">
                      <img
                        alt="#"
                        src={trending_pic1}
                        className="img-fluid item-img w-100"
                      />
                    </Link>
                  </div>
                  <div className="p-3 position-relative">
                    <div className="list-card-body">
                      <h6 className="mb-1">
                        <Link to="restaurant" className="text-black">
                          Famous Dave's Bar-B-Que
                        </Link>
                      </h6>
                      <p className="text-gray mb-3">
                        Vegetarian • Indian • Pure veg
                      </p>
                      <p className="text-gray mb-3 time">
                        <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                          <FeatherIcon.Clock
                            className="mr-2 bg-light rounded-pill"
                            size="16"
                          />
                          15–30 min
                        </span>{" "}
                        <span className="float-right text-black-50">
                          {" "}
                          $350 FOR TWO
                        </span>
                      </p>
                    </div>
                    <div className="list-card-badge">
                      <span className="badge badge-danger">OFFER</span>{" "}
                      <small> Use Coupon OSAHAN50</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="osahan-slider-item">
                <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                  <div className="list-card-image">
                    <div className="star position-absolute">
                      <span className="badge badge-success">
                        <FeatherIcon.Star
                          className="mr-2 bg-light rounded-pill p-2"
                          size="20"
                        />
                        3.1 (300+)
                      </span>
                    </div>
                    <div className="favourite-heart text-danger position-absolute">
                      <Link to="#">
                        <FeatherIcon.Heart size="20" />
                      </Link>
                    </div>
                    <div className="member-plan position-absolute">
                      <span className="badge badge-dark">Promoted</span>
                    </div>
                    <Link to="restaurant">
                      <img
                        alt="#"
                        src={trending_pic2}
                        className="img-fluid item-img w-100"
                      />
                    </Link>
                  </div>
                  <div className="p-3 position-relative">
                    <div className="list-card-body">
                      <h6 className="mb-1">
                        <Link to="restaurant" className="text-black">
                          Thai Famous Cuisine
                        </Link>
                      </h6>
                      <p className="text-gray mb-3">
                        North Indian • Indian • Pure veg
                      </p>
                      <p className="text-gray mb-3 time">
                        <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                          <FeatherIcon.Clock size="20" />
                          30–35 min
                        </span>{" "}
                        <span className="float-right text-black-50">
                          {" "}
                          $250 FOR TWO
                        </span>
                      </p>
                    </div>
                    <div className="list-card-badge">
                      <span className="badge badge-success">OFFER</span>{" "}
                      <small>65% off</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="osahan-slider-item">
                <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                  <div className="list-card-image">
                    <div className="star position-absolute">
                      <span className="badge badge-success">
                        <FeatherIcon.Star size="12" /> 3.1 (300+)
                      </span>
                    </div>
                    <div className="favourite-heart text-danger position-absolute">
                      <Link to="#">
                        <FeatherIcon.Heart size="20" />
                      </Link>
                    </div>
                    <div className="member-plan position-absolute">
                      <span className="badge badge-dark">Promoted</span>
                    </div>
                    <Link to="restaurant">
                      <img
                        alt="#"
                        src={trending_pic3}
                        className="img-fluid item-img w-100"
                      />
                    </Link>
                  </div>
                  <div className="p-3 position-relative">
                    <div className="list-card-body">
                      <h6 className="mb-1">
                        <Link to="restaurant" className="text-black">
                          The osahan Restaurant
                        </Link>
                      </h6>
                      <p className="text-gray mb-3">
                        North • Hamburgers • Pure veg
                      </p>
                      <p className="text-gray mb-3 time">
                        <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                          <FeatherIcon.Clock size="20" /> 15–25 min
                        </span>{" "}
                        <span className="float-right text-black-50">
                          {" "}
                          $500 FOR TWO
                        </span>
                      </p>
                    </div>
                    <div className="list-card-badge">
                      <span className="badge badge-danger">OFFER</span>{" "}
                      <small>65% OSAHAN50</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="osahan-slider-item">
                <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                  <div className="list-card-image">
                    <div className="star position-absolute">
                      <span className="badge badge-success">
                        <FeatherIcon.Star size="12" /> 3.1 (300+)
                      </span>
                    </div>
                    <div className="favourite-heart text-danger position-absolute">
                      <Link to="#">
                        <FeatherIcon.Heart size="20" />
                      </Link>
                    </div>
                    <div className="member-plan position-absolute">
                      <span className="badge badge-dark">Promoted</span>
                    </div>
                    <Link to="restaurant">
                      <img
                        alt="#"
                        src={trending_pic4}
                        className="img-fluid item-img w-100"
                      />
                    </Link>
                  </div>
                  <div className="p-3 position-relative">
                    <div className="list-card-body">
                      <h6 className="mb-1">
                        <Link to="restaurant" className="text-black">
                          Thai Famous Cuisine
                        </Link>
                      </h6>
                      <p className="text-gray mb-3">
                        North Indian • Indian • Pure veg
                      </p>
                      <p className="text-gray mb-3 time">
                        <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                          <FeatherIcon.Clock size="20" /> 30–35 min
                        </span>{" "}
                        <span className="float-right text-black-50">
                          {" "}
                          $250 FOR TWO
                        </span>
                      </p>
                    </div>
                    <div className="list-card-badge">
                      <span className="badge badge-success">OFFER</span>{" "}
                      <small>65% off</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-3 title d-flex align-items-center">
              <h5 className="m-0">Most popular</h5>
              <Link className="font-weight-bold ml-auto" to="most_popular">
                26 places <i className="feather-chevrons-right"></i>
              </Link>
            </div>

            <div className="most_popular">
              <div className="row">
                <div className="col-md-3 pb-3">
                  <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                    <div className="list-card-image">
                      <div className="star position-absolute">
                        <span className="badge badge-success">
                          <FeatherIcon.Star size="12" />
                          3.1 (300+)
                        </span>
                      </div>
                      <div className="favourite-heart text-danger position-absolute">
                        <Link to="#">
                          <FeatherIcon.Heart size="20" />
                        </Link>
                      </div>
                      <div className="member-plan position-absolute">
                        <span className="badge badge-dark">Promoted</span>
                      </div>
                      <Link to="restaurant">
                        <img
                          alt="#"
                          src={popular_pic1}
                          className="img-fluid item-img w-100"
                        />
                      </Link>
                    </div>
                    <div className="p-3 position-relative">
                      <div className="list-card-body">
                        <h6 className="mb-1">
                          <Link to="restaurant" className="text-black">
                            The osahan Restaurant
                          </Link>
                        </h6>
                        <p className="text-gray mb-1 small">
                          • North • Hamburgers
                        </p>
                        <p className="text-gray mb-1 rating"></p>
                        <ul className="rating-stars list-unstyled">
                          <li>
                            <FeatherIcon.Star
                              size="12"
                              className="star_active"
                            />
                            <FeatherIcon.Star
                              size="12"
                              className="star_active"
                            />
                            <FeatherIcon.Star
                              size="12"
                              className="star_active"
                            />
                            <FeatherIcon.Star
                              size="12"
                              className="star_active"
                            />
                            <FeatherIcon.Star size="12" />
                          </li>
                        </ul>
                        <p></p>
                      </div>
                      <div className="list-card-badge">
                        <span className="badge badge-danger">OFFER</span>{" "}
                        <small>65% OSAHAN50</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 pb-3">
                  <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                    <div className="list-card-image">
                      <div className="star position-absolute">
                        <span className="badge badge-success">
                          <FeatherIcon.Star size="12" /> 3.1 (300+)
                        </span>
                      </div>
                      <div className="favourite-heart text-danger position-absolute">
                        <Link to="#">
                          <FeatherIcon.Heart size="20" />
                        </Link>
                      </div>
                      <div className="member-plan position-absolute">
                        <span className="badge badge-dark">Promoted</span>
                      </div>
                      <Link to="restaurant">
                        <img
                          alt="#"
                          src={popular_pic2}
                          className="img-fluid item-img w-100"
                        />
                      </Link>
                    </div>
                    <div className="p-3 position-relative">
                      <div className="list-card-body">
                        <h6 className="mb-1">
                          <Link to="restaurant" className="text-black">
                            Thai Famous Indian Cuisine
                          </Link>
                        </h6>
                        <p className="text-gray mb-1 small">
                          • Indian • Pure veg
                        </p>
                        <p className="text-gray mb-1 rating"></p>
                        <ul className="rating-stars list-unstyled">
                          <li>
                            <FeatherIcon.Star
                              size="12"
                              className="star_active"
                            />
                            <FeatherIcon.Star
                              size="12"
                              className="star_active"
                            />
                            <FeatherIcon.Star
                              size="12"
                              className="star_active"
                            />
                            <FeatherIcon.Star
                              size="12"
                              className="star_active"
                            />
                            <FeatherIcon.Star size="12" />
                          </li>
                        </ul>
                        <p></p>
                      </div>
                      <div className="list-card-badge">
                        <span className="badge badge-success">OFFER</span>{" "}
                        <small>65% off</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 pb-3">
                  <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                    <div className="list-card-image">
                      <div className="star position-absolute">
                        <span className="badge badge-success">
                          <FeatherIcon.Star size="12" /> 3.1 (300+)
                        </span>
                      </div>
                      <div className="favourite-heart text-danger position-absolute">
                        <Link to="#">
                          <FeatherIcon.Heart size="20" />
                        </Link>
                      </div>
                      <div className="member-plan position-absolute">
                        <span className="badge badge-dark">Promoted</span>
                      </div>
                      <Link to="restaurant">
                        <img
                          alt="#"
                          src={popular_pic3}
                          className="img-fluid item-img w-100"
                        />
                      </Link>
                    </div>
                    <div className="p-3 position-relative">
                      <div className="list-card-body">
                        <h6 className="mb-1">
                          <Link to="restaurant" className="text-black">
                            The osahan Restaurant
                          </Link>
                        </h6>
                        <p className="text-gray mb-1 small">
                          • Hamburgers • Pure veg
                        </p>
                        <p className="text-gray mb-1 rating"></p>
                        <ul className="rating-stars list-unstyled">
                          <li>
                            <FeatherIcon.Star
                              size="12"
                              className="star_active"
                            />
                            <FeatherIcon.Star
                              size="12"
                              className="star_active"
                            />
                            <FeatherIcon.Star
                              size="12"
                              className="star_active"
                            />
                            <FeatherIcon.Star
                              size="12"
                              className="star_active"
                            />
                            <FeatherIcon.Star size="12" />
                          </li>
                        </ul>
                        <p></p>
                      </div>
                      <div className="list-card-badge">
                        <span className="badge badge-danger">OFFER</span>{" "}
                        <small>65% OSAHAN50</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 pb-3">
                  <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                    <div className="list-card-image">
                      <div className="star position-absolute">
                        <span className="badge badge-success">
                          <FeatherIcon.Star size="12" /> 3.1 (300+)
                        </span>
                      </div>
                      <div className="favourite-heart text-danger position-absolute">
                        <Link to="#">
                          <FeatherIcon.Heart size="20" />
                        </Link>
                      </div>
                      <div className="member-plan position-absolute">
                        <span className="badge badge-dark">Promoted</span>
                      </div>
                      <Link to="restaurant">
                        <img
                          alt="#"
                          src={popular_pic4}
                          className="img-fluid item-img w-100"
                        />
                      </Link>
                    </div>
                    <div className="p-3 position-relative">
                      <div className="list-card-body">
                        <h6 className="mb-1">
                          <Link to="restaurant" className="text-black">
                            Bite Me Now Sandwiches
                          </Link>
                        </h6>
                        <p className="text-gray mb-1 small">
                          American • Pure veg
                        </p>
                        <p className="text-gray mb-1 rating"></p>
                        <ul className="rating-stars list-unstyled">
                          <li>
                            <FeatherIcon.Star
                              size="12"
                              className="star_active"
                            />
                            <FeatherIcon.Star
                              size="12"
                              className="star_active"
                            />
                            <FeatherIcon.Star
                              size="12"
                              className="star_active"
                            />
                            <FeatherIcon.Star
                              size="12"
                              className="star_active"
                            />
                            <FeatherIcon.Star size="12" />
                          </li>
                        </ul>
                        <p></p>
                      </div>
                      <div className="list-card-badge">
                        <span className="badge badge-success">OFFER</span>{" "}
                        <small>65% off</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 pb-3">
                  <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                    <div className="list-card-image">
                      <div className="star position-absolute">
                        <span className="badge badge-success">
                          <FeatherIcon.Star size="12" /> 3.1 (300+)
                        </span>
                      </div>
                      <div className="favourite-heart text-danger position-absolute">
                        <Link to="#">
                          <FeatherIcon.Heart size="20" />
                        </Link>
                      </div>
                      <div className="member-plan position-absolute">
                        <span className="badge badge-dark">Promoted</span>
                      </div>
                      <Link to="restaurant">
                        <img
                          alt="#"
                          src={popular_pic5}
                          className="img-fluid item-img w-100"
                        />
                      </Link>
                    </div>
                    <div className="p-3 position-relative">
                      <div className="list-card-body">
                        <h6 className="mb-1">
                          <Link to="restaurant" className="text-black">
                            The osahan Restaurant
                          </Link>
                        </h6>
                        <p className="text-gray mb-1 small">
                          • North • Hamburgers
                        </p>
                        <p className="text-gray mb-1 rating"></p>
                        <ul className="rating-stars list-unstyled">
                          <li>
                            <FeatherIcon.Star
                              size="12"
                              className="star_active"
                            />
                            <FeatherIcon.Star
                              size="12"
                              className="star_active"
                            />
                            <FeatherIcon.Star
                              size="12"
                              className="star_active"
                            />
                            <FeatherIcon.Star
                              size="12"
                              className="star_active"
                            />
                            <FeatherIcon.Star size="12" />
                          </li>
                        </ul>
                        <p></p>
                      </div>
                      <div className="list-card-badge">
                        <span className="badge badge-danger">OFFER</span>{" "}
                        <small>65% OSAHAN50</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 pb-3">
                  <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                    <div className="list-card-image">
                      <div className="star position-absolute">
                        <span className="badge badge-success">
                          <FeatherIcon.Star size="12" /> 3.1 (300+)
                        </span>
                      </div>
                      <div className="favourite-heart text-danger position-absolute">
                        <Link to="#">
                          <FeatherIcon.Heart size="20" />
                        </Link>
                      </div>
                      <div className="member-plan position-absolute">
                        <span className="badge badge-dark">Promoted</span>
                      </div>
                      <Link to="restaurant">
                        <img
                          alt="#"
                          src={popular_pic6}
                          className="img-fluid item-img w-100"
                        />
                      </Link>
                    </div>
                    <div className="p-3 position-relative">
                      <div className="list-card-body">
                        <h6 className="mb-1">
                          <Link to="restaurant" className="text-black">
                            Thai Famous Indian Cuisine
                          </Link>
                        </h6>
                        <p className="text-gray mb-1 small">
                          • Indian • Pure veg
                        </p>
                        <p className="text-gray mb-1 rating"></p>
                        <ul className="rating-stars list-unstyled">
                          <li>
                            <FeatherIcon.Star
                              size="12"
                              className="star_active"
                            />
                            <FeatherIcon.Star
                              size="12"
                              className="star_active"
                            />
                            <FeatherIcon.Star
                              size="12"
                              className="star_active"
                            />
                            <FeatherIcon.Star
                              size="12"
                              className="star_active"
                            />
                            <FeatherIcon.Star size="12" />
                          </li>
                        </ul>
                        <p></p>
                      </div>
                      <div className="list-card-badge">
                        <span className="badge badge-success">OFFER</span>{" "}
                        <small>65% off</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 pb-3">
                  <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                    <div className="list-card-image">
                      <div className="star position-absolute">
                        <span className="badge badge-success">
                          <FeatherIcon.Star size="12" /> 3.1 (300+)
                        </span>
                      </div>
                      <div className="favourite-heart text-danger position-absolute">
                        <Link to="#">
                          <FeatherIcon.Heart size="20" />
                        </Link>
                      </div>
                      <div className="member-plan position-absolute">
                        <span className="badge badge-dark">Promoted</span>
                      </div>
                      <Link to="restaurant">
                        <img
                          alt="#"
                          src={popular_pic7}
                          className="img-fluid item-img w-100"
                        />
                      </Link>
                    </div>
                    <div className="p-3 position-relative">
                      <div className="list-card-body">
                        <h6 className="mb-1">
                          <Link to="restaurant" className="text-black">
                            The osahan Restaurant
                          </Link>
                        </h6>
                        <p className="text-gray mb-1 small">
                          • Hamburgers • Pure veg
                        </p>
                        <p className="text-gray mb-1 rating"></p>
                        <ul className="rating-stars list-unstyled">
                          <li>
                            <FeatherIcon.Star
                              size="12"
                              className="star_active"
                            />
                            <FeatherIcon.Star
                              size="12"
                              className="star_active"
                            />
                            <FeatherIcon.Star
                              size="12"
                              className="star_active"
                            />
                            <FeatherIcon.Star
                              size="12"
                              className="star_active"
                            />
                            <FeatherIcon.Star size="12" />
                          </li>
                        </ul>
                        <p></p>
                      </div>
                      <div className="list-card-badge">
                        <span className="badge badge-danger">OFFER</span>{" "}
                        <small>65% OSAHAN50</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 pb-3">
                  <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                    <div className="list-card-image">
                      <div className="star position-absolute">
                        <span className="badge badge-success">
                          <FeatherIcon.Star size="12" /> 3.1 (300+)
                        </span>
                      </div>
                      <div className="favourite-heart text-danger position-absolute">
                        <Link to="#">
                          <FeatherIcon.Heart size="20" />
                        </Link>
                      </div>
                      <div className="member-plan position-absolute">
                        <span className="badge badge-dark">Promoted</span>
                      </div>
                      <Link to="restaurant">
                        <img
                          alt="#"
                          src={popular_pic8}
                          className="img-fluid item-img w-100"
                        />
                      </Link>
                    </div>
                    <div className="p-3 position-relative">
                      <div className="list-card-body">
                        <h6 className="mb-1">
                          <Link to="restaurant" className="text-black">
                            Bite Me Now Sandwiches
                          </Link>
                        </h6>
                        <p className="text-gray mb-1 small">
                          American • Pure veg
                        </p>
                        <p className="text-gray mb-1 rating"></p>
                        <ul className="rating-stars list-unstyled">
                          <li>
                            <FeatherIcon.Star
                              size="12"
                              className="star_active"
                            />
                            <FeatherIcon.Star
                              size="12"
                              className="star_active"
                            />
                            <FeatherIcon.Star
                              size="12"
                              className="star_active"
                            />
                            <FeatherIcon.Star
                              size="12"
                              className="star_active"
                            />
                            <FeatherIcon.Star size="12" />
                          </li>
                        </ul>
                        <p></p>
                      </div>
                      <div className="list-card-badge">
                        <span className="badge badge-success">OFFER</span>{" "}
                        <small>65% off</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 pb-3 title d-flex align-items-center">
              <h5 className="m-0">Most sales</h5>
              <Link className="font-weight-bold ml-auto" to="#">
                26 places <i className="feather-chevrons-right"></i>
              </Link>
            </div>

            <div className="most_sale">
              <div className="row mb-3">
                <div className="col-md-4 mb-3">
                  <div className="d-flex align-items-center list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                    <div className="list-card-image">
                      <div className="star position-absolute">
                        <span className="badge badge-success">
                          <FeatherIcon.Star size="12" /> 3.1 (300+)
                        </span>
                      </div>
                      <div className="favourite-heart text-danger position-absolute">
                        <Link to="#">
                          <FeatherIcon.Heart size="20" />
                        </Link>
                      </div>
                      <div className="member-plan position-absolute">
                        <span className="badge badge-dark">Promoted</span>
                      </div>
                      <Link to="restaurant">
                        <img
                          alt="#"
                          src={sales_pic1}
                          className="img-fluid item-img w-100"
                        />
                      </Link>
                    </div>
                    <div className="p-3 position-relative">
                      <div className="list-card-body">
                        <h6 className="mb-1">
                          <Link to="restaurant" className="text-black">
                            The osahan Restaurant
                          </Link>
                        </h6>
                        <p className="text-gray mb-3">
                          North • Hamburgers • Pure veg
                        </p>
                        <p className="text-gray mb-3 time">
                          <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                            <FeatherIcon.Clock size="20" /> 15–25 min
                          </span>{" "}
                          <span className="float-right text-black-50">
                            {" "}
                            $500 FOR TWO
                          </span>
                        </p>
                      </div>
                      <div className="list-card-badge">
                        <span className="badge badge-danger">OFFER</span>{" "}
                        <small>65% OSAHAN50</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="d-flex align-items-center list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                    <div className="list-card-image">
                      <div className="star position-absolute">
                        <span className="badge badge-success">
                          <FeatherIcon.Star size="12" /> 3.1 (300+)
                        </span>
                      </div>
                      <div className="favourite-heart text-danger position-absolute">
                        <Link to="#">
                          <FeatherIcon.Heart size="20" />
                        </Link>
                      </div>
                      <div className="member-plan position-absolute">
                        <span className="badge badge-dark">Promoted</span>
                      </div>
                      <Link to="restaurant">
                        <img
                          alt="#"
                          src={sales_pic2}
                          className="img-fluid item-img w-100"
                        />
                      </Link>
                    </div>
                    <div className="p-3 position-relative">
                      <div className="list-card-body">
                        <h6 className="mb-1">
                          <Link to="restaurant" className="text-black">
                            Thai Famous Cuisine
                          </Link>
                        </h6>
                        <p className="text-gray mb-3">
                          North Indian • Indian • Pure veg
                        </p>
                        <p className="text-gray mb-3 time">
                          <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                            <FeatherIcon.Clock size="20" /> 30–35 min
                          </span>{" "}
                          <span className="float-right text-black-50">
                            {" "}
                            $250 FOR TWO
                          </span>
                        </p>
                      </div>
                      <div className="list-card-badge">
                        <span className="badge badge-success">OFFER</span>{" "}
                        <small>65% off</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="d-flex align-items-center list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                    <div className="list-card-image">
                      <div className="star position-absolute">
                        <span className="badge badge-success">
                          <FeatherIcon.Star size="12" /> 3.1 (300+)
                        </span>
                      </div>
                      <div className="favourite-heart text-danger position-absolute">
                        <Link to="#">
                          <FeatherIcon.Heart size="20" />
                        </Link>
                      </div>
                      <div className="member-plan position-absolute">
                        <span className="badge badge-dark">Promoted</span>
                      </div>
                      <Link to="restaurant">
                        <img
                          alt="#"
                          src={sales_pic3}
                          className="img-fluid item-img w-100"
                        />
                      </Link>
                    </div>
                    <div className="p-3 position-relative">
                      <div className="list-card-body">
                        <h6 className="mb-1">
                          <Link to="restaurant" className="text-black">
                            The osahan Restaurant
                          </Link>
                        </h6>
                        <p className="text-gray mb-3">
                          North • Hamburgers • Pure veg
                        </p>
                        <p className="text-gray mb-3 time">
                          <span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
                            <FeatherIcon.Clock size="20" /> 15–25 min
                          </span>{" "}
                          <span className="float-right text-black-50">
                            {" "}
                            $500 FOR TWO
                          </span>
                        </p>
                      </div>
                      <div className="list-card-badge">
                        <span className="badge badge-danger">OFFER</span>{" "}
                        <small>65% OSAHAN50</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="osahan-menu-fotter fixed-bottom bg-white px-3 py-2 text-center d-none">
          <div className="row">
            <div className="col selected">
              <Link
                to="/"
                className="text-danger small font-weight-bold text-decoration-none"
              >
                <p className="h4 m-0">
                  <i className="feather-home text-danger"></i>
                </p>
                Home
              </Link>
            </div>
            <div className="col">
              <Link
                to="/most_popular"
                className="text-dark small font-weight-bold text-decoration-none"
              >
                <p className="h4 m-0">
                  <i className="feather-map-pin"></i>
                </p>
                Trending
              </Link>
            </div>
            <div className="col bg-white rounded-circle mt-n4 px-3 py-2">
              <div className="bg-danger rounded-circle mt-n0 shadow">
                <Link
                  to="/checkout"
                  className="text-white small font-weight-bold text-decoration-none"
                >
                  <i className="feather-shopping-cart"></i>
                </Link>
              </div>
            </div>
            <div className="col">
              <Link
                to="favorites"
                className="text-dark small font-weight-bold text-decoration-none"
              >
                <p className="h4 m-0">
                  <FeatherIcon.Heart size="20" />
                </p>
                Favorites
              </Link>
            </div>
            <div className="col">
              <Link
                to="/profile"
                className="text-dark small font-weight-bold text-decoration-none"
              >
                <p className="h4 m-0">
                  <i className="feather-user"></i>
                </p>
                Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
