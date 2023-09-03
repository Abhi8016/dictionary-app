import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import './NavBar.css'

const Navbar = () => {

    return (
        <div>
            <div className="navbar">
                <h1>Dictionary App</h1>
                <div className="items">
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/History">History</NavLink>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Navbar;