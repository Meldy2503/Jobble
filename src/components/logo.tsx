import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/gohire-logo.svg";


const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        src={logo}
        alt="logo"
        height={115}
        width={115}
      />
    </Link>
  );
};

export default Logo;
