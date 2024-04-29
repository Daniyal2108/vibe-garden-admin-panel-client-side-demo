import React, { useState } from "react";
import { Button } from "../../components";
import Modal from "react-overlays/Modal";
import { FaCheck } from "react-icons/fa6";
import apicall from "../../assets/api/axios";
import { useLocation } from "react-router-dom";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import io from "socket.io-client";

// const socket = io("http://localhost:3040");
const socket = io("https://vibegarden-f0a09815bc35.herokuapp.com/");

const UserTypes = () => {
  const { state } = useLocation();

  const [showModal, setShowModal] = useState(false);
  const [selectedUserTypes, setSelectedUserTypes] = useState({
    subscribers: "",
    nonsubscribers: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleUserTypes = (e) => {
    let value = e?.target?.value;
    const id = e?.target?.id;
    if (id?.startsWith("subscribers")) {
      if (value === selectedUserTypes?.subscribers) {
        setSelectedUserTypes({
          ...selectedUserTypes,
          subscribers: "",
        });
      } else {
        setSelectedUserTypes({
          ...selectedUserTypes,
          subscribers: value,
        });
      }
    } else {
      if (value === selectedUserTypes?.nonsubscribers) {
        setSelectedUserTypes({
          ...selectedUserTypes,
          nonsubscribers: "",
        });
      } else {
        setSelectedUserTypes({
          ...selectedUserTypes,
          nonsubscribers: value,
        });
      }
    }
  };

  const renderBackdrop = (props) => <div className="backdrop2" {...props} />;
  const modalStyle = {
    position: "fixed",
    zIndex: "1040",
    width: "22%",
    height: "30%",
    top: "50%",
    left: "50%",
    marginTop: "-15%" /* Negative half of height. */,
    marginLeft: "-11%" /* Negative half of width. */,
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.5)",
    outline: "none",
  };

  const modalHelper = (
    <Modal
      style={modalStyle}
      show={showModal}
      renderBackdrop={renderBackdrop}
      onHide={() => setShowModal(false)}
    >
      <div className="flex flex-col justify-center items-center h-[100%] gap-3">
        <FaCheck
          size={40}
          style={{
            background: "linear-gradient(180deg, #205F2E 0%, #7AB03A 100%)",
          }}
          className="rounded-3xl p-2 text-white"
        />
        <p>Sent Successfully</p>
        <Button
          text="Done"
          bgColor="#359D9E"
          color="white"
          width={100}
          height={44}
          borderRadius={10}
          handleClick={() => setShowModal(false)}
        />
      </div>
    </Modal>
  );

  const sendEmail = async () => {
    if (selectedUserTypes?.subscribers || selectedUserTypes?.nonsubscribers) {
      setLoading(true);
      try {
        const formData = new FormData();
        const obj = {
          ...state?.data,
          userTypes: JSON.stringify(selectedUserTypes),
        };

        for (var key in obj) {
          formData.append(key, obj[key]);
        }
        const response = await apicall.post("/users/send-email", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setLoading(false);
        setShowModal(true);
        setError("");
      } catch (error) {
        setLoading(false);
        if (error.message === "Network Error") return setError("Network Error");
        setError(error?.response?.data?.message);
      }
    } else {
      setError("Please Select An Option");
    }
  };

  const sendPushNotification = async () => {
    if (selectedUserTypes?.subscribers || selectedUserTypes?.nonsubscribers) {
      const notification = {
        notificationData: state?.data,
        targetUserType: selectedUserTypes,
      };
      // socket.on("connect", () => {
      //   console.log("Connected to server");
      //   // Join the 'web' room when the component mounts
      //   socket.emit("joinRoom", "web");
      // });
      socket.emit("sendNotification", notification);
      setShowModal(true);
      setError("");
    } else {
      setError("Please Select An Option");
    }
  };
  return (
    <>
      {modalHelper}
      <div className="m-10 flex w-[90%] shadow-lg rounded-xl">
        <div className="w-[50%] flex flex-col gap-y-2 p-5">
          <h2 className="text-[#1c5c2e] text-[24px] mt-2 capitalize mb-1">
            Subscribers
          </h2>
          <div>
            <input
              type="radio"
              id="subscribers/mobileUsers"
              name="subscribers"
              className="mr-2 accent-[#1C5C2E]"
              value={"Mobile Users Only"}
              onClick={handleUserTypes}
              checked={selectedUserTypes?.subscribers === "Mobile Users Only"}
            />
            <label htmlFor="subscribers/mobileUsers">
              Mobile Users Only (12K)
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="subscribers/websiteUsers"
              name="subscribers"
              className="mr-2 accent-[#1C5C2E]"
              value={"Website Users Only"}
              onClick={handleUserTypes}
              checked={selectedUserTypes?.subscribers === "Website Users Only"}
            />
            <label htmlFor="subscribers/websiteUsers">
              Website Users Only (18K)
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="subscribers/bothMobile&WebsiteUsers"
              name="subscribers"
              className="mr-2 accent-[#1C5C2E]"
              value={"Both Mobile & Website Users"}
              onClick={handleUserTypes}
              checked={
                selectedUserTypes?.subscribers === "Both Mobile & Website Users"
              }
            />
            <label htmlFor="subscribers/bothMobile&WebsiteUsers">
              Both Mobile & Website Users (30K)
            </label>
          </div>

          <Button
            text={loading ? <Loader /> : "Send Notification"}
            bgColor="#359D9E"
            color="white"
            width={200}
            borderRadius={10}
            margin={"15px 0px 15px 0px"}
            handleClick={
              state?.notificationType === "push"
                ? sendPushNotification
                : sendEmail
            }
          />
        </div>

        <div className="w-[50%] flex flex-col gap-y-2 rounded-md bg-[#EDF2EF] p-5">
          <h2 className="text-[#1c5c2e] text-[24px] mt-2 capitalize mb-1">
            Non-Subscribers
          </h2>

          <div>
            <input
              type="radio"
              id="nonsubscribers/mobileUsers"
              name="nonsubscribers"
              className="mr-2 accent-[#1C5C2E]"
              value={"Mobile Users Only"}
              onClick={handleUserTypes}
              checked={
                selectedUserTypes?.nonsubscribers === "Mobile Users Only"
              }
            />
            <label htmlFor="nonsubscribers/mobileUsers">
              Mobile Users Only (12K)
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="nonsubscribers/websiteUsers"
              name="nonsubscribers"
              className="mr-2 accent-[#1C5C2E]"
              value={"Website Users Only"}
              onClick={handleUserTypes}
              checked={
                selectedUserTypes?.nonsubscribers === "Website Users Only"
              }
            />
            <label htmlFor="nonsubscribers/websiteUsers">
              Website Users Only (18K)
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="nonsubscribers/bothMobile&WebsiteUsers"
              name="nonsubscribers"
              className="mr-2 accent-[#1C5C2E]"
              value={"Both Mobile & Website Users"}
              onClick={handleUserTypes}
              checked={
                selectedUserTypes?.nonsubscribers ===
                "Both Mobile & Website Users"
              }
            />
            <label htmlFor="nonsubscribers/bothMobile&WebsiteUsers">
              Both Mobile & Website Users (30K)
            </label>
          </div>

          {/* <div>
            <input
              type="radio"
              id="nonsubscribers/mobileLogin"
              //   name=""
              className="mr-2 accent-[#1C5C2E]"
              value={"Mobile Login"}
              onClick={handleUserTypes}
              checked={selectedUserTypes.includes("Mobile Login")}
            />
            <label htmlFor="nonsubscribers/mobileLogin">
              Mobile Login (5K)
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="nonsubscribers/websiteLogin"
              //   name=""
              className="mr-2 accent-[#1C5C2E]"
              value={"Website Login"}
              onClick={handleUserTypes}
              checked={selectedUserTypes.includes("Website Login")}
            />
            <label htmlFor="nonsubscribers/websiteLogin">
              Website Login (12K)
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="nonsubscribers/communityGardenList"
              //   name=""
              className="mr-2 accent-[#1C5C2E]"
              value={"Community Garden List"}
              onClick={handleUserTypes}
              checked={selectedUserTypes.includes("Community Garden List")}
            />
            <label htmlFor="nonsubscribers/communityGardenList">
              Community Garden List (3K)
            </label>
          </div>

          <div>
            <input
              type="radio"
              id="nonsubscribers/generalNotification"
              //   name=""
              className="mr-2 accent-[#1C5C2E]"
              value={"General Notification"}
              onClick={handleUserTypes}
              checked={selectedUserTypes.includes("General Notification")}
            />
            <label htmlFor="nonsubscribers/generalNotification">
              General Notification
            </label>
          </div> */}
        </div>
      </div>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};

export default UserTypes;
