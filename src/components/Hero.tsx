import Image from "next/image";
import GroupImg from "../../public/GroupImg.svg";

const Hero = () => {
  const backgroundImageStyle = {
    backgroundImage: `url('/18410.jpg')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className="h-screen bg-cover bg-center" style={backgroundImageStyle}>
      <div className="flex container mx-auto rounded-lg shadow-lg p-3">
        <div className="w-full md:w-1/2 pr-8 -mt-16 bg-white rounded-3xl p-10 restruct-on-mobile ml-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 mb-4 text-right restruct-on-mobile">
            Bespoke Software Solutions Worldwide
          </h1>
          <p className=" text-lg font-bold text-blue-950 mb-6 text-right restruct-on-mobile">
            Unleash the power of personalized software solutions. Our experts
            combine cutting-edge technology and industry expertise to create
            custom software perfectly tailored to your business.
          </p>
          <button
            onClick={() => {
              window.location.href = "/about";
            }}
            className="w-full text-blue-950   hover:bg-blue-950 hover:text-white font-bold py-3 rounded-full border-2 border-blue-950 self-end"
          >
            Explore
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center -mt-16 hide-on-mobile">
          <Image
            src={GroupImg}
            alt="Bespoke Software Banner Image"
            width={900}
            height={500}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
