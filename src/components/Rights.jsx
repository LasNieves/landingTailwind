import React from "react";

const Rights = () => {
  return (
    <div className="flex flex-col justify-between h-28 w-[93.75%] mx-auto mt-10 mb-12 ml-4 pt-5 border-t border-[#DBDBDB]">
      <div>
        <p className=" font-raleway font-bold text-[9px] leading-5">
          NinjaMail is a sample project for Quest AI.{" "}
        </p>
        <p className=" font-raleway font-bold text-[9px] leading-5">
          © 2019 Quest AI, All rights reserved.
        </p>
      </div>
      <div>
        <p className=" font-raleway font-bold text-[9px] leading-5">
          Terms & Conditions
        </p>
        <p className=" font-raleway font-bold text-[9px] leading-5">
          Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Rights;
