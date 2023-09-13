import { useContext} from "react";
import { AuthContext} from "../providers/AuthProvider";

const RequireAuth = () => {
          const auth = useContext(AuthContext)
          return (

          );
}

export default RequireAuth;
