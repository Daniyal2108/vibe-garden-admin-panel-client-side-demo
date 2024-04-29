import React from "react";
import Button from "./Button";
import { FiCamera } from "react-icons/fi";

const Box = ({
  icon,
  bgColor,
  color,
  bgHoverColor,
  size,
  heading,
  borderRadius,
  width,
  height,
  outLine,
  description,
  image,
  subHeading,
  btnTxt,
  line,
  img_button,
  inputBtn,
  div,
  inputBtn2,
  display,
  justify,
  center,
  text,
  absoluteDiv,
  div2,
  line2,
  button,
}) => {
  return (
    <div
      className={`w-[${width ? width : "95%"}] h-[${
        height && height
      }]  bg-[] border border-[#1C5C2E] rounded-[25px] relative`}
      style={{ display, justifyContent: justify, alignItems: center }}
    >
      {absoluteDiv}
      {/* <div className='w-[120px] h-[50px] bg-[white]  rounded-[25px] absolute -top-6 left-3 flex justify-center items-center '>
                <p className='font-semibold '>{heading}</p>
            </div> */}

      {/* <p className="mt-5 font-semibold text-[14px] ml-5">{subHeading}</p> */}
      {subHeading}

      {line}
      {text}
      {line2}

      {/* <p className="mt-5 text-[#979B9F] text-[14px] ml-5">{description}</p> */}
      {/* <textarea
        type="text"
        value={description}
        className="mt-5 text-[#979B9F] text-[14px] ml-5 w-[90%] outline-none"
      /> */}
      {description}
      <div className="flex justify-between">
        <div className="md:flex justify-between m-5 mt-10 text-[#979B9F]">
          {button}
        </div>
        <div>{icon}</div>
      </div>
    </div>
  );
};

export default Box;
