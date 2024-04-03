import { Button, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";

function Profile({children}) {
    const {user} = useContext(UserContext);
    const navigate = useNavigate();

    //Check database for email and password
    const handleSubmit = () => {
      navigate("/settings")
    };

    return (
        <Box >
          <Button colorScheme='teal' variant='outline' 
          style={{borderRadius: "50%", height: "4rem", width: "4rem"}} onClick={handleSubmit}>{children}</Button>
        </Box>
    );
}

export default Profile