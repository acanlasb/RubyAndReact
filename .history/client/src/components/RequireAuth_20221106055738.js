import { useContext} from "react";
import { AuthContext} from "../providers/AuthProvider";

const RequireAuth = () => {
          const auth = useContext(AuthContext)
          if(auth.authen)
          return (

          );
}

export default RequireAuth;
