import Footer from "@/components/footer";
import ExclusiveOffers from "@/components/jobs/exclusive-offers";
import JobSearch from "@/components/jobs/job-search";
import Navbar from "@/components/navbar";
import Wrapper from "@/components/ui/wrapper";
import React from "react";

const Jobs = () => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <JobSearch />
        <ExclusiveOffers />
      </Wrapper>
      <Footer />
    </>
  );
};

export default Jobs;
