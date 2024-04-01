import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  Button
} from "@chakra-ui/react";

function AdCard({ adPost }) {
  if (!adPost) {
    return <div></div>;
  }
  return (
    <Card
        cursor={"pointer"}
        boxShadow={"-2px 2px 4px 2px gray"}
        colorScheme=""
        maxWidth={"17rem"}
        marginInline={"1rem"}
        padding={"auto"}
    >
        <CardHeader>
            <Heading fontSize={"2rem"}>{adPost?.title}</Heading>
            <p>{adPost?.userEmail}</p>
        </CardHeader>
        <CardBody>
            <Image
                objectFit="cover"
                w={"fit-content"}
                m={"auto"}
                maxW={{ base: "100%", sm: "200px" }}
                src={adPost?.image}
                alt="Caffe Latte"
            />
            {adPost?.content}
        </CardBody>
    </Card>

    // <Card>
    //   <Stack>
    //     <CardBody>
    //       <Heading size="md">The perfect latte</Heading>

    //       <Text py="2">
    //         Caffè latte is a coffee beverage of Italian origin made with
    //         espresso and steamed milk.
    //       </Text>
    //     </CardBody>

    //     <CardFooter>
    //       <Button variant="solid" colorScheme="blue">
    //         Buy Latte
    //       </Button>
    //     </CardFooter>
    //   </Stack>
    // </Card>
  );
}

export default AdCard;
