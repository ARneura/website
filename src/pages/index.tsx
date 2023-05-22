import React from 'react';
import Hero from '@/components/Hero';
import Box from '@/components/Box';
import SoftwareLogosImg from '../../public/groupproject.svg';
import FlipCard from '@/components/FlipCard';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <section id='home'>
        <Hero />
      </section>

      <section id='services'>
        <div className="w-full">
          <FlipCard />
        </div>
      </section>

      <section id='about'>
        <div className="flex flex-col items-center bg-heroBg">
          <div className="w-full max-w-6xl">
            <Box
              title={'Our Mission'}
              description={`At Arneura, our mission is to provide customized solutions that cater to our clients' unique needs, offering them the best value for their investment. Our team comprises experienced developers, architects, and consultants who are proficient in their respective domains and equipped with the latest tools and knowledge to deliver quality solutions. We are dedicated to maintaining the highest standards of excellence, innovation, and customer satisfaction, making us a reliable partner in the industry. As the digital landscape is continuously evolving, we are committed to helping our clients thrive by providing them with the support they need to succeed.`}
              reverse={true}
              img={SoftwareLogosImg}
              alt={'About Us Image'}
            />
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center">
        <div className="w-full max-w-6xl">
          <Contact />
        </div>
      </div>
    </>
  );
}