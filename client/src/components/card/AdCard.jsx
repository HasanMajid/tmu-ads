import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  Button,
  Box,
  CloseButton,
  Input
} from "@chakra-ui/react";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import axios from 'axios'
import { url } from '../../utils/constants'
import { useEffect, useState } from 'react'

function AdCard({ adPost, setAds }) {
  const { admin } = useContext(UserContext);
  const { user } = useContext(UserContext);
  const [message, setMessage] = useState('');

  //Pass the Ad info you want to delete in the database
  const handleDeletePost = async () => {
    console.log(adPost._id)
    axios.post(url + `/adpost/delete`, {
      _id: adPost._id,
      title: adPost.title
    }).then(() => {
      console.log("deleting ad")
      setAds((prevAds) => {
        const newAds = prevAds.filter(ad => ad._id !== adPost._id);
        return newAds;
      })
    }).catch(err => {
      alert("error deleting post")
      console.log("error deleting post")
    })
  }

  const handleSendMessage = async (e) => {
    console.log("Sending message to:", user.id);
    console.log("SEND MSG TEST", user.email, adPost.userEmail, message, adPost._id);
    
    try {
      await axios.
      post(url + '/message', {
        senderId: user.email,
        recipientId: adPost.userEmail,
        adId: adPost.id,
        message: message
      });

      console.log("Message sent successfully");
      alert("Message sent!");
      console.log(message)
      setMessage('');
    } catch (err) {
      alert("Error sending message");
      console.log("Error sending message", err);
    }
  };


  if (!adPost) {
    return <div></div>;
  }
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      cursor={"pointer"}
      boxShadow={"-2px 2px 4px 2px gray"}
      marginInline={"1rem"}
      padding={"auto"}
      maxW={"50rem"}
    >
      <Image
        // objectFit="cover"
        w={'fit-content'}
        maxW={"10rem"}
        m={"auto"}
        // maxW={{ base: "100%", sm: "200px" }}
        src={adPost?.image}
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading size="lg">{adPost?.title}</Heading>
          <p>{adPost?.userEmail}</p>

          <Text py="2">{adPost?.content}</Text>
          <Box
            borderRadius={"2rem"}
            backgroundColor={"gray"}
            color={"white"}
            w={"fit-content"}
            p={"0.4rem"}
            fontWeight={"bold"}
          >
            {adPost?.type}
          </Box>
        </CardBody>

        <CardFooter>
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            size="md"
          />
          <Button variant="solid" colorScheme="blue" onClick={handleSendMessage}>
            Message
          </Button>
        </CardFooter>
        
      </Stack>
        {(admin || user?.email === adPost.userEmail) && <CloseButton onClick={handleDeletePost} />}
    </Card>
  );
}

export default AdCard;
