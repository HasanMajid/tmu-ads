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
    TabList,
    IconButton
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import Profile from "./Profile";
import { useLocation } from "react-router-dom";

function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { user } = useContext(UserContext);
    const linkStyle = { marginInline: "1rem" }
    const location = useLocation();

    let tabIndex;
    let currentPath = location.pathname;
    switch (currentPath) {
        case '/':
            tabIndex = 0;
            break;
        case '/items-wanted':
            tabIndex = 1;
            break;
        case '/items-for-sale':
            tabIndex = 2;
            break;
        case '/services':
            tabIndex = 3;
            break;
        default:
            tabIndex = 0;
    }

    return (
        <nav>
            <Stack direction="row" spacing={4} align="center" marginBlock={"0.7rem"}>
                <Box>
                    <Heading as={"h1"}>TMU ADS</Heading>
                </Box>

                <Box m={"auto"}/>

                <Flex marginRight={"1rem"} gap={"2rem"}>
                    <Button onClick={toggleColorMode}>Toggle Theme</Button>

                    {/* Messages Button will only show up if user is logged in. */}
                    {user && (
                        <IconButton
                            as={Link} to="/messages"
                            icon={<EmailIcon />}
                            aria-label="Messages"
                            m={"auto"}
                            colorScheme="blue" // Optional: adjust the color scheme to fit your design
                        />
                    )}
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
            <Tabs isManual={true} index={tabIndex}>
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
