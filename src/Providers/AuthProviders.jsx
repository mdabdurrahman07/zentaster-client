/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext()
const AuthProviders = ({children}) => {
    const [user , setUser] = useState(null)
    const [loading , setLoading] = useState(true)
     // google provider
     const provider = new GoogleAuthProvider();
     // creating user
     const createUser = (email , password) =>{
         setLoading(true)
         return createUserWithEmailAndPassword(auth , email , password)
     }
     // login user
     const login = (email , password) =>{
         setLoading(true)
         return signInWithEmailAndPassword(auth , email , password)
     }
     // logout user
     const logout = () =>{
       return  signOut(auth)
     }
     // google login
     const googleLogin = ()=>{
         setLoading(true)
         return signInWithPopup(auth, provider)
 
     }
    //  unsubscribe
    useEffect(()=>{
        const watchMan = onAuthStateChanged(auth, (currentUser) =>{
          setUser(currentUser)
          return () => {
            return watchMan()
          }
        })
    },[])

    const values = {
        user,
        login,
        logout,
        loading,
        googleLogin,
        createUser
    }

    return (
       <AuthContext.Provider value={values}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProviders;