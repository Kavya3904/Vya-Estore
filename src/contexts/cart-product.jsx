import { type } from "@testing-library/user-event/dist/type";
import { createContext, useState, useEffect, useReducer } from "react";

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
  return cartItems.filter((eachitem) => eachitem.id !== item.id);
};

export const Itemcart = (cartItems, item) => {
  return cartItems.filter((eachitem) => eachitem.id !== item.id);
};

export const decrementitem = (cartItems, item) => {
  if (item.quantity === 1) {
    return cartItems.filter((eachitem) => eachitem.id !== item.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === item.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const CART_ACTION_TYPES = {
  SET_CART_ITEM: "SET_CART_ITEM",
  TOGGLE_DROPDOWN: "TOGGLE_DROPDOWN"
};

const cartReducer = (state, action) => {
  const { payload, type } = action;
  console.log("cart",payload);
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEM:
      return {
        ...state,
        ...payload,
      };
      case CART_ACTION_TYPES.TOGGLE_DROPDOWN : 
      return {
        ...state,
        isDropdown:payload
      }

    default: {
      throw new Error("no such type");
    }
  }
};
const INITIAL_STATE = {
  cartItemCount: 0,
  cartTotal: 0,
  isDropdown: false,
  cartItems: [],
};

export const CartProvider = ({ children }) => {
  const [{ cartItemCount, cartItems, cartTotal, isDropdown }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const updateItemReducer = (newCartItem) => {
    const newCartTotal = newCartItem.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    const count = newCartItem.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEM,
      payload: {
        cartItems: newCartItem,
        cartItemCount: count,
        cartTotal: newCartTotal,
        isDropdown: isDropdown,
      },
    });
  };

   

  const addcartItem = (newProduct) => {
    console.log("newCheckOutProduct", newProduct);
    const newCartItem = addItemCart(cartItems, newProduct);
    console.log("new", newCartItem);
    updateItemReducer(newCartItem);
  };

  const decrementcartitem = (item) => {
    const newCartItem = decrementitem(cartItems, item);
    updateItemReducer(newCartItem);
  };

  const removeItemfromcart = (item) => {
    const newCartItem = removeItemcart(cartItems, item);
    updateItemReducer(newCartItem);
  };
  const setDropdown = (boolean) => {
    const newCartItem = boolean
    dispatch({type:CART_ACTION_TYPES.TOGGLE_DROPDOWN , payload : boolean})
  }

  const value = {
    isDropdown,
    setDropdown,
    cartItems,
    addcartItem,
    removeItemfromcart,
    decrementcartitem,
    cartItemCount,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
