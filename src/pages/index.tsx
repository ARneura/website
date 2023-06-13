import React from "react";
import Hero from "@/components/Hero";
import FlipCard from "@/components/FlipCard";
import Contact from "@/components/Contact";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header home={"#home"} services={"#services"} technologies={"/about"} />

      <Hero />

      <div className="w-full">
        <FlipCard />
      </div>

      <div className="flex flex-col items-center bg-[#1c223b]">
        <div className="w-full max-w-6xl">
          <Contact />
        </div>
      </div>
    </>
  );
}
