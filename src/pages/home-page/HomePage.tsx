import React from 'react';
import Header from "../../components/header/Header";
import IntroductionContainerRight from "../../components/introduction-container-right/IntroductionContainerRight";
import RobotImage from "../../assets/images/robot.svg";
import PosibilitiesContainer from "../../components/posibilities-container/PosibilitiesContainer";
import PriceListContainer from "../../components/price-list-container/PriceListContainer";

const HomePage = () => {
    return (
        <>
            <Header/>
            <IntroductionContainerRight
                title="Elevate Your Mining Game with Us"
                titleDescription="Experience next-level crypto mining like never before. Our dedicated server spaces
                provide the perfect environment to maximize your profits. Join the crypto revolution with us today. "
                buttonText="Get Started Now" image={RobotImage}/>
            <PosibilitiesContainer firstText="Crypto Server Sales" secondText="Server Configuration" thirdText="Consultation and Support"/>
            <PriceListContainer
                title="Our Featured Servers"/>

        </>
    );
};

export default HomePage;