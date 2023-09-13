import { useContext} from "react";
import { AuthContext} from "../providers/AuthProvider";

const RequireAuth = () => {
          const auth = useContext(AuthContext)
          if(!auth.authenticated){
                    return
          }
          return (

          );
}

export default RequireAuth;
