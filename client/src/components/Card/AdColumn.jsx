import { useEffect, useState } from 'react'
import { Flex, Box, Heading } from '@chakra-ui/react'
import AdCard from './AdCard'

function AdColumn({ ads }) {
    return (
        <Box marginTop={"2rem"}>
            <Heading></Heading>
            <Flex flexDir={"column"}>
                {ads.map((ad) =>
                    <Flex key={ad._id} marginTop={"2rem"}>
                        <AdCard adPost={ad} />
                    </Flex>
                )}
            </Flex>
        </Box>
    )
}

export default AdColumn