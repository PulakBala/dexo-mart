import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const product = useLoaderData();
    return (
        <div>
            <h2>This is Order page: {product.length}</h2>
        </div>
    );
};

export default Orders;