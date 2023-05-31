import Image from "next/image";
import GroupImg from "../../public/GroupImg.svg";

export default function Hero() {
  return (
    <div className="pt-20 w-auto h-auto bg-heroBg fade-in">
      <div className="flex flex-col items-center justify-center p-10 md:flex-row md:p-40">
        <div className="w-full md:w-2/4 max-w-lg text-center md:text-left">
          <h1 className="font-bold text-arneuraHeroText text-4xl md:text-5xl pb-3">
            Bespoke Software Solutions Worldwide
          </h1>
          <h2 className="text-gray-500 text-lg md:text-xl pb-3">
          Unleash the power of personalized software solutions. Our experts combine cutting-edge technology and industry expertise to create custom software perfectly tailored to your business.          </h2>
          <button onClick={() => { window.location.href = "/#services" }} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
        <div className="w-full md:w-2/4 flex justify-center items-center mt-5 md:mt-0">
          <div className="hidden md:block">
            <Image src={GroupImg} alt="Bespoke Software Banner Image" width={700} height={20} className="float-image" />
          </div>
        </div>
      </div>
    </div>
  );
}
