import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../shop-data.js";
import { addcollectiontodb, getCollectionfromdb } from "../util/firebase/firebase.js";
export const ProductContext = createContext({
    products:[]
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState({});


  useEffect(()=>{

    const getcollectiondb = async()=>{
      const getcoldb =  await getCollectionfromdb()
    setProducts(getcoldb)
    }
    getcollectiondb()
  },[])
  const value = { products };
  return  (
  <ProductContext.Provider value={value}>
    {children}
  </ProductContext.Provider>);
 
};
