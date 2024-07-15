import {
  ChakraProvider,
  Heading,
  Container,
  Text,
  Input,
  Button,
  Wrap,
  Stack,
  Image,
  SkeletonCircle,
  SkeletonText,
  Center,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [image, updateImage] = useState(null);
  const [prompt, updatePrompt] = useState("");
  const [loading, updateLoading] = useState(false);

  const generate = async () => {
    try {
      updateLoading(true);
      const response = await axios.post("http://127.0.0.1:8000/generate", {
        prompt: prompt,
      });
      updateImage(response.data.image_path);
      updateLoading(false);
    } catch (error) {
      console.error("Error generating image:", error);
      updateLoading(false);
    }
  };

  return (
    <ChakraProvider>
      <Center minHeight="100vh" bg="black" p={4}>
        <Container
          maxW="container.md"
          centerContent
          bg="white"
          p={16}
          borderRadius="md"
          boxShadow="xl"
        >
          <VStack spacing={4}>
            <Heading fontSize="4xl" color="teal.500">ArtifyAI 🚀</Heading>
            <Text fontSize="lg" color="gray.600" textAlign="center">
              Enter a prompt and click generate to create an image.
            </Text>
            <Wrap spacing={3} width="100%" justify="center">
              <Input
                value={prompt}
                onChange={(e) => updatePrompt(e.target.value)}
                width="full"
                maxWidth="400px"
                placeholder="Enter your prompt here"
              />
              <Button onClick={generate} colorScheme="teal">
                Generate
              </Button>
            </Wrap>
            {loading ? (
              <Stack width="100%" maxWidth="400px">
                <SkeletonCircle size="10" />
                <SkeletonText mt={4} noOfLines={4} spacing="4" />
              </Stack>
            ) : image ? (
              <Image
                src={`http://127.0.0.1:8000/${image}`}
                boxShadow="lg"
                borderRadius="md"
                maxWidth="100%"
              />
            ) : null}
          </VStack>
        </Container>
      </Center>
    </ChakraProvider>
  );
};

export default App;
