import React, { useEffect, useState, useMemo } from "react";
import Button from "./button";
import Layout from "./Layout";
import '../../styles/ContractsPage.scss';
import logo from '../../assets/landing_page.png';
import equipments_background from '../../assets/equipments_home.png';
import contracts_background from '../../assets/contracts_home.png';
import aboutUs from '../../assets/about_us.png';

const HeadSection = ({ componetType, HeadText, subText, buttonAlign }) => {
    const [backgroundImage, setBackgroundImage] = useState();

    // Use useMemo to avoid recalculating the background image on every render
    const memoizedBackgroundImage = useMemo(() => {
        switch (componetType) {
            case 'mainpage': return logo;
            case 'contractspage': return contracts_background;
            case 'equipmentpage': return equipments_background;
            case 'aboutuspage': return aboutUs;
            default: return null;
        }
    }, [componetType]);

    useEffect(() => {
        setBackgroundImage(memoizedBackgroundImage);
    }, [memoizedBackgroundImage]);

    return (
        <div id="home" className="home-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="overlay"></div>
            <Layout />
            {componetType === 'mainpage' && (
                <div className="content">
                    <div className="content-title">
                        CONSTRUCTION SOLUTIONS,<br />
                        <span className="highlight">MADE SIMPLE.</span>
                    </div>
                    <div className="flex-container">
                        <div className="content-sub-title">
                            Find the right construction equipment to rent and explore contract
                            opportunities, all in one platform.
                        </div>
                        <div className="buttons">
                            <Button 
                                placeholder={'For Tenders'} 
                                customColor={'#E04E10'} 
                                width={220} 
                                height={58} 
                                onClick={() => window.location.href = '/contracts'} 
                            />
                            <Button 
                                placeholder={'For Equipment'} 
                                customColor={'#033F59'} 
                                width={220} 
                                height={58} 
                                onClick={() => window.location.href = '/equipment'} 
                            />
                        </div>
                    </div>
                </div>
            )}
            {componetType === 'contractspage' && (
                <div className="contracts-wrapper">
                    <div className="contracts-content">
                        <div className="contracts-content-title">CONTRACTS MADE <br /> <span className="contracts-highlight"> SMARTER & FASTER</span> 
                            <div className="contracts-content-sub-title">
                                Post, bid and finalize construction tenders with ease - all on one seamless platform.
                            </div>
                        </div>
                        <div className="contracts-buttons">
                            <Button placeholder={'Explore tenders'} customColor={'#E04E10'} width={220} height={58} fontSize={14} />
                            <Button placeholder={'Add your tender'} customColor={'#033F59'} width={220} height={58} fontSize={14} border={'1px solid #FFFFFF'} />
                        </div>
                    </div>
                </div>
            )}
            {componetType === 'equipmentpage' && (
                <div className="contracts-wrapper">
                    <div className="contracts-content">
                        <div className="contracts-content-title">RENT THE <span className="contracts-highlight">BEST EQUIPMENT</span> <br />FOR YOUR PROJECT
                            <div className="contracts-content-sub-title">
                                Discover, rent, or list construction equipment effortlessly—connecting you to the equipment you need for every project.
                            </div>
                        </div>
                        <div className="contracts-buttons">
                            <Button placeholder={'View Requirements'} customColor={'#E04E10'} width={220} height={58} fontSize={14} />
                            <Button placeholder={'Hire Equipment'} customColor={'#033F59'} width={220} height={58} fontSize={14} border={'1px solid #FFFFFF'} />
                            <Button placeholder={'Add your Equipment'} customColor={'#033F59'} width={220} height={58} fontSize={14} border={'1px solid #FFFFFF'} />
                        </div>
                    </div>
                </div>
            )}
            {componetType === 'aboutuspage' && (
                <div className="content" style={{ paddingLeft: '50px' }}>
                    <div className="content-title">
                        BUILDING THE,<br />
                        <span className="highlight">FUTURE OF</span> <br />
                        <span className="highlight"> CONSTRUCTION.</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HeadSection;
