import React from "react";
import Image from "next/image";
import Link from "next/link";
import Defi from "../images/defi.jpg";

const Reasons = () => {
  return (
    <div>
      <div className="mt-10 xl:mt-10 mx-5 lg:mx-10">
        <div className=" lg:flex lg:flex-row">
          <div className="lg:w-2/4 lg:mt-20">
            <h2 className="text-2xl text-green-800 text-justify lg:text-start extrasm:text-start font-bold md:text-3xl lg:text-4xl xl:text-5xl xl:leading-tight">
              Decentralized Ownership for Financial Freedom{" "}
            </h2>
            <div className="text-base font-medium text-justify my-3 md:text-lg xl:text-lg text-blue-950">
              <p className="text-base font-medium text-justify my-3 md:text-lg xl:text-lg text-blue-950">
                "At Min<span className="text-green-600">Tec</span>, we believe
                in empowering our users with decentralized ownership of their
                finances. Join us in the movement towards financial freedom and
                take control of your money like never before. With MinTech, you
                can trust that your transactions are secure and your data is
                protected. Join the MinTech community today and experience the
                power of decentralized finance.
              </p>
            </div>

            <div className="xl:mt-7">
              <Link
                href=""
                className="text-center  bg-blue-950 px-3 py-2 rounded text-white text-base lg:px-5 lg:py-3 xl:text-base font-semibold tracking-wide xl:w-auto xl:my-0"
              >
                Join Us
              </Link>
            </div>
          </div>

          <div className="flex mt-5 items-center h-auto lg:w-2/4 lg:mt-0">
            <Image className="mx-auto" src={Defi} width={500} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
