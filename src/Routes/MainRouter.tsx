import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import ForgotPassword from "../auth/ForgotPassword";
import Login from "../auth/Login";
import PageNotFound from "../auth/PageNotFound";
import SignUp from "../auth/SignUp";
import Verification from "../auth/Verification";
import Cart from "../cart/Cart";
import Checkout from "../cart/Checkout";
import Home from "../components/Home";
import Contact from "../components/Contact";
import Faqs from "../extras/Faqs";
import Offers from "../extras/Offers";
import Privacy from "../extras/Privacy";
import Terms from "../extras/Terms";
import AddProduct from "../product/AddProduct";
import EditProduct from "../product/EditProduct";
import ListProducts from "../product/ListProducts";
import Product from "../product/Product";
import ProductDetail from "../product/ProductDetail";
import AddRestaurant from "../restaurant/AddRestaurant";
import EditRestaurant from "../restaurant/EditRestaurant";
import ListRestaurants from "../restaurant/ListRestaurants";
import Restaurant from "../restaurant/Restaurant";
import RestaurantDetail from "../restaurant/RestaurantDetail";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import Location from "../shared/Location";
import Search from "../search/Search";
import SidebarNav from "../sidebar/SidebarNav";
import Profile from "../user/Profile";
import SearchDetail from "../search/SearchDetail";
import ListOrders from "../order/ListOrders";
import OrderDetail from "../order/OrderDetail";
import Order from "../order/Order";
import CartItem from "../cart/CartItem";
import AddToCart from "../cart/AddToCart";
import PlaceOrder from "../cart/PlaceOrder";

export default class MainRouter extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          {/* Authentication */}
          <Route path="/login" component={Login} />
          <Route path="/register" component={SignUp} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/verification" component={Verification} />
          <Route path="/profile" component={Profile} />
          <Route path="/location" component={Location} />
          <Route path="/sidebar" component={SidebarNav} />
          <Route path="/contact" component={Contact} />

          {/* Search */}
          <Route path="/search" component={Search} />
          <Route path="/search-detail" component={SearchDetail} />

          {/* Products */}
          <Route path="/products" component={ListProducts} />
          <Route path="/product/:productId" component={Product} />
          <Route path="/product-detail" component={ProductDetail} />
          <Route path="/edit-product" component={EditProduct} />
          <Route path="/add-product" component={AddProduct} />

          {/* Restaurants */}
          <Route path="/restaurants" component={ListRestaurants} />
          <Route path="/restaurant/:restaurantId" component={Restaurant} />
          <Route path="/restaurant-detail" component={RestaurantDetail} />
          <Route path="/edit-restaurant" component={EditRestaurant} />
          <Route path="/add-restaurant" component={AddRestaurant} />

          {/* Orders */}
          <Route path="/orders" component={ListOrders} />
          <Route path="/order/:orderId" component={Order} />
          <Route path="/order-detail" component={OrderDetail} />

          {/* Cart */}
          <Route path="/cart" component={Cart} />
          <Route path="/cart-item" component={CartItem} />
          <Route path="/addtocart" component={AddToCart} />
          <Route path="/placeorder" component={PlaceOrder} />
          <Route path="/checkout" component={Checkout} />

          {/* Extras */}
          <Route path="/offers" component={Offers} />
          <Route path="/terms" component={Terms} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/faqs" component={Faqs} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
