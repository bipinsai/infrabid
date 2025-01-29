import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import Button from "./shared/button"; // Assuming Button is a shared component
import "../styles/NavBar.scss";

const Layout = ({ children }) => {
    return (
        <div>
            {/* Navbar */}
            <nav className="navbar">
                <div className="logo">
                    <img src="/path/to/logo.png" alt="Logo" />
                </div>
                <div className="navbar-links">
                    <Link to="/" className="nav-btn">Home</Link>
                    <Link to="/about" className="nav-btn">About</Link>
                    <Link to="/services" className="nav-btn">Services</Link>
                </div>
                <Button
                    placeholder="Sign In"
                    customColor="#E04E10"
                    width={120}
                    height={50}
                    fontWeight={700}
                    className="sign-in-btn"
                />
            </nav>

            {/* Main Content */}
            <main>{children}</main> {/* Renders the page content */}
        </div>
    );
};

export default Layout;
