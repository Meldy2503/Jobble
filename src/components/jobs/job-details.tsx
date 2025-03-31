import {
  Box,
  Text,
  VStack,
  Flex,
  Heading,
  // Spacer,
  HStack,
  // List,
} from "@chakra-ui/react";
import Button from "../button";
import { RiBookMarkedLine } from "react-icons/ri";
import { RxLightningBolt } from "react-icons/rx";
import { Job } from "./exclusive-offers";

interface SubTitleProps {
  title: string;
  text: string;
}

interface JobDetailsProps {
  selectedJob: Job | null;
}

const SubTitle = ({ title, text }: SubTitleProps) => (
  <HStack gap={1}>
    <Text fontWeight={"semibold"} fontSize="md">
      {title}:
    </Text>
    <Text>{text}</Text>
  </HStack>
);

const JobDetails = ({ selectedJob }: JobDetailsProps) => {
  return (
    <Box p={6} borderRadius="lg" maxW="1000px" mx="auto">
      <VStack align="start" gap={5}>
        <Flex w="full" justify={"space-between"} align={"center"}>
          <Heading fontSize={"16px"} as={"h4"} color={"#007AFF"}>
            {selectedJob?.company_name}
          </Heading>
          <RiBookMarkedLine />
        </Flex>

        {/* <Flex justify={"space-between"} w={"full"} mb={"2rem"}>
          <Box>
            <Heading size="lg" fontWeight="bold">
              {selectedJob?.title}
            </Heading>
            <Text color="gray.500">Porto, Portugal (On Site)</Text>
          </Box>
          <Button>
            <RxLightningBolt />
            <p>Apply</p>
          </Button>
        </Flex> */}

        <VStack align="start" gap={1} my={3} w="100%">
          <Text fontSize="lg" fontWeight="bold" w={{ base: "95%", md: "80%" }}>
            {selectedJob?.title}
          </Text>
          <Flex
            alignItems={"center"}
            gap="1rem"
            justifyContent={"space-between"}
            w="100%"
            mt="1rem"
          >
            <Box w="75%" fontSize="md" color="gray.500">
              <Text>Location: {selectedJob?.location}</Text>
              <Text mt='10px'>
                {selectedJob?.remote === true ? "Remote" : "Onsite"}
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
              <a
                href={selectedJob?.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Visit website
              </a>
            </Flex>
            <Button>
              <RxLightningBolt />
              <p>Apply</p>
            </Button>
          </Flex>
        </VStack>
      </VStack>

      {/* <SubTitle title={"Where you'll do it"} text={"Maya"} />
      <SubTitle
        title={"The Interview Process"}
        text={
          "It will have 2 stages that include a 45 min HR chat ➡️ 1h Cultural/Technical chat"
        }
      />
      <SubTitle title={"Tools"} text={"Figma"} />
      <SubTitle title={"Reporting to"} text={"Design Manager, Bruno Mota"} />
      <SubTitle
        title={"Your team"}
        text={
          "You will mainly be part of a UX Designer’s team, working with cross-functional teams and a wider group of UX department"
        }
      /> */}

      <Box width="100%" py={4} mt={6}>
        <Heading color={"#A2A6A4"} mb={2}>
          Job Description
        </Heading>
        <Text>{selectedJob?.description}</Text>

        {/* <List.Root ml={5}>
            <List.Item>
              A supportive manager who cares about your well-being and is
              invested in your professional growth.
            </List.Item>
            <List.Item>
              A culture of continuous learning with clear targets and feedback.
            </List.Item>
            <List.Item>
              A global company with over 2600 employees located in more than 26
              countries, including offices in 3 countries.
            </List.Item>
          </List.Root> */}
      </Box>
      {/* <Box
          width="100%"
          py={4}
          mt={4}
          pt={7}
          borderTop="1px solid"
          borderColor="gray.200"
        >
          <Heading color={"#A2A6A4"} mb={2}>
            Requirement
          </Heading>
          <Heading as={"h3"}>What will you do</Heading>
          <Text>
            As a UX Designer on our team, you will shape user experiences by
            leading the design of key features and products. Your
            responsibilities include defining user experience flows, designing
            new product concepts, and crafting user stories. You will design
            detailed UI layouts, create benchmarks, and develop high-fidelity
            prototypes while documenting UX and UI strategies. Collaborating
            with technical teams, you will transform designs into impactful,
            industry-leading products. This role combines creativity and
            problem-solving to create meaningful user experiences. Your journey
            with us is an opportunity to drive innovation and make a significant
            impact.
          </Text>
        </Box>
        <Box>
          {" "}
          <Heading as={"h3"}>What You’ll Bring</Heading>
          <List.Root ml={5}>
            <List.Item>
              Showcase proficiency in collaborative design environments.
            </List.Item>
            <List.Item>
              Demonstrated ability to work independently, think critically, and
              maintain meticulous attention to detail.
            </List.Item>
            <List.Item>
              Solid grasp of interactive elements, micro-interactions, and
              animations, contributing to a seamless user experience.
            </List.Item>
            <List.Item>
              Clear understanding of the entire UX lifecycle, coupled with a
              track record of designing successful apps and products.
            </List.Item>
            <List.Item>
              Deep passion for digital product development and an unwavering
              commitment to achieving excellence.
            </List.Item>
          </List.Root>
        </Box> */}

      {/* <Box width="100%" py={4} borderTop="1px solid" borderColor="gray.200">
          <Heading color={"#A2A6A4"} mb={2}>
            Benefit
          </Heading>
          <Heading as={"h4"} fontSize={16}>
            Base Pay Range:
          </Heading>
          <HStack gap={3}>
            <Text>
              $50.00 - $60.00 <span>per/h</span>
            </Text>
          </HStack>
        </Box>

        <Box>
          {" "}
          <Heading as={"h3"}>What’s in it for you?</Heading>
          <List.Root ml={5}>
            <List.Item>
              Embrace work-life balance with hybrid/remote roles and flexible
              hours.
            </List.Item>
            <List.Item>Enjoy 22 days + Birthday + Carnival Tuesday.</List.Item>
            <List.Item>
              Participate in team-building activities and events.
            </List.Item>
            <List.Item>
              Utilize the best tools and technology for work.
            </List.Item>
            <List.Item>
              Stay covered with comprehensive health insurance.
            </List.Item>
            <List.Item>A huge team of UX designers to learn from.</List.Item>
          </List.Root>
        </Box>

        <Spacer /> */}
      {/* </VStack> */}
    </Box>
  );
};

export default JobDetails;
