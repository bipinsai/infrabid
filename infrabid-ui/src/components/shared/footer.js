import React from 'react';
import { IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import '../../styles/Footer.scss';
import frame1 from '../../assets/frame1.png';

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src={frame1} alt="Logo" />
                    </div>
                    <div className="footer-links">
                        <div className="footer-btn">COMPANY <hr />
                            <div className="footer-sub-divisions" onClick={() => window.location.href = '/'} style={{ cursor: 'pointer' }}>Home</div>
                            <div className="footer-sub-divisions" onClick={() => window.location.href = '/contracts'} style={{ cursor: 'pointer' }}>Contracts</div>
                            <div className="footer-sub-divisions" onClick={() => window.location.href = '/equipement'} style={{ cursor: 'pointer' }}>Equipments</div>
                            <div className="footer-sub-divisions" onClick={() => window.location.href = '/aboutus'} style={{ cursor: 'pointer' }}>About Us</div>
                        </div>
                        <div className="footer-btn">LEGAL<hr />
                            <div className="footer-sub-divisions">Privacy Policy</div>
                            <div className="footer-sub-divisions">Terms of Service</div>
                        </div>
                        <div className="footer-btn">CONTACT<hr />
                            <div className='footer-contact-info'>
                                <div className='footer-icon-wrapper'><IconButton className="footer-icon">
                                    <PhoneIcon />
                                </IconButton>
                                    <span style={{ fontWeight: '500', fontSize: '20px', color: '#FFFFFF' }}>+91 - 7680993056</span></div>
                                <div className='footer-icon-wrapper'><IconButton className="footer-icon">
                                    <MailIcon />
                                </IconButton>
                                    <span style={{ fontWeight: '500', fontSize: '20px', color: '#FFFFFF', textTransform: 'lowercase' }}>shreyas@infrabid.in</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="footer-copywrite">Copyright @ 2025 INFRABID</div>
        </div>
    )
}

export default Footer