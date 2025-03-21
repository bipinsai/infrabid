import React, { useEffect, useState } from "react";
import Button from "./button";
import Layout from "./Layout";
import '../../styles/ContractsPage.scss'
import logo from '../../assets/landing_page.png'
import logo2 from '../../assets/contracts_home.png'
import frame1 from '../../assets/frame1.png'
const HeadSection = ({ componetType, HeadText, subText, buttonAlign }) => {
    // State to manage the background image
    const [backgroundImage, setBackgroundImage] = useState();

    useEffect(() => {
        if (componetType === 'mainpage') {
            setBackgroundImage(logo);
        } else  if (componetType == 'contractspage') {
            setBackgroundImage(logo2)
        } else if (componetType == 'aboutuspage') {
            setBackgroundImage(frame1)
        }
    }, [componetType]);

    return (
        <div id="home" className="home-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="overlay"></div>
            <Layout />
            {componetType === 'mainpage' ? <div className="content">
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
                        <Button placeholder={'For Tenders'} customColor={'#E04E10'} width={220} height={58} />
                        <Button placeholder={'For Equipment'} customColor={'#033F59'} width={220} height={58} />
                    </div>
                </div>
            </div> : componetType === 'contractspage' ? 
                <div className="contracts-wrapper">
                    <div className="contracts-content">
                        <div className="contracts-content-title">RENT THE <span className="contracts-highlight">BEST EQUIPMENT</span> <br />FOR YOUR PROJECT
                            <div className="contracts-content-sub-title">
                                Discover, rent, or list construction equipment effortlessly—connecting you to the equipment you need for every project.
                            </div>
                        </div>
                        <div className="contracts-buttons">
                            <Button placeholder={'For Tenders'} customColor={'#E04E10'} width={220} height={58} />
                            <Button placeholder={'For Equipment'} customColor={'#033F59'} width={220} height={58} border={'1px solid #FFFFFF'}/>
                            <Button placeholder={'For Equipment'} customColor={'#033F59'} width={220} height={58} border={'1px solid #FFFFFF'}/>
                        </div>
                    </div>
                </div> : componetType === 'aboutuspage' ? null : null}
        </div>
    )
}

export default HeadSection