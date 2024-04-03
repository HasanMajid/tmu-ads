import {
    Button,
    Stack,
    Flex,
    Heading,
    Box,
    Input,
    Divider,
    useColorMode,
    Tab,
    Tabs,
    TabList
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Profile from "./Profile";

function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { user } = useContext(UserContext);
    const linkStyle = { marginInline: "1rem" }

    return (
        <nav>
            <Stack direction="row" spacing={4} align="center" marginBlock={"0.7rem"}>
                <Box>
                    <Heading as={"h1"}>TMU ADS</Heading>
                </Box>
                <Box m={"auto"}>

                </Box>
                <Flex marginRight={"1rem"} gap={"2rem"}>
                    <Button onClick={toggleColorMode}>Toggle Theme</Button>
                </Flex>
                {user ? (
                    <Profile>
                        {user.firstName}
                    </Profile>
                ) : (
                    <Link to="/login">
                        <Button>Log In</Button>
                    </Link>
                )}
            </Stack>
            <Tabs>
                <TabList flexDir={"row"} m={"auto"} w={"fit-content"}>
                    <Tab>
                        <Link to="/" style={linkStyle}>
                            Home
                        </Link>
                    </Tab>
                    <Tab>
                        <Link to="/items-wanted" style={linkStyle}>
                            Items Wanted
                        </Link>
                    </Tab>
                    <Tab>
                        <Link to="/items-for-sale" style={linkStyle}>
                            Items for Sale
                        </Link>
                    </Tab>
                    <Tab>
                        <Link to="/services" style={linkStyle}>
                            Services
                        </Link>
                    </Tab>
                </TabList>
            </Tabs>
            <Divider />
        </nav>
    );
}

export default Navbar;
