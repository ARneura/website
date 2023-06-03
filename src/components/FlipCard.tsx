import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import Smile from "../../public/smile-svgrepo-com.svg";
import Agile from "../../public/speed-svgrepo-com.svg";
import Smart from "../../public/bulb-svgrepo-com.svg";
import Communication from "../../public/comments-svgrepo-com.svg";

export default function FadeInOnScroll() {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ref = elementRef.current;
        const options = {
            root: null as Element | null,
            rootMargin: '0px',
            threshold: 0.3,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, options);

        if (ref) {
            observer.observe(ref);
        }

        return () => {
            if (ref) {
                observer.unobserve(ref);
            }
        };
    }, [elementRef]);
    return (
        <div className="fade-up w-full bg-[#1c223b]" >
            <h1 className="font-bold mb-3 text-3xl text-center text-white pb-5">We offer you...</h1>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-8 text-[#c7c7c7]">
                    <div className="p-2 rounded-2xl shadow-[#3f4b75] bg-[#2d3656] hover:border-b-blue-500 hover:border-b-4 border-b-4 flex justify-center md:justify-start items-center hover:scale-105">
                        <div className="p-5 w-full max-w-sm flex flex-col items-center justify-start h-auto">
                            <div className="mb-4">
                                <Image src={Smile} alt="Customer Focused Image" width={84} height={64} />
                            </div>
                            <div className="h-auto">
                                <h1 className="mt-4 font-semibold pb-2 text-center">Customer</h1>
                                <span className="text-left">
                                    We pride ourselves on being a customer-centric organization, placing your satisfaction at the forefront of our priorities. Our unwavering commitment lies in delivering precise solutions that are meticulously tailored to your specific requirements.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 rounded-2xl shadow-[#3f4b75] bg-[#2d3656] hover:border-b-blue-500 hover:border-b-4 border-b-4 flex justify-center md:justify-start items-center hover:scale-105">
                        <div className="p-5 w-full max-w-sm flex flex-col items-center justify-start h-auto">
                            <div className="mb-4">
                                <Image src={Agile} alt="Agile Image" width={84} height={64} />
                            </div>
                            <div className="h-auto">
                                <h1 className="mt-4 font-semibold pb-2 text-center">Agile</h1>
                                <span className="text-left">
                                    We prioritize your needs at the forefront of our operations. Our finely tuned and efficient methodology guarantees the seamless fulfillment of your requirements with a high degree of precision and adaptability. Rest assured that our streamlined approach is dedicated to delivering optimal efficiency and ensuring your utmost satisfaction.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 rounded-2xl shadow-[#3f4b75] bg-[#2d3656] hover:border-b-blue-500 hover:border-b-4 border-b-4 flex justify-center md:justify-start items-center hover:scale-105">
                        <div className="p-5 w-full max-w-sm flex flex-col items-center justify-start h-auto">
                            <div className="mb-4">
                                <Image src={Smart} alt="Skillset Image" width={84} height={64} />
                            </div>
                            <div className="h-auto">
                                <h1 className="mt-4 text-lg pb-2 text-center">Development</h1>
                                <span className="text-left">
                                    Our team possesses a diverse range of skills meticulously honed to meet all your project requirements. Whether its development, design, or any other aspect, we are fully equipped to handle every aspect with utmost proficiency. You can rest assured knowing that we have got you covered, ensuring successful execution from start to finish.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 rounded-2xl shadow-[#3f4b75] bg-[#2d3656] hover:border-b-blue-500 hover:border-b-4 border-b-4 flex justify-center md:justify-start items-center hover:scale-105">
                        <div className="p-5 w-full max-w-sm flex flex-col items-center justify-start h-auto">
                            <div className="mb-4">
                                <Image src={Communication} alt="Clear Communication Image" width={84} height={64} />
                            </div>
                            <div className="h-auto">
                                <h1 className="mt-4 font-semibold pb-2 text-center">Communication</h1>
                                <span className="text-left">
                                    Clear and effective communication lies at the heart of our approach, as we prioritize a thorough understanding of your needs. Our dedicated team will closely collaborate with you, fostering a strong partnership to ensure your goals are not only met but exceeded.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
