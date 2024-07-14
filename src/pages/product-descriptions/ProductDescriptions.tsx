import React from 'react';
import Header from '../../components/header/Header';
import {ReactComponent as Product2} from "../../assets/images/Product2.svg";

const ProductDescriptions = () => {
    return (
        <div className="product-description-wrapper">
            <Header/>
            <div className="description-wrapper">
                <div className="description-content">
                    <div className="description-right-content">
                        <p>
                            Hosting Package

                        </p>
                        <h1>
                            Hosting Package for Server 1000W - 1500W
                        </h1>
                        <p>
                            $500 - $1500
                        </p>
                        <p>
                            20% VAT applicable on UK based orders
                        </p>
                        <p>
                            Introducing our hosting package for 1000-1500W systems, the ideal solution for powering your
                            high-performance servers. With robust infrastructure and exceptional reliability, our
                            package is designed to meet the demands of today's intensive workloads. Enjoy seamless
                            scalability, low-latency access, and 24/7 support, ensuring your systems run at peak
                            efficiency.
                        </p>

                    </div>
                    <div className="description-left-content">
                        <div className="flex justify-center mt-10">
                            <Product2/>
                        </div>
                    </div>

                </div>


            </div>


        </div>
    );
};

export default ProductDescriptions;