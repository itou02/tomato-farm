import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/index";
// import Story from "./FarmStory";
// import Prod from "./Prod";
// import FaQ from "./FaQ";
// import Order from "./Order";
// import OrderDetail from "./OrderDetail";
// import Goods from "./Goods";
// import Contact from "./Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/farm-story" element={<Story />} /> 
                <Route path="/prodoct" element={<Prod />} />
                <Route path="/questions" element={<FaQ />} />
                <Route path="/order" element={<Order />} />
                <Route path="/order-detail" element={<OrderDetail />} />
                <Route path="/goods" element={<Goods />} />
                <Route path="/contact-us" element={<Contact />} /> */}
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Router;
