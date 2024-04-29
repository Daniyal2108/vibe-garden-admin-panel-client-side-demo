import React, { useState } from "react";
import { Button } from "../../../components";
import { FaCheck, FaEye } from "react-icons/fa";
import { FiImage } from "react-icons/fi";
import styles from "../index.module.css";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-overlays";
import { GiCancel } from "react-icons/gi";
import { useSelector } from "react-redux";
import apicall, { ImageUrl } from "../../../assets/api/axios";
import TextEditor from "../../../components/TextEditor";
import draftToHtml from "draftjs-to-html";
import { convertToRaw } from "draft-js";
import dummyImg from "../../../assets/images/profileImg.png";
import ErrorMessage from "../../../components/ErrorMessage";
// import io from "socket.io-client";

// const socket = io("http://localhost:3040");

const GeneratePushNotification = () => {
  const navigate = useNavigate();
  const adminImg = useSelector((state) => state?.user?.photo);
  const [notificationImage, setNotificationImage] = useState("");

  const [publishNowRadio, setPublishNowRadio] = useState({
    type: "",
    selectedFrequency: "",
  });
  const [scheduleRadio, setScheduleRadioRadio] = useState({
    type: "",
    selectedFrequency: "",
    date: "",
    time: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [textInput, setTextInput] = useState({
    title: "",
    description: "",
  });
  const [descriptionTags, setDescriptionTags] = useState();
  const [error, setError] = useState("");

  const handlePublishNowRadio = (e) => {
    const { name, value } = e.target;
    setScheduleRadioRadio({});
    setPublishNowRadio((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleScheduleRadio = (e) => {
    const { name, value } = e.target;
    setPublishNowRadio({});
    setScheduleRadioRadio((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTextInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const renderBackdrop = (props) => <div className="backdrop2" {...props} />;
  const modalStyle = {
    position: "fixed",
    zIndex: "1040",
    width: "30%",
    maxHeight: "28%",
    paddingBottom: "4px",
    top: "50%",
    left: "50%",
    marginTop: "-13%" /* Negative half of height. */,
    marginLeft: "-15%" /* Negative half of width. */,
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.5)",
    outline: "none",
    overflowY: "auto",
  };

  const modalHelper = (
    <Modal
      style={modalStyle}
      show={showModal}
      renderBackdrop={renderBackdrop}
      onHide={() => setShowModal(false)}
    >
      <div className="w-full">
        <GiCancel
          onClick={() => setShowModal(false)}
          className="float-right mt-2 mr-2 text-[#4D4D4D]"
        />
        <div className="flex w-full gap-x-3 px-2 break-words">
          <div>
            <img
              src={`${ImageUrl}${adminImg}`}
              className="rounded-full w-[50px] h-[50px]"
            />
          </div>
          <div className="w-[80%]">
            <p>{textInput.title ? textInput.title : "Title Here"}</p>
            {textInput.description ? (
              <div
                className="text-[#979B9F]"
                dangerouslySetInnerHTML={{ __html: descriptionTags }}
              ></div>
            ) : (
              <p className="text-[#979B9F]">
                Description here Description here Description here Description
                here Description here Description here Description here
                Description.
              </p>
            )}

            {notificationImage ? (
              <img
                src={URL.createObjectURL(notificationImage)}
                width={80}
                className="rounded-md mt-2"
              />
            ) : (
              <img src={dummyImg} width={80} className="rounded-md mt-2" />
            )}
          </div>
        </div>
      </div>
    </Modal>
  );

  const getEditorState = (data) => {
    setTextInput((prev) => ({
      ...prev,
      description: convertToRaw(data.getCurrentContent()).blocks[0].text,
    }));
    setDescriptionTags(draftToHtml(convertToRaw(data.getCurrentContent())));
  };

  const handleData = async () => {
    if (textInput.title && textInput.description && notificationImage) {
      const notification = {
        ...textInput,
        descriptionTags,
        senderPhoto: `${ImageUrl}${adminImg}`,
        notificationImage,
      };
      navigate("/userTypes", {
        state: { data: notification, notificationType: "push" },
      });
    } else {
      setError("Required fields are missing");
    }
  };

  return (
    <>
      {modalHelper}
      <div className="bg-[white] shadow-lg shadow-[#00000029]-500/50 w-[90%] h-[500px] rounded-[20px] px-5 m-10 overflow-y-auto mb-10">
        <h1 className="font-medium text-[#1C5C2E] text-[24px] my-5">
          Generate Push Notifications
        </h1>
        <div className="flex justify-between cursor-pointer">
          <div className="flex justify-around border-dashed border-2 border-[#1C5C2E] rounded-[20px]">
            <label
              htmlFor="notificationImage"
              className="relative cursor-pointer p-2"
            >
              <input
                type="file"
                id="notificationImage"
                style={{
                  background: "black",
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  left: 0,
                  opacity: 0,
                }}
                onChange={(e) => {
                  setNotificationImage(e.target.files[0]);
                }}
                accept="image/*"
              />
              <div
                className="w-[134] h-[120px] rounded-lg bg-[#E5ECE7]"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                {notificationImage ? (
                  <img
                    src={URL.createObjectURL(notificationImage)}
                    width={120}
                    className="h-[120px]"
                  />
                ) : (
                  <div className="flex flex-col justify-center items-center">
                    <div
                      className="w-[120px] h-[120px] "
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <FiImage color="#1C5C2E" size={40} />
                      <p className="text-[gray] text-[14px] text-center">Add</p>
                    </div>
                  </div>
                )}
              </div>
            </label>
          </div>

          <div className="flex items-center gap-10">
            <div
              className="inline-flex items-center gap-2 text-[#1C5C2E]"
              onClick={() => setShowModal(true)}
            >
              <FaEye />
              <p>See Preview</p>
            </div>
            <Button
              text="Send Notification"
              bgColor="#359D9E"
              color="white"
              width={200}
              borderRadius={10}
              handleClick={handleData}
            />
          </div>
        </div>

        <div className="my-5 w-full flex flex-col gap-y-5">
          <label htmlFor="title">
            <p>Title</p>
            <input
              type="text"
              value={textInput.title}
              placeholder="Write title here..."
              className="rounded-md bg-[#E5ECE7] w-[90%] h-[40px] focus:outline-none px-2"
              onChange={handleInputChange}
              name="title"
            />
          </label>
          <label htmlFor="description">
            <p>Description</p>
            {/* <textarea
              type="text"
              value={textInput.description}
              placeholder="Write description here..."
              className="rounded-md bg-[#E5ECE7] md:w-[32rem] w-[100vw] h-[100px] focus:outline-none px-2"
              onChange={handleInputChange}
              name="description"
            /> */}
            <TextEditor getEditorState={getEditorState} />
          </label>
        </div>

        <form className="mb-20 flex flex-col space-y-5">
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

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};

export default GeneratePushNotification;
