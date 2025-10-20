import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.init';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updatedUser = (updatedData) =>{
        setLoading(true)
        return updateProfile(auth.currentUser,updatedData)
    }

    const logOut = () =>{
        setLoading(true)
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
        updatedUser,
    }

    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;