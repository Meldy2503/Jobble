"use client";

import useToggleModal from "@/hooks/use-toggle-modal";
import { Box, Flex, Grid, Heading, HStack, IconButton } from "@chakra-ui/react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import JobCard from "./job-card";
import { jobs } from "@/lib/data";
import Modal from "../ui/modal";
import JobDetails from "./job-details";

const ExclusiveOffers = () => {
  const { open, toggleModal } = useToggleModal();

  return (
    <Box pt='3rem' pb='5rem'>
      {" "}
      <HStack justify={"space-between"} align={"center"} my={8}>
        <Box w="7rem" />
        <Heading size="3xl" fontWeight={"bold"} textAlign="center">
          Exclusive Offers
        </Heading>
        <Flex justify="center" gap={4}>
          <IconButton
            aria-label="Previous"
            bg={"transparent"}
            rounded={"full"}
            border={"1px solid #B8BDBB"}
            color={"black"}
          >
            <MdArrowBack />
          </IconButton>
          <IconButton
            aria-label="Next"
            bg={"transparent"}
            rounded={"full"}
            border={"1px solid #B8BDBB"}
            color={"black"}
          >
            <MdArrowForward />
          </IconButton>
        </Flex>
      </HStack>
      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
        {jobs.map((job, index) => (
          <JobCard key={index} {...job} onClick={toggleModal} />
        ))}
      </Grid>
      <Modal size="xl" open={open} onOpenChange={toggleModal}>
        <JobDetails />
      </Modal>
    </Box>
  );
};

export default ExclusiveOffers;
