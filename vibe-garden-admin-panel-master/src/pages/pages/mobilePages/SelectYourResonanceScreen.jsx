import React, { useState } from "react";
import { Button } from "../../../components";
import BackButton from "../../../components/BackButton";
import Box from "../../../components/Box";
import MobileScreenHeader from "../../../components/MobileScreenHeader";
import Modal from "react-overlays/Modal";
import { useNavigate } from "react-router-dom";
import selectResonance from "./screenImages/selectResonance.png";
const SelectYourResonanceScreen = () => {
  const [showModal, setShowModal] = useState(false);
  var handleClose = () => setShowModal(false);

  const renderBackdrop = (props) => <div className="backdrop" {...props} />;
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/Pages");
  };
  return (
    <>
      <div onClick={handleBack}>
        <BackButton />
      </div>
      <MobileScreenHeader
        heading="Select Your Resonance Screen"
        horizontalLine={
          <div className="border-t border-[#1C5C2E]  w-[60%] mt-[15px] mx-4"></div>
        }
        btn={
          <div onClick={() => setShowModal(true)}>
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
        <div className="m-10">
          <Box
            heading="Descriptive Text"
            absoluteDiv={
              <div className="w-[140px] h-[50px] bg-[white]  rounded-[25px] absolute -top-6 left-3 flex justify-center items-center ">
                <p className="font-semibold ">Descriptive Text</p>
              </div>
            }
            description="Sample Text..."
          />
        </div>
        <div>
          <h1 className="text-[#1C5C2E] text-[24px]">Preview:</h1>
          <div className="w-[300px] h-[550px] flex flex-col  rounded-[40px] mt-10">
            <img
              src={selectResonance}
              alt="mobileImg"
              className="rounded-[40px] relative"
              width={"100%"}
              height={"100%"}
            />
          </div>
        </div>
      </div>

      <Modal
        className="modal"
        show={showModal}
        onHide={handleClose}
        renderBackdrop={renderBackdrop}
      >
        <div className="flex flex-col justify-center items-center px-4 py-4 space-y-10">
          <p className="text-[#1C5C2E]">Application Update Successfully!</p>
          <div onClick={handleClose}>
            {" "}
            <Button
              text="Close"
              bgColor="#1C5C2E"
              color="#fff"
              borderRadius={5}
              width={100}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SelectYourResonanceScreen;
