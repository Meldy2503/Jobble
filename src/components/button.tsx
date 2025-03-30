import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

interface ButtonProps extends ChakraButtonProps {
  children: React.ReactNode;
  href?: string;
  bg?: string;
  px?: string;
}

const Button = ({ children, href, bg, px, ...props }: ButtonProps) => {
  if (href) {
    return (
      <Link href={href} passHref>
        <ChakraButton
          borderRadius={"3rem"}
          fontSize={"1rem"}
          fontWeight={"semibold"}
          px={px ?? "1.5rem"}
          {...props}
          bg={bg ?? "#007AFF"}
        >
          {children}
        </ChakraButton>
      </Link>
    );
  }

  return (
    <ChakraButton
      borderRadius={"3rem"}
      fontSize={"1.2rem"}
      fontWeight={"semibold"}
      px={px ?? "1.5rem"}
      bg={bg ?? "#007AFF"}
      {...props}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
