import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Smile from "../../public/smile-svgrepo-com.svg";
import Agile from "../../public/speed-svgrepo-com.svg";
import Smart from "../../public/bulb-svgrepo-com.svg";
import Communication from "../../public/comments-svgrepo-com.svg";

export default function FadeInOnScroll() {
    const elementRefs = useRef<Array<HTMLDivElement | null>>([]);

    useEffect(() => {
      const options = {
        root: null as Element | null,
        rootMargin: "0px",
        threshold: 0.3,
      };
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("fade-in");
            }, 200 * index); // Adjust the delay as needed (in milliseconds)
          }
        });
      }, options);
  
      elementRefs.current.forEach((ref) => {
        if (ref) {
          observer.observe(ref);
        }
      });
  
      return () => {
        elementRefs.current.forEach((ref) => {
          if (ref) {
            observer.unobserve(ref);
          }
        });
      };
    }, []);
  
    return (
      <div className="w-full bg-[#1c223b]">
        <h1 className="font-bold mb-3 text-3xl text-center text-white">Services</h1>
        <h2 className="text-[#c0c1c2] text-center pb-5">What to expect when choosing us</h2>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-8 text-[#c7c7c7]">
            <div className="opacity-0 p-5 rounded-2xl shadow-[#3f4b75] bg-[#2d3656] hover:border-b-blue-500 hover:border-b-4 border-b-4 fade-in-card" ref={(ref) => (elementRefs.current[0] = ref)}>
            <div className="p-5 flex items-start">
              <div className="mr-4">
                <Image src={Smile} alt="Customer Satisfaction" width={80}></Image>
              </div>
              <div className="">
                <h1 className="font-semibold text-left text-2xl pt-6">
                  Customer
                </h1>
              </div>
            </div>
            <span className="text-left text-lg">
              We pride ourselves on being a customer-centric organization,
              placing your satisfaction at the forefront of our priorities. Our
              unwavering commitment lies in delivering precise solutions that
              are meticulously tailored to your specific requirements.
            </span>
          </div>

          <div className=" opacity-0 p-5 rounded-2xl shadow-[#3f4b75] bg-[#2d3656] hover:border-b-blue-500 hover:border-b-4 border-b-4 fade-in-card" ref={(ref) => (elementRefs.current[1] = ref)}>
            <div className="p-5 flex items-start">
              <div className="mr-4">
                <Image src={Agile} alt="Agile Approach" width={80}></Image>
              </div>
              <div className="">
                <h1 className="font-semibold text-left text-2xl pt-6">Agile</h1>
              </div>
            </div>
            <span className="text-left text-lg">
              We prioritize your needs at the forefront of our operations. Our
              finely tuned and efficient methodology guarantees the seamless
              fulfillment of your requirements with a high degree of precision
              and adaptability. Rest assured that our streamlined approach is
              dedicated to delivering optimal efficiency and ensuring your
              utmost satisfaction.
            </span>
          </div>

          <div className=" opacity-0 p-5 rounded-2xl shadow-[#3f4b75] bg-[#2d3656] hover:border-b-blue-500 hover:border-b-4 border-b-4 fade-in-card" ref={(ref) => (elementRefs.current[2] = ref)}>
            <div className="p-5 flex items-start">
              <div className="mr-4">
                <Image src={Smart} alt="Fast Development" width={80}></Image>
              </div>
              <div className="">
                <h1 className="font-semibold text-left text-2xl pt-6">
                  Development
                </h1>
              </div>
            </div>
            <span className="text-left text-lg">
              Our team possesses a diverse range of skills, honed to
              meet all your project requirements. Whether its development,
              design, or any other aspect, we are fully equipped to handle every
              aspect. You can rest assured knowing that
              we have got you covered, ensuring successful execution from start
              to finish.
            </span>
          </div>

          <div className=" opacity-0 p-5 rounded-2xl shadow-[#3f4b75] bg-[#2d3656] hover:border-b-blue-500 hover:border-b-4 border-b-4 fade-in-card" ref={(ref) => (elementRefs.current[3] = ref)}>
            <div className="p-5 flex items-start">
              <div className="mr-4">
                <Image src={Communication} alt="Customer Communication" width={80}></Image>
              </div>
              <div>
                <h1 className="font-semibold text-left text-2xl pt-6">
                  Communication
                </h1>
              </div>
            </div>
            <span className="text-left text-lg">
              Clear and effective communication lies at the heart of our
              approach, as we prioritize a thorough understanding of your needs.
              Our dedicated team will closely collaborate with you, fostering a
              strong partnership to ensure your goals are not only met but
              exceeded.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
