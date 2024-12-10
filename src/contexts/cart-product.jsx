import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  isDropdown: false,
  setDropdown: () => {},
  cartItems: [],
  addtoCartItem: () => {},
  addcartItem: () => {},
  removeItemfromcart: () => {},
  decrementcartitem: () => {},
  cartItemCount: 0,
  cartTotal: 0,
});

const addItemCart = (cartItems, newProduct) => {
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
};

export const removeItemcart = (cartItems, item) => {
  return cartItems.filter((eachitem) =>  eachitem.id !== item.id);
};

export const Itemcart = (cartItems, item) => {
  return cartItems.filter((eachitem) =>  eachitem.id !== item.id);
  
};

export const decrementitem = (cartItems, item) => {
  if (item.quantity === 1) {
    return cartItems.filter((eachitem) =>  eachitem.id !== item.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === item.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const CartProvider = ({ children }) => {
  const [isDropdown, setDropdown] = useState();
  const [cartItems, setProductCartItem] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartItemCount(count);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addcartItem = (newProduct) => {
    console.log("newCheckOutProduct", newProduct);
    setProductCartItem(addItemCart(cartItems, newProduct));
  };

  const decrementcartitem = (item) => {
    setProductCartItem(decrementitem(cartItems, item));
  };

  const removeItemfromcart = (item) => {
    setProductCartItem(removeItemcart(cartItems, item));
  };

  const value = {
    isDropdown,
    setDropdown,
    cartItems,
    addcartItem,
    removeItemfromcart,
    decrementcartitem,
    cartItemCount,
    cartTotal
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
