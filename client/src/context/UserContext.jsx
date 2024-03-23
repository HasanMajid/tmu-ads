import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext({});

export default function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {

    }, [])

    const values = {
        user,
        setUser
    }

    return (
        <>
            <UserContext.Provider value={values}>
                {children}
            </UserContext.Provider>
        </>
    )
}
