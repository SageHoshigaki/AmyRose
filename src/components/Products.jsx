import React from 'react';

function ProductsStructure(props) {
    return (
        <div>
            <div class="columns">
                <div class="column">
                    <h1>{props.img}</h1>
                    <h2>{props.price}</h2>
                </div>
            </div>
            </div>
    );
}
export default ProductsStructure;