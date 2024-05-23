import { Container, VStack, Heading, Text, Button, HStack, Box, Image, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="2xl">
          The Rocking Band
        </Heading>
        <Text fontSize="xl">Join us on our epic tour across the globe!</Text>
        <Image src="https://images.unsplash.com/photo-1477704080907-b04e4e2d3282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyb2NrJTIwYmFuZCUyMHBlcmZvcm1pbmclMjBsaXZlfGVufDB8fHx8MTcxNjQ3NTQwMHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Rock Band Performing Live" borderRadius="md" boxShadow="lg" />
        <HStack spacing={4}>
          <Button colorScheme="teal" size="lg">
            Buy Tickets
          </Button>
          <Button colorScheme="teal" variant="outline" size="lg">
            Learn More
          </Button>
        </HStack>
        <Box>
          <Text fontSize="lg" mb={2}>
            Follow us on social media:
          </Text>
          <HStack spacing={4} justifyContent="center">
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
            <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
