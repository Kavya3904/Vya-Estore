import {  createContext, useEffect, useReducer, useState } from "react";
import { onAuthUserStateChangeListener,userDocumentFirebasedb } from "../util/firebase/firebase";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const USER_ACTION_TYPE = {
  SET_CURRENT_USER : "SET_CURRENT_USER  "
}

const userReducer = (state , action)=>{
  console.log(state , action)
    const {payload , type} = action;
  switch (type) {
    case USER_ACTION_TYPE.SET_CURRENT_USER :
    return {
      ...state,
      currentUser: payload
    }
    default : {
     throw new Error("no such type")
      
    }
  }
}
const INITIAL_STATE = {
  currentUser : null
}

export const UserProvider = ({ children }) => {
  const [{currentUser}, dispatch ] = useReducer(userReducer , INITIAL_STATE )
  // const [currentUser, setCurrentUser] = useState(null);
  const setCurrentUser = (user) => {
    dispatch({type: USER_ACTION_TYPE.SET_CURRENT_USER , payload:user})
  }
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
