import React, { useState } from "react";
import { FiCamera } from "react-icons/fi";
import { Button } from "../../components";
import Box from "../../components/Box";
import bannerImg from "../../assets/images/bannerImg.png";
import bannerImg2 from "../../assets/images/LoginBackground.png";
import simpleBanner from "../../assets/images/simpleBanner.png";
import Preview from "./Preview";
import { BiEdit } from "react-icons/bi";
import { ImageUrl } from "../../assets/api/axios";
import { BsFillCalendarFill } from "react-icons/bs";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";

const SendNotification = () => {
  const [toolRecommendationTemplate, setToolRecommendationTemplate] = useState({
    // banner: simpleBanner,
    banner:
      "https://vibe-garden-web-rho.vercel.app/static/media/hero.ce986186a55dda330d98.png",
    quotation:
      "“There is a sun within every person; the you we call campanion.” – Thich Nhat Hahn",
    descriptionHeading: "Description Heading",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur illum natus facilis debitis beatae nostrum molestiae quia maiores!",

    video1: "//vjs.zencdn.net/v/oceans.mp4",
    video1Heading: "video1Heading",
    video1Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur illum natus facilis debitis beatae nostrum molestiae quia maiores!",
    video1ButtonText: "video1ButtonText",

    video2: "//vjs.zencdn.net/v/oceans.mp4",
    video2Heading: "video2Heading",
    video2Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur illum natus facilis debitis beatae nostrum molestiae quia maiores!",
    video2ButtonText: "video2ButtonText",

    video3: "//vjs.zencdn.net/v/oceans.mp4",
    video3Heading: "video3Heading",
    video3Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur illum natus facilis debitis beatae nostrum molestiae quia maiores!",
    video3ButtonText: "video3ButtonText",

    footerHeading: "Want To Stay In Touch",
    footerDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur illum natus facilis debitis beatae nostrum molestiae quia maiores!",
    footerButtonText: "footerButtonText",
  });
  const [publishNowRadio, setPublishNowRadio] = useState({
    type: "",
    selectedFrequency: "",
  });
  const [scheduleRadio, setScheduleRadio] = useState({
    type: "",
    selectedFrequency: "",
    date: "",
    time: "",
  });
  const navigate = useNavigate();
  const handlePublishNowRadio = (e) => {
    const { name, value } = e.target;
    setScheduleRadio({});
    setPublishNowRadio((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleScheduleRadio = (e) => {
    const { name, value } = e.target;
    setPublishNowRadio({});
    setScheduleRadio((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toolRecommendationTemplateHandler = (e) => {
    const { name, value, files } = e.target;
    setToolRecommendationTemplate((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  return (
    <>
      <div className="flex flex-row justify-between m-10">
        <div className="flex flex-row">
          <p className="text-[#1C5C2E] font-semibold text-2xl">
            Tools Recommendations
          </p>
          <div className="border-t border-[#1C5C2E] w-[300px] mt-[15px] mx-4"></div>
          <p className="text-[#1C5C2E] font-semibold text-2xl">Preview:</p>
        </div>
        <div>
          <Button
            text="Send Notification"
            bgColor="#359D9E"
            color="white"
            width={200}
            borderRadius={10}
            handleClick={() =>
              navigate("/userTypes", {
                state: {
                  data: toolRecommendationTemplate,
                  notificationType: "email",
                },
              })
            }
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        <div className="m-10 flex flex-col space-y-10">
          <div className="w-[95%] h-[200px]  bg-[] border border-[#1C5C2E] rounded-[25px] relative ">
            <div className="w-[120px] h-[50px] bg-[white]  rounded-[25px] absolute -top-6 left-3 flex justify-center items-center ">
              <p className="font-semibold">Banner</p>
            </div>
            <div className="relative h-full">
              <img
                src={
                  typeof toolRecommendationTemplate.banner === "string"
                    ? toolRecommendationTemplate.banner
                    : // `${ImageUrl}${toolRecommendationTemplate.banner}`
                      URL.createObjectURL(toolRecommendationTemplate.banner)
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
                  onChange={toolRecommendationTemplateHandler}
                  name="banner"
                />
              </div>
            </div>
          </div>
          <Box
            heading="Heading"
            // subHeading="Main Qoutation"
            subHeading={
              // <input
              //   type="text"
              //   value={"Main Qoutation"}
              //   className="mt-5 font-semibold text-[14px] ml-5 w-[90%] outline-none"
              // />
              <div className="mt-5 font-semibold text-[14px] ml-5 w-[90%] outline-none">
                Main Qoutation
              </div>
            }
            line={<div className="border-t border-[#1C5C2E]  mt-[15px] "></div>}
            description={
              <textarea
                type="text"
                value={toolRecommendationTemplate.quotation}
                className="mt-5 text-[#979B9F] text-[14px] ml-5 w-[90%] outline-none"
                onChange={toolRecommendationTemplateHandler}
                name="quotation"
              />
            }
            // button={
            //   <Button
            //     text="Button Text"
            //     border={`1px solid #1C5C2E`}
            //     color="#979B9F"
            //     borderRadius={25}
            //     width={150}
            //     height={45}
            //   />
            // }
            // icon={<FiCamera size={25} color="#1C5C2E" />}
            // btnTxt="Upload & Drag From Here"
          />
          <Box
            heading="Heading"
            // subHeading="Heading (desc)"
            subHeading={
              <input
                type="text"
                value={toolRecommendationTemplate.descriptionHeading}
                className="mt-5 font-semibold text-[14px] ml-5 w-[90%] outline-none"
                onChange={toolRecommendationTemplateHandler}
                name="descriptionHeading"
              />
            }
            line={<div className="border-t border-[#1C5C2E]  mt-[15px] "></div>}
            description={
              <textarea
                type="text"
                value={toolRecommendationTemplate.description}
                className="mt-5 text-[#979B9F] text-[14px] ml-5 w-[90%] outline-none"
                onChange={toolRecommendationTemplateHandler}
                name="description"
              />
            }
          />
          <Box
            heading="Heading"
            // subHeading="Heading"
            subHeading={
              <input
                type="text"
                className="mt-5 font-semibold text-[14px] ml-5 w-[90%] outline-none"
                value={toolRecommendationTemplate.video1Heading}
                onChange={toolRecommendationTemplateHandler}
                name="video1Heading"
              />
            }
            line={<div className="border-t border-[#1C5C2E] mt-[15px] "></div>}
            // description="“There is a sun within every person; the you we call campanion.” – Thich Nhat Hahn Hi, You here is a sun within every person; the you we call campanion.” – Thich Nhat Hahn Hi, You"
            description={
              <textarea
                type="text"
                value={toolRecommendationTemplate.video1Description}
                onChange={toolRecommendationTemplateHandler}
                name="video1Description"
                className="mt-5 text-[#979B9F] text-[14px] ml-5 w-[90%] outline-none"
              />
            }
            button={
              <input
                value={toolRecommendationTemplate.video1ButtonText}
                onChange={toolRecommendationTemplateHandler}
                name="video1ButtonText"
                className="p-3 hover:drop-shadow-xl flex items-center gap-2 justify-center text-center border border-solid border-green-800 text-[#979B9F] rounded-full w-[150] h-[45] outline-none"
              />
            }
            btnTxt="Upload & Drag From Here"
            // icon={
            //   <>
            //     {typeof toolRecommendationTemplate.video1 ? (
            //       <div className="relative">
            //         <video
            //           controls
            //           className="opacity-1 h-[90px] w-[90px] object-fill rounded-md mr-3"
            //         >
            //           <source
            //             src={
            //               typeof toolRecommendationTemplate.video1 == "object"
            //                 ? URL.createObjectURL(
            //                     toolRecommendationTemplate.video1
            //                   )
            //                 : toolRecommendationTemplate.video1
            //             }
            //             type="video/mp4"
            //           />
            //           Your browser does not support the video tag.
            //         </video>
            //         <input
            //           type="file"
            //           accept="video/*"
            //           className="absolute top-20  opacity-0 bg-black w-[90%]"
            //           onChange={toolRecommendationTemplateHandler}
            //           name="video1"
            //         />
            //       </div>
            //     ) : (
            //       <div className="relative border-[#8eae97] border-1 border-dashed	rounded-md h-[100px] w-[100px] mr-3">
            //         <div className="flex flex-col items-center absolute top-4">
            //           <FiCamera size={25} color="#1C5C2E" />
            //           <small className="text-center">
            //             Upload & Drag From Here
            //           </small>
            //         </div>
            //         <input
            //           type="file"
            //           accept="video/*"
            //           className="absolute top-0 opacity-0 bg-black h-[100%] w-[100%]"
            //         />
            //       </div>
            //     )}
            //   </>
            // }
            icon={
              <div className="relative border-[#8eae97] border-1 border-dashed	rounded-md h-[100px] w-[100px] mr-3">
                <div className="flex flex-col items-center absolute top-4">
                  <FiCamera size={25} color="#1C5C2E" />
                  <small className="text-center">Upload & Drag From Here</small>
                </div>
                <input
                  type="file"
                  accept="video/*"
                  className="absolute top-0 opacity-0 bg-black h-[100%] w-[100%]"
                  onChange={toolRecommendationTemplateHandler}
                  name="video1"
                />
              </div>
            }
          />
          <Box
            heading="Heading"
            // subHeading="Heading"
            subHeading={
              <input
                type="text"
                value={toolRecommendationTemplate.video2Heading}
                onChange={toolRecommendationTemplateHandler}
                name="video2Heading"
                className="mt-5 font-semibold text-[14px] ml-5 w-[90%] outline-none"
              />
            }
            line={<div className="border-t border-[#1C5C2E]  mt-[15px] "></div>}
            description={
              <textarea
                type="text"
                value={toolRecommendationTemplate.video2Description}
                onChange={toolRecommendationTemplateHandler}
                name="video2Description"
                className="mt-5 text-[#979B9F] text-[14px] ml-5 w-[90%] outline-none"
              />
            }
            button={
              <input
                value={toolRecommendationTemplate.video2ButtonText}
                onChange={toolRecommendationTemplateHandler}
                name="video2ButtonText"
                className="p-3 hover:drop-shadow-xl flex items-center gap-2 justify-center text-center border border-solid border-green-800 text-[#979B9F] rounded-full w-[150] h-[45] outline-none"
              />
            }
            // icon={<FiCamera size={25} color="#1C5C2E" />}
            btnTxt="Upload & Drag From Here"
            icon={
              <div className="relative border-[#8eae97] border-1 border-dashed	rounded-md h-[100px] w-[100px] mr-3">
                <div className="flex flex-col items-center absolute top-4">
                  <FiCamera size={25} color="#1C5C2E" />
                  <small className="text-center">Upload & Drag From Here</small>
                </div>
                <input
                  type="file"
                  accept="video/*"
                  className="absolute top-0 opacity-0 bg-black h-[100%] w-[100%]"
                  onChange={toolRecommendationTemplateHandler}
                  name={"video2"}
                />
              </div>
            }
          />
          <Box
            heading="Heading"
            // subHeading="Heading"
            subHeading={
              <input
                type="text"
                value={toolRecommendationTemplate.video3Heading}
                onChange={toolRecommendationTemplateHandler}
                name="video3Heading"
                className="mt-5 font-semibold text-[14px] ml-5 w-[90%] outline-none"
              />
            }
            line={<div className="border-t border-[#1C5C2E]  mt-[15px] "></div>}
            description={
              <textarea
                type="text"
                value={toolRecommendationTemplate.video3Description}
                onChange={toolRecommendationTemplateHandler}
                name="video3Description"
                className="mt-5 text-[#979B9F] text-[14px] ml-5 w-[90%] outline-none"
              />
            }
            button={
              <input
                value={toolRecommendationTemplate.video3ButtonText}
                onChange={toolRecommendationTemplateHandler}
                name="video3ButtonText"
                className="p-3 hover:drop-shadow-xl flex items-center gap-2 justify-center text-center border border-solid border-green-800 text-[#979B9F] rounded-full w-[150] h-[45] outline-none"
              />
            }
            // icon={<FiCamera size={25} color="#1C5C2E" />}
            btnTxt="Upload & Drag From Here"
            icon={
              <div className="relative border-[#8eae97] border-1 border-dashed	rounded-md h-[100px] w-[100px] mr-3">
                <div className="flex flex-col items-center absolute top-4">
                  <FiCamera size={25} color="#1C5C2E" />
                  <small className="text-center">Upload & Drag From Here</small>
                </div>
                <input
                  type="file"
                  accept="video/*"
                  className="absolute top-0 opacity-0 bg-black h-[100%] w-[100%]"
                  onChange={toolRecommendationTemplateHandler}
                  name={"video3"}
                />
              </div>
            }
          />
          <Box
            heading="Heading"
            // subHeading="Want to stay in touch"
            subHeading={
              <input
                type="text"
                value={toolRecommendationTemplate.footerHeading}
                onChange={toolRecommendationTemplateHandler}
                name="footerHeading"
                className="mt-5 font-semibold text-[14px] ml-5 w-[90%] outline-none"
              />
            }
            line={<div className="border-t border-[#1C5C2E]  mt-[15px] "></div>}
            description={
              <textarea
                type="text"
                value={toolRecommendationTemplate.footerDescription}
                onChange={toolRecommendationTemplateHandler}
                name="footerDescription"
                className="mt-5 text-[#979B9F] text-[14px] ml-5 w-[90%] outline-none"
              />
            }
            button={
              <input
                value={toolRecommendationTemplate.footerButtonText}
                onChange={toolRecommendationTemplateHandler}
                name="footerButtonText"
                className="p-3 hover:drop-shadow-xl flex items-center gap-2 justify-center text-center border border-solid border-green-800 text-[#979B9F] rounded-full w-[150] h-[45] outline-none"
              />
            }
          />
        </div>
        <div className="w-[95%] h-min flex justify-center bg-white shadow-2xl shadow-white-500/50">
          <Preview data={toolRecommendationTemplate} />
        </div>

        <form className="mx-10 mb-20 flex flex-col space-y-10">
          <div>
            <input
              type="radio"
              id="publishNow"
              name="type"
              value={"publishNow"}
              className="mr-2 mb-3 accent-[#1C5C2E]"
              onChange={handlePublishNowRadio}
            />
            <label htmlFor="publishNow">Publish Now</label>

            <div>
              <input
                type="radio"
                id="publishOneTime"
                name="selectedFrequency"
                className="mr-2 accent-[#359D9E]"
                value={"one-time"}
                onChange={handlePublishNowRadio}
              />
              <label htmlFor="publishOneTime">One-Time</label>

              <input
                type="radio"
                id="publishDaily"
                name="selectedFrequency"
                value={"daily"}
                className="mr-2 ml-5 accent-[#359D9E]"
                onChange={handlePublishNowRadio}
              />
              <label htmlFor="publishDaily">Daily</label>

              <input
                type="radio"
                id="publishWeekly"
                name="selectedFrequency"
                value={"weekly"}
                className="mr-2 ml-5 accent-[#359D9E]"
                onChange={handlePublishNowRadio}
              />
              <label htmlFor="publishWeekly">Weekly</label>

              <input
                type="radio"
                id="publishMonthly"
                value={"monthly"}
                name="selectedFrequency"
                className="mr-2 ml-5 accent-[#359D9E]"
                onChange={handlePublishNowRadio}
              />
              <label htmlFor="publishMonthly">Monthly</label>
            </div>
          </div>

          <div className="border-t border-[#1C5C2E] w-[300px]"></div>

          <div>
            <input
              type="radio"
              id="schedule"
              name="type"
              className="mr-2 mb-3 accent-[#1C5C2E]"
              value={"schedule"}
              onChange={handleScheduleRadio}
            />
            <label htmlFor="schedule">Schedule</label>
            <div>
              <input
                type="radio"
                id="scheduleOneTime"
                name="selectedFrequency"
                className="mr-2 accent-[#359D9E]"
                onChange={handleScheduleRadio}
                value={"one-time"}
              />
              <label htmlFor="scheduleOneTime">One-Time</label>

              <input
                type="radio"
                id="scheduleDaily"
                name="selectedFrequency"
                className="mr-2 ml-5 accent-[#359D9E]"
                value={"daily"}
                onChange={handleScheduleRadio}
              />
              <label htmlFor="scheduleDaily">Daily</label>

              <input
                type="radio"
                id="scheduleWeekly"
                name="selectedFrequency"
                className="mr-2 ml-5 accent-[#359D9E]"
                value={"weekly"}
                onChange={handleScheduleRadio}
              />
              <label htmlFor="scheduleWeekly">Weekly</label>

              <input
                type="radio"
                id="scheduleMonthly"
                name="selectedFrequency"
                className="mr-2 ml-5 accent-[#359D9E]"
                value={"monthly"}
                onChange={handleScheduleRadio}
              />
              <label htmlFor="scheduleMonthly">Monthly</label>
            </div>
          </div>

          <div className="flex gap-5">
            <input
              type="date"
              className={`bg-[#E5ECE7] outline-none pl-4 ${styles.select_date}`}
              onChange={handleScheduleRadio}
              name="date"
            />

            <input
              type="time"
              className={`bg-[#E5ECE7] outline-none pl-4 ${styles.select_time}`}
              onChange={handleScheduleRadio}
              name="time"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default SendNotification;
