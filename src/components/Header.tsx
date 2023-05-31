import Link from "next/link";
import React, { useState } from "react";

export default function Header(props: { home: string, services: string, technologies: string }) {
  const [title, setTitle] = useState("Software");

  return (
    <header>
      <nav className="bg-gradient-to-r bg-white px-4 lg:px-6 py-4 fixed w-full top-0 z-10">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          <div>
            <h1 className="text-3xl font-bold text-gray-700">
              ARNEURA
            </h1>
            <h2 className="text-xl font-bold text-gray-300">
              {title}
            </h2>
          </div>
          <div className="hidden justify-center items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu">
            <ul className="flex flex-col mt-4 font-semibold lg:flex-row lg:space-x-8 lg:mt-0 justify-center items-center float-right">
              <li>
                <Link href={props.home} className="hover:underline block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-500 lg:p-0">
                  Home
                </Link>

              </li>
              <div className="w-px h-10 bg-white" />
              <li>
                <Link href="#services" className="hover:underline block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-500 lg:p-0">
                  Services
                </Link>
              </li>
              <div className="w-px h-10 bg-white" />

              <li>
                <Link href="#about" className="hover:underline block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-500 lg:p-0">
                  About
                </Link>
              </li>
              <div className="w-px h-10 bg-white" />

              <li>
                <button className=" bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full" onClick={() => { window.location.href = "/#contact" }}>
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}