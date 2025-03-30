"use client";

import useToggleModal from "@/hooks/use-toggle-modal";
import { jobs } from "@/lib/data";
import { Box, Grid, Heading } from "@chakra-ui/react";
import Modal from "../ui/modal";
import JobCard from "./job-card";
import JobDetails from "./job-details";

const ExclusiveOffers = () => {
  const { open, toggleModal } = useToggleModal();

  return (
    <Box pt="3rem" pb="5rem">
      {" "}
      <Heading
        fontSize={{ base: "1.5rem", md: "2rem", lg: "2rem" }}
        fontWeight={"semibold"}
        textAlign="center"
        mx="auto"
        my="2.5rem"
      >
        Exclusive Offers
      </Heading>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
        mb="6rem"
      >
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
