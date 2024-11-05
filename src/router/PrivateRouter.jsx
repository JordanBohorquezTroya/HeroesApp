import { useContext, useEffect, useMemo } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { Navigate, useLocation } from "react-router";

export const PrivateRouter = ({ children }) => {

  const { logged } = useContext(AuthContext);
  const {pathname, search} = useLocation()
 
  const lastPath = useMemo(()=>pathname + search, [pathname, search]) 

  useEffect(() => {
    localStorage.setItem('pathname', lastPath)
  }, [lastPath])
  
  
  
  return logged ? children : <Navigate to={"/login"} />;
};
