import React, { useState } from 'react';

import {
    Box,
    Button,
    Input,
    VStack,
    HStack,
    Text,
    useDisclosure,
    IconButton
} from '@chakra-ui/react';

import { FiSend, FiMessageCircle } from 'react-icons/fi';

export default function Chatbox() {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleSendMessage = () => {
        if (!newMessage.trim()) return;
        const updatedMessages = [...messages, newMessage];
        setMessages(updatedMessages);
        setNewMessage('');
    };

    return (
        <Box position="fixed" bottom="35.6" right="140" zIndex="popover">
            {isOpen ? (


                <VStack spacing="4" p="4" bg="white" boxShadow="md" borderRadius="md" maxW="sm">


                    <VStack spacing="3" alignItems="flex-start" overflowY="auto" maxH="300px">

                        {messages.map((message, index) => (
                            <Text key={index} bg="gray.100" p="2" borderRadius="md">
                                {message}
                            </Text>
                        ))}

                    </VStack>

                    <HStack width="full">

                        <Input
                            placeholder="Type a message..."
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        />

                        <IconButton
                            icon={<FiSend />}
                            onClick={handleSendMessage}
                            aria-label="Send message"
                        />

                    </HStack>

                </VStack>


            ) : (
                <IconButton
                    icon={<FiMessageCircle />}
                    onClick={onOpen}
                    aria-label="Open chat"
                    size="lg"
                    colorScheme="teal"
                />
            )}
            {isOpen && <Button onClick={onClose} size="sm">Close</Button>}

        </Box>
    );
}