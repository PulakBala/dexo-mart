import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { adToDb } from '../Utilities/adToDb';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    const handleAddToCart = (products) =>{
        // console.log(products);
        const newCart = [...cart, products]
        setCart(newCart);
        adToDb(products.id)
    }
    return (
        <div className='shop-container'>
          <div className="products-container">
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
          </div>
          <div className="cart-container">
                <Cart cart={cart}></Cart>
          </div>
        </div>
    );
};

export default Shop;