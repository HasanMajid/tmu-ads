import { useEffect, useState } from 'react'
import { Box, Flex, Heading } from "@chakra-ui/react"
import AdCard from "../components/card/AdCard"
import axios from 'axios'
import { url } from '../utils/constants'

function Home() {
    const [ads, setAds] = useState([])

    useEffect(() => {
        async function getPosts() {
            await axios.get(url + '/adpost')
                .then((res) => {
                    console.log(res.data);
                    setAds(res.data);
                })
                .catch(err => {
                    console.log(err)
                    alert("error fetching all adposts")
                })
        }
        getPosts();
    }, [])

    return (
        <Box marginTop={"2rem"}>
            <Flex >
                {ads.map((ad) =>
                    <AdCard adPost={ad} key={ad._id} />
                )}
            </Flex>
        </Box>
    )
}

export default Home