import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb, deleteShooppingCart} from '../Utilities/adToDb';
import { Link } from "react-router-dom";
import './ Order.css'
import useTitle from '../../hook/useTitle';
import Footer from '../Footer/Footer';

const Orders = () => {
    const {initialCart} = useLoaderData();
    useTitle('Orders');
    const [cart, setCart] = useState(initialCart);

    const handleRemoveItem = (id) =>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id)
    }

    const clearCart = () =>{
        setCart([]);
        deleteShooppingCart();
    }

    return (
        <div >
           <div className='shop-container'>
           <div className="orders-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveItem={handleRemoveItem}
                    ></ReviewItem>)
                }
                {
                    cart.length === 0 && <h2 className='d-flex align-items-center justify-content-center pt-5 mt-5'>No Items for Review. Please.. <Link to="/shop">  Shop More</Link> </h2>
                }
            </div>
            <div className="cart-container">
                <Cart clearCart={clearCart} cart={cart}>

                      <button>
                        
                      <a href='https://buy.stripe.com/test_fZeaGa8rn6421VK7ss'>Proceed</a>

                      </button>
                 
                </Cart>
            </div>
           </div>

            <Footer/>
        </div>
    );
};

export default Orders;