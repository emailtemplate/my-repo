import React from "react";
import Image from "next/image";
import Link from "next/link";
import Heroimg from "../images/heroimg.jpg";
import { SlArrowDown } from "react-icons/sl";
import Article from "./article";
import Articleimg from "../images/articleimg.jpg";
import Reasons from "./reasons";

const Hero = () => {
  return (
    <div className="">
      <div className="xl:flex xl:items-center h-screen mx-5 xl:mx-10">
        <div>
          <div className="lg:flex lg:justify-between lg:gap-4">
            <div className="lg:w-2/4 lg:pt-10">
              <h2 className="text-2xl text-justify lg:text-start extrasm:text-start font-bold md:text-3xl lg:text-4xl xl:text-5xl xl:leading-tight">
                Make payments, transfers, and buy airtime all in one place with
                <span className="text-blue-950"> Min</span>
                <span className="text-green-600">Tec.</span>
              </h2>
              <p className="text-base font-medium text-justify my-3 md:text-lg xl:text-lg xl:text-blue-950">
                Our innovative platform goes beyond banking to provide you with
                a seamless financial experience. With Mintec, you can manage
                your money with ease and confidence, anytime and anywhere. Join
                us today and experience the future of finance.
              </p>

              <div className="flex gap-4 my-5">
                <button className="bg-blue-950 px-4 py-2 rounded text-base text-green-600 font-semibold xl:text-lg xl:px-5 xl:py-3">
                  <Link href="/payments">Payments</Link>
                </button>
                <button className="text-blue-950 px-4 py-2 rounded text-base bg-green-600 font-semibold xl:text-lg xl:px-5 xl:py-3">
                  <Link href="">Join Us</Link>
                </button>
              </div>
            </div>

            <div className="flex items-center xl:w-2/4">
              <Image
                src={Heroimg}
                alt="heroimage"
                width={500}
                className="mx-auto"
              />
            </div>
          </div>

          <div className="flex justify-center xl:mt-0">
            <Link href="#article">
              {" "}
              <SlArrowDown className="text-5xl xl:text-6xl font-bold animate-bounce " />
            </Link>
          </div>
        </div>
      </div>

      <div id="article" className="article pb-10 xl:mx-10">
        <Article
          contentone={<Image alt="articleImage" src={Articleimg} width={500} />}
        >
          <p>Learn More...</p>
        </Article>
      </div>

      <div className="lg:pt-10">
        <Reasons />
      </div>
    </div>
  );
};

export default Hero;
