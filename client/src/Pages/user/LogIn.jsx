import React from "react";
import { useState } from "react";
import {
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Flex,
    Heading,
    Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";
import { url } from "../../utils/constants";

function LogIn() {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    //Check database for email and password
    const handleSubmit = async () => {
        const res = await axios.get(url + "/user/login", {
            params: {
                email: email,
                password: password
            }
        })
        console.log(res.data)
    };

    return (
        <>
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
                    <Input type="email" onChange={(e) => {
                        setEmail(e.target.value);
                    }} />
                    <FormHelperText>We will never share your email.</FormHelperText>
                </FormControl>

                <FormControl>
                    <FormLabel marginTop={"2rem"}>Password</FormLabel>
                    <Input type="password" onChange={(e) => {
                        setPassword(e.target.value);
                    }}/>
                </FormControl>

                <Button
                    m={"auto"}
                    marginTop={"1rem"}
                    fontSize={"2rem"}
                    p={"2rem"}
                    maxW={"10rem"}
                    onClick={handleSubmit}
                >
                    Log in
                </Button>
            </Flex>

            <Flex m={"auto"} w={"fit-content"} marginTop={"3rem"} flexDir={"column"}>
                <Text>Don&apos;t have an account?</Text>
                <Link to="/signup">
                    <Button
                        colorScheme="blue"
                        fontSize={"2rem"}
                        p={"1.5rem"}
                    >
                        Sign up
                    </Button>
                </Link>
            </Flex>
        </>
    );
}

export default LogIn;
