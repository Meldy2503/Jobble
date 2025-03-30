"use client";

import { Box, Flex, Heading, Separator, Text } from "@chakra-ui/react";
import React from "react";
import { BiPlus } from "react-icons/bi";
import Modal from "../ui/modal";
import SkillsForm from "./skills-form";
import useToggleModal from "@/hooks/use-toggle-modal";
import WorkExperienceForm from "./work-experience-form";
import EducationForm from "./education-form";

const About = () => {
  const { open: openSkills, toggleModal: toggleSkills } = useToggleModal();
  const { open: openExperience, toggleModal: toggleExperience } =
    useToggleModal();
  const { open: openEducation, toggleModal: toggleEducation } =
    useToggleModal();
  return (
    <Box>
      <Heading as="h2" fontWeight={"bold"}>
        About
      </Heading>
      <Text my="0.5rem" color={"#4A4B4A"} fontSize={"14px"}>
        Updating your information will offer you the most relevant content
      </Text>
      <Separator />
      <Box py="1rem">
        <Flex mb="1rem" alignItems={"center"} justify={"space-between"}>
          <Heading color={"#8C8F8E"}>Skills</Heading>
          <Box cursor={"pointer"} onClick={toggleSkills}>
            <BiPlus />
          </Box>
        </Flex>
        <Separator />
      </Box>
      <Box py="1rem">
        <Flex mb="1rem" alignItems={"center"} justify={"space-between"}>
          <Heading color={"#8C8F8E"}>Add work experience</Heading>
          <Box cursor={"pointer"} onClick={toggleExperience}>
            <BiPlus />
          </Box>
        </Flex>
        <Separator />
      </Box>
      <Box py="1rem">
        <Flex mb="1rem" alignItems={"center"} justify={"space-between"}>
          <Heading color={"#8C8F8E"}>Add education</Heading>
          <Box cursor={"pointer"} onClick={toggleEducation}>
            <BiPlus />
          </Box>
        </Flex>
        <Separator />
      </Box>
      <Modal
        open={openSkills}
        onOpenChange={toggleSkills}
        title="Add skill"
        cta
      >
        <SkillsForm />
      </Modal>
      <Modal
        open={openExperience}
        onOpenChange={toggleExperience}
        title="Add Work Experience"
        cta
      >
        <WorkExperienceForm />
      </Modal>
      <Modal
        open={openEducation}
        onOpenChange={toggleEducation}
        title="Add education"
        cta
      >
        <EducationForm />
      </Modal>
    </Box>
  );
};

export default About;
