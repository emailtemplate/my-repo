import React from "react";
import Article from "../components/article";
import Articleimg from "../images/articleimg.jpg";
import Image from "next/image";

const page = () => {
  return (
    <div className="pt-10 flex items-center h-screen">
      <Article contentone={<Image src={Articleimg} width={500} />} />
    </div>
  );
};

export default page;
