import React from "react";
import Box from "@/components/Box";
import SoftwareLogosImg from "../../public/RyanFacePicture.svg";
import SoftwareLogosImgs from "../../public/AnthonyFacePicture.svg";
import Arran from "../../public/Screenshot 2023-12-23 194600.svg";
import Header from "@/components/Header";
import Link from "next/link";

const teamMembers = [
  {
    name: "Ryan Pargeter",
    description:
      "Meet Ryan, a highly skilled and experienced lead software engineer with four years of expertise in the field. Armed with a master's degree in computer science, Ryan possesses a profound understanding of the principles and complexities of software development. His specialization lies in the fascinating realm of AI technology, where he combines his technical prowess with an innovative mindset to create intelligent solutions. From designing and implementing cutting-edge machine learning algorithms to leveraging deep neural networks.",
    linkedIn: "https://www.linkedin.com/in/ryan-pargeter-39b6811b9/",
    image: SoftwareLogosImg,
  },
  {
    name: "Anthony Key",
    description:
      "Introducing Anthony, a highly skilled senior software engineer with six years of experience in the industry. Throughout his career, Anthony has honed his expertise in building Unity and VR applications, demonstrating a deep understanding of immersive technologies. Alongside his proficiency in Unity and VR, Anthony has also mastered the art of developing web applications and back-end APIs, allowing him to create robust and scalable solutions for a diverse range of platforms.",
    linkedIn: "https://www.linkedin.com/in/anthonylloydkey/",
    image: SoftwareLogosImgs,
  },
  {
    name: "Arran Jones",
    description:
      "Arran Jones is a skilled software engineer specializing in .NET and Azure. With expertise in creating fast, scalable, and secure APIs, Arran is dedicated to delivering top-notch solutions. His proficiency in .NET and Azure technologies positions him as a reliable architect, contributing to the advancement of secure and efficient API development.",
    linkedIn: "https://www.linkedin.com/in/anthonylloydkey/",
    image: Arran,
  },
];

const About = () => {
  return (
    <>
      <Header home={"/#"} services={"#services"} technologies={"/about"} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white h-full pt-10">
        {teamMembers.map((member, index) => (
          <div key={index} className="w-full max-w-6xl">
            <Box
              title={member.name}
              description={member.description}
              reverse={index % 2 === 0}
              img={member.image}
              alt={`${member.name}, Software Engineer`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
