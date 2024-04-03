import { useEffect, useState } from 'react'
import { Box, Flex, Heading } from "@chakra-ui/react"
import axios from 'axios'
import { url } from '../utils/constants'
import AdColumn from '../components/card/AdColumn'
import SearchBar from '../components/search/SearchBar'

function ItemsForSale() {
    const [ads, setAds] = useState([])

    useEffect(() => {
        async function getPosts() {
            await axios.get(url + '/adpost/For Sale')
                .then((res) => {
                    console.log(res.data);
                    setAds(res.data);
                })
                .catch(err => {
                    console.log(err)
                    alert("error fetching for sale adposts")
                })
        }
        getPosts();
    }, [])

    return (
        <>
            <SearchBar />
            <Heading>Items for Sale</Heading>
            <AdColumn ads={ads} setAds={setAds}/>
        </>
    )
}

export default ItemsForSale