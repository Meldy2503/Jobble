import { Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Button from "../button";

const AppliedJobs = () => {
  return (
    <VStack bg="#F8FCFF" py="4rem" mt="2rem">
      <Heading>You havent applied to any jobs!</Heading>
      <Text my='1rem'>
        Find new opportunities and manage your job search progress here.
      </Text>
      <Button href="/jobs">Browse Jobs</Button>
    </VStack>
  );
};

export default AppliedJobs;
