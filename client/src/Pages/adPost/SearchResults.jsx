import { useEffect, useState } from 'react'
import { Box, Flex, Heading } from "@chakra-ui/react"
import axios from 'axios'
import { url } from '../../utils/constants'
import AdColumn from '../../components/card/AdColumn'
import SearchBar from '../../components/search/SearchBar'
import { useLocation } from 'react-router-dom';

function SearcResults() {
    const [ads, setAds] = useState([])
    const location = useLocation();
    const search = location.state.search;
    const type = location.state.type;

    useEffect(() => {
        const getSearchResults = async () => {
            console.log(search, type)
            axios.get(url + `/adpost/search/${search}/${type}`).then(res => {
                console.log(res.data);
                setAds(res.data);
            }).catch(err => {
                console.log(err)
            })
        }
        getSearchResults();
    }, [search, type])

    return (
        <>
            <SearchBar />
            <Heading>Search Results</Heading>
            <AdColumn ads={ads} />
        </>
    )
}

export default SearcResults