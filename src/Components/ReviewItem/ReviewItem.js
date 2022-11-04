import React from 'react';
import './ReviewItem.css'
const ReviewItem = ({product}) => {
    const {name, price, quantity,img} = product;
    return (
        <div className='review-item'>
            <div>
               <img src={img} alt="" />
            </div>
            <div className="review-detials-container">
                <div className="review-details">
                    <h3>Name : {name}</h3>
                    <h3>Price : {price}</h3>
                    <h3>quantity : {quantity}</h3>
                </div>
                <div className="delete-container">
                    <button>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;