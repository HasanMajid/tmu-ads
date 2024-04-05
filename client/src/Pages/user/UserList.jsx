import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    CloseButton,
} from "@chakra-ui/react";
import axios from 'axios';
import { url } from "../../utils/constants";


function UserList({ users, setUsers }) {

    //Pass the User info you want to delete in the database
    const handleDeleteUser = async (email) => {
        console.log(email)
        axios.post(url + '/user/delete', {
            email: email
        }).then(() => {
            console.log('Update list afte delete')
            setUsers((prevUsers) => {
                const newUsers = prevUsers.filter(acc => acc.email !== email);
                return newUsers;
            })
        }).catch(err => {
            alert("error deleting post")
            console.log("error deleting post")
        })
    }

    return (
        <TableContainer marginTop={"2rem"}>
            <Table variant=''>
                {/* <TableCaption>User Accounts</TableCaption> */}
                <Thead>
                    <Tr>
                        <Th>User Emails</Th>
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
                                }} /></Td>
                            </Tr>
                        ))
                    }
                </Tbody>

            </Table>
        </TableContainer>
    )

}

export default UserList