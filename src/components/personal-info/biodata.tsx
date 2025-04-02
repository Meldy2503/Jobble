"use client";

import React from "react";
import { InputElement } from "../ui/input-element";
import {
  Box,
  Checkbox,
  CheckboxGroup,
  Grid,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import GoBack from "../ui/go-back";
import Image from "next/image";
import Modal from "../ui/modal";
import Button from "../button";
import useToggleModal from "@/hooks/use-toggle-modal";
import success from "@/assets/sent.svg";
import Wrapper from "../ui/wrapper";
import { useJob } from "@/context/job-context";

const Biodata = () => {
  const { open, openModal, toggleModal } = useToggleModal();
  const { selectedJob } = useJob();

  return (
    <Wrapper>
      <Box pb="6rem" w={{ base: "100%", md: "80%", lg: "70%" }} mx="auto">
        <GoBack />
        <HStack my="1.5rem">
          <Image
            src={selectedJob?.company_logo || ""}
            width={50}
            height={50}
            alt="comapany logo"
            style={{ width: "1.5rem" }}
          />
          <Text color={"#595a5a"} fontSize={"1.1rem"}>
            {selectedJob?.company_name}
          </Text>
        </HStack>
        <Box gap={4} mb={8} borderBottom={"1px solid #E5E5E5"}>
          <Heading
            as="h1"
            fontSize={{ base: "1.8rem", md: "2rem", lg: "2.5rem" }}
            lineHeight={1.3}
            fontWeight="bold"
          >
            {selectedJob?.title}
          </Heading>
          <Box fontSize={"1.1rem"} color={"#333"} mt="1rem" mb="2rem">
            <Text>Location: {selectedJob?.candidate_required_location}</Text>
            <Text fontSize={"16px"} truncate>
              Salary:{" "}
              {selectedJob?.salary?.startsWith("competitive")
                ? "competitive salary"
                : selectedJob?.salary}
            </Text>{" "}
          </Box>
        </Box>
        <Heading as="h3" size="xl" fontWeight="semibold" mb="2rem">
          Personal Information
        </Heading>
        <Box as={"form"} spaceY={7}>
          <Grid
            gapX={4}
            gapY={7}
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          >
            <InputElement label="First Name" placeholder="Emma" required />
            <InputElement label="Last Name" placeholder="Stone" required />
            <InputElement
              label="Email"
              placeholder="emmastone@gmail.com"
              required
            />
            <InputElement label="Phone Number" type="tel" required />
          </Grid>
          <InputElement
            type="file"
            label="Upload CV"
            placeholder="emmastone@gmail.com"
            required
          />
          <InputElement
            type="file"
            label="Additional files"
            placeholder="emmastone@gmail.com"
            required
          />
          <InputElement
            type="textarea"
            label="Cover Letter"
            placeholder="write your cover letter here"
            required
          />
          <Box>
            <CheckboxGroup color="#606261">
              <Checkbox.Root defaultChecked size={"sm"} variant={"outline"}>
                <Checkbox.HiddenInput />
                <Checkbox.Control rounded={"4px"} />
                <Checkbox.Label fontSize={"0.9rem"}>
                  By submitting this application, I agree that I have read
                  the Privacy Policy and confirm that jobior store my personal
                  details to be able to process my job application.
                </Checkbox.Label>
              </Checkbox.Root>
              <Checkbox.Root size={"sm"} variant={"outline"}>
                <Checkbox.HiddenInput />
                <Checkbox.Control rounded={"4px"} />
                <Checkbox.Label fontSize={"0.9rem"}>
                  Yes, Jobble can contact me directly about specific future job
                  opportunities.
                </Checkbox.Label>
              </Checkbox.Root>
            </CheckboxGroup>
          </Box>
          <HStack justify={"center"}>
            <Button type="button" mt={"2rem"} onClick={openModal}>
              Submit Application
            </Button>
          </HStack>
        </Box>

        {/* Modal Component */}
        <Modal open={open} onOpenChange={toggleModal}>
          <VStack>
            <Image
              src={success}
              width={1000}
              height={1000}
              alt="success"
              style={{ width: "20rem" }}
            />
            <Heading
              as="h3"
              my="1.5rem"
              fontWeight="bold"
              textAlign={"center"}
              lineHeight={1.8}
            >
              Your application to{" "}
              <Text
                as="span"
                mt="-0.2rem"
                mb="1.5rem"
                color="#006adc"
                fontWeight="bold"
              >
                {selectedJob?.company_name} Company
              </Text>{" "}
              has been <br /> Submitted Successfully.
            </Heading>

            <Button href={"/"} px="3rem">
              Go Home
            </Button>
          </VStack>
        </Modal>
      </Box>
    </Wrapper>
  );
};

export default Biodata;
