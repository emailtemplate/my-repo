"use client";

import Link from "next/link";
import React, { useState } from "react";
import Heroimg from "../images/heroimg.jpg";
import Image from "next/image";
import Transfer from "./transfer";
import Beneficiary from "./beneficiary";

const Payments = () => {
  const [accountNumber, setAccountNumber] = useState();
  const [accountName, setAccountName] = useState();
  const [bankName, setBankName] = useState();
  const [transferOpen, setTransferOpen] = useState(false);

  return (
    <div className="h-auto pt-20 xl:pt-24 bg-green-100 ">
      <div className="mx-5  xl:mx-10">
        <h2 className="text-2xl  text-blue-950 text-justify lg:text-start extrasm:text-start font-bold md:text-3xl lg:text-4xl xl:text-5xl xl:leading-tight">
          Welcome to <span className="text-blue-950"> Min</span>
          <span className="text-green-600">Tec</span> Payments!
          <p className="text-center mt-5 text-lg font-medium lg:text-2xl xl:text-3xl">
            Make Payments, Transfers, and Buy Airtime
          </p>
        </h2>

        <div className="lg:flex lg:justify-between mt-5 lg:mt-10">
          <div className="lg:w-2/4">
            {/* <div className="mt-7">
              <h2 className="text-xl mt-5 text-green-800 text-justify lg:text-start extrasm:text-start font-medium md:text-xl lg:text-xl xl:text-3xl xl:leading-tight">
                Buy Airtime?
              </h2>
              <div className="mt-3 xl:mt-7">
                <Link
                  href=""
                  className="text-center  bg-blue-950 px-3 py-2 rounded text-white text-base lg:px-5 lg:py-3 xl:text-base font-semibold tracking-wide xl:w-auto xl:my-0"
                >
                  Click to buy...
                </Link>
              </div>
            </div> */}
            <div>
              <h2 className="text-xl mt-10 text-blue-950 text-justify lg:text-start extrasm:text-start font-medium md:text-xl lg:text-xl xl:mt-16 xl:text-3xl xl:leading-tight">
                Transfer?
              </h2>
              <div className="mt-3 xl:mt-7">
                <button
                  onClick={() => {
                    setTransferOpen(true);
                  }}
                  //   href="https://paystack.com/pay/2ihkkbr7sb"
                  //   href=""
                  className="text-center  bg-green-800 px-3 py-2 rounded text-white text-base lg:px-5 lg:py-3 xl:text-base font-semibold tracking-wide xl:w-auto xl:my-0"
                >
                  Click to transfer money...
                </button>
              </div>

              <div>{transferOpen && <Transfer />}</div>
            </div>
            <div className="mt-10 xl:my-14">
              <Link
                href=""
                className="text-center  bg-blue-950 px-5 py-2 rounded text-white text-base lg:px-5 lg:py-3 xl:text-base font-semibold tracking-wide xl:w-auto xl:my-0"
              >
                More options coming soon...
              </Link>
            </div>
          </div>

          <div className="mt-10 lg:w-2/4  xl:w-2/4">
            <Image
              src={Heroimg}
              width={500}
              className="mx-auto rounded-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
