import Image from "next/image";
import GroupImg from "../../public/GroupImg.svg";

export default function Hero() {
  const backgroundImageStyle = {
    backgroundImage: `url('/18410.jpg')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <div className="w-auto h-screen mobileHero" style={backgroundImageStyle}>
      <div className="flex flex-col items-center justify-center md:flex-row md:p-40">
        <div className="w-full md:w-2/4 max-w-lg text-center md:text-left">
          <h1 className="font-bold text-blue-950 text-4xl md:text-5xl pb-3">
            Bespoke Software Solutions Worldwide
          </h1>
          <h2 className="text-blue-950 text-lg md:text-xl pb-4">
            Unleash the power of personalized software solutions. Our experts
            combine cutting-edge technology and industry expertise to create
            custom software perfectly tailored to your business.
          </h2>
          <button
            onClick={() => {
              window.location.href = "/about";
            }}
            className="text-blue-950 hover:text-white hover:bg-blue-950 font-bold py-3 px-7 rounded-full  border-2 border-blue-950"
          >
            Explore
          </button>
        </div>
        <div className="w-full md:w-2/4 flex justify-center items-center mt-5 md:mt-0">
          <div className="hidden md:block">
            <Image
              src={GroupImg}
              alt="Bespoke Software Banner Image"
              width={700}
              height={20}
              className="float-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
