import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { adToDb, deleteShooppingCart, getStoreCart } from '../Utilities/adToDb';
import './Shop.css'

const Shop = () => {
   const products = useLoaderData(); 
    const [cart, setCart] = useState([]);

    const clearCart = ()=> {
        setCart([]);
        deleteShooppingCart();
    }

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
    const handleAddToCart = (selectedProduct) =>{
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        adToDb(selectedProduct.id)
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
                <Cart clearCart={clearCart} cart={cart}>
                    <Link to="/orders">
                        <button>Review Order</button>
                    </Link>
                </Cart>
          </div>
        </div>
    );
};

export default Shop;