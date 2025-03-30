import Navbar from "@/components/navbar";
import About from "@/components/profile/about";
import MyJob from "@/components/profile/my-job";
import Resume from "@/components/profile/resume";
import { Avatar, Link, Text, Box, Heading, Tabs, Grid } from "@chakra-ui/react";

const Profile = () => {
  return (
    <>
      <Navbar />
      <Grid placeItems={"center"} h="100vh" w="100vw" bg={"#f9f9f9"}>
        <Box
          mt={10}
          minH="500px"
          w="800px"
          mx={"auto"}
          p={"2rem"}
          border={"1px solid #CFD4D1"}
          rounded={"sm"}
        >
          <Box>
            <Avatar.Root size={"2xl"}>
              <Avatar.Fallback name="Philip Maya" />
              <Avatar.Image src="https://bit.ly/sage-adebayo" />
            </Avatar.Root>
            <Heading>Philip Maya</Heading>
            <Text fontSize={"14px"} color={"#606261"}>
              UI/UX Designer
            </Text>
            <Text fontSize={"14px"} mb={"2rem"} color={"#8C8F8E"}>
              Porto, Portugal
            </Text>
            <Tabs.Root defaultValue="about">
              <Tabs.List>
                <Tabs.Trigger value="about" asChild>
                  <Link unstyled href="#about">
                    About
                  </Link>
                </Tabs.Trigger>
                <Tabs.Trigger value="resume" asChild>
                  <Link unstyled href="#resume">
                    Resume
                  </Link>
                </Tabs.Trigger>
                <Tabs.Trigger value="my-job" asChild>
                  <Link unstyled href="#my-job">
                    My Job
                  </Link>
                </Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content value="about">
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
