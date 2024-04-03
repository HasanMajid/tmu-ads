import { useEffect, useState } from 'react';
import { Flex, Input, Select, Button } from '@chakra-ui/react';

function SearchBar() {
  const [option, setOption] = useState("All");

  return (
    <Flex maxW={"50rem"} padding={"2rem"} m={"auto"}>
      <Input variant="filled" placeholder="Search Ads" />
      <Select onChange={(e) => {
        setOption(e.target.value);
      }}>
        <option>All</option>
        <option>Items wanted</option>
        <option>Item for Sale</option>
        <option>Services</option>
      </Select>
      <Flex>
        <Button p={"1rem"}>Search</Button>
      </Flex>
    </Flex>
  )
}

export default SearchBar