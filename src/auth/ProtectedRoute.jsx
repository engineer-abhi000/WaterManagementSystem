import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  if(!user ){
    debugger;

      const location = useLocation();

   if(location.pathname =="/home"){
    return <Navigate to="/" replace/>
  }else{
     return <Navigate to="/login" replace/>
  }

  }
  return children;
};

export default PrivateRoute;
