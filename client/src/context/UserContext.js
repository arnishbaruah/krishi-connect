// UserContext.js
import { createContext, useContext, useEffect, useState } from 'react';
import {getContextData} from '../api/utilityAPI'
const UserContext = createContext();

export function UserProvider({ children }) {
  const [userContext, setUserContext] = useState(null);
  const [details , setDetails] = useState([]);
  useEffect(()=>{
    if(userContext){

      GetAllUser(userContext._id);
    }
  },[userContext])
  const GetAllUser=async(id)=>{
    console.log("hii");
    // console.log(id)
    const  response = await getContextData(id);
    // console.log(response.data)
    setDetails(response);
  };
  return (
    <UserContext.Provider value={{ details ,setDetails, setUserContext }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}