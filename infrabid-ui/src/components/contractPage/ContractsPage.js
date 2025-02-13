import React from "react";
import HeadSection from "../shared/headSection";
import EquipmentRequirements from "../homePage/EquipmentTender";
import { tenderData, testimonials } from "../../mocks/mock";
import ReachOutForm from "../shared/reachOutForm";
import Footer from "../shared/footer";
import '../../styles/ContractsPage.scss'
import Button from "../shared/button";
import Testimonials from "../homePage/Testimonials";
import HireEquipment from "./HireEquipment";
import ContractImageList from "./ContractImageList";
import logo from '../../assets/background.jpg';

const ContractsPage = () => {
    return (
        <div className="landing-page">
            <HeadSection componetType={'contractspage'} />
            <ContractImageList images={[{ id: 1, 'image': logo, 'title': 'welcome' }, { id: 2, 'image': logo, 'title': 'welcome' }, { id: 3, 'image': logo, 'title': 'welcome' }, { id: 4, 'image': logo, 'title': 'welcome' }, { id: 5, 'image': logo, 'title': 'welcome' }, { id: 6, 'image': logo, 'title': 'welcome' }, { id: 7, 'image': logo, 'title': 'welcome' }, { id: 8, 'image': logo, 'title': 'welcome' }]} />
            <div style={{ paddingBottom: '40px' }}>
                <div className="contract-equipment-requirements-section">
                    <EquipmentRequirements component={'contracts-equipment'} title={'LATEST EQUIPMENT REQUIRMENTS'} data={tenderData} />
                </div>
                <Button placeholder={'LIST / RENT EQUIPMENT'} customColor={'#E04E10'} />
            </div>
            <Testimonials testimonials={testimonials} />
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

export default ContractsPage;