import React from "react";
import {
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Flex,
    Heading,
    Text
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function LogIn() {
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
                    <Input type="email" />
                    <FormHelperText>We will never share your email.</FormHelperText>
                </FormControl>

                <FormControl>
                    <FormLabel marginTop={"2rem"}>Password</FormLabel>
                    <Input type="email" />
                </FormControl>

                <Button m={"auto"} marginTop={"1rem"} fontSize={"2rem"} p={"2rem"} maxW={"10rem"}>Log in</Button>
            </Flex>

            <Flex m={"auto"} w={"fit-content"} marginTop={"3rem"} flexDir={"column"}>
                <Text>Don&apos;t have an account?</Text>
                <Link to="/signup">
                    <Button colorScheme='blue' fontSize={"2rem"} p={"1.5rem"}>Sign up</Button>
                </Link>
            </Flex>
        </>

    );
}

export default LogIn;
