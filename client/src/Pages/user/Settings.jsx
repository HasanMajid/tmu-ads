import React from 'react'
import { Button, 
    Box,  
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer} from "@chakra-ui/react";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Settings() {
    const {user, setUser} = useContext(UserContext);
    const {admin} = useContext(UserContext);
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

            <TableContainer>
            <Table variant='simple'>
                <TableCaption>Imperial to metric conversion factors</TableCaption>
                <Thead>
                <Tr>
                    <Th>Email</Th>
                    <Th>First Name</Th>
                    <Th>Last Name</Th>
                </Tr>
                </Thead>

                <Tbody>
                <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td isNumeric>25.4</Td>
                </Tr>
                <Tr>
                    <Td>feet</Td>
                    <Td>centimetres (cm)</Td>
                    <Td isNumeric>30.48</Td>
                </Tr>
                <Tr>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td isNumeric>0.91444</Td>
                </Tr>
                </Tbody>

            </Table>
            </TableContainer>

        </>
    )
}

export default Settings