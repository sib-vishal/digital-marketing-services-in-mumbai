"use client";
import React, { useState } from "react";
import { Modal } from "antd";

const Model = ({ isModalOpen, setIsModalOpen }) => {
  //   const [isModalOpen, setIsModalOpen] = useState(true);

  const handleOk = () => {
    // Handle OK action
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    // Handle cancel action
    setIsModalOpen(false);
  };

  return (
    <div>
      
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        centered={true}
      >
        <div className="w-[100%] md:bg-white rounded-2xl md:p-6">
          <h1 className="font-bold text-[24px] md:text-[32px] leading-tight text-center font-redhat">
            Ready to boost your leads?
          </h1>
          <form>
            <div className="w-full relative group mt-[25px]">
              <input
                type="text"
                name="name"
                id={"name3"}
                required
                className="w-full  h-3 py-4 px-4 text-sm peer bg-transparent outline-none focus:border-blue-500 border-b border-[#999]"
              />
              <label
                htmlFor={"name3"}
                className="transform transition-all text-[#999] absolute top-0 left-0 h-full flex items-center pl-1 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-[15px] peer-valid:-translate-y-full group-focus-within:pl-1 peer-valid:pl-1"
              >
                Name
              </label>
            </div>

            <div className="w-full relative group mt-[25px]">
              <input
                type="text"
                name="company_Name"
                id={"companyname3"}
                required
                className="w-full  h-3 py-4 px-4 text-sm peer bg-transparent outline-none focus:border-blue-500 border-b border-[#999]"
              />
              <label
                htmlFor={"companyname3"}
                className="transform transition-all text-[#999] absolute top-0  left-0 h-full flex items-center pl-1 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-[15px] peer-valid:-translate-y-full group-focus-within:pl-1 peer-valid:pl-1"
              >
                Company Name
              </label>
            </div>
            <div className="w-full relative group mt-[25px]">
              <input
                type="text"
                name="websiteUrl"
                id={"webUrl"}
                required
                className="w-full  h-3 py-4 px-4 text-sm peer bg-transparent outline-none focus:border-blue-500 border-b border-[#999]"
              />
              <label
                htmlFor={"webUrl"}
                className="transform transition-all text-[#999] absolute top-0 left-0 h-full flex items-center pl-1 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-[15px] peer-valid:-translate-y-full group-focus-within:pl-1 peer-valid:pl-1"
              >
                Website Url
              </label>
            </div>
            <div className="w-full relative group mt-[25px]">
              <input
                type="email"
                name="email"
                id={"email3"}
                required
                className="w-full  h-3 py-4 px-4 text-sm peer bg-transparent outline-none focus:border-blue-500 border-b border-[#999]"
              />
              <label
                htmlFor={"email3"}
                className="transform transition-all text-[#999] absolute top-0 left-0 h-full flex items-center pl-1 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-[15px] peer-valid:-translate-y-full group-focus-within:pl-1 peer-valid:pl-1"
              >
                Email
              </label>
            </div>

            <div className="w-full relative group mt-[25px]">
              <input
                type="tel"
                name="phoneNo"
                id={"phoneNo3"}
                required
                className="w-full  h-3 py-4 px-4 text-sm peer bg-transparent outline-none focus:border-blue-500 border-b border-[#999]"
              />
              <label
                htmlFor={"phoneNo3"}
                className="transform transition-all text-[#999] absolute top-0 left-0 h-full flex items-center pl-1 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-[15px] peer-valid:-translate-y-full group-focus-within:pl-1 peer-valid:pl-1"
              >
                Phone No
              </label>
            </div>

            <button className="py-3 rounded-xl bg-[#e31a20] mt-8 w-full font-poppins text-white text-[14px] md:text-[14px] font-bold">
              SEND REQUEST
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Model;
