"use client";

import Footer from "@/components/footer";
import ExclusiveOffers from "@/components/jobs/exclusive-offers";
import JobSearch from "@/components/jobs/job-search";
import Navbar from "@/components/navbar";
import Wrapper from "@/components/ui/wrapper";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Flex, Spinner, Text } from "@chakra-ui/react";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          "https://www.arbeitnow.com/api/job-board-api"
        );
        setJobs(response.data.data); // Assuming the jobs are in `data.data`
        setLoading(false);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err.message || "Something went wrong");
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <>
      <Navbar />
      <Wrapper>
        <JobSearch />
        {loading ? (
          <Flex py="15rem" justifyContent={"center"} alignItems={"center"}>
            <Spinner />
          </Flex>
        ) : error ? (
          <Flex py="15rem" justifyContent={"center"} alignItems={"center"}>
            <Text>An error occured while loading data</Text>
          </Flex>
        ) : (
          <ExclusiveOffers jobs={jobs} />
        )}
      </Wrapper>
      <Footer />
    </>
  );
};

export default Jobs;
