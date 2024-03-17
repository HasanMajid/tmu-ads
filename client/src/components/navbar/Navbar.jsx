import { Button, Stack, Flex, Heading, Box, Input, Divider, useColorMode } from '@chakra-ui/react'

function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <nav>
            <Stack direction='row' spacing={4} align='center' marginBlock={"0.7rem"}>
                <Box>
                    <Heading as={"h1"}>TMU ADS</Heading>
                </Box>
                <Box m={"auto"}>
                    <Input variant='filled' placeholder='Search'/>
                </Box>
                <Flex marginRight={"1rem"} gap={"2rem"}>
                    <Button onClick={toggleColorMode}>
                        Toggle Theme
                    </Button>
                    <Button colorScheme='teal' variant='outline'>
                        Button
                    </Button>
                    <Button colorScheme='blue'>
                        Button
                    </Button>
                </Flex>
            </Stack>
            <Divider/>
        </nav>
    )
}

export default Navbar