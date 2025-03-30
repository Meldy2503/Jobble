import Navbar from "@/components/navbar";
import About from "@/components/profile/about";
import MyJob from "@/components/profile/my-job";
import Resume from "@/components/profile/resume";
import { Avatar, Box, Grid, Heading, Link, Tabs, Text } from "@chakra-ui/react";

const Profile = () => {
  return (
    <>
      <Navbar />
      <Grid placeItems={"center"} bg={"#f9f9f9"} py='7rem'>
        <Box
          mt={10}
          w={{ base: "100%", md: "80%", lg: "60%" }}
          mx={"auto"}
          p={"2rem"}
          border={"1px solid #CFD4D1"}
          rounded={"md"}
        >
          <Box>
            <Avatar.Root size={"2xl"}>
              <Avatar.Fallback name="Philip Maya" />
              <Avatar.Image src="https://bit.ly/sage-adebayo" />
            </Avatar.Root>
            <Heading mt="1rem">Philip Maya</Heading>
            <Text fontSize={"14px"} color={"#606261"} my="3px">
              UI/UX Designer
            </Text>
            <Text fontSize={"14px"} mb={"2rem"} color={"#8C8F8E"}>
              Porto, Portugal
            </Text>
            <Tabs.Root defaultValue="about">
              <Tabs.List>
                <Tabs.Trigger
                  value="about"
                  asChild
                  _selected={{
                    color: "#007AFF",
                  }}
                >
                  <Link unstyled href="#about" style={{ fontSize: "1rem" }}>
                    About
                  </Link>
                </Tabs.Trigger>
                <Tabs.Trigger
                  value="resume"
                  asChild
                  _selected={{
                    color: "#007AFF",
                  }}
                >
                  <Link
                    unstyled
                    style={{
                      marginLeft: "1.5rem",
                      marginRight: "1.5rem",
                      fontSize: "1rem",
                    }}
                    href="#resume"
                  >
                    Resume
                  </Link>
                </Tabs.Trigger>
                <Tabs.Trigger
                  value="my-job"
                  asChild
                  _selected={{
                    color: "#007AFF",
                  }}
                >
                  <Link unstyled href="#my-job" style={{ fontSize: "1rem" }}>
                    My Job
                  </Link>
                </Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content value="about" >
                <About />
              </Tabs.Content>
              <Tabs.Content value="resume">
                <Resume />
              </Tabs.Content>
              <Tabs.Content value="my-job">
                <MyJob />
              </Tabs.Content>
            </Tabs.Root>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default Profile;
