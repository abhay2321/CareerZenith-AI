"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Hero = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // It's good practice to give a section an aria-label for accessibility
    <section className="w-full pt-36 md:pt-34 pb-10">
      <div className="space-y-6 text-center">
        {" "}
        {/* Increased spacing for better separation */}
        <div className="space-y-6 mx-auto">
          {" "}
          {/* Constrain text width for readability */}
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title">
            Smarter Career Moves
            <br />
            Powered by Our AI
          </h1>
          <p className="mx-auto max-w-[600px] md:text-xl text-sm text-muted-foreground">
            {" "}
            {/* Softer color for subheading */}
            Advance your career with personalized guidance, interview prep, and
            AI-powered tools for job success.
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <Link href={"/dashboard"}>
            {" "}
            {/* Use a more descriptive link */}
            <Button size="lg" className="px-8 animate-bounce-in">
              Get Started
            </Button>
          </Link>

          <Link href={"/about"}>
            {" "}
            {/* Use a more descriptive link */}
            <Button size="lg" className="px-8" variant="ghost">
              About Us
            </Button>
          </Link>
        </div>
        {/* The div wrapper for the Image is fine, no need for nesting */}
        <div className="hero-image-wrapper mt-5 md:mt-0">
          <div ref={imageRef} className="hero-image">
            <Image
              src={"/banner.png"}
              width={1080}
              height={320}
              // This is the most important fix: provide descriptive alt text.
              alt="An AI-powered dashboard showing career progress and job recommendations"
              className="mx-auto rounded-lg border shadow-lg" // Added rounded corners and a shadow
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
