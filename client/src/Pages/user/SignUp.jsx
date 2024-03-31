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
import axios from 'axios';
import { url } from "../../utils/constans";

function SignUp() {
    const [email, setEmail] = useState(null);
    const [first, setFirst] = useState(null);
    const [last, setLast] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSubmit = async () => {
        await axios.post(url + "/user/signup", {
            email,
            first,
            last,
            password
        })
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
            </FormControl>

            <FormControl>
                <FormLabel marginTop={"2rem"}>First Name</FormLabel>
                <Input
                    type="text"
                    onChange={(e) => {
                        setFirst(e.target.value);
                    }}
                />
            </FormControl>

            <FormControl>
                <FormLabel marginTop={"2rem"}>Last Name</FormLabel>
                <Input
                    type="text"
                    onChange={(e) => {
                        setLast(e.target.value);
                    }}
                />
            </FormControl>

            <FormControl>
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
