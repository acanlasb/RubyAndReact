import { useContext} from "react";
import {Navigate} from "react-router-dom";
import { AuthContext} from "../providers/AuthProvider";

const RequireAuth = () => {
          const auth = useContext(AuthContext)
          if(!auth.authenticated){
                    return<Navigate to="/" state=
          }
          return (

          );
}

export default RequireAuth;
