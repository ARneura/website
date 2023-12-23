import Image from "next/image";
import Mail from "../../public/ContactImg.svg";
import { useRef, useEffect, useState } from "react";
import axios from "axios";

export default function Contact(props: {}) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [progress, setProgress] = useState("");

  async function makePostRequest(url: string, payload: any): Promise<void> {
    const t = validate();
    setProgress(validate());

    if (t !== "") {
      return;
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      setProgress(
        "We successfully received your message. We'll get back to you soon."
      );
      clearFields();
    } catch (error) {
      setProgress("Something went wrong " + error);
    }
  }

  function validate(): string {
    var numbers = /^[0-9]+$/;

    if (!email.includes("@") || !email.includes(".") || email.length < 3) {
      return "Email is not correct, check again.";
    }

    if (!phone.match(numbers) || phone.length < 3) {
      return "Invalid phone number.";
    }

    if (message.length < 10) {
      return "Please lengthen your message.";
    }

    return "";
  }

  function clearFields() {
    setEmail("");
    setPhone("");
    setMessage("");
  }

  const url =
    "https://u2lmau22c5obh4sek6qnnfubwq0urrdb.lambda-url.eu-west-1.on.aws/";
  const payload = {
    email: email,
    phone: phone,
    message: message,
  };

  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null as Element | null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [elementRef]);

  return (
    <section id="contact">
      <div className="shadow-xl w-full flex flex-wrap bg-white items-center justify-center p-5">
        <div className={`w-full md:w-1/2`} style={{ height: "100%" }}>
          <h1 className="font-bold mb-3 text-3xl text-blue-950">
            Send us a message
          </h1>

          {/* Your Form Content */}
          <div className="h-full flex flex-col justify-center border-2 p-5 rounded-3xl border-blue-200 mb-8">
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <input
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="rounded-full border-blue-950 text-blue-950 placeholder:text-blue-950 bg-white border  text-sm block w-full pl-10 p-2.5"
                placeholder="Email"
              />
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 text-blue-950"
                >
                  <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <input
                type="text"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                className="border border-blue-950 text-blue-950 placeholder:text-blue-950 text-sm rounded-full block w-full pl-10 p-2.5"
                placeholder="Phone"
              />
            </div>

            <textarea
              id="large-input"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className="block w-full p-4 border-blue-950 text-blue-950 placeholder:text-blue-950 border  rounded-lg sm:text-md resize-vertical h-auto focus:ring-blue-500 focus:border-blue-500"
              placeholder="Tell us about your project"
            ></textarea>
            <button
              type="button"
              onClick={() => {
                makePostRequest(url, payload);
              }}
              className="border border-blue-950 text-blue-950 mt-6 font-semibold hover:bg-blue-950 hover:text-white   rounded-full px-5 py-2.5 text-center inline-flex items-center justify-center  mr-2 mb-2"
            >
              Submit
            </button>

            <p className="text-blue-950 font-semibold">{progress}</p>

            <div className="p-4 rounded mt-5 flex flex-col border-black border">
              <h2 className="text-lg font-semibold text-blue-950">
                Contact Information
              </h2>
              <a href="mailto:customer-service@arneura.com">
                <span className="flex-inline flex pl-3 items-center">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-blue-950"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <p className="ml-2 text-blue-950">
                    customer-service@arneura.com
                  </p>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Text Content on the Right Side */}
        <div className={`w-full md:w-1/2 p-5 flex flex-col items-center`}>
          <p className="text-blue-950 font-bold text-5xl mb-5">
            Lets talk about your project.
          </p>
          <p className="text-blue-950 font-bold">
            Contact us today to learn more about how Arnuera can help you reach
            your goals. Our team will reply to you within 24 hours.
          </p>
          {/* Centering the bottom SVG using Flexbox */}
          <div className="flex items-center justify-center mt-auto">
            <svg
              aria-hidden="true"
              className="w-full h-full rotate-12 text-blue-950"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </div>
          {/* Additional Text Content or Image */}
          {/* Example: */}
          {/* <Image src={YourImage} alt="Some Image" width={400} height={400} /> */}
        </div>
      </div>
    </section>
  );
}
