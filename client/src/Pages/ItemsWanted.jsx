import { useEffect, useState } from 'react'
import { Box, Flex, Heading } from "@chakra-ui/react"
import AdCard from "../components/card/AdCard"
import axios from 'axios'
import { url } from '../utils/constants'
import AdColumn from '../components/card/AdColumn'

function ItemsWanted() {
    const [ads, setAds] = useState([])

    useEffect(() => {
        async function getPosts() {
            await axios.get(url + '/adpost/Item Wanted')
                .then((res) => {
                    console.log(res.data);
                    setAds(res.data);
                })
                .catch(err => {
                    console.log(err)
                    alert("error fetching items for sale adposts")
                })
        }
        getPosts();
    }, [])

    return (
        <AdColumn ads={ads} />
    )
}

export default ItemsWanted