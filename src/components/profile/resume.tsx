import { Box, Flex, Heading, Separator, Text } from "@chakra-ui/react";
import React from "react";
import { InputElement } from "../ui/input-element";
import { BiPlus } from "react-icons/bi";

const Resume = () => {
  return (
    <Box>
      <Heading as="h2" fontWeight={"bold"}>
        Resume
      </Heading>
      <Text my="0.5rem" color={"#4A4B4A"} fontSize={"14px"}>
        Upload your resume
      </Text>
      <Separator />
      <Box my={"1rem"}>
        <InputElement type="file" />
      </Box>

      <Flex
        gap="5px"
        alignItems={"center"}
        cursor={"pointer"}
        color={"#007AFF"}
      >
        <BiPlus />
        <Text>Change file</Text>
      </Flex>
    </Box>
  );
};

export default Resume;
