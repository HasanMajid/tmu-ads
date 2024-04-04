import {
    Flex,
    Box,
    VStack,
    Text,
    Input,
    Button
} from "@chakra-ui/react";
import { useState } from "react";

function Messages() {
    //Some data for testing functionality, you can delete this once you can access database
    const [convos] = useState([
        { id: 1, posttitle: "laptop", name: "mark@torontomu.ca", chat: ["hi"] },
        { id: 2, posttitle: "study service", name: "huseynov@torontomu.ca", chat: ["hi"] },
        { id: 3, posttitle: "shoes", name: "alexis@torontomu.ca", chat: ["hi"] }
    ]);

    const [current_convo, setcurrent_convo] = useState(null);
    const [message, setMessage] = useState('');

    const handleconvoclick = (convo) => {
        setcurrent_convo(convo);
    };

    const handleSendMessage = () => {
        // Check if message sent
        console.log("Message sent:", message);
        // Resent message box
        setMessage('');
    };

    return (
        <Flex>
            {/*Listing the conversations on the left */}
            <VStack align="stretch" borderRight="1px solid #ccc" p={4} minW="200px">
                <Text fontWeight="bold" mb={4}>Messages</Text>
                {convos.map((convo) => (
                    <Box
                        key={convo.id}
                        p={2}
                        cursor="pointer"
                        _hover={{ bg: "gray.100" }}
                        onClick={ () => handleconvoclick(convo)}
                    >
                        <Text fontWeight="bold">{convo.posttitle}</Text>
                        {convo.name}
                    </Box>
                ))}
            </VStack>

            {/*Box for selected conversation*/}
            <Box flex="1" p={4} position="relative" maxW="800px">
                {current_convo ? (
                    <VStack align="stretch" spacing={4}>
                        <Text fontWeight="bold" style={{textAlign: "center"}}>{current_convo.name}</Text>
                        <Box style={{ height: "calc(100vh - 300px)", overflowY: "auto" }}>
                            {current_convo.chat.map((message, index) => (
                            <Box key={index} p={2} borderRadius="md">{message}</Box>
                        ))}
                        </Box>
                        {/* The message box and send button */}
                        <Box position="absolute" bottom="0" left="0" right="0" p={4}>
                            <Flex>
                                <Input
                                    flex="1"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Type your message..."
                                />
                                <Button colorScheme="blue" ml={2} onClick={handleSendMessage}>Send</Button>
                            </Flex>
                        </Box>
                    </VStack>
                ) : (
                    <Text> Start chatting! </Text>
                )}
            </Box>
        </Flex>
    );
}

export default Messages;