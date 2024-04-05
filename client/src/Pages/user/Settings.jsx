import { useEffect, useState } from 'react'
import { Button, Heading} from "@chakra-ui/react";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { url } from "../../utils/constants";
import UserList from './UserList';

function Settings() {
    const {user, setUser} = useContext(UserContext);
    const {admin} = useContext(UserContext);
    const navigate = useNavigate();

    const [users, setUsers] = useState([])
    
    const handleSignOut = () =>{
        setUser(null)
        localStorage.removeItem("user")
        navigate("/")
    }

    //Fetch all users from database
    useEffect(() => {
        async function getUsers() {
            await axios.get(url + '/user/users')
                .then((res) => {
                    console.log(res.data);
                    setUsers(res.data);
                })
                .catch(err => {
                    console.log(err)
                    alert("error fetching all users")
                })
        }
        getUsers();
    }, [])


    return (
        <>  
            <Heading marginTop={"2rem"}>Dashboard</Heading>
            {admin && <UserList users={users} setUsers={setUsers}></UserList>}

            <Button onClick={handleSignOut} marginTop={"2rem"}>
                Sign out
            </Button>
        </>
    )
}

export default Settings