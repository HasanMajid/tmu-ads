import { useEffect, useState } from 'react'
import { Box, Flex, Heading } from "@chakra-ui/react"
import axios from 'axios'
import { url } from '../utils/constants'
import AdColumn from '../components/card/AdColumn'
import SearchBar from '../components/search/SearchBar'

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
        <>
            <SearchBar />
            <Heading>Home</Heading>
            <AdColumn ads={ads} setAds={setAds}/>
        </>
    )
}

export default Home