import React, {FC} from 'react';
import './IntroductionContainerRight.css';


interface IntroductionContainerRightProps {
    title?: string;
    titleDescription?: string;
    buttonText?: string;
    image?: string;
}

const IntroductionContainerRight: FC<IntroductionContainerRightProps>= ({title, titleDescription, buttonText, image}) => {
    return (
        <div className="introduction-container-right-wrapper">
            <div className="introduction-container-right-content">
                <section>
                    <h1>{title}</h1>
                    <p>{titleDescription}</p>
                    <button>{buttonText}</button>

                </section>
                <img src={image} alt="container-image" width={650}/>
            </div>
        </div>
    );
};

export default IntroductionContainerRight;