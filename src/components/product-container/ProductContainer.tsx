import React, {FC} from 'react';
import './ProductContainer.css';


interface ProductContainerProps {
    image?: string;
    features?: string;
    imageTitle?: string;
    discountPrice?: string;
    price?: string;
}

const ProductContainer:FC<ProductContainerProps> = ({image, features, imageTitle, discountPrice, price}) => {
    return (
        <div className="product-container-wrapper">
            <img src={image} alt="Product1"/>
            <p>{features}</p>
            <h2>{imageTitle}</h2>
            <h4>{discountPrice}</h4>
            <h3>{price}</h3>
        </div>
    );
};

export default ProductContainer;