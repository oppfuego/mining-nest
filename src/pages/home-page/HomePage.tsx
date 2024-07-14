import React from 'react';
import Header from "../../components/header/Header";
import IntroductionContainerRight from "../../components/introduction-container-right/IntroductionContainerRight";
import PossibilitiesContainer from "../../components/posibilities-container/PosibilitiesContainer";
import PriceListContainer from "../../components/price-list-container/PriceListContainer";
import IntroductionContainerLeft from "../../components/introduction-container-left/IntroductionContainerLeft";
import MainPossibilitiesContainer from "../../components/main-possibilities-container/MainPossibilitiesContainer";
import RobotImage from "../../assets/images/robot.svg";
import Features from "../../assets/images/Features.svg";
import Security from "../../assets/images/Security.svg";
import Services from "../../assets/images/Services.svg";
import Footer from "../../components/footer/Footer";


const HomePage = () => {
    return (
        <>
            <Header/>
            <IntroductionContainerRight
                title="Elevate Your Mining Game with Us"
                titleDescription={[
                    "Experience next-level crypto mining like never before. Our dedicated server spaces provide the perfect environment to maximize your profits. Join the crypto revolution with us today."
                ]}
                buttonText="Get Started Now"
                image={RobotImage}/>

            <PossibilitiesContainer
                firstText="Crypto Server Sales"
                secondText="Server Configuration"
                thirdText="Consultation and Support"/>

            <PriceListContainer
                title="Our Featured Servers"/>

            <IntroductionContainerRight
                title="Our Outstanding Features Set Us Apart"
                titleDescription={[
                    "At Mining Nest, we take pride in offering a comprehensive suite of features that set us apart as a leader in the crypto mining industry. Our commitment to excellence and innovation ensures that you have all the tools you need to succeed in the world of cryptocurrency mining.",
                    "Our high-performance servers are at the heart of our service. They are equipped with cutting-edge hardware, boasting impressive hash rates and power efficiency. This means you can mine your favorite cryptocurrencies with confidence, knowing that you are using the most advanced infrastructure available."
                ]}
                buttonText="Get Started"
                image={Features}/>

            <IntroductionContainerLeft
                title="Unwavering Security and Reliability
                You Can Trust"
                titleDescription={[
                    "At Mining Nest, we prioritize the security and reliability of our servers above all else. We understand that in the world of cryptocurrency mining, safeguarding your assets and ensuring uninterrupted operations are paramount.",
                    "Our commitment to security begins with our state-of-the-art facilities. Our servers are housed in secure environments with multiple layers of protection. We employ the latest in physical security measures, including biometric access control and 24/7 surveillance to prevent unauthorized access.",
                    "Reliability is equally crucial to us. We've invested in redundant power and cooling systems to ensure that your mining operations continue without interruption. Even in the face of unexpected challenges, our infrastructure is designed to keep your mining hardware running smoothly."
                ]}
                buttonText={"Learn More"}
                image={Security}/>

            <IntroductionContainerRight
                title="Unparalleled Robustness for
Consistent Mining Performance"
                titleDescription={[
                    "At Mining Nest, we take pride in the exceptional robustness of our servers, ensuring consistent and unwavering mining performance for our clients. We understand that in the world of cryptocurrency mining, even a momentary lapse in performance can translate to missed opportunities and potential financial losses.",
                    "Our servers are built to withstand the most demanding mining operations. Equipped with cutting-edge hardware and meticulous design, they offer the highest levels of reliability and resilience. Our robust infrastructure minimizes the risk of downtime, even in the face of heavy workloads or unforeseen challenges.",
                    "With us, you can count on the continuous, stable operation of your mining hardware. Our commitment to robustness means you can focus on growing your mining portfolio and maximizing your profits with confidence. When you choose us, you're choosing a partner dedicated to providing you with the dependable server solutions needed for long-term success in the cryptocurrency mining industry."
                ]}
                buttonText="Get Started"
                image={Services}/>

            <MainPossibilitiesContainer
                firstTitle="3000+"
                firstDescription="Serving thousands of satisfied
                users in 67 countries worldwide"
                secondTitle="99.99%"
                secondDescription="server Uptime of
                our Crypto Servers"
                thirdTitle="500M+"
                thirdDescription="worth of assets secured by
                our crypto servers"
                fourthTitle="100%"
                fourthDescription="Our user satisfaction rate
                for Quality Services"/>

            <Footer/>

        </>
    );
};

export default HomePage;