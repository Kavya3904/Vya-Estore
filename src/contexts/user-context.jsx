import {  createContext, useEffect, useState } from "react";
import { onAuthUserStateChangeListener,userDocumentFirebasedb } from "../util/firebase/firebase";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect (()=>{
    let unsubscribe =  onAuthUserStateChangeListener((user)=>{
      if(user) userDocumentFirebasedb(user);
      setCurrentUser(user)
    })
    return unsubscribe;    
  },[])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
