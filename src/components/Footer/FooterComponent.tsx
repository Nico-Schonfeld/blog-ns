"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Github, Twitter } from "lucide-react";

const FooterComponent = () => {
  return (
    <footer className="w-full bg-gray-50 border-t">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold">Blog</h3>
            <p className="text-sm text-muted-foreground">
              Exploring ideas, sharing knowledge, and connecting with readers
              around the world.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:contact@example.com"
                className="text-muted-foreground hover:text-primary"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
              <a
                href="https://github.com/yourusername"
                className="text-muted-foreground hover:text-primary"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://twitter.com/yourusername"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">
              Subscribe to Our Newsletter
            </h4>
            <p className="text-sm text-muted-foreground">
              Stay updated with our latest posts and announcements.
            </p>
            <form
              className="flex space-x-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="max-w-[220px]"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Support Our Work</h4>
            <p className="text-sm text-muted-foreground">
              If you find our content valuable, consider supporting us with a
              donation.
            </p>
            <Button variant="outline" className="w-full sm:w-auto">
              Sponsor
            </Button>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Your Blog Name. All rights reserved.
          </p>
          {/*  <nav className="flex space-x-4 mt-4 sm:mt-0">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Terms of Service
            </a>
          </nav> */}
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
