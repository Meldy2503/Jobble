import { jobCategories } from "@/lib/data";
import Image from "next/image";
import React from "react";
import { Box, Heading, Grid, Flex, Text } from "@chakra-ui/react";
import Wrapper from "../ui/wrapper";
import pattern from "@/assets/pattern.svg";

interface CategoriesCardProps {
  title?: string;
  logo?: string;
  jobsAvailable?: number;
  w?: number;
}

const CategoriesCard = ({
  title,
  logo,
  jobsAvailable,
  w,
}: CategoriesCardProps) => {
  return (
    <Box
      display="flex"
      alignItems="start"
      gap={8}
      p={{base: 4, sm: 7}}
      maxW="1280px"
      borderRadius="2rem"
      bg="white"
      boxShadow="0px 0px 16px rgb(221, 240, 255)"
      _hover={{
        bg: "#007aff",
        color: "white",
        "& h3": { color: "white" },
        "& p": { color: "white" },
        "& .img": { bg: "white" },
      }}
      transition="0.3s ease-in-out"
    >
      <Box
        className="img"
        _hover={{
          bg: "white",
        }}
        borderRadius="full"
        p=".5rem"
      >
        <Image
          src={logo || "/default-logo.png"}
          width={w || 60}
          height={60}
          alt={title || "category icons"}
        />
      </Box>
      <Box>
        <Heading as="h3" size="xl" fontWeight="bold" color="#333">
          {title}
        </Heading>
        <Text fontSize="1rem" color="#828282" mt={2}>
          {jobsAvailable} jobs available
        </Text>
      </Box>
    </Box>
  );
};

const Categories = () => {
  return (
    <Box position={"relative"} zIndex="2">
      <Box zIndex={"1"}>
        <Image
          src={pattern}
          width={250}
          height={250}
          alt="lady"
          style={{
            position: "absolute",
            top: "0",
            right: "-2rem",
          }}
        />
      </Box>
      <Wrapper>
        <Flex justify="center" align="center" h="4rem">
          <Heading
            as="h2"
            size="5xl"
            fontWeight="bold"
            fontSize={{ base: "1.9rem", md: "2.5rem", lg: "3rem" }}
            lineHeight={1.3}
          >
            Choose Categories
          </Heading>
        </Flex>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          gap={6}
          py={4}
          mt={5}
        >
          {jobCategories.map((category) => (
            <CategoriesCard
              key={category.title}
              {...category}
              w={
                category.title === "Marketing & Communication"
                  ? 85
                  : category.title === "Business & Consulting"
                  ? 80
                  : 60
              }
            />
          ))}
        </Grid>
      </Wrapper>
    </Box>
  );
};

export default Categories;
