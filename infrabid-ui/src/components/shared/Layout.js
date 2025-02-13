import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import Button from "./button"; // Assuming Button is a shared component
import "../../styles/NavBar.scss";

const Layout = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src="/path/to/logo.png" alt="Logo" />
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-btn">Home</Link>
                <Link to="/contracts" className="nav-btn">Contracts</Link>
                <Link to="/equipment" className="nav-btn">Equipment</Link>
                <Link to="/aboutus" className="nav-btn">Aboutus</Link>
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
        // <main>{children}</main>
    );
};

export default Layout;
