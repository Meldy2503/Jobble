import { Box, Text, Flex, VStack, HStack } from "@chakra-ui/react";
import React from "react";
import { BsBookmarkDash } from "react-icons/bs";
import Button from "../button";

interface JobCardProps {
  company_name?: string;
  title?: string;
  remote?: boolean;
  location?: string;
  description?: string;
  created_at: number;
  url?: string;
  onClick: () => void;
}

const JobCard: React.FC<JobCardProps> = ({
  company_name,
  title,
  location,
  created_at,
  remote,
  url,
  onClick,
}) => {
  const formatDate = (timestamp: number): string => {
    const createdDate = new Date(timestamp * 1000); // Convert seconds to milliseconds
    const today = new Date();
    const diffDays = Math.floor(
      (today.getTime() - createdDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    return diffDays === 0
      ? "Today"
      : diffDays === 1
      ? "1 day ago"
      : `${diffDays} days ago`;
  };
  return (
    <Box
      borderWidth="1px"
      borderRadius="15px"
      p={4}
      shadow="md"
      bg="#fff"
      _hover={{ bg: "#F8FCFF" }}
      cursor={"pointer"}
    >
      <VStack justify="space-between" align="start">
        <HStack justify={"space-between"} w="100%">
          <Text fontWeight="bold" fontSize="sm" color="gray.600">
            {company_name}
          </Text>
          <BsBookmarkDash size={18} cursor={"pointer"} />
        </HStack>

        <VStack align="start" gap={1} my={3} w="100%">
          <Text fontSize="lg" fontWeight="bold" w={{ base: "95%", md: "80%" }}>
            {title}
          </Text>
          <Flex
            alignItems={"center"}
            gap="1rem"
            justifyContent={"space-between"}
            w="100%"
            mt="1rem"
          >
            <Box w="75%" fontSize="sm" color="gray.500">
              <Text >
                Location: {location}
              </Text>
              <Text >
                {remote === true ? "Remote" : "Onsite"}
              </Text>
            </Box>
            <Flex
              border="1px solid #007AFF"
              px=".5rem"
              py="0.4rem"
              color={"#007AFF"}
              fontSize={"0.8rem"}
              fontWeight={"semibold"}
              alignItems={"center"}
              justifyContent={"center"}
              rounded="3rem"
              w="8rem"
            >
              <a href={url} target="_blank" rel="noopener noreferrer">
                {" "}
                Visit website
              </a>
            </Flex>
          </Flex>
        </VStack>
      </VStack>
      <Flex justify="space-between" alignItems="center" mt={3}>
        <Button
          bg="#CFEAFE"
          px="1rem"
          py="0.7rem"
          color={"#007AFF"}
          fontSize={"0.8rem"}
          fontWeight={"semibold"}
          onClick={onClick}
        >
          View Details
        </Button>
        <Text fontSize="xs" color="gray.400">
          {formatDate(created_at)}
        </Text>
      </Flex>
    </Box>
  );
};

export default JobCard;
