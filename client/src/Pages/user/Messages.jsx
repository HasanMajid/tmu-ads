import { Flex, Box, VStack, Text, Input, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../../utils/constants";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import ChatContextProvider from "../../context/ChatContext";

function Messages() {
    const { user } = useContext(UserContext);
    //Some data for testing functionality, you can delete this once you can access database
    const [chats, setChats] = useState([]);

    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");

    //Fetches Convos
    useEffect(() => {
        async function getChats() {
            await axios
                .get(url + `/message/chats/${user.email}`)
                .then((res) => {
                    console.log(res.data);
                    setChats(res.data);
                })
                .catch((err) => {
                    console.log(err);
                    alert("error fetching chats of user");
                });
        }
        if (user) {
            getChats();
        }
    }, [user]);

    useEffect(() => {
        const getMessages = async () => {
            // const recipient = user.email !== currentChat.recipient ? currentChat.recipient : user.email
            axios
                .get(
                    url +
                    `/message/messages/${currentChat.adPostId}/${user.email}/${currentChat.recipient}`
                )
                .then((res) => {
                    setMessages(res.data);
                });
        };
        if (currentChat && user) {
            getMessages();
        }
    }, [currentChat, user]);

    // const handleSendMessage = async (e) => {
    //     // Check if message sent
    //     console.log("Trying to send message in convo");

    //     // try {
    //     //     await axios.post(url + "/message", {
    //     //         convoid: current_convo,
    //     //         message: message,
    //     //     });
    //     //     console.log("Message sent successfully in convoid: ", current_convo);
    //     //     console.log(message);
    //     //     setMessage("");
    //     // } catch (err) {
    //     //     alert("Error sending message in convo.");
    //     //     console.log("Error sending message", err);
    //     // }

    //     await axios.
    //         post(url + '/message', {
    //             adPostId: adPost._id,
    //             adPostTitle: adPost.title,
    //             sender: user.email,
    //             recipient: adPost.userEmail,
    //             message: message
    //         }).then(() => {
    //             console.log("Message sent successfully");
    //             alert("Message sent!");
    //             console.log(message)
    //             setMessage('');
    //         }).catch((err) => {
    //             alert("Error sending message");
    //             console.log("Error sending message", err);
    //         })
    // };

    return (
        <Flex>
            {/*Listing the conversations on the left */}
            <VStack align="stretch" borderRight="1px solid #ccc" p={4} minW="200px">
                <Text fontWeight="bold" mb={4}>
                    Messages
                </Text>
                {chats.map(
                    (
                        chat // chat contains: recipient, adPostId, adPostTitle
                    ) => (
                        <Box
                            key={chat.adPostId}
                            p={2}
                            cursor="pointer"
                            _hover={{ bg: "gray.100" }}
                            onClick={() => setCurrentChat(chat)}
                        >
                            <Text fontWeight="bold">{chat.adPostTitle}</Text>
                            <Text>
                                From:{" "}
                                {chat.recipient === user.email ? chat.sender : chat.recipient}
                            </Text>
                        </Box>
                    )
                )}
            </VStack>

            {/*Box for selected conversation*/}
            <Box flex="1" p={4} position="relative" maxW="800px">
                {currentChat ? (
                    <VStack align="stretch" spacing={4}>
                        <Text fontWeight="bold" style={{ textAlign: "center" }}>
                            {currentChat.name}
                        </Text>
                        <Flex
                            style={{ height: "calc(100vh - 300px)", overflowY: "auto" }}
                            border={"1px black solid"}
                            flexDir={"column"}
                        >
                            {messages.map((message, index) => (
                                <Box
                                    key={message._id}
                                    p={2}
                                    borderRadius="md"
                                    w={"fit-content"}
                                    ml={message.sender === user.email && "auto"}
                                    backgroundColor={message.sender === user.email ? "rgb(12, 115, 250)" : "rgb(24, 153, 46)"}
                                    color={"white"}
                                    fontWeight={"bold"}
                                    border={"1px black solid"}
                                >
                                    {message.message}
                                </Box>
                            ))}
                        </Flex>
                        {/* The message box and send button */}
                        <Box position="absolute" bottom="0" left="0" right="0" p={4} marginInline={"0.3rem"} marginBottom={"0.3rem"}>
                            <Flex gap={"0.5rem"}>
                                <Input
                                    flex={8}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Type your message..."
                                />
                                {/* <Button colorScheme="blue" ml={2} onClick={handleSendMessage}>Send</Button> */}
                                <Button flex={1}>Send</Button>
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
