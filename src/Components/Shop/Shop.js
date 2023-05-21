import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../hook/useTitle";
import Cart from "../Cart/Cart";
import Footer from "../Footer/Footer";
import Product from "../Product/Product";
import { adToDb, deleteShooppingCart, getStoreCart } from "../Utilities/adToDb";
import "./Shop.css";

const Shop = () => {
  const products = useLoaderData();
  useTitle("Shop");
  const [cart, setCart] = useState([]);

  //paginatoins
  const [data, setData] = useState([]);

  const [pageData, setPageDAta] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);


const getdata = async () =>{
  const response = await axios.get('products.json')
  setData(response.data);
  
}

  //handle next
  const handleNext = () => {
    if(page === pageCount) return page;
    setPage (page + 1)

  };

  //handle previous
  const handlePrevious = () => {
    if(page === 1) return page;
    setPage(page - 1)
  };

  const clearCart = () => {
    setCart([]);
    deleteShooppingCart();
  };


  useEffect(() => {
    const storedCart = getStoreCart();
    const saveCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct);
      }
    }
    setCart(saveCart);
  }, [products]);
  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    adToDb(selectedProduct.id);
  };


useEffect(() =>{
  getdata();
},[page])

  useEffect(() =>{
    const pagedataCount = Math.ceil(data.length/16);
    console.log(pagedataCount)
    setPageCount(pagedataCount);

    if(page){
      const LIMIT = 6;
      const skip = LIMIT * page 
      const dataskip = data.slice(page === 1 ? 0 : skip - LIMIT, skip);
      setPageDAta(dataskip);
    }
  },[data])


  return (
    <div>
      <div className="shop-container">
        <div className="products-container">
          {pageData.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}

        </div>
        <div className="cart-container">
          <Cart clearCart={clearCart} cart={cart}>
            <Link to="/orders">
              <button>Review Order</button>
            </Link>
          </Cart>
        </div>
      </div>


      <div className="d-flex justify-content-center">
            <nav>

                <Pagination >

                  <Pagination.Prev onClick={handlePrevious} disabled={page === 1}/>

                  {
                    Array(pageCount).fill(null).map((ele, index) => {
                      return(
                        <>
                          <Pagination.Item active={page === index + 1 ? true : false} onClick={() => setPage(index + 1)}>{index + 1}</Pagination.Item>  
                        </>
                      )
                    })
                  }



                  <Pagination.Next onClick={handleNext} disabled={page === pageCount}/>

                </Pagination>

            </nav>
          </div>

      <Footer />
    </div>
  );
};

export default Shop;
