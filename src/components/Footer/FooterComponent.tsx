"use client";
import React from "react";
import { Input } from "../ui/input";

const FooterComponent = () => {
  return (
    <footer className="w-full h-[20rem] bg-gray-50 border-t">
      <div className="w-full h-full container mx-auto py-5">
        <h3 className="text-6xl font-black">Blog</h3>

        <Input type="text" placeholder="..." />
      </div>
    </footer>
  );
};

export default FooterComponent;
