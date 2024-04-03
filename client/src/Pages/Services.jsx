import { useEffect, useState } from 'react'
import { Box, Flex, Heading } from "@chakra-ui/react"
import AdCard from "../components/card/AdCard"
import axios from 'axios'
import { url } from '../utils/constants'
import AdColumn from '../components/card/AdColumn'
import SearchBar from '../components/search/SearchBar'

function Services() {
    const [ads, setAds] = useState([])

    useEffect(() => {
        async function getPosts() {
            await axios.get(url + '/adpost/Academic Service')
                .then((res) => {
                    console.log(res.data);
                    setAds(res.data);
                })
                .catch(err => {
                    console.log(err)
                    alert("error fetching service adposts")
                })
        }
        getPosts();
    }, [])

    return (
        <>
            <SearchBar />
            <Heading>Services</Heading>
            <AdColumn ads={ads} />
        </>
    )
}

export default Services