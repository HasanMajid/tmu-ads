import { useState } from "react";
import {
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Flex,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import axios from 'axios';
import { url } from "../../utils/constants";

function SignUp() {
    const [email, setEmail] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [password, setPassword] = useState(null);
    const { setUser } = useContext(UserContext);
    let navigate = useNavigate();

    const handleSubmit = async () => {
        axios.post(url + "/user/signup", {
            email,
            firstName,
            lastName,
            password
        }).then((res) => {
            // Handle success
            console.log(res.data);
            setUser(res.data);
            navigate("/");
        }).catch(err => {
            alert(err.response.data.error);
        });
    }

    return (
        <Flex
            flexDir={"column"}
            maxW={"25rem"}
            m={"auto"}
            marginTop={"4rem"}
            p={"1rem"}
            boxShadow={"-2px 3px 10px 1px gray"}
            border={"1px"}
            borderRadius={"0.75rem"}
        >
            <FormControl>
                <FormLabel marginTop={"2rem"}>Email address</FormLabel>
                <Input
                    type="email"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <FormHelperText>We will never share your email.</FormHelperText>

                <FormLabel marginTop={"2rem"}>First Name</FormLabel>
                <Input
                    onChange={(e) => {
                        setFirstName(e.target.value);
                    }}
                />

                <FormLabel marginTop={"2rem"}>Last Name</FormLabel>
                <Input
                    onChange={(e) => {
                        setLastName(e.target.value);
                    }}
                />

                <FormLabel marginTop={"2rem"}>Password</FormLabel>
                <Input
                    type="password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
            </FormControl>

            <Button
                m={"auto"}
                marginTop={"1rem"}
                fontSize={"2rem"}
                p={"2rem"}
                maxW={"10rem"}
                type="submit"
                onClick={handleSubmit}
            >
                Sign up
            </Button>
        </Flex>
    );
}

export default SignUp;
