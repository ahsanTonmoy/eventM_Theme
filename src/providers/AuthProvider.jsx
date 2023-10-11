import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword, signOut,GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.config";
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLOading] = useState(true);


    // 
    // create user 
    const createUser = (email, password)=>{
        setLOading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const LoginUser= (email, password)=>{
        setLOading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    const signInGoogle = ()=>{
        setLOading(true)
        return signInWithPopup(auth, provider);
    }
    const LogOut = ()=>{
        setLOading(true)
        return signOut(auth)
    }

    useEffect(( () =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(9999, currentUser);
            setUser(currentUser)
            setLOading(false)
        });
        return () => {
            unSubscribe();
        }
    }),[])
    const authInfo = {user,loading, createUser, LoginUser, LogOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;