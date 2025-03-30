import { Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Button from "../button";

const SavedJobs = () => {
  return (
    <VStack bg="#F8FCFF" py="4rem" mt="2rem">
      <Heading>No saved jobs yet! ⭐</Heading>
      <Text my='1rem'>
        Find new opportunities and manage your job search progress here.
      </Text>
      <Button href="/jobs">Browse Jobs</Button>
    </VStack>
  );
};

export default SavedJobs;
