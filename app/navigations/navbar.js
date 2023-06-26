"use client";

import Link from "next/link";
import React, { useState } from "react";
import { RxTextAlignJustify } from "react-icons/rx";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [navClose, setNavClose] = useState(false);

  return (
    <header className="fixed w-screen almari bg-gradient-to-r from-purple to-green-100  py-4 ">
      <div className="xl:flex justify-between px-5 xl:px-20">
        <div className="flex justify-between">
          <div>
            <h2 className="text-3xl font-bold roboto text-blue-950">
              Min<span className="text-green-600">Tec</span>
            </h2>
          </div>

          <div className="mx-5 cursor-pointer">
            <RxTextAlignJustify
              className={` ${
                !navOpen ? "block text-2xl xl:hidden mt-1" : "hidden"
              }`}
              onClick={() => {
                setNavOpen(true);
                setNavClose(true);
              }}
            />
            <MdClose
              className={`${!navClose ? "hidden" : "text-2xl mt-1 xl:hidden"}`}
              onClick={() => {
                setNavOpen(false);
                setNavClose(false);
              }}
            />
          </div>
        </div>

        <div className=" xl:h-auto xl:block xl:mt-1 xl:relative xl:right-40">
          <div
            className={`mx-auto my-2 xl:my-0 xl:mx-0 ${
              navOpen
                ? "text-green-600 flex flex-col xl:block tracking-wide text-lg"
                : "hidden xl:block xl:text-green-600 xl:tracking-wide xl:text-lg"
            }`}
          >
            <Link
              href=""
              className="my-2 xl:my-0 xl:mx-4 hindfont active:text-black  hover:text-black"
            >
              Home
            </Link>

            <Link
              href="/about"
              className=" my-2 xl:my-0 xl:mx-4 hindfont active:text-black  hover:text-black"
            >
              About
            </Link>

            <Link
              href="/payments"
              className=" my-2 xl:my-0 xl:mx-4 hindfont active:text-black  hover:text-black"
            >
              Payments
            </Link>

            <Link
              href=""
              className=" my-2 xl:my-0 xl:mx-4 hindfont w-[40%] text-center bg-blue-950 px-3 py-2 rounded text-white text-base xl:px-5 xl:w-auto"
            >
              Join Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
