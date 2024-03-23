import React from 'react'
import { Box, Flex, Heading } from "@chakra-ui/react"
import AdCard from "../components/card/AdCard"

function ItemsWanted() {
    return (
        <>
        <Box marginTop={"2rem"}>
            <Flex >
                <AdCard />
                <AdCard />
                <AdCard />
            </Flex>
        </Box>
        </>
    )
}

export default ItemsWanted