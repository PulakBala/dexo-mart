import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { adToDb, getStoreCart } from '../Utilities/adToDb';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    useEffect(() =>{
        const storedCart = getStoreCart();
        const saveCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }
        }
        setCart(saveCart);
    },[products])
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