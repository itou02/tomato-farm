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
                <Route path="/tomato-farm/" element={<Home />} />
                <Route path="https://itou02.github.io/tomato-farm/farm-story" element={<Story />} /> 
                <Route path="https://itou02.github.io/products" element={<Prod />} />
                <Route path="https://itou02.github.io/questions" element={<FaQ />} />
                <Route path="https://itou02.github.io/order" element={<Order />} />
                <Route path="https://itou02.github.io/order-detail" element={<OrderDetail />} /> 
                <Route path="https://itou02.github.io/goods" element={<Goods />} />
                <Route path="https://itou02.github.io/contact-us" element={<Contact />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Router;
