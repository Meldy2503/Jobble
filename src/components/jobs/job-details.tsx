import {
  Box,
  Text,
  VStack,
  Flex,
  Heading,
  HStack,
  Separator,
} from "@chakra-ui/react";
import Button from "../button";
import { RxLightningBolt } from "react-icons/rx";
import parse from "html-react-parser";
import { Job } from "@/app/jobs/page";
import Image from "next/image";

interface JobDetailsProps {
  selectedJob: Job | null;
}

const JobDetails = ({ selectedJob }: JobDetailsProps) => {
  console.log(selectedJob, "selectedJob");
  return (
    <Box
      p={6}
      borderRadius="lg"
      maxW="1000px"
      mx="auto"
      h="85vh"
      overflowY={"auto"}
    >
      <VStack justify="space-between" align="start">
        <HStack justify={"space-between"} w="100%" flexWrap={"wrap"} gap="1rem">
          <Flex alignItems={"center"} gap=".6rem" flexWrap={"wrap"}>
            <Image
              src={selectedJob?.company_logo || "../../assets/amazon.svg"}
              alt={selectedJob?.company_name || "company name"}
              width={30}
              height={30}
            />
            <Text truncate fontWeight="bold" fontSize="md" color="gray.600">
              {selectedJob?.company_name}
            </Text>
          </Flex>
          <Flex
            border="1px solid #007AFF"
            px=".1rem"
            py="0.3rem"
            color={"#007AFF"}
            fontSize={"0.8rem"}
            fontWeight={"semibold"}
            alignItems={"center"}
            justifyContent={"center"}
            rounded="3rem"
            w="7rem"
          >
            <a
              href={selectedJob?.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Visit website
            </a>
          </Flex>{" "}
        </HStack>
        <VStack align="start" gap={1} w="100%" my="20px">
          <Text fontSize="xl" fontWeight="bold" w="95%">
            {selectedJob?.title}
          </Text>
          <Flex
            alignItems={"center"}
            gap="1rem"
            justifyContent={"space-between"}
            w="100%"
            flexWrap={"wrap"}
            mt="1rem"
          >
            <Box fontSize="16px" color="gray.500">
              <Text>Location: {selectedJob?.candidate_required_location}</Text>
              <Text fontSize={"16px"} truncate color="#333" mt="5px">
                {selectedJob?.salary?.startsWith("competitive")
                  ? "competitive salary"
                  : selectedJob?.salary}
              </Text>
            </Box>
            <Box>
              <Text mb="5px">{selectedJob?.category}</Text>

              <Text mb="5px" fontSize="16px">
                {selectedJob?.job_type}
              </Text>
            </Box>
          </Flex>
          <Flex
            mt="1rem"
            justifyContent={"space-between"}
            alignItems={"center"}
            w="100%"
            flexWrap={"wrap"}
            gap="1rem"
          >
            <Flex gap="5px" flexWrap={"wrap"}>
              {selectedJob?.tags.map((tag, index) => (
                <Box
                  bg="red.200"
                  key={index}
                  px="8px"
                  rounded="3rem"
                  fontSize={"12px"}
                >
                  {tag}
                </Box>
              ))}
            </Flex>
            <Button href={'/application-form'} px="1.5rem">
              <RxLightningBolt />
              <Text>Apply</Text>
            </Button>
          </Flex>
        </VStack>
      </VStack>
      <Separator />
      <Box width="100%" py={4} mt={3}>
        <Heading color={"#A2A6A4"} mb="10px" fontSize={"18px"}>
          Job Description
        </Heading>
        {selectedJob?.description && (
          <Box className="description"
          
          >
            {parse(selectedJob?.description)}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default JobDetails;
