import React from 'react'
import { Button, Box } from "@chakra-ui/react";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Settings() {
    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();
    
    const handleSignOut = () =>{
        setUser(null)
        localStorage.removeItem("user")
        navigate("/")
    }

    return (
        <>
            <Button onClick={handleSignOut}>
                Sign out
            </Button>
        </>
    )
}

export default Settings