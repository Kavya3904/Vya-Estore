import { createContext, useState } from "react";

export const CartContext =  createContext({
    isDropdown:false,
    setDropdown : () => {} 

})
export const CartProvider = ({children}) => {
    const [isDropdown , setDropdown] = useState()

    const value= {isDropdown , setDropdown}
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}