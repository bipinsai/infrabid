import React from "react";
import HeadSection from "../shared/headSection";
import EquipmentRequirements from "../homePage/EquipmentTender";
import { tenderData, testimonials } from "../../mocks/mock";
import ReachOutForm from "../shared/reachOutForm";
import Footer from "../shared/footer";
import '../../styles/ContractsPage.scss'
import Button from "../shared/button";
import Testimonials from "../homePage/Testimonials";
import Contracts from "../contractPage/Contracts";
import ContractImageList from "../contractPage/ContractImageList";
import DailyWageWorkers from "../contractPage/DailyWageWorkers";
import masonry from '../../assets/masonry.png';
import flooring from '../../assets/flooring.png';
import general from '../../assets/general.png';
import painting from '../../assets/painting.png';

const ContractsPage = () => {
    return (
        <div className="landing-page">
        <HeadSection componetType={'contractspage'} />
        <ContractImageList images={[
            { id: 1, 'image': masonry, 'title': 'masonry' }, 
            { id: 2, 'image': flooring, 'title': 'flooring' }, 
            { id: 3, 'image': general, 'title': 'general works' }, 
            { id: 4, 'image': painting, 'title': 'painting' }, 
            // { id: 5, 'image': logo, 'title': 'welcome' }, 
            // { id: 6, 'image': logo, 'title': 'welcome' }, 
            // { id: 7, 'image': logo, 'title': 'welcome' }, 
            // { id: 8, 'image': logo, 'title': 'welcome' }
            ]} />
        <DailyWageWorkers />
        <div style={{ paddingBottom: '40px' }}>
            <div className="contract-equipment-requirements-section">
                <EquipmentRequirements component={'contracts-equipment'} title={'LATEST CONTRACTS'} data={tenderData} isContract={true} />
            </div>
            <Button placeholder={'VIEW ALL'} customColor={'#E04E10'} />
        </div>
        {/* <Testimonials testimonials={testimonials} /> */}
        <Contracts />
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