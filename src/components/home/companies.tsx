import airbnb from "@/assets/airbnb.svg";
import google from "@/assets/google.svg";
import microsoft from "@/assets/microsoft.svg";
import slack from "@/assets/slack.svg";
import { Box, Heading } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Wrapper from "../ui/wrapper";

const Companies = () => {
  return (
    <Wrapper>
      <Box className="animate-container" mb={{base: '0', md: '2rem'}}>
        <Heading
          as="h3"
          fontSize={{ base: "1.9rem", md: "2.5rem", lg: "3rem" }}
          lineHeight={1.3}
          fontWeight="bold"
          textAlign="center"
          mb="3rem"
        >
          <Box as="span" color="#006adc" mx=".5rem">
            Clients
          </Box>
          Around the World
        </Heading>
        <Box className="animate">
          {[...Array(5)].map((_, index) => (
            <React.Fragment key={index}>
              <Image src={google} width={125} height={200} alt="google" />
              <Image src={slack} width={130} height={200} alt="slack" />
              <Image src={microsoft} width={150} height={200} alt="microsoft" />
              <Image src={airbnb} width={140} height={200} alt="airbnb" />
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </Wrapper>
  );
};

export default Companies;
