import React, {FC} from 'react';
import './PriceListContainer.css';
import ProductContainer from "../product-container/ProductContainer";
import Product1 from "../../assets/images/Product1.svg";
import Product2 from "../../assets/images/Product2.svg";
import Product3 from "../../assets/images/Product3.svg";
import Product4 from "../../assets/images/Product4.svg";

interface PriceListContainerProps {
    title?: string;
}

const PriceListContainer:FC<PriceListContainerProps> = ({title}) => {
    return (
        <div className="price-list-container-wrapper">
            <div className="price-list-container">
                <div className="servers-container">
                    <h1>{title}</h1>
                    <div className="tariff-container">
                        <button>All</button>
                        <button>Hourly</button>
                        <button>Daily</button>
                        <button>Weekly</button>
                        <button>Monthly</button>
                    </div>
                </div>
                <section className="product-container">
                    <ProductContainer
                        image={Product1} features="Hosting Package" imageTitle="Hosting Package for Server 500-1000W"
                        price="$120.00 - $1500.00" discountPrice="20% VAT applicable on UK based orders"/>
                    <ProductContainer
                        image={Product2} features="Hosting Package" imageTitle="Hosting Package for Server 500-1000W"
                        price="$120.00 - $1500.00" discountPrice="20% VAT applicable on UK based orders"/>
{/*fdbfsbsfb*/}
                    <ProductContainer
                        image={Product3} features="Hosting Package" imageTitle="Hosting Package for Server 500-1000W"
                        price="$120.00 - $1500.00" discountPrice="20% VAT applicable on UK based orders"/>
                    <ProductContainer
                        image={Product4} features="Hosting Package" imageTitle="Hosting Package for Server 500-1000W"
                        price="$120.00 - $1500.00" discountPrice="20% VAT applicable on UK based orders"/>
                </section>
                <button className="view-all-button">
                    View All
                </button>
            </div>
        </div>
    );
};

export default PriceListContainer;