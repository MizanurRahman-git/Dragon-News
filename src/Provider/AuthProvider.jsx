import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.init';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateProfile = (updatedData) =>{
        return 
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        });

        return () => {
            unsubscribe()
        }
    },[])

    const authData = {
        user,
        setUser,
        createUser,
        userLogIn,
        logOut,
        setLoading,
        loading,
    }

    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;