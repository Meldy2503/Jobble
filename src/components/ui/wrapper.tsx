import { Box } from "@chakra-ui/react";
import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  pt?: string | { base?: string; md?: string; lg?: string };
  bg?: string
}

const Wrapper = ({ children, pt, bg }: WrapperProps) => {
  return (
    <Box w="100%" pt={pt ?? "7rem"} bg={bg ?? '#f9f9f9'}>
      <Box maxW="1240px" w="90%" mx="auto">
        {children}
      </Box>
    </Box>
  );
};

export default Wrapper;
