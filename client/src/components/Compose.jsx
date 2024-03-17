import { Button, Box } from "@chakra-ui/react";

function Compose() {
  return (
    <Box style={{ position: 'fixed', bottom: '2%', right: '2%' }}>
      <Button boxShadow={"-2px 2px 4px 4px"} colorScheme='teal' variant='outline' style={{borderRadius: "50%", height: "6rem", width: "6rem"}}>Post AD</Button>
    </Box>
  );
}

export default Compose