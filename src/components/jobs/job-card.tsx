import { Box, Text, Flex, VStack, HStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { BsBookmarkDash } from "react-icons/bs";
import Button from "../button";

interface JobCardProps {
  company: string;
  title: string;
  location: string;
  timePosted: string;
  logo: string;
  onClick: () => void;
}

const JobCard: React.FC<JobCardProps> = ({
  company,
  title,
  location,
  timePosted,
  logo,
  onClick,
}) => {
  return (
    <Box borderWidth="1px" borderRadius="15px" p={4} shadow="md" bg="#fff">
      <VStack justify="space-between" align="start">
        <HStack justify={"space-between"} w="100%">
          <HStack gap={3} alignItems={"center"} justify={"center"}>
            <Image src={logo} width={30} height={30} alt={`${company} logo`} />
            <Text fontWeight="bold" fontSize="sm" color="gray.600">
              {company} company
            </Text>
          </HStack>
          <BsBookmarkDash size={18} cursor={"pointer"} />
        </HStack>

        <VStack align="start" gap={1} my={3}>
          <Text fontSize="lg" fontWeight="bold">
            {title}
          </Text>
          <Text fontSize="sm" color="gray.500">
            {location}
          </Text>
        </VStack>
      </VStack>
      <Flex justify="space-between" align="center" mt={4}>
        <Button
          bg="#CFEAFE"
          px="1rem"
          py="0.8rem"
          color={"#007AFF"}
          fontSize={"0.8rem"}
          fontWeight={"bold"}
          onClick={onClick}
        >
          View Details
        </Button>
        <Text fontSize="xs" color="gray.400">
          {timePosted}
        </Text>
      </Flex>
    </Box>
  );
};

export default JobCard;
