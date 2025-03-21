import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import Button from "./button"; // Assuming Button is a shared component
import "../../styles/NavBar.scss";
import logo from '../../assets/frame2.png';

const Layout = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="INFRABID" />
                <span className="logo-text" style={{ marginTop: '7px' }}>INFRABID</span>
            </div>
            <div style={{ marginTop: '7px' }} className="navbar-links">
                <Link to="/" className="nav-btn">Home</Link>
                <Link to="/contracts" className="nav-btn">Contracts</Link>
                <Link to="/equipment" className="nav-btn">Equipment</Link>
                <Link to="/aboutus" className="nav-btn">About us</Link>
            </div>
            <Button
                placeholder="Sign In"
                customColor="#E04E10"
                width={100}
                height={30}
                fontWeight={700}
                className="sign-in-btn"
            />
        </nav>
    );
};

export default Layout;
