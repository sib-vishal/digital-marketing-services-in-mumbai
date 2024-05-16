import React from "react";
import Services from "./Services";

const HeroForm = ({ oneline }) => {
  return (
    <>
      <div
        className={`w-[100%] bg-white rounded-2xl   ${
          oneline ? "py-12 " : "p-5"
        }`}
      >
        <h1 className="font-bold font-redhat text-[24px] md:text-[29px] text-center">
          Ready to get more leads
        </h1>
        <form className="Hero_form text-[#999] font-poppins ">
          <div className={`grid   ${oneline ? "" : "grid-cols-2 gap-4 "}`}>
            <div className="w-full relative group mt-[23px]  ">
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full h-3 py-4 px-4 text-sm peer bg-transparent outline-none focus:border-blue-500  border-b border-gray-500"
              />
              <label
                htmlFor="name"
                className=" transform transition-all absolute top-0 left-0  h-full flex items-center pl-1 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-[10px] peer-valid:-translate-y-full group-focus-within:pl-1 peer-valid:pl-1"
              >
                Name
              </label>
            </div>
            <div className="w-full relative group mt-[23px]">
              <input
                type="text"
                id="phoneNo"
                name="phoneNo"
                required
                className="w-full h-3 py-4 px-4 text-sm peer bg-transparent outline-none focus:border-blue-500  border-b border-gray-500"
              />
              <label
                htmlFor="phoneNo"
                className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-1 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-[10px] peer-valid:-translate-y-full group-focus-within:pl-1 peer-valid:pl-1"
              >
                Phone No
              </label>
            </div>
          </div>

          <div className="w-full relative group mt-[23px]">
            <input
              type="text"
              name="comapanyName"
              id="comapanyName"
              required
              className="w-full h-3 py-4 px-4 text-sm peer bg-transparent outline-none focus:border-blue-500  border-b border-gray-500"
            />
            <label
              htmlFor="comapanyName"
              className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-1 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-[10px] peer-valid:-translate-y-full group-focus-within:pl-1 peer-valid:pl-1"
            >
              Comapany Name
            </label>
          </div>
          <div className="w-full relative group mt-[23px]">
            <input
              type="text"
              name="websiteUrl"
              id="websiteUrl"
              required
              className="w-full h-3 py-4 px-4 text-sm peer bg-transparent outline-none focus:border-blue-500  border-b border-gray-500"
            />
            <label
              htmlFor="websiteUrl"
              className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-1 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-[10px] peer-valid:-translate-y-full group-focus-within:pl-1 peer-valid:pl-1"
            >
              Website Url
            </label>
          </div>
          <div className="w-full relative group mt-[23px]">
            <input
              type="text"
              id="email"
              name="email"
              required
              className="w-full h-3 py-4 px-4 text-sm peer bg-transparent outline-none focus:border-blue-500  border-b border-gray-500"
            />
            <label
              htmlFor="email"
              className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-1 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-[10px] peer-valid:-translate-y-full group-focus-within:pl-1 peer-valid:pl-1"
            >
              Email
            </label>
          </div>

          <button className="py-3 rounded-xl bg-[#e31a20] mt-4 w-full  font-poppins text-white text-[16px] md:text-xl ">
            SEND REQUEST
          </button>
        </form>
      </div>

      <div className="lg:hidden py-4 ">
        <Services />
      </div>
    </>
  );
};

export default HeroForm;
