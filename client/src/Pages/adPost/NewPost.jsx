import { useState } from 'react'
import {
    Container,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    VStack,
    Image,
    Box
} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import axios from 'axios';
import { url } from "../../utils/constants";


export default function NewPost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState();
    const [imageData, setImageData] = useState();
    const { setUser } = useContext(UserContext);
    let navigate = useNavigate();
    

    //TODO: Convert image to base64
    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    const handleImageChange = async (e) => {
        const file = e.target.files[0];//Get the file from the input, (first file from input)
        const base64 = await convertToBase64(file)
        console.log(base64);
        
        // if (file) {//If file exists
        //     setImage(URL.createObjectURL(file)); //Create a URL for the file for preview
        //     setImageData(file);//Store the file in state for later use (e.g., submitting the form)
        // }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append('title', title);
        formData.append('content', content);
        //TO DO
        //NEED TO ADD IMAGE
        axios.post(url + "/adpost", formData).then((res) => {
            // Handle success
            console.log(res.data);
            setUser(res.data);
            navigate("/");
            console.log(`SUCCESS`);
            alert('Post submitted successfully!');
        }).catch(err => {
            alert(err.message);
            console.log(`ERROR`);
        });
    };


    return (
        <Container maxW="container.md" mt={5}>
            <VStack spacing={5} as="form" onSubmit={(e) => e.preventDefault()}>
                <Heading>Create New Post</Heading>
                <FormControl isRequired>
                    <FormLabel htmlFor="postTitle">Title</FormLabel>
                    <Input id="postTitle" placeholder="Enter title" />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel htmlFor="postContent">Content</FormLabel>
                    <Textarea id="postContent" placeholder="Enter content" />
                </FormControl>
                <FormControl>
                    <FormLabel>Upload Image</FormLabel>
                    <Input type="file" accept="image/*" onChange={handleImageChange} />
                    {image && <Box boxSize="sm">
                    <Image src={image} alt="Preview" objectFit="cover" />
                    </Box>}
                </FormControl>
                <Button type="submit" colorScheme="teal" size="md" onClick={handleSubmit}>
                    Submit Post
                </Button>
            </VStack>
        </Container>
    )
}
