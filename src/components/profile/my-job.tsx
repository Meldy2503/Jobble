import React from "react";
import { Box, Flex, Heading, Separator, Text, VStack } from "@chakra-ui/react";
import Button from "../button";

const MyJob = () => {
  return (
    <Box>
      <Heading as="h2" fontWeight={"bold"}>
        My Job
      </Heading>
      <Text my="0.5rem" color={"#4A4B4A"} fontSize={"14px"}>
        See all your job activities
      </Text>
      <Separator />
      <Flex gap={3} mt="2rem" mb="0.5rem">
        <Button variant={"outline"} bg="white">
          Applied
        </Button>
        <Button>Saved</Button>
      </Flex>
      <Separator />
      <VStack bg="#F8FCFF" py="4rem" mt="2rem">
        <Heading>No saved jobs yet! ⭐</Heading>
        <Text>
          Find new opportunities and manage your job search progress here.
        </Text>
        <Button>Browse Jobs</Button>
      </VStack>
    </Box>
  );
};

export default MyJob;
