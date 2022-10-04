const adToDb =(id) =>{
    let shoppingCart = {};
    //get theh shopping cart
    const storedCart = localStorage.getItem('shoppingCart');
    if(storedCart) {
        shoppingCart = JSON.parse(storedCart)
    } 
    else{
        shoppingCart = {};
    }
    //add quantity
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    } else{
        // localStorage.setItem(id, 1);
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));

 
    
}
const getStoreCart = () =>{
    let shoppingCart = {};
    //get theh shopping cart
    const storedCart = localStorage.getItem('shoppingCart');
    if(storedCart) {
        shoppingCart = JSON.parse(storedCart)
    } 
    return shoppingCart;
}
const removeFromDb = id =>{
    console.log('inside fake db', id)
    const storedCart = localStorage.getItem('shoppingCart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
        }
    }
}
const deleteShooppingCart = () =>{
    localStorage.removeItem('shoppingCart');
}
export {adToDb, removeFromDb,deleteShooppingCart, getStoreCart};