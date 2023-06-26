import React from "react";
import Articleimg from "../images/articleimg.jpg";
import Image from "next/image";
import Link from "next/link";

const Article = ({ children, contentone }) => {
  return (
    <div>
      <div className="mt-10 xl:mt-0 mx-5 lg:mx-10">
        <div className="flex flex-col-reverse lg:flex lg:flex-row">
          <div className="lg:w-2/4 ">{contentone}</div>

          <div className="lg:w-2/4 lg:mt-5">
            <h2 className="text-2xl text-green-800 text-justify lg:text-start extrasm:text-start font-bold md:text-3xl lg:text-4xl xl:text-5xl xl:leading-tight">
              Transactions have never been easier
            </h2>
            <p className="text-base font-medium text-justify my-3 md:text-lg xl:text-lg text-blue-950">
              "Experience lightning-fast payments and hassle-free airtime and
              data purchases with MinTec. Transactions have never been easier."
              <span className="text-base block font-medium text-justify my-3 md:text-lg xl:text-lg text-blue-950">
                "Min<span className="text-green-600">Tec</span> revolutionizes
                transactions with fast payments and easy airtime and data
                purchases. Say goodbye to wait times and complicated processes.
                Join us today for the future of fintech."
              </span>
            </p>

            <Link
              href="/article"
              className="underline text-base font-medium text-justify my-3 md:text-lg xl:text-lg text-green-600"
            >
              <p>{children}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
