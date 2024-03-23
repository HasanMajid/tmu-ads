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
} from "@chakra-ui/react";

function SignUp() {
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
                <Input type="email" />
                <FormHelperText>We will never share your email.</FormHelperText>
            </FormControl>

            <FormControl>
                <FormLabel marginTop={"2rem"}>First Name</FormLabel>
                <Input type="text" />
            </FormControl>

            <FormControl>
                <FormLabel marginTop={"2rem"}>Last Name</FormLabel>
                <Input type="text" />
            </FormControl>

            <FormControl>
                <FormLabel marginTop={"2rem"}>Password</FormLabel>
                <Input type="text" />
            </FormControl>

            <Button m={"auto"} marginTop={"1rem"} fontSize={"2rem"} p={"2rem"} maxW={"10rem"}>Sign up</Button>
        </Flex>
    );
}

export default SignUp