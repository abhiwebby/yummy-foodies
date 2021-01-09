import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <div>
        <div className="d-none">
          <div className="bg-primary p-3 d-flex align-items-center">
            <a className="toggle togglew toggle-2" href="#">
              <span></span>
            </a>
            <h4 className="font-weight-bold m-0 text-white">Search</h4>
          </div>
        </div>
        <div className="osahan-popular">
          <div className="container">
            <div className="search py-5">
              <div className="input-group mb-4">
                <input
                  type="text"
                  className="form-control form-control-lg input_search border-right-0"
                  id="inlineFormInputGroup"
                  value="Osahan eats..."
                />
                <div className="input-group-prepend">
                  <div className="btn input-group-text bg-white border_search border-left-0 text-primary">
                    <i className="feather-search"></i>
                  </div>
                </div>
              </div>

              <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active border-0 bg-light text-dark rounded"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    <i className="feather-home mr-2"></i>Restaurants (8)
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link border-0 bg-light text-dark rounded ml-3"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    <i className="feather-disc mr-2"></i>Dishes (23)
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="container mt-4 mb-4 p-0">
                    <div className="row">
                      <div className="col-md-3 pb-3">
                        <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                          <div className="list-card-image">
                            <div className="star position-absolute">
                              <span className="badge badge-success">
                                <i className="feather-star"></i> 3.1 (300+)
                              </span>
                            </div>
                            <div className="favourite-heart text-danger position-absolute">
                              <a href="#">
                                <i className="feather-heart"></i>
                              </a>
                            </div>
                            <div className="member-plan position-absolute">
                              <span className="badge badge-dark">Promoted</span>
                            </div>
                            <a href="restaurant.html">
                              <img
                                alt="#"
                                src="img/popular1.png"
                                className="img-fluid item-img w-100"
                              />
                            </a>
                          </div>
                          <div className="p-3 position-relative">
                            <div className="list-card-body">
                              <h6 className="mb-1">
                                <a
                                  href="restaurant.html"
                                  className="text-black"
                                >
                                  The osahan Restaurant
                                </a>
                              </h6>
                              <p className="text-gray mb-1 small">
                                • North • Hamburgers
                              </p>
                              <p className="text-gray mb-1 rating">
                                <ul className="rating-stars list-unstyled">
                                  <li>
                                    <i className="feather-star star_active"></i>
                                    <i className="feather-star star_active"></i>
                                    <i className="feather-star star_active"></i>
                                    <i className="feather-star star_active"></i>
                                    <i className="feather-star"></i>
                                  </li>
                                </ul>
                              </p>
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
                                <i className="feather-star"></i> 3.1 (300+)
                              </span>
                            </div>
                            <div className="favourite-heart text-danger position-absolute">
                              <a href="#">
                                <i className="feather-heart"></i>
                              </a>
                            </div>
                            <div className="member-plan position-absolute">
                              <span className="badge badge-dark">Promoted</span>
                            </div>
                            <a href="restaurant.html">
                              <img
                                alt="#"
                                src="img/popular2.png"
                                className="img-fluid item-img w-100"
                              />
                            </a>
                          </div>
                          <div className="p-3 position-relative">
                            <div className="list-card-body">
                              <h6 className="mb-1">
                                <a
                                  href="restaurant.html"
                                  className="text-black"
                                >
                                  Thai Famous Indian Cuisine
                                </a>
                              </h6>
                              <p className="text-gray mb-1 small">
                                • Indian • Pure veg
                              </p>
                              <p className="text-gray mb-1 rating">
                                <ul className="rating-stars list-unstyled">
                                  <li>
                                    <i className="feather-star star_active"></i>
                                    <i className="feather-star star_active"></i>
                                    <i className="feather-star star_active"></i>
                                    <i className="feather-star star_active"></i>
                                    <i className="feather-star"></i>
                                  </li>
                                </ul>
                              </p>
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
                                <i className="feather-star"></i> 3.1 (300+)
                              </span>
                            </div>
                            <div className="favourite-heart text-danger position-absolute">
                              <a href="#">
                                <i className="feather-heart"></i>
                              </a>
                            </div>
                            <div className="member-plan position-absolute">
                              <span className="badge badge-dark">Promoted</span>
                            </div>
                            <a href="restaurant.html">
                              <img
                                alt="#"
                                src="img/popular3.png"
                                className="img-fluid item-img w-100"
                              />
                            </a>
                          </div>
                          <div className="p-3 position-relative">
                            <div className="list-card-body">
                              <h6 className="mb-1">
                                <a
                                  href="restaurant.html"
                                  className="text-black"
                                >
                                  The osahan Restaurant
                                </a>
                              </h6>
                              <p className="text-gray mb-1 small">
                                • Hamburgers • Pure veg
                              </p>
                              <p className="text-gray mb-1 rating">
                                <ul className="rating-stars list-unstyled">
                                  <li>
                                    <i className="feather-star star_active"></i>
                                    <i className="feather-star star_active"></i>
                                    <i className="feather-star star_active"></i>
                                    <i className="feather-star star_active"></i>
                                    <i className="feather-star"></i>
                                  </li>
                                </ul>
                              </p>
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
                                <i className="feather-star"></i> 3.1 (300+)
                              </span>
                            </div>
                            <div className="favourite-heart text-danger position-absolute">
                              <a href="#">
                                <i className="feather-heart"></i>
                              </a>
                            </div>
                            <div className="member-plan position-absolute">
                              <span className="badge badge-dark">Promoted</span>
                            </div>
                            <a href="restaurant.html">
                              <img
                                alt="#"
                                src="img/popular4.png"
                                className="img-fluid item-img w-100"
                              />
                            </a>
                          </div>
                          <div className="p-3 position-relative">
                            <div className="list-card-body">
                              <h6 className="mb-1">
                                <a
                                  href="restaurant.html"
                                  className="text-black"
                                >
                                  Bite Me Now Sandwiches
                                </a>
                              </h6>
                              <p className="text-gray mb-1 small">
                                American • Pure veg
                              </p>
                              <p className="text-gray mb-1 rating">
                                <ul className="rating-stars list-unstyled">
                                  <li>
                                    <i className="feather-star star_active"></i>
                                    <i className="feather-star star_active"></i>
                                    <i className="feather-star star_active"></i>
                                    <i className="feather-star star_active"></i>
                                    <i className="feather-star"></i>
                                  </li>
                                </ul>
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
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row d-flex align-items-center justify-content-center py-5">
                    <div className="col-md-4 py-5">
                      <div className="text-center py-5">
                        <p className="h4 mb-4">
                          <i className="feather-search bg-primary text-white rounded p-2"></i>
                        </p>
                        <p className="font-weight-bold text-dark h5">
                          Nothing found
                        </p>
                        <p>
                          we could not find anything that would match your
                          search request, please try again.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="osahan-menu-fotter fixed-bottom bg-white px-3 py-2 text-center d-none">
            <div className="row">
              <div className="col">
                <a
                  href="home.html"
                  className="text-dark small font-weight-bold text-decoration-none"
                >
                  <p className="h4 m-0">
                    <i className="feather-home"></i>
                  </p>
                  Home
                </a>
              </div>
              <div className="col selected">
                <a
                  href="trending.html"
                  className="text-danger small font-weight-bold text-decoration-none"
                >
                  <p className="h4 m-0">
                    <i className="feather-map-pin text-danger"></i>
                  </p>
                  Trending
                </a>
              </div>
              <div className="col bg-white rounded-circle mt-n4 px-3 py-2">
                <div className="bg-danger rounded-circle mt-n0 shadow">
                  <a
                    href="checkout.html"
                    className="text-white small font-weight-bold text-decoration-none"
                  >
                    <i className="feather-shopping-cart"></i>
                  </a>
                </div>
              </div>
              <div className="col">
                <a
                  href="favorites.html"
                  className="text-dark small font-weight-bold text-decoration-none"
                >
                  <p className="h4 m-0">
                    <i className="feather-heart"></i>
                  </p>
                  Favorites
                </a>
              </div>
              <div className="col">
                <a
                  href="profile.html"
                  className="text-dark small font-weight-bold text-decoration-none"
                >
                  <p className="h4 m-0">
                    <i className="feather-user"></i>
                  </p>
                  Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
