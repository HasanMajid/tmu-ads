import { useEffect, useState } from "react";
import { Flex, Input, Select, Button } from "@chakra-ui/react";
import axios from "axios";
import { url } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();
  const [type, setType] = useState("All");
  const [search, setSearch] = useState(null);

  return (
    <Flex maxW={"50rem"} padding={"2rem"} m={"auto"}>
      <Input
        variant="filled"
        placeholder="Search Ads"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      <Select
        onChange={(e) => {
          setType(e.target.value);
        }}
      >
        <option>All</option>
        <option>Item Wanted</option>
        <option>Item for Sale</option>
        <option>Service</option>
      </Select>

      <Flex>
        <Button
          p={"1rem"}
          onClick={() => {
            if (search) {
            console.log("searching")
              navigate("/searchresults", {
                state: {
                  search: search,
                  type: type,
                },
              });
            }
          }}
        >
          Search
        </Button>
      </Flex>
      
    </Flex>
  );
}

export default SearchBar;
