import {getStoreCart} from "../Components/Utilities/adToDb";
export const productsAndCartLoader = async () => {
    //get products
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    //get cart
    const savedCart = getStoreCart();
    // console.log(savedCart);
    const initialCart = [];
    for(const id in savedCart) {
        // console.log(id, products);
        const addedProduct = products.find(product => product.id === id);
        if(addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            initialCart.push(addedProduct);
        }
        
    }
    return {products,  initialCart};
}