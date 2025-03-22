import React from "react";
// import "../styles/ServicesPage.scss"; // You can add your own styles
import HeadSection from "../shared/headSection";
import EquipmentRequirements from "../homePage/EquipmentTender";
import { bidData, testimonials } from "../../mocks/mock";
import ReachOutForm from "../shared/reachOutForm";
import Footer from "../shared/footer";
import '../../styles/ContractsPage.scss'
import Button from "../shared/button";
import Testimonials from "../homePage/Testimonials";
import HireEquipment from "./HireEquipment";
import EquipmentImageList from "./EquipmentImageList";
import logo from '../../assets/background.jpg';
import earthmoving from '../../assets/earth_moving.png';
import crane from '../../assets/crane.png';
import concrete_machinery from '../../assets/concrete_machinery.png';
import trucks from '../../assets/trucks.png';
const EquipmentPage = () => {
    return (
        <div className="landing-page">
        <HeadSection componetType={'equipmentpage'} />
        <EquipmentImageList images={[
            { id: 1, 'image': earthmoving, 'title': 'earth moving' }, 
            { id: 2, 'image': crane, 'title': 'cranes' }, 
            { id: 3, 'image': trucks, 'title': 'trucks' }, 
            { id: 4, 'image': concrete_machinery, 'title': 'concrete machinery' }, 
            // { id: 5, 'image': logo, 'title': 'welcome' }, 
            // { id: 6, 'image': logo, 'title': 'welcome' }, 
            // { id: 7, 'image': logo, 'title': 'welcome' }, 
            // { id: 8, 'image': logo, 'title': 'welcome' }
            ]} />
            {/* <div className="equipment-requirements-section" style={{ paddingLeft: '50px' }}>
                <EquipmentRequirements component={'equipment'} data={bidData} />
            </div> */}
        <div style={{ paddingBottom: '40px' }}>
            <div className="contract-equipment-requirements-section">
                <EquipmentRequirements component={'contracts-equipment'} title={'LATEST EQUIPMENT REQUIRMENTS'} data={bidData} />
            </div>
            <Button placeholder={'VIEW ALL'} customColor={'#E04E10'} />
        </div>
        {/* <Testimonials testimonials={testimonials} /> */}
        <HireEquipment />
        <ReachOutForm
            title="Reach out to us!"
            buttonText="Submit"
        // onSubmit={handleSubmit} // Pass the onSubmit handler to the form
        />
        <Footer />
    </div>
        
    );
};

export default EquipmentPage;