import {
    Button,
    Stack,
    Flex,
    Heading,
    Box,
    Input,
    Divider,
    useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Profile from "./Profile";

function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { user } = useContext(UserContext);

    return (
        <nav>
            <Stack direction="row" spacing={4} align="center" marginBlock={"0.7rem"}>
                <Box>
                    <Heading as={"h1"}>TMU ADS</Heading>
                </Box>
                <Box m={"auto"}>
                    <Input variant="filled" placeholder="Search" />
                </Box>
                <Flex marginRight={"1rem"} gap={"2rem"}>
                    <Button onClick={toggleColorMode}>Toggle Theme</Button>
                </Flex>
                <Link to="/login">
                    {user ? (
                        <Profile>
                            {user.firstName}
                        </Profile>
                    ) : (
                        <Button>Log In</Button>
                    )}
                </Link>
            </Stack>
            <Stack flexDir={"row"} m={"auto"} w={"fit-content"}>
                <Link to="/" style={{ marginInline: "1rem" }}>
                    Home{" "}
                </Link>

                <Link to="/items-wanted" style={{ marginInline: "1rem" }}>
                    Items Wanted
                </Link>

                <Link to="/items-for-sale" style={{ marginInline: "2rem" }}>
                    Items for Sale
                </Link>

                <Link to="/services" style={{ marginInline: "1rem" }}>
                    Services
                </Link>
            </Stack>
            <Divider />
        </nav>
    );
}

export default Navbar;
