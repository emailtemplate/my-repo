import Link from "next/link";
import React from "react";
import Image from "next/image";
import Revolve from "../images/revolut.jpg";
import Payment from "../images/Payment.jpg";

const About = () => {
  return (
    <div className="flex items-center justify-center">
      <div className=" pt-24 xl:pt-20 mx-5 lg:mx-10 xl:mx-20">
        <div className=" lg:flex lg:flex-row">
          <div className="lg:w-2/4 lg:mt-20">
            <h2 className="text-2xl text-blue-950 text-justify lg:text-start extrasm:text-start font-bold md:text-3xl lg:text-4xl xl:text-5xl xl:leading-tight">
              Revolutionizing Fintech in Africa{" "}
            </h2>
            <p className="text-base font-medium text-justify my-3 md:text-lg xl:text-lg text-blue-950">
              <p className="text-base font-medium text-justify my-3 md:text-lg xl:text-lg text-blue-950">
                "Min<span className="text-green-600">Tec</span> is a fintech
                company located in Marina Lagos, Africa. Our mission is to stand
                out from every other fintech and become the fintech of choice in
                Africa. We aim to revolutionize the way people handle
                transactions by providing lightning-fast payments and
                hassle-free airtime and data purchases
              </p>
            </p>

            <div className="xl:mt-7">
              <Link
                href=""
                className="text-center  bg-blue-950 px-3 py-2 rounded text-white text-base lg:px-5 lg:py-3 xl:text-base font-semibold tracking-wide xl:w-auto xl:my-0"
              >
                Join Us
              </Link>
            </div>
          </div>

          <div className="flex mt-5 items-center justify-end h-auto lg:w-2/4 lg:mt-0 xl:mt-16">
            <Image src={Revolve} width={500} />
          </div>
        </div>
        <div className=" lg:flex lg:flex-row-reverse">
          <div className="lg:w-2/4 lg:mt-20">
            <h2 className="text-2xl text-green-800 text-justify lg:text-start extrasm:text-start font-bold md:text-3xl lg:text-4xl xl:text-5xl xl:leading-tight">
              Easy Reconciliation of Payments{" "}
            </h2>
            <p className="text-base font-medium text-justify my-3 md:text-lg xl:text-lg text-blue-950">
              <p className="text-base font-medium text-justify my-3 md:text-lg xl:text-lg text-blue-950">
                At Min<span className="text-green-600">Tec</span> we understand
                the importance of easy reconciliation of payments. That's why we
                have developed a platform that makes it easy for you to manage
                your finances on-the-go. With our platform, you can trust that
                your transactions are secure and your data is protected.
              </p>
            </p>
          </div>

          <div className="flex mt-5 items-center justify-start h-auto lg:w-2/4 lg:mt-0">
            <Image src={Payment} width={500} />
          </div>
        </div>
        <div className="flex justify-center pt-10 pb-20 lg:flex lg:flex-row">
          <div className="lg:w-2/4 lg:mt-20">
            <h2 className="text-2xl text-green-800 text-justify lg:text-start extrasm:text-start font-bold md:text-3xl lg:text-4xl xl:text-5xl xl:leading-tight">
              Decentralized Ownership for Financial Freedom{" "}
            </h2>
            <p className="text-base font-medium text-justify my-3 md:text-lg xl:text-lg text-blue-950">
              <p className="text-base font-medium text-justify my-3 md:text-lg xl:text-lg text-blue-950">
                We believe in empowering our users with decentralized ownership
                of their finances. Join us in the movement towards financial
                freedom and take control of your money like never before. With
                MinTech, you can trust that your transactions are secure and
                your data is protected.
                <span className="pt-3 block">
                  Join the Min<span className="text-green-600">Tec</span>{" "}
                  community today and experience the future of fintech in
                  Africa.
                </span>
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
