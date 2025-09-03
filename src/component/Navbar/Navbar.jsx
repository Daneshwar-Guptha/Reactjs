import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Home from "../Home/Home";
import "./Navbar.css";

const Navbar = () => {
    return (

        <>
            <div className="NavBarConatiner">
                <h1>GUPTHA</h1>


                <div>
                    <ul className="NavbarList">
                        <li> <Link to="/Home">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Features">Features</Link></li>
                        <li><Link to="/Products">Products</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                    </ul>

                </div>

            </div>


        </>
    )


};

export default Navbar;
