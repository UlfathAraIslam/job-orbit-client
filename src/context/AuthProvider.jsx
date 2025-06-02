import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';


const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {

    const [loading, setLoading]= useState(true);
    const [user,setUser] = useState(null);

    // create user
    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // signin
    const signInUser = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    // signin with google
    const signInWithGoogle = ()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }

    // signOut
    const signOutUser = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    // state observer
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            setLoading(false);
            console.log('user in the auth state change',currentUser);
        })
        return ()=>{
            unSubscribe;
        }
    },[])


    const authInfo = {
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        user,
        signOutUser,

    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;