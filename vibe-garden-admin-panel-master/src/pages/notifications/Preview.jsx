import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import Header from '../../content/webPreviewContent/Header'
import logo from "../../assets/images/logo.png";
import videoIcon from "../../assets/icons/video-icon.svg";
import toolsRecommedationTemplateBg from "../../assets/images/toolsRecommedationTemplateBg.png";
import { ImageUrl } from "../../assets/api/axios";
import NotificationVideo from "../../components/NotificationVideo";
import { FaApple } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io5";

const Preview = ({ data }) => {
  return (
    <div className="w-full">
      {/* <Header /> */}
      <Link className="flex items-center justify-center my-4 tracking-tight">
        <img src={logo} alt="logo" />
      </Link>

      <div className="relative">
        <img
          className="w-full h-[30vh]"
          src={
            typeof data.banner === "string"
              ? data.banner
              : // `${ImageUrl}${data.banner}`
                URL.createObjectURL(data.banner)
          }
        />

        <div
          style={{ transform: "translate(-50%, -50%)" }}
          className="absolute top-20 left-[50%] d-flex flex-col items-center w-[70%]"
        >
          <p className="text-white text-center mt-4 mb-2 break-words">
            {data?.quotation}
          </p>
        </div>
        <div
          style={{ transform: "translate(-50%, -50%)" }}
          className="absolute bottom-10 left-[50%] d-flex flex-col items-center w-[80%]"
        >
          <h1 className="text-white text-2xl text-center">Hi, You</h1>
        </div>
      </div>

      <div>
        <p className="text-[#1C5C2E] text-lg text-center mt-4 mb-2">
          {data?.descriptionHeading}
        </p>
        <p className="text-[#979B9F] text-[14px] ml-5 w-[90%] text-center break-words">
          {data?.description}
        </p>
      </div>

      <div className="flex items-center gap-5 m-4 w-full">
        <NotificationVideo data={data?.video1} />
        <div className="w-[68%] break-words">
          <p className="text-[#1C5C2E] text-lg">{data?.video1Heading}</p>
          <p className="text-[#979B9F] text-[14px] w-[90%]">
            {data?.video1Description}
          </p>
          <button
            style={{
              background: "linear-gradient(180deg, #FF545A 0%, #D61099 100%)",
            }}
            className="text-white rounded-2xl px-4 py-1.5 mt-2"
          >
            {data.video1ButtonText}
          </button>
        </div>
      </div>

      <div className="flex items-center gap-5 m-4 w-full">
        <NotificationVideo data={data?.video2} />
        <div className="w-[68%] break-words">
          <p className="text-[#1C5C2E] text-lg">{data?.video2Heading}</p>
          <p className="text-[#979B9F] text-[14px] w-[90%]">
            {data?.video2Description}
          </p>
          <button
            style={{
              background: "linear-gradient(180deg, #FF545A 0%, #D61099 100%)",
            }}
            className="text-white rounded-2xl px-4 py-1.5 mt-2"
          >
            {data.video2ButtonText}
          </button>
        </div>
      </div>

      <div className="flex items-center gap-5 m-4 w-full">
        <NotificationVideo data={data?.video3} />
        <div className="w-[68%] break-words">
          <p className="text-[#1C5C2E] text-lg">{data?.video3Heading}</p>
          <p className="text-[#979B9F] text-[14px] w-[90%]">
            {data?.video3Description}
          </p>
          <button
            style={{
              background: "linear-gradient(180deg, #FF545A 0%, #D61099 100%)",
            }}
            className="text-white rounded-2xl px-4 py-1.5 mt-2"
          >
            {data.video3ButtonText}
          </button>
        </div>
      </div>

      <div className="relative">
        <img src={toolsRecommedationTemplateBg} className="w-full" />
        <div
          style={{ transform: "translate(-50%, -50%)" }}
          className=" absolute top-[50%] left-[50%] w-[70%] flex flex-col items-center"
        >
          <p className="text-[#eb6974] text-lg text-center">
            {data?.footerHeading}
          </p>
          <p className="text-[#979B9F] text-[14px] text-center my-2">
            {data?.footerDescription}
          </p>
          <input
            type="email"
            className="w-[70%] outline-none rounded-md p-1"
            placeholder="Enter email address"
          />
          <button
            style={{
              background: "linear-gradient(180deg, #FF545A 0%, #D61099 100%)",
            }}
            className="text-white rounded-2xl px-5 py-1 mt-2"
          >
            {data.footerButtonText}
          </button>
        </div>
      </div>

      <div className="flex justify-center h-[100px] items-center gap-3">
        <button
          style={{
            background: "#4F8833",
          }}
          className="rounded-xl h-10 w-[150px] gap-2 flex items-center justify-center"
        >
          <IoLogoAndroid size={20} />
          <p className="text-white">Download</p>
        </button>
        <button
          style={{
            background: "linear-gradient(180deg, #FF545A 0%, #D61099 100%)",
          }}
          className="rounded-xl h-10 w-[150px] gap-2 flex items-center justify-center"
        >
          <FaApple size={20} />
          <p className="text-white">Download</p>
        </button>
      </div>
    </div>
  );
};

export default Preview;
