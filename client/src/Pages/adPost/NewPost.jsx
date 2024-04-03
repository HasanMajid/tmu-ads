import { useEffect, useState } from "react";
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
    Box,
    Select
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import axios from "axios";
import { url } from "../../utils/constants";

export default function NewPost() {
    const [title, setTitle] = useState(null);
    const [content, setContent] = useState(null);
    const [image, setImage] = useState(null);
    // const [imageData, setImageData] = useState(null);
    const [type, setType] = useState(null)
    const { setUser, user } = useContext(UserContext);

    let navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/")
        }
    }, [navigate, user])

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
        const file = e.target.files[0]; //Get the file from the input, (first file from input)
        const base64 = await convertToBase64(file);
        setImage(base64);
        console.log(base64);

        // if (file) {//If file exists
        //     setImage(URL.createObjectURL(file)); //Create a URL for the file for preview
        //     setImageData(file);//Store the file in state for later use (e.g., submitting the form)
        // }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        //TO DO
        //NEED TO ADD IMAGE
        axios
            .post(url + "/adpost", {
                title,
                content,
                image,
                type,
                email: user.email
            })
            .then((res) => {
                // Handle success
                console.log(res.data);
                navigate("/");
                alert("Post submitted successfully!");
            })
            .catch((err) => {
                alert(err.response.data.error);
                console.log(err);
            });
    };

    return (
        <Container maxW="container.md" mt={5}>
            <VStack spacing={5} as="form" onSubmit={(e) => e.preventDefault()}>
                <Heading>Create New Ad</Heading>

                <FormControl isRequired>
                    <FormLabel>Advertisement type</FormLabel>
                    <Select placeholder="Select Type" onChange={(e) => {
                        console.log(e.target.value);
                        setType(e.target.value);
                    }}>
                        <option>For Sale</option>
                        <option>Item Wanted</option>
                        <option>Academic Service</option>
                    </Select>
                </FormControl>

                <FormControl isRequired>
                    <FormLabel htmlFor="postTitle">Title</FormLabel>
                    <Input
                        id="postTitle"
                        placeholder="Enter title"
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                    />
                </FormControl>

                <FormControl isRequired>
                    <FormLabel htmlFor="postContent">Content</FormLabel>
                    <Textarea
                        id="postContent"
                        placeholder="Enter content"
                        onChange={(e) => {
                            setContent(e.target.value);
                        }}
                    />
                </FormControl>

                <Button
                    type="submit"
                    colorScheme="teal"
                    size="md"
                    onClick={handleSubmit}
                >
                    Submit Post
                </Button>

                <FormControl>
                    <FormLabel>Upload Image</FormLabel>
                    <Input type="file" accept="image/*" onChange={handleImageChange} />
                    {image && (
                        <Box boxSize="sm">
                            <Image src={image} alt="Preview" objectFit="cover" />
                        </Box>
                    )}
                </FormControl>

            </VStack>
        </Container>
    );
}
