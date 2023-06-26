import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-blue-950 py-10 ">
      <div className="flex flex-col gap-4 lg:flex lg:flex-row xl:justify-between xl:mx-44 text-green-100">
        <div className="text-center xl:text-start">
          <p className="text-base font-semibold xl:text-xl xl:font-medium text-green-300">
            Company
          </p>
          <div className="flex items-center justify-center lg:flex lg:justify-start lg:items-start lg:flex-col gap-2 my-3">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/payments">Payments</Link>
            <Link href="/">Join Us</Link>
          </div>
        </div>
        <div className="text-center xl:text-start">
          <p className="text-base font-semibold xl:text-xl xl:font-medium text-green-300">
            Resources
          </p>
          <div className="flex flex-col gap-2 my-3">
            <Link href="/">Personal</Link>
            <Link href="/">Our Vision</Link>
          </div>
        </div>
        <div className="text-center xl:text-start">
          <p className="text-base font-semibold xl:text-xl xl:font-medium text-green-300">
            Contact
          </p>
          <div className="flex flex-col gap-2 my-3">
            <a href="emailto:macksonpeterfe@gmail.com">
              macksonpeterfe@gmail.com
            </a>
            <a href="tel:07052283520">
              0705 <span>228</span> 3520
            </a>
          </div>
        </div>
        <div className="text-center xl:text-start">
          <p className="text-base font-semibold xl:text-xl xl:font-medium text-green-300">
            Address
          </p>
          <div className="flex flex-col gap-2 my-3">
            <p>Marina, Lagos</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <a
          target="_blank"
          href="https://www.facebook.com/"
          className="text-green-300 text-2xl"
        >
          <BsFacebook />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/"
          className="text-green-300 text-2xl"
        >
          <BsInstagram />
        </a>

        <a
          target="_blank"
          href="https://www.twitter.com/"
          className="text-green-300 text-2xl"
        >
          <BsTwitter />
        </a>
        <a
          target="_blank"
          href="https://wa.link/ozxr5g"
          className="text-green-300 text-2xl"
        >
          <BsWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default Footer;
