import React from "react";
import { Metadata } from "next";
import NavbarContainer from "@/components/Navbar/NavbarContainer";
import FooterContainer from "@/components/Footer/FooterContainer";

export const metadata: Metadata = {
  title: "home",
  description:
    "Esta plantilla es ideal para desarrolladores que desean crear una aplicación web con Next.js.",
};

const LayoutAdmin = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <NavbarContainer />
      {children}
      <FooterContainer />
    </>
  );
};

export default LayoutAdmin;
