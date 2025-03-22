import React from "react";
import HeadSection from "../shared/headSection";
import EquipmentRequirements from "../homePage/EquipmentTender";
import { tenderData, testimonials } from "../../mocks/mock";
import ReachOutForm from "../shared/reachOutForm";
import Footer from "../shared/footer";
import '../../styles/ContractsPage.scss'
import Button from "../shared/button";
import Testimonials from "../homePage/Testimonials";
import HireEquipment from "../equipmentPage/HireEquipment";
import ContractImageList from "../equipmentPage/EquipmentImageList";
import logo from '../../assets/background.jpg';

const ContractsPage = () => {
    return (
        <div className="services-page">
        <ReachOutForm
            title="Reach out to us!"
            buttonText="Submit"
        // onSubmit={handleSubmit} // Pass the onSubmit handler to the form
        />
        <Footer />
    </div>
        
    );
};

export default ContractsPage;