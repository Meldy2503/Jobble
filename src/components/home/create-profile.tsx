import Image from "next/image";
import React from "react";
import lady from "@/assets/lady-2.webp";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import Button from "../button";
import Wrapper from "../ui/wrapper";
import pattern from "@/assets/pattern.svg";

const CreateProfile = () => {
  return (
    <Box position={"relative"}>
      <Image
        src={pattern}
        width={250}
        height={250}
        alt="lady"
        style={{ position: "absolute", top: "0", left: "0" }}
      />
      <Wrapper>
        <Flex
          justify="space-between"
          align="center"
          gap={10}
          flexDir={{ base: "column-reverse", md: "row" }}
        >
          <Box w={{ base: "100%", md: "45%" }}>
            <Image src={lady} width={1500} height={1500} alt="lady" />
          </Box>
          <Box w={{ base: "100%", md: "47%" }}>
            <Heading as="h1" size="xl" mb={7} color="#007aff" fontWeight="bold">
              Create your Profile
            </Heading>
            <Heading
              as="h3"
              fontSize={{ base: "1.9rem", md: "2.5rem", lg: "3rem" }}
              lineHeight={1.3}
              fontWeight="bold"
            >
              Build Your Personal Account Profile
            </Heading>
            <Text my={4}>
              Create a free account to receive job alerts, personalize your job
              search, and apply directly to companies with ease. Stay updated
              and take the next step in your career today!
            </Text>
            <Button href="/signup" mt={4} py="1.4rem">
              Create an Account
            </Button>
          </Box>
        </Flex>
      </Wrapper>
    </Box>
  );
};

export default CreateProfile;
