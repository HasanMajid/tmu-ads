import { useEffect, useState } from 'react'
import {Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    CloseButton
} from "@chakra-ui/react";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { url } from "../../utils/constants";


function UserList({ users }) {

    //Pass the User info you want to delete in the database
    const handleDeleteUser = async (email) => {
        console.log(email)
        axios.post(url + '/user/delete', {
            email: email 
        }).then(()=>{
            console.log('Update list afte delete')
        }).catch(err => {
            alert("error deleting post")
            console.log("error deleting post")
        })
    }

    return (
        <TableContainer marginTop={"2rem"}>
            <Table variant=''>
                <TableCaption>User Accounts</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Email</Th>
                        <Th>First Name</Th>
                        <Th>Last Name</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        users.map((acc) => (
                            (acc && acc.email !== 'admin@torontomu.ca') &&
                            <Tr key={acc._id}>
                                <Td>{acc.email}</Td>
                                <Td>{acc.firstName}</Td>
                                <Td>{acc.lastName}</Td>
                                <Td><CloseButton onClick={() => {
                                    handleDeleteUser(acc.email)
                                }}/></Td>
                            </Tr>
                        ))
                    }
                </Tbody>

            </Table>
        </TableContainer>
    )

}

export default UserList