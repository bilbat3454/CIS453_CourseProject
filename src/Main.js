import React, { Component } from "react";
import {
    Route, Routes,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Products from "./Products";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                    <div>
                    <h1>Nature Boy Grooming</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About Us</NavLink></li>
                        <li><NavLink to="/products">Products</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/about" element={<About />}/>
                        <Route path="/products" element={<Products />}/>
                        <Route path="/contact" element={<Contact/>}/>
                    </Routes>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;