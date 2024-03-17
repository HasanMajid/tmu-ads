import { Card, CardHeader, CardBody, CardFooter, Heading, Image } from '@chakra-ui/react'

function AdCard() {
    return (
        <Card boxShadow={"-2px 2px 4px 2px gray"} colorScheme='' maxWidth={"17rem"} marginInline={"1rem"} padding={"auto"}>
            <CardHeader>
                <Heading fontSize={"2rem"}>AdCard Name</Heading>
            </CardHeader>
            <CardBody>
                <Image
                    objectFit='cover'
                    w={"fit-content"}
                    m={"auto"}
                    maxW={{ base: '100%', sm: '200px' }}
                    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                    alt='Caffe Latte'
                />
                This sofa is perfect for modern tropical spaces, baroque inspired
                spaces, earthy toned spaces and for people who love a chic design with a
                sprinkle of vintage design.
            </CardBody>
        </Card>
    )
}

export default AdCard