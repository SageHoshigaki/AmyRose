import React from 'react';
import Nav from '../components/Nav';
import MaterializeProduct from '../components/ProductEntry';

function Shop() {
    return (<div>
        <Nav/>
        <h3>This Is The Shop Page</h3>
        <h1>We will start with cart and stripe implementation</h1>
        <MaterializeProduct/>


    </div>
    );
}

export default Shop;