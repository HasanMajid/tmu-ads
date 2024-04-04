import { useEffect, useState } from 'react'
import { Flex, Box, Heading } from '@chakra-ui/react'
import AdCard from './AdCard'

function AdColumn({ ads, setAds }) {

    return (
        <Box marginTop={"2rem"}>
            <Heading></Heading>
            <Flex flexDir={"column"} w={'fit-content'} justifyContent={'center'}>
                {ads.map((ad) =>
                    <Flex key={ad._id} marginTop={"2rem"} w={'fit-content'} >
                        <AdCard adPost={ad} setAds={setAds} />
                    </Flex>
                )}
            </Flex>
        </Box>
    )
}

export default AdColumn