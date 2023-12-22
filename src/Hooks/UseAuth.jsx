import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const UseAuth = () => {
    const authUtilities = useContext(AuthContext)
    
    return authUtilities;
};

export default UseAuth;