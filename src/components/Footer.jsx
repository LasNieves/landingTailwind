import React from "react";
import logo from "../img/mail.svg";

const listItems = [
  {
    content: "Features",
    id: 1,
  },
  {
    content: "Pricing",
    id: 2,
  },
  {
    content: "Services",
    id: 3,
  },
  {
    content: "Partners",
    id: 4,
  },
  {
    content: "About Us",
    id: 5,
  },
  {
    content: "Tutorials",
    id: 6,
  },
  {
    content: "Resources",
    id: 7,
  },
  {
    content: "Help Center",
    id: 8,
  },
  {
    content: "Templates",
    id: 9,
  },
  {
    content: "Case Studies",
    id: 10,
  },
  {
    content: "Medium",
    id: 11,
  },
  {
    content: "Twitter",
    id: 12,
  },
  {
    content: "Facebook",
    id: 13,
  },
  {
    content: "Instagram",
    id: 14,
  },
  {
    content: "LinkedIn",
    id: 15,
  },
  {
    content: "Contact Us",
    id: 16,
  },
  {
    content: "Slack",
    id: 17,
  },
  {
    content: "Jobs",
    id: 18,
  },
];

const Footer = () => {
  return (
    <footer className="w-[93.75%] mx-auto mt-10 ml-4">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <img className="" src={logo} />
          <p className="text-black font-raleway font-black text-[22px] ">
            NinjaMail
          </p>
        </div>
        <ul className="flex flex-col flex-wrap gap-[6px] h-[203px] ">
          {listItems.map((el) => (
            <li
              key={el.id}
              className=" font-raleway font-bold text-xs leading-[14px]"
            >
              {el.content}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
