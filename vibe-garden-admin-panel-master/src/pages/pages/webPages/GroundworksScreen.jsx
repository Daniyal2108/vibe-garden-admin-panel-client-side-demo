import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import groundwork from "./webScreenImages/groundwork.png";
import BackButton from "../../../components/BackButton";
import MobileScreenHeader from "../../../components/MobileScreenHeader";
import { Button } from "../../../components";
import bannerimg from "./webScreenImages/bannerImg.png";
import Box from "../../../components/Box";
import { Switch } from "@material-tailwind/react";
import CameraBox from "../../../components/CameraBox";
import { FiCamera, FiLink, FiVideo } from "react-icons/fi";
import { BiEdit } from "react-icons/bi";

const GroundworksScreen = () => {
  const navigate = useNavigate();
  const [groundWorkPageContent, setGroundWorkPageContent] = useState({
    banner: bannerimg,
    quotation:
      "“There is a sun within every person; the you we call campanion.” – Thich Nhat Hahn",
    bannerHeading: "Lorem Ipsum",
    headerVideo: "//vjs.zencdn.net/v/oceans.mp4",
    headerVideoHeading: "Why Ground Work",
    headerVideoDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur illum natus facilis debitis beatae nostrum molestiae quia maiores!",
  });

  const handleBack = () => {
    navigate("/Pages");
  };

  const groundworkTemplateHandler = (e) => {
    const { name, value, files } = e.target;
    setGroundWorkPageContent((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };
  return (
    <>
      <div onClick={handleBack}>
        <BackButton />
      </div>
      <MobileScreenHeader
        heading="Groundworks"
        horizontalLine={
          <div className="border-t border-[#1C5C2E]  w-[68%] mt-[15px] mx-4"></div>
        }
        btn={
          <div>
            {" "}
            <Button
              text="Update Site"
              bgColor="#1C5C2E"
              borderRadius={10}
              width={150}
              color="#fff"
            />{" "}
          </div>
        }
      />
      <div className="flex px-5 justify-between w-[50%]">
        <div class="mb-3  ">
          <label htmlFor="">Banner Type:</label>
          <select
            className="bg-[#1C5C2E] text-white outline-none border-none w-[120px] h-[40px] rounded-[25px]"
            data-te-select-init
          >
            <option
              className="bg-white text-[#1C5C2E] outline-none border-nonew-[120px] h-[40px] rounded-[25px]"
              value="1"
            >
              01 Banner
            </option>
            <option
              className="bg-white text-[#1C5C2E] outline-none border-nonew-[120px] h-[40px] rounded-[25px]"
              value="2"
            >
              02 Banner
            </option>
            <option
              className="bg-white text-[#1C5C2E] outline-none border-none w-[120px] h-[40px] rounded-[25px]"
              value="3"
            >
              013 Banner
            </option>
          </select>
        </div>
        <p className="text-[#1C5C2E] font-medium  text-[18px]">Preview:</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="m-10 space-y-10">
          <div className="w-[95%] h-[200px]  bg-[] border border-[#1C5C2E] rounded-[25px] relative ">
            <div className="w-[120px] h-[50px] bg-[white]  rounded-[25px] absolute -top-6 left-3 flex justify-center items-center ">
              <p className="font-semibold">Banner</p>
            </div>
            <div className="relative h-full">
              <img
                src={
                  typeof groundWorkPageContent.banner === "string"
                    ? groundWorkPageContent.banner
                    : // `${ImageUrl}${groundWorkPageContent.banner}`
                      URL.createObjectURL(groundWorkPageContent.banner)
                }
                alt="banner img"
                className="w-[95%] h-[80%] mt-[28px] ml-2"
              />
              <div className="absolute top-2 right-5 w-[100px] h-[30px] bg-[white] rounded-[11px] flex justify-center items-center px-4 py-4">
                <BiEdit color="#47A6E5" size={20} />
                <p className="text-[#47A6E5] text-[12px]">change</p>
                <input
                  type="file"
                  accept="image/*"
                  className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer"
                  onChange={groundworkTemplateHandler}
                  name="banner"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between m-5">
            <p>Ad Section</p>
            <Switch />
          </div>
          <Box
            absoluteDiv={
              <div className="w-[150px] h-[50px] bg-[white]  rounded-[25px] absolute -top-6 left-3 flex justify-center items-center ">
                <p className="font-semibold ">Write Content Here</p>
              </div>
            }
            div={
              <div className="flex flex-col">
                <div className="flex ">
                  <p className="text-gray text-[14px] w-[80%]">
                    Body copy style for white text on dark or gradient
                    backgrounds (Medium Weight) Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Mauris placerat euismod
                    porttitor. Body copy style for white text on dark or
                    gradient backgrounds (Medium Weight) Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Mauris placerat euismod.
                  </p>
                  <div>
                    <CameraBox
                      icon={<FiCamera size={20} color="#1C5C2E" />}
                      text={
                        <p>
                          Upload & Drag <br /> From Here
                        </p>
                      }
                    />
                  </div>
                </div>
                <div className="border border-[#0069FF] px-4 py-2 rounded-[50px] h-[40px] mt-4 flex">
                  <FiLink color="#0069FF" size={20} />
                  <p className="text-gray ml-5">https://abc.com</p>
                </div>
              </div>
            }
          />
          <Box
            height={"100px"}
            heading="Heading"
            absoluteDiv={
              <div className="w-[120px] h-[50px] bg-[white] rounded-[25px] absolute -top-6 left-3 flex justify-center items-center ">
                <p className="font-semibold">Main Qoutation</p>
              </div>
            }
            description={
              <textarea
                type="text"
                value={groundWorkPageContent.quotation}
                className="mt-5 text-[#979B9F] text-[14px] ml-5 w-[90%] outline-none"
                onChange={groundworkTemplateHandler}
                name="quotation"
              />
            }
          />

          <Box
            height={"80px"}
            absoluteDiv={
              <div className="w-[85px] h-[50px] bg-[white]  rounded-[25px] absolute -top-6 left-3 flex justify-center items-center ">
                <p className="font-semibold ">Heading</p>
              </div>
            }
            subHeading={
              <input
                type="text"
                className="mt-8 text-[14px] ml-5 w-[90%] outline-none"
                value={groundWorkPageContent.bannerHeading}
                onChange={groundworkTemplateHandler}
                name="bannerHeading"
              />
            }
          />

          <Box
            absoluteDiv={
              <div className="w-[80px] h-[50px] bg-[white] rounded-[25px] absolute -top-6 left-3 flex justify-center items-center ">
                <p className="font-semibold">Heading</p>
              </div>
            }
            subHeading={
              <input
                type="text"
                className="mt-6 font-semibold text-[14px] ml-5 w-[90%] outline-none"
                value={groundWorkPageContent.headerVideoHeading}
                onChange={groundworkTemplateHandler}
                name="headerVideoHeading"
              />
            }
            line={<div className="border-t border-[#1C5C2E] mt-[15px] "></div>}
            description={
              <textarea
                type="text"
                value={groundWorkPageContent.headerVideoDescription}
                onChange={groundworkTemplateHandler}
                name="headerVideoDescription"
                className="mt-5 text-[#979B9F] text-[14px] ml-5 w-[90%] outline-none"
              />
            }
            btnTxt="Upload & Drag From Here"
            icon={
              <div className="relative border-[#8eae97] border-1 border-dashed	rounded-md h-[100px] w-[100px] mr-3 mb-3">
                <div className="flex flex-col items-center absolute top-4">
                  <FiCamera size={25} color="#1C5C2E" />
                  <small className="text-center">Upload & Drag From Here</small>
                </div>
                <input
                  type="file"
                  accept="video/*"
                  className="absolute top-0 opacity-0 bg-black h-[100%] w-[100%]"
                  onChange={groundworkTemplateHandler}
                  name="headerVideo"
                />
              </div>
            }
          />
        </div>
        <div>
          <img src={groundwork} alt="groundwork page" />
        </div>
      </div>
    </>
  );
};

export default GroundworksScreen;
