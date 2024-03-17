import { Box, Flex, Heading } from "@chakra-ui/react"
import AdCard from "../components/Card/AdCard"

function Home() {
    return (
        <>
            <Box className="row" marginTop={"2rem"}>
                <Heading>Items for Sale</Heading>
                <Flex>
                    <AdCard />
                    <AdCard />
                    <AdCard />
                </Flex>
            </Box>
            <Box className="row" marginTop={"2rem"}>
                <Heading>Items Wanted</Heading>
                <Flex >
                    <AdCard />
                    <AdCard />
                    <AdCard />
                </Flex>
            </Box>
            <Box className="row" marginTop={"2rem"}>
                <Heading>Services</Heading>
                <Flex>
                    <AdCard />
                    <AdCard />
                    <AdCard />
                </Flex>
            </Box>
        </>
    )
}

export default Home