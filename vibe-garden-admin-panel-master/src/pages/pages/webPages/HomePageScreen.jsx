import React from "react";
import BackButton from "../../../components/BackButton";
import MobileScreenHeader from "../../../components/MobileScreenHeader";
import { Button } from "../../../components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Box from "../../../components/Box";
import homePage from "./webScreenImages/homePage.png";
import bannerimg from "./webScreenImages/bannerImg.png";
import { Switch } from "@material-tailwind/react";
import CameraBox from "../../../components/CameraBox";
import { FiCamera, FiLink, FiVideo } from "react-icons/fi";
import { BiEdit } from "react-icons/bi";
import simpleBanner from "../../../assets/images/simpleBanner.png";
import HowItWorksImg1 from "../../../assets/images/HowItWorks1.png";
import HowItWorksImg2 from "../../../assets/images/HowItWorks2.png";
import HowItWorksImg3 from "../../../assets/images/HowItWorks3.png";
import HowItWorksImg4 from "../../../assets/images/HowItWorks4.png";
import gradientSectionIcon from "../../../assets/images/gradientSectionIcon.png";
import { IoVideocam } from "react-icons/io5";

const HomePageScreen = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/Pages");
  };

  const [showModal, setShowModal] = useState(false);
  var handleClose = () => setShowModal(false);

  const [homePageContent, setHomePageContent] = useState({
    banner: simpleBanner,
    quotation:
      "“There is a sun within every person; the you we call campanion.” – Thich Nhat Hahn",
    // descriptionHeading: "Description Heading",
    // description:
    //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur illum natus facilis debitis beatae nostrum molestiae quia maiores!",

    headerVideo1: "//vjs.zencdn.net/v/oceans.mp4",
    headerVideo1Heading: "Embodying your Fullness",
    headerVideo1Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur illum natus facilis debitis beatae nostrum molestiae quia maiores!",
    headerVideo1ButtonText: "video1ButtonText",

    headerVideo2: "//vjs.zencdn.net/v/oceans.mp4",
    headerVideo2Heading: "Coming Home Together",
    headerVideo2Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur illum natus facilis debitis beatae nostrum molestiae quia maiores!",
    headerVideo2ButtonText: "video2ButtonText",

    howItsWorksHeading: "How Its Works",
    howItsWorksImage1: HowItWorksImg1,
    howItsWorksHeading1: "Column Header Green 1",
    howItsWorksDescription1:
      "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur illum natus facilis debitis beatae nostrum molestiae quia maiores!",
    howItsWorksImage2: HowItWorksImg2,
    howItsWorksHeading2: "Column Header Green 2",
    howItsWorksDescription2:
      "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur illum natus facilis debitis beatae nostrum molestiae quia maiores!",
    howItsWorksImage3: HowItWorksImg3,
    howItsWorksHeading3: "Column Header Green 3",
    howItsWorksDescription3:
      "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur illum natus facilis debitis beatae nostrum molestiae quia maiores!",
    howItsWorksImage4: HowItWorksImg4,
    howItsWorksHeading4: "Column Header Green 3",
    howItsWorksDescription4:
      "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur illum natus facilis debitis beatae nostrum molestiae quia maiores!",
    centerSection1Heading: "H3 Headline style green 1",
    centerSection1Description:
      "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur illum natus facilis debitis beatae nostrum molestiae quia maiores!",
    centerSection2Heading: "H3 Headline style green 2",
    centerSection2Description:
      "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur illum natus facilis debitis beatae nostrum molestiae quia maiores!",

    centerSection3Heading: "H3 Headline style green 3",
    centerSection3Description:
      "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur illum natus facilis debitis beatae nostrum molestiae quia maiores!",

    centerSection4Heading: "H3 Headline style green 4",
    centerSection4Description:
      "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur illum natus facilis debitis beatae nostrum molestiae quia maiores!",
    gradientCardSectionHeading: "Sample Tools",
    gradientCard1Heading: "Gradient card headline 1",
    gradientCard1Icon: gradientSectionIcon,
    gradientCard1Description:
      "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur illum natus facilis debitis beatae nostrum molestiae quia maiores!",
    gradientCard1Video: "//vjs.zencdn.net/v/oceans.mp4",
    gradientCard2Heading: "Gradient card headline 2",
    gradientCard2Icon: gradientSectionIcon,
    gradientCard2Description:
      "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur illum natus facilis debitis beatae nostrum molestiae quia maiores!",
    gradientCard2Video: "//vjs.zencdn.net/v/oceans.mp4",

    moreSectionHeading: "More About VibeGarden",
    moreSectionCard1Heading: "A Creation Story",
    moreSectionCard1Description:
      "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur illum natus facilis debitis beatae nostrum molestiae quia maiores!",
    moreSectionCard1Video: "//vjs.zencdn.net/v/oceans.mp4",
    moreSectionCard1ButtonText: "Button 1",
    moreSectionCard2Heading: "The Vibe Bloom App",
    moreSectionCard2Description:
      "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur illum natus facilis debitis beatae nostrum molestiae quia maiores!",
    moreSectionCard2Video: "//vjs.zencdn.net/v/oceans.mp4",
    moreSectionCard2ButtonText: "Button 2",

    moreSectionCard3Heading: "Teachers",
    moreSectionCard3Description:
      "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium consectetur illum natus facilis debitis beatae nostrum molestiae quia maiores!",
    moreSectionCard3Video: "//vjs.zencdn.net/v/oceans.mp4",
    moreSectionCard3ButtonText: "Button 3",
  });

  const toolRecommendationTemplateHandler = (e) => {
    const { name, value, files } = e.target;
    setHomePageContent((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const renderBackdrop = (props) => <div className="backdrop" {...props} />;
  return (
    <>
      <div>
        <BackButton />
      </div>

      <MobileScreenHeader
        heading="Home Page"
        horizontalLine={
          <div className="border-t border-[#1C5C2E]  w-[35%] mt-[15px] mx-4"></div>
        }
        text={
          <p className="text-[#1C5C2E] font-medium  text-[18px]">Preview:</p>
        }
        btn={
          <div onClick={() => setShowModal(true)} className="ml-[350px]">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="m-10 space-y-10">
          <div className="w-[95%] h-[200px]  bg-[] border border-[#1C5C2E] rounded-[25px] relative ">
            <div className="w-[120px] h-[50px] bg-[white]  rounded-[25px] absolute -top-6 left-3 flex justify-center items-center ">
              <p className="font-semibold">Banner</p>
            </div>
            <div className="relative h-full">
              <img
                src={
                  typeof homePageContent.banner === "string"
                    ? homePageContent.banner
                    : // `${ImageUrl}${homePageContent.banner}`
                      URL.createObjectURL(homePageContent.banner)
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
                value={homePageContent.quotation}
                className="mt-5 text-[#979B9F] text-[14px] ml-5 w-[90%] outline-none"
                onChange={toolRecommendationTemplateHandler}
                name="quotation"
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
                className="mt-5 font-semibold text-[14px] ml-5 w-[90%] outline-none"
                value={homePageContent.headerVideo1Heading}
                onChange={toolRecommendationTemplateHandler}
                name="headerVideo1Heading"
              />
            }
            line={<div className="border-t border-[#1C5C2E] mt-[15px] "></div>}
            description={
              <textarea
                type="text"
                value={homePageContent.headerVideo1Description}
                onChange={toolRecommendationTemplateHandler}
                name="headerVideo1Description"
                className="mt-5 text-[#979B9F] text-[14px] ml-5 w-[90%] outline-none"
              />
            }
            button={
              <input
                value={homePageContent.headerVideo1ButtonText}
                onChange={toolRecommendationTemplateHandler}
                name="headerVideo1ButtonText"
                className="p-3 hover:drop-shadow-xl flex items-center gap-2 justify-center text-center border border-solid border-green-800 text-[#979B9F] rounded-full w-[150] h-[45] outline-none"
              />
            }
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
                  name="headerVideo1"
                />
              </div>
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
                className="mt-5 font-semibold text-[14px] ml-5 w-[90%] outline-none"
                value={homePageContent.headerVideo2Heading}
                onChange={toolRecommendationTemplateHandler}
                name="headerVideo2Heading"
              />
            }
            line={<div className="border-t border-[#1C5C2E] mt-[15px] "></div>}
            description={
              <textarea
                type="text"
                value={homePageContent.headerVideo2Description}
                onChange={toolRecommendationTemplateHandler}
                name="headerVideo2Description"
                className="mt-5 text-[#979B9F] text-[14px] ml-5 w-[90%] outline-none"
              />
            }
            button={
              <input
                value={homePageContent.headerVideo2ButtonText}
                onChange={toolRecommendationTemplateHandler}
                name="headerVideo2ButtonText"
                className="p-3 hover:drop-shadow-xl flex items-center gap-2 justify-center text-center border border-solid border-green-800 text-[#979B9F] rounded-full w-[150] h-[45] outline-none"
              />
            }
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
                  name="headerVideo2"
                />
              </div>
            }
          />

          <Box
            absoluteDiv={
              <div className="w-[150px] h-[50px] bg-[white] rounded-[25px] absolute -top-6 left-3 flex justify-center items-center ">
                <p className="font-semibold">How Its Work Section</p>
              </div>
            }
            subHeading={
              <input
                type="text"
                className="mt-5 font-semibold text-[14px] ml-5 w-[90%] outline-none"
                value={homePageContent.howItsWorksHeading}
                onChange={toolRecommendationTemplateHandler}
                name="howItsWorksHeading"
              />
            }
            line={<div className="border-t border-[#1C5C2E] mt-[15px] "></div>}
            description={
              <div className="flex justify-evenly flex-wrap">
                <div className="flex flex-col items-center">
                  <div className="relative border-[#8eae97] border-1 border-dashed	rounded-md h-[80px] w-[80px] mr-3 mb-2 mt-3">
                    <div className="flex flex-col items-center absolute top-4">
                      <FiCamera size={20} color="#1C5C2E" />
                      <small className="text-center text-xs">
                        Upload & Drag From Here
                      </small>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      className="absolute top-0 opacity-0 bg-black h-[100%] w-[100%]"
                      onChange={toolRecommendationTemplateHandler}
                      name="howItsWorksImage1"
                    />
                  </div>
                  <Box
                    width={"200px"}
                    height={"130px"}
                    subHeading={
                      <input
                        type="text"
                        className="mt-5 font-semibold p-0 text-[14px] ml-5 w-[90%] outline-none"
                        value={homePageContent.howItsWorksHeading1}
                        onChange={toolRecommendationTemplateHandler}
                        name="howItsWorksHeading1"
                      />
                    }
                    line={
                      <div className="border-t border-[#1C5C2E] mt-[15px] "></div>
                    }
                    description={
                      <textarea
                        type="text"
                        value={homePageContent.howItsWorksDescription1}
                        onChange={toolRecommendationTemplateHandler}
                        name="howItsWorksDescription1"
                        className="mt-5 text-[#979B9F] text-[14px] ml-5 w-[90%] outline-none"
                      />
                    }
                  />
                </div>
                <div className="flex flex-col items-center">
                  <div className="relative border-[#8eae97] border-1 border-dashed	rounded-md h-[80px] w-[80px] mr-3 mb-2 mt-3">
                    <div className="flex flex-col items-center absolute top-4">
                      <FiCamera size={20} color="#1C5C2E" />
                      <small className="text-center text-xs">
                        Upload & Drag From Here
                      </small>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      className="absolute top-0 opacity-0 bg-black h-[100%] w-[100%]"
                      onChange={toolRecommendationTemplateHandler}
                      name="howItsWorksImage2"
                    />
                  </div>
                  <Box
                    width={"200px"}
                    height={"130px"}
                    subHeading={
                      <input
                        type="text"
                        className="mt-5 font-semibold p-0 text-[14px] ml-5 w-[90%] outline-none"
                        value={homePageContent.howItsWorksHeading2}
                        onChange={toolRecommendationTemplateHandler}
                        name="howItsWorksHeading2"
                      />
                    }
                    line={
                      <div className="border-t border-[#1C5C2E] mt-[15px] "></div>
                    }
                    description={
                      <textarea
                        type="text"
                        value={homePageContent.howItsWorksDescription2}
                        onChange={toolRecommendationTemplateHandler}
                        name="howItsWorksDescription2"
                        className="mt-5 text-[#979B9F] text-[14px] ml-5 w-[90%] outline-none"
                      />
                    }
                  />
                </div>
                <div className="flex flex-col items-center">
                  <div className="relative border-[#8eae97] border-1 border-dashed	rounded-md h-[80px] w-[80px] mr-3 mb-2 mt-3">
                    <div className="flex flex-col items-center absolute top-4">
                      <FiCamera size={20} color="#1C5C2E" />
                      <small className="text-center text-xs">
                        Upload & Drag From Here
                      </small>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      className="absolute top-0 opacity-0 bg-black h-[100%] w-[100%]"
                      onChange={toolRecommendationTemplateHandler}
                      name="howItsWorksImage3"
                    />
                  </div>
                  <Box
                    width={"200px"}
                    height={"130px"}
                    subHeading={
                      <input
                        type="text"
                        className="mt-5 font-semibold p-0 text-[14px] ml-5 w-[90%] outline-none"
                        value={homePageContent.howItsWorksHeading3}
                        onChange={toolRecommendationTemplateHandler}
                        name="howItsWorksHeading3"
                      />
                    }
                    line={
                      <div className="border-t border-[#1C5C2E] mt-[15px] "></div>
                    }
                    description={
                      <textarea
                        type="text"
                        value={homePageContent.howItsWorksDescription3}
                        onChange={toolRecommendationTemplateHandler}
                        name="howItsWorksDescription3"
                        className="mt-5 text-[#979B9F] text-[14px] ml-5 w-[90%] outline-none"
                      />
                    }
                  />
                </div>
                <div className="flex flex-col items-center">
                  <div className="relative border-[#8eae97] border-1 border-dashed	rounded-md h-[80px] w-[80px] mr-3 mb-2 mt-3">
                    <div className="flex flex-col items-center absolute top-4">
                      <FiCamera size={20} color="#1C5C2E" />
                      <small className="text-center text-xs">
                        Upload & Drag From Here
                      </small>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      className="absolute top-0 opacity-0 bg-black h-[100%] w-[100%]"
                      onChange={toolRecommendationTemplateHandler}
                      name="howItsWorksImage4"
                    />
                  </div>
                  <Box
                    width={"200px"}
                    height={"130px"}
                    subHeading={
                      <input
                        type="text"
                        className="mt-5 font-semibold p-0 text-[14px] ml-5 w-[90%] outline-none"
                        value={homePageContent.howItsWorksHeading4}
                        onChange={toolRecommendationTemplateHandler}
                        name="howItsWorksHeading4"
                      />
                    }
                    line={
                      <div className="border-t border-[#1C5C2E] mt-[15px] "></div>
                    }
                    description={
                      <textarea
                        type="text"
                        value={homePageContent.howItsWorksDescription4}
                        onChange={toolRecommendationTemplateHandler}
                        name="howItsWorksDescription4"
                        className="mt-5 text-[#979B9F] text-[14px] ml-5 w-[90%] outline-none"
                      />
                    }
                  />
                </div>
              </div>
            }
          />

          <Box
            absoluteDiv={
              <div className="w-[80px] h-[50px] bg-[white] rounded-[25px] absolute -top-6 left-3 flex justify-center items-center ">
                <p className="font-semibold">Heading #1</p>
              </div>
            }
            subHeading={
              <input
                type="text"
                className="mt-5 font-semibold text-[14px] ml-5 w-[90%] outline-none"
                value={homePageContent.centerSection1Heading}
                onChange={toolRecommendationTemplateHandler}
                name="centerSection1Heading"
              />
            }
            line={<div className="border-t border-[#1C5C2E] mt-[15px] "></div>}
            description={
              <textarea
                type="text"
                value={homePageContent.centerSection1Description}
                onChange={toolRecommendationTemplateHandler}
                name="centerSection1Description"
                className="mt-5 text-[#979B9F] text-[14px] ml-5 w-[90%] outline-none"
              />
            }
          />

          <Box
            absoluteDiv={
              <div className="w-[80px] h-[50px] bg-[white] rounded-[25px] absolute -top-6 left-3 flex justify-center items-center ">
                <p className="font-semibold">Heading #2</p>
              </div>
            }
            subHeading={
              <input
                type="text"
                className="mt-5 font-semibold text-[14px] ml-5 w-[90%] outline-none"
                value={homePageContent.centerSection2Heading}
                onChange={toolRecommendationTemplateHandler}
                name="centerSection2Heading"
              />
            }
            line={<div className="border-t border-[#1C5C2E] mt-[15px] "></div>}
            description={
              <textarea
                type="text"
                value={homePageContent.centerSection2Description}
                onChange={toolRecommendationTemplateHandler}
                name="centerSection2Description"
                className="mt-5 text-[#979B9F] text-[14px] ml-5 w-[90%] outline-none"
              />
            }
          />

          <Box
            absoluteDiv={
              <div className="w-[80px] h-[50px] bg-[white] rounded-[25px] absolute -top-6 left-3 flex justify-center items-center ">
                <p className="font-semibold">Heading #3</p>
              </div>
            }
            subHeading={
              <input
                type="text"
                className="mt-5 font-semibold text-[14px] ml-5 w-[90%] outline-none"
                value={homePageContent.centerSection3Heading}
                onChange={toolRecommendationTemplateHandler}
                name="centerSection3Heading"
              />
            }
            line={<div className="border-t border-[#1C5C2E] mt-[15px] "></div>}
            description={
              <textarea
                type="text"
                value={homePageContent.centerSection3Description}
                onChange={toolRecommendationTemplateHandler}
                name="centerSection3Description"
                className="mt-5 text-[#979B9F] text-[14px] ml-5 w-[90%] outline-none"
              />
            }
          />

          <Box
            absoluteDiv={
              <div className="w-[80px] h-[50px] bg-[white] rounded-[25px] absolute -top-6 left-3 flex justify-center items-center ">
                <p className="font-semibold">Heading #4</p>
              </div>
            }
            subHeading={
              <input
                type="text"
                className="mt-5 font-semibold text-[14px] ml-5 w-[90%] outline-none"
                value={homePageContent.centerSection4Heading}
                onChange={toolRecommendationTemplateHandler}
                name="centerSection4Heading"
              />
            }
            line={<div className="border-t border-[#1C5C2E] mt-[15px] "></div>}
            description={
              <textarea
                type="text"
                value={homePageContent.centerSection4Description}
                onChange={toolRecommendationTemplateHandler}
                name="centerSection4Description"
                className="mt-5 text-[#979B9F] text-[14px] ml-5 w-[90%] outline-none"
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
                value={homePageContent.gradientCardSectionHeading}
                onChange={toolRecommendationTemplateHandler}
                name="gradientCardSectionHeading"
              />
            }
          />
          <Box
            absoluteDiv={
              <div className="w-[100px] h-[50px] bg-[white] rounded-[25px] absolute -top-6 left-3 flex justify-center items-center ">
                <p className="font-semibold ">Sample Tool #1</p>
              </div>
            }
            subHeading={
              <div className="flex justify-between items-center mx-5 mt-2">
                <input
                  type="text"
                  className="mt-4 w-[70%] outline-none"
                  value={homePageContent.gradientCard1Heading}
                  onChange={toolRecommendationTemplateHandler}
                  name="gradientCard1Heading"
                />
                <div className="relative border-[#8eae97] border-1 border-dashed	rounded-md h-[50px] w-[80px]">
                  <div className="flex flex-col items-center absolute left-2 top-1">
                    <FiCamera size={20} color="#1C5C2E" />
                    <small className="text-center text-xs">Change Icon</small>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    className="absolute top-0 opacity-0 bg-black h-[100%] w-[100%]"
                    onChange={toolRecommendationTemplateHandler}
                    name="gradientCard1Icon"
                  />
                </div>
              </div>
            }
            line={<div className="border-t border-[#1C5C2E] mt-[15px] "></div>}
            description={
              <textarea
                type="text"
                value={homePageContent.gradientCard1Description}
                onChange={toolRecommendationTemplateHandler}
                name="gradientCard1Description"
                className="mt-5 text-[#979B9F] text-[14px] ml-5 w-[90%] outline-none"
              />
            }
            icon={
              <div className="relative border-[#8eae97] border-1 border-dashed	rounded-md h-[90px] w-[90px] mr-3 mb-2 mt-3">
                <div className="flex flex-col items-center absolute top-4">
                  <IoVideocam size={23} color="#1C5C2E" />
                  <small className="text-center text-xs">
                    Upload & Drag From Here
                  </small>
                </div>
                <input
                  type="file"
                  accept="video/*"
                  className="absolute top-0 opacity-0 bg-black h-[100%] w-[100%]"
                  onChange={toolRecommendationTemplateHandler}
                  name="gradientCard1Video"
                />
              </div>
            }
          />

          <Box
            absoluteDiv={
              <div className="w-[100px] h-[50px] bg-[white] rounded-[25px] absolute -top-6 left-3 flex justify-center items-center ">
                <p className="font-semibold ">Sample Tool #2</p>
              </div>
            }
            subHeading={
              <div className="flex justify-between items-center mx-5 mt-2">
                <input
                  type="text"
                  className="mt-4 w-[70%] outline-none"
                  value={homePageContent.gradientCard2Heading}
                  onChange={toolRecommendationTemplateHandler}
                  name="gradientCard2Heading"
                />
                <div className="relative border-[#8eae97] border-1 border-dashed	rounded-md h-[50px] w-[80px]">
                  <div className="flex flex-col items-center absolute left-2 top-1">
                    <FiCamera size={20} color="#1C5C2E" />
                    <small className="text-center text-xs">Change Icon</small>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    className="absolute top-0 opacity-0 bg-black h-[100%] w-[100%]"
                    onChange={toolRecommendationTemplateHandler}
                    name="gradientCard2Icon"
                  />
                </div>
              </div>
            }
            line={<div className="border-t border-[#1C5C2E] mt-[15px] "></div>}
            description={
              <textarea
                type="text"
                value={homePageContent.gradientCard2Description}
                onChange={toolRecommendationTemplateHandler}
                name="gradientCard2Description"
                className="mt-5 text-[#979B9F] text-[14px] ml-5 w-[90%] outline-none"
              />
            }
            icon={
              <div className="relative border-[#8eae97] border-1 border-dashed	rounded-md h-[90px] w-[90px] mr-3 mb-2 mt-3">
                <div className="flex flex-col items-center absolute top-4">
                  <IoVideocam size={23} color="#1C5C2E" />
                  <small className="text-center text-xs">
                    Upload & Drag From Here
                  </small>
                </div>
                <input
                  type="file"
                  accept="video/*"
                  className="absolute top-0 opacity-0 bg-black h-[100%] w-[100%]"
                  onChange={toolRecommendationTemplateHandler}
                  name="gradientCard2Video"
                />
              </div>
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
                value={homePageContent.moreSectionHeading}
                onChange={toolRecommendationTemplateHandler}
                name="gradientCardSectionHeading"
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
                value={homePageContent.moreSectionCard1Heading}
                onChange={toolRecommendationTemplateHandler}
                name="moreSectionCard1Heading"
              />
            }
            line={<div className="border-t border-[#1C5C2E] mt-[15px] "></div>}
            description={
              <textarea
                type="text"
                value={homePageContent.moreSectionCard1Description}
                onChange={toolRecommendationTemplateHandler}
                name="moreSectionCard1Description"
                className="mt-5 text-[#979B9F] text-[14px] ml-5 w-[90%] outline-none"
              />
            }
            button={
              <input
                value={homePageContent.moreSectionCard1ButtonText}
                onChange={toolRecommendationTemplateHandler}
                name="moreSectionCard1ButtonText"
                className="p-3 hover:drop-shadow-xl flex items-center gap-2 justify-center text-center border border-solid border-green-800 text-[#979B9F] rounded-full w-[150] h-[45] outline-none"
              />
            }
            btnTxt="Upload & Drag From Here"
            icon={
              <div className="relative border-[#8eae97] border-1 border-dashed	rounded-md h-[100px] w-[100px] mr-3">
                <div className="flex flex-col items-center absolute top-4">
                  <IoVideocam size={23} color="#1C5C2E" />
                  <small className="text-center">Upload & Drag From Here</small>
                </div>
                <input
                  type="file"
                  accept="video/*"
                  className="absolute top-0 opacity-0 bg-black h-[100%] w-[100%]"
                  onChange={toolRecommendationTemplateHandler}
                  name="moreSectionCard1Video"
                />
              </div>
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
                value={homePageContent.moreSectionCard2Heading}
                onChange={toolRecommendationTemplateHandler}
                name="moreSectionCard2Heading"
              />
            }
            line={<div className="border-t border-[#1C5C2E] mt-[15px] "></div>}
            description={
              <textarea
                type="text"
                value={homePageContent.moreSectionCard2Description}
                onChange={toolRecommendationTemplateHandler}
                name="moreSectionCard2Description"
                className="mt-5 text-[#979B9F] text-[14px] ml-5 w-[90%] outline-none"
              />
            }
            button={
              <input
                value={homePageContent.moreSectionCard2ButtonText}
                onChange={toolRecommendationTemplateHandler}
                name="moreSectionCard2ButtonText"
                className="p-3 hover:drop-shadow-xl flex items-center gap-2 justify-center text-center border border-solid border-green-800 text-[#979B9F] rounded-full w-[150] h-[45] outline-none"
              />
            }
            btnTxt="Upload & Drag From Here"
            icon={
              <div className="relative border-[#8eae97] border-1 border-dashed	rounded-md h-[100px] w-[100px] mr-3">
                <div className="flex flex-col items-center absolute top-4">
                  <IoVideocam size={23} color="#1C5C2E" />
                  <small className="text-center">Upload & Drag From Here</small>
                </div>
                <input
                  type="file"
                  accept="video/*"
                  className="absolute top-0 opacity-0 bg-black h-[100%] w-[100%]"
                  onChange={toolRecommendationTemplateHandler}
                  name="moreSectionCard2Video"
                />
              </div>
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
                value={homePageContent.moreSectionCard3Heading}
                onChange={toolRecommendationTemplateHandler}
                name="moreSectionCard3Heading"
              />
            }
            line={<div className="border-t border-[#1C5C2E] mt-[15px] "></div>}
            description={
              <textarea
                type="text"
                value={homePageContent.moreSectionCard3Description}
                onChange={toolRecommendationTemplateHandler}
                name="moreSectionCard3Description"
                className="mt-5 text-[#979B9F] text-[14px] ml-5 w-[90%] outline-none"
              />
            }
            button={
              <input
                value={homePageContent.moreSectionCard3ButtonText}
                onChange={toolRecommendationTemplateHandler}
                name="moreSectionCard3ButtonText"
                className="p-3 hover:drop-shadow-xl flex items-center gap-2 justify-center text-center border border-solid border-green-800 text-[#979B9F] rounded-full w-[150] h-[45] outline-none"
              />
            }
            btnTxt="Upload & Drag From Here"
            icon={
              <div className="relative border-[#8eae97] border-1 border-dashed	rounded-md h-[100px] w-[100px] mr-3">
                <div className="flex flex-col items-center absolute top-4">
                  <IoVideocam size={23} color="#1C5C2E" />
                  <small className="text-center">Upload & Drag From Here</small>
                </div>
                <input
                  type="file"
                  accept="video/*"
                  className="absolute top-0 opacity-0 bg-black h-[100%] w-[100%]"
                  onChange={toolRecommendationTemplateHandler}
                  name="moreSectionCard3Video"
                />
              </div>
            }
          />
        </div>
        <div>
          <img src={homePage} alt="home page" />
        </div>
      </div>
    </>
  );
};

export default HomePageScreen;
