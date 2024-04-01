import { Button, Box } from "@chakra-ui/react";


function Profile({children}) {
    return (
        <Box >
          <Button colorScheme='teal' variant='outline' 
          style={{borderRadius: "50%", height: "4rem", width: "4rem"}}>{children}</Button>
        </Box>
    );
}

export default Profile