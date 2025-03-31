"use client";

import useToggleModal from "@/hooks/use-toggle-modal";
import { useState } from "react";
import { Box, Grid, Heading, Flex } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "../ui/modal";
import JobCard from "./job-card";
import JobDetails from "./job-details";
import Button from "../button";
import { Job } from "@/app/jobs/page";

export interface ExclusiveOffersProps {
  jobs: Job[];
}

const ExclusiveOffers = ({ jobs }: ExclusiveOffersProps) => {
  const { open, toggleModal } = useToggleModal();
  const [visibleJobs, setVisibleJobs] = useState(6);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const loadMoreJobs = () => setVisibleJobs((prev) => prev + 6);
  const showLessJobs = () => setVisibleJobs(6);

  return (
    <Box pt="3rem" pb="8rem">
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
        gap={8}
        mb="3rem"
      >
        <AnimatePresence>
          {jobs.slice(0, visibleJobs).map((job) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <JobCard
                company_name={job.company_name}
                company_logo={job.company_logo}
                title={job.title}
                category={job.category}
                job_type={job.job_type}
                salary={job.salary}
                candidate_required_location={job.candidate_required_location}
                publication_date={job.publication_date}
                url={job.url}
                onClick={() => {
                  toggleModal();
                  setSelectedJob(job);
                }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </Grid>

      <Flex gap={4} mt="2rem" justifyContent={"center"} alignItems={"center"}>
        {visibleJobs < jobs?.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Button onClick={loadMoreJobs} bg="#35383F">
              Load More
            </Button>
          </motion.div>
        )}

        {visibleJobs > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Button onClick={showLessJobs} bg="#E0E0E0" color="#757575">
              Show Less
            </Button>
          </motion.div>
        )}
      </Flex>

      <Modal size="xl" open={open} onOpenChange={toggleModal}>
        <JobDetails selectedJob={selectedJob} />
      </Modal>
    </Box>
  );
};

export default ExclusiveOffers;
