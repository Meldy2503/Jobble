import { Box, Heading, Separator, Text } from "@chakra-ui/react";
import React from "react";
import { InputElement } from "../ui/input-element";

const Resume = () => {
  return (
    <Box mt="2rem">
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
    </Box>
  );
};

export default Resume;
