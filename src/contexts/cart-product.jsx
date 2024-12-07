import { createContext, useState,useEffect } from "react";


export const CartContext =  createContext({
    isDropdown:false,
    setDropdown : () => {} ,
    cartItems :[],
    addtoCartItem:() =>{},
    addcartItem:() => {},
    cartItemCount: 0,
})

const addItemCart = (cartItems,newProduct)=>{
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === newProduct.id
      );
    
      if (existingCartItem) {
        return cartItems.map((cartItem) =>
          cartItem.id === newProduct.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
    
      return [...cartItems, { ...newProduct, quantity: 1 }];

}

export const CartProvider = ({children}) => {
    const [isDropdown , setDropdown] = useState()
    const [cartItems , setProductCartItem] = useState([])
    const [cartItemCount, setCartItemCount] = useState(0);

    useEffect(() => {
        const count = cartItems.reduce(
          (total, cartItem) => total + cartItem.quantity,
          0
        );
        setCartItemCount(count);
      }, [cartItems]);

    const addcartItem = (newProduct)=>{
        console.log("newCheckOutProduct",newProduct)
        setProductCartItem (addItemCart(cartItems,newProduct))

    }

    const value= {isDropdown , setDropdown, cartItems , addcartItem,cartItemCount}
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}
