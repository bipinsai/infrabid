import React, { useEffect, useState } from "react";
import Button from "./button";
import Layout from "./Layout";
import '../../styles/ContractsPage.scss'
import logo from '../../assets/VN20241201_190616.png'
import logo2 from '../../assets/logo.svg'

const HeadSection = ({ componetType, HeadText, subText, buttonAlign }) => {
    // State to manage the background image
    const [backgroundImage, setBackgroundImage] = useState();

    useEffect(() => {
        // Example condition: Change background image based on some logic or props
        // Here, we're just using a timeout to simulate a condition change
        // const timeout = setTimeout(() => {
        //     setBackgroundImage(logo2); // Change the image after 3 seconds
        // }, 3000);

        // return () => clearTimeout(timeout); // Cleanup timeout on component unmount
        if (componetType === 'mainpage') {
            setBackgroundImage(logo);
        } else {
            setBackgroundImage(logo2)
        }
    }, [componetType]);

    return (
        <div id="home" className="home-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="overlay"></div>
            <Layout />
            {componetType === 'mainpage' ? <div className="content">
                <div className="content-title">
                    CONSTRUCTION SOLUTIONS, <br />
                    <span className="highlight">MADE SIMPLE.</span>
                    <div className="content-sub-title">
                        Find the right construction equipment to rent and explore contract
                        opportunities, all in one platform.
                    </div>
                </div>
                <div className="buttons">
                    <Button placeholder={'For Tenders'} customColor={'#E04E10'} width={220} height={58} />
                    <Button placeholder={'For Equipment'} customColor={'#033F59'} width={220} height={58} />
                </div>
            </div> :
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
                </div>}
        </div>
    )
}

export default HeadSection