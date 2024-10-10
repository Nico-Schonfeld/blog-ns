import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  description:
    "Esta plantilla es ideal para desarrolladores que desean crear una aplicación web con Next.js.",
};

const LayoutAdmin = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <>{children}</>;
};

export default LayoutAdmin;
