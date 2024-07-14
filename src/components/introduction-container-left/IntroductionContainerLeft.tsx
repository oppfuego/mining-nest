import React, {FC} from 'react';
import './IntroductionContainerLeft.css';

interface IntroductionContainerProps {
    title?: string;
    titleDescription?: string[];
    buttonText?: string;
    image?: string;
}

const IntroductionContainer: FC<IntroductionContainerProps> = ({title, titleDescription, buttonText, image}) => {
    return (
        <div className="introduction-container-wrapper">
            <div className="introduction-container">
                <img src={image} alt="container-image" width={450}/>
                <section>
                    <h1>{title}</h1>
                    {titleDescription?.map((desc, index) => <p key={index}>{desc}</p>)}
                    <button>{buttonText}</button>
                </section>
            </div>
        </div>
    );
};

export default IntroductionContainer;