import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/product/ProductDetail';

const Product = () => {
    const { id } = useParams();

    return (
        <ProductDetail id={id} />
    )
}


export default Product;