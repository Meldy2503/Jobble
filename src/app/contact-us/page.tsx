import ContactForm from "@/components/contact-us/contact-form";
import ContactHero from "@/components/contact-us/contact-hero";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box bg={"#f9f9f9"}>
      <Navbar />
      <ContactHero />
      <ContactForm />
      <Footer />
    </Box>
  );
}
