import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/index";
import Story from "./FarmStory";
import Prod from "./Prod";
import FaQ from "./FaQ";
import Order from "./Order";
import OrderDetail from "./OrderDetail";
import Goods from "./Goods";
import Contact from "./Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/tomato-farm" element={<Home />} />
                <Route path="/tomato-farm/farm-story" element={<Story />} /> 
                <Route path="/tomato-farm/products" element={<Prod />} />
                <Route path="/tomato-farm/questions" element={<FaQ />} />
                <Route path="/tomato-farm/order" element={<Order />} />
                <Route path="/tomato-farm/order-detail" element={<OrderDetail />} /> 
                <Route path="/tomato-farm/goods" element={<Goods />} />
                <Route path="/tomato-farm/contact-us" element={<Contact />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Router;
