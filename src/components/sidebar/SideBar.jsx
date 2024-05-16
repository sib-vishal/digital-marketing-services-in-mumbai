"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import Image from "next/image";
import { IoCloseSharp } from "react-icons/io5";

export const openSideBar = () => {
  document.querySelector("#sidebar").classList.remove("left-[-100%]");
  document.querySelector("#sidebar").classList.add("left-0");
};
export const closeSideBar = () => {
  document.querySelector("#sidebar").classList.remove("left-0");
  document.querySelector("#sidebar").classList.add("left-[-100%]");
};
// export const openSideBar = () => {
//   document.querySelector("#sidebar").classList.remove("left-[-380px]");
//   document.querySelector("#sidebar").classList.add("left-0");
// };
// export const closeSideBar = () => {
//   document.querySelector("#sidebar").classList.remove("left-0");
//   document.querySelector("#sidebar").classList.add("left-[-380px]");
// };

const SideBar = ({ setIsModalOpen }) => {
  const links = [
    {
      url: "#about",
      linkName: "About",
    },
    {
      url: "#services",
      linkName: "Services",
    },
    {
      url: "#reviews",
      linkName: "Coustomer Review",
    },
    {
      url: "#contact",
      linkName: "Contact Us",
    },
  ];

  return (
    <div
      id="sidebar"
      className={` transition-all duration-300 fixed top-0 left-[-100%] bg-white  p-8 min-h-screen max-md:w-full w-[355px] z-[99]`}
    >
      <div>
        <IoCloseSharp
          className="text-3xl block ml-auto transition-all cursor-pointer mr-0 hover:text-blue-500 "
          onClick={closeSideBar}
        />
      </div>
      <div>
        <div className="">
          {links.map((value, i) => {
            return (
              <Link
                className="block p-[8px_10px] text-[14px] font-bold font-redhat"
                key={i}
                href={value.url}
              >
                {value.linkName}
              </Link>
            );
          })}
          <Link href={""}></Link>
        </div>
        <div className="font-redhat flex flex-col  gap-4 mt-8">
          <Link
            href="tel:+91 8850 525860"
            className="flex  text-[20px] items-center gap-2 font-bold text-blue-500 "
          >
            <FaPhoneAlt className="text-2xl" />
            <span>+91 8850 525860</span>
          </Link>
          <button
            className=" flex justify-center border border-black  hover:border-[#E31A20] hover:text-[#E31A20]  bg-opacity-0  transition-all duration-300  group   rounded text-[18px] font-bold   items-center gap-1 p-[10px_15px]"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            <span>Schedule a meeting now </span>
            <FaSquareArrowUpRight className="text-2xl    " />
          </button>
        </div>
        <div className="my-8">
          <h1 className=" text-2xl font-redhat">Follow Us</h1>
          <div className="flex items-center gap-4 text-2xl mt-3">
            <Link href={"https://www.facebook.com/sibinfotech/"}>
              <TiSocialFacebook />
            </Link>
            <Link href={"https://twitter.com/sibinfotech"}>
              <FaTwitter />
            </Link>
            <Link href={"https://www.linkedin.com/company/sib-infotech"}>
              <FaLinkedinIn />
            </Link>
            <Link href={"https://www.youtube.com/user/sibinfotech"}>
              <FaYoutube />
            </Link>
          </div>
        </div>
        <div className=" rounded overflow-hidden bg-white w-[60%] shadow-xl drop-shadow-sm">
          <p className="bg-blue-400 p-1 text-white text-center font-[14px] font-poppins">
            Premier Partner
          </p>
          <div className="py-1 flex bg-white">
            <Image
              className="m-auto pt-1"
              width={80}
              height={100}
              src={"/header/google-logo-new.webp"}
              alt="google-logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
