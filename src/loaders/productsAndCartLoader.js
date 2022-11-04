import {getStoreCart} from "../Components/Utilities/adToDb";
export const productsAndCartLoader = async () => {
    //get products
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    //get cart
    const savedCart = getStoreCart();
    console.log(savedCart);
    return products;
}