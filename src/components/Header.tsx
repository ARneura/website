import Link from "next/link";
import React, { useState } from "react";

export default function Header(props: {
  home: string;
  services: string;
  technologies: string;
}) {
  const [title, setTitle] = useState("Software");
  const backgroundImageStyle = {
    backgroundImage: `url('/18410.jpg')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };
  return (
    <header>
      <nav className="bg-white px-4 lg:px-6 py-6 w-full top-0 z-10">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          <div>
            <h1 className="text-3xl font-bold text-blue-950">ARNEURA</h1>
            <h2 className="text-xl font-bold text-blue-950 text-right">
              {title}
            </h2>
          </div>
          <div
            className="hidden justify-center items-center w-full lg:flex lg:w-auto lg:order-1  pl-5 pr-5 pb-2 pt-2 rounded-3xl"
            style={backgroundImageStyle}
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 font-semibold lg:flex-row lg:space-x-8 lg:mt-0 justify-center items-center float-right">
              <li>
                <Link
                  href={props.home}
                  className="block py-2 pr-4 pl-3 text-blue-950 border-b border-gray-100 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0  lg:p-0 hover:text-blue-500 hover:scale-105"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={props.services}
                  className="block py-2 pr-4 pl-3 text-blue-950 border-b border-gray-100 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0  lg:p-0 hover:text-blue-500 hover:scale-105"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/team"
                  className="block py-2 pr-4 pl-3 text-blue-950 border-b border-gray-100 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0  lg:p-0 hover:text-blue-500 hover:scale-105"
                >
                  Team
                </Link>
              </li>

              <li>
                <Link
                  href={props.technologies}
                  className="block py-2 pr-4 pl-3 text-blue-950 border-b border-gray-100 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 lg:p-0 hover:text-blue-500 hover:scale-105"
                >
                  About
                </Link>
              </li>
              <li>
                <button
                  className=" border-2 text-blue-950 hover:bg-blue-950 hover:text-white  font-bold py-3 px-4 rounded-full border-blue-950"
                  onClick={() => {
                    window.location.href = "/#contact";
                  }}
                >
                  Get in touch
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
