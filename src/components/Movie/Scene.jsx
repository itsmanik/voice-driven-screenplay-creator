import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../UI/Layout";
import VoiceCommand from "./VoiceCommand";
import Senti from "./SentimentAnalysis";
import ChatBot from "./Chatbot";
import axiosInstance from "../../axios";
import ScreenPlay from "./ScreenPlay";
import Breadcrumb from "./Breadcrumb";

const Scene = (props) => {
  const [currentSection, setCurrentSection] = useState(1); // Track the active section
  const { sceneName } = useParams();
  const [screenPlay, setScreenPlay] = useState("");

  // Function to handle data submission
  const submitHandler = (data) => {
    setScreenPlay(data);
  };

  return (
    <div className="p-4 pt-8 bg-black">
      {/* Breadcrumb component */}
      <Breadcrumb
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        onSubmit={submitHandler} // Pass the submitHandler to Breadcrumb
      />

      <div className="">
        {/* Conditionally rendering each section based on the selected section */}
        {currentSection === 1 && (
          <section className="h-screen flex items-center justify-center">
            {/* ScreenPlay component */}
            <ScreenPlay data={screenPlay} /> {/* You don't need onSubmit here */}
          </section>
        )}
        {currentSection === 2 && (
          <section className="h-screen flex items-center justify-center">
            <VoiceCommand />
          </section>
        )}
        {currentSection === 3 && (
          <section className="h-screen flex items-center justify-center">
            <Senti />
          </section>
        )}
        {currentSection === 4 && (
          <section className="h-screen flex items-center justify-center">
            <ChatBot />
          </section>
        )}
      </div>
    </div>
  );
};

export default Scene;
