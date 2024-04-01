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
} from "@chakra-ui/react";

function AdCard({ adPost }) {
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
          <Button variant="solid" colorScheme="blue">
            Message
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}

export default AdCard;
