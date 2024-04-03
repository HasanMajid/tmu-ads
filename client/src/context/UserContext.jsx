import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext({});

export default function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [admin, setAdmin] = useState(false);

    //Check that user is logged in
    useEffect(() => {
        const userCheck = localStorage.getItem("user");
        if (userCheck) {
            setUser(JSON.parse(userCheck));
        }
    }, [])

    useEffect(() => {
        if (user && user.email === "admin@torontomu.ca"){
            setAdmin(true);
        } else {
            setAdmin(false);
        }
    }, [user])

    const values = {
        user,
        setUser,
        admin
    }

    return (
        <>
            <UserContext.Provider value={values}>
                {children}
            </UserContext.Provider>
        </>
    )
}
