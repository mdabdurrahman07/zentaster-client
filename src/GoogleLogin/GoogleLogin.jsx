import toast from "react-hot-toast";
import UseAuth from "../Hooks/UseAuth";

const GoogleLogin = () => {
    const {googleLogin} = UseAuth()
    const handleGoogle = () =>{

        googleLogin()
        .then(result =>{
            console.log(result.user)
        if(result.user){
            toast.success("")
        }
        })
        .catch(error => {
            toast.error(error)
        })
        
        
        }
    return (
        <div>
            
        </div>
    );
};

export default GoogleLogin;