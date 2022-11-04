import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const {products,  initialCart} = useLoaderData();
    return (
        <div>
            <h2>This is Order page: {products.length}</h2>
            <h2>Initial Cart : {initialCart.length}</h2>
        </div>
    );
};

export default Orders;