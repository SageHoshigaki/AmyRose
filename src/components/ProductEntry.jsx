import React from 'react';
import ProductsStructure from './Products';
import productList from '../products';

function ProductEntry(productsList) {
    return (
        <div>
            <ProductsStructure
                img={productList.img}
                price={productsList.price}
            />
        </div>
    )
}

function MaterializeProduct() {
    return (<div>{productList.map(ProductEntry)}</div>);
}

export default MaterializeProduct;