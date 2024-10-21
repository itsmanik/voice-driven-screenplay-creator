import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../UI/Layout";
import VoiceCommand from "./VoiceCommand";
import Senti from "./SentimentAnalysis";
import ChatBot from "./Chatbot";
import axiosInstance from "../../axios";
import ScreenPlay from "./ScreenPlay";

const Breadcrumb = ({ currentSection, setCurrentSection, handleScreenPlay }) => {
  return (
    <nav
      className="flex items-center space-x-2 text-md justify-center"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <button
            onClick={() => {
              setCurrentSection(1);
              handleScreenPlay(); // Now you can trigger screenplay data fetching
            }}
            className={`${
              currentSection === 1
                ? "text-blue-200"
                : "text-purple hover:darkPurple"
            }`}
          >
            Screenplay
          </button>
        </li>
        <li>
          <div className="flex items-center">
            <span className="text-gray-500">/</span>
            <button
              onClick={() => setCurrentSection(2)}
              className={`ml-2 ${
                currentSection === 2
                  ? "text-blue-200"
                  : "text-purple hover:darkPurple"
              }`}
            >
              Voice Command
            </button>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <span className="text-gray-500">/</span>
            <button
              onClick={() => setCurrentSection(3)}
              className={`ml-2 ${
                currentSection === 3
                  ? "text-blue-200"
                  : "text-purple hover:darkPurple"
              }`}
            >
              Sentiment Analysis
            </button>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <span className="text-gray-500">/</span>
            <button
              onClick={() => setCurrentSection(4)}
              className={`ml-2 ${
                currentSection === 4
                  ? "text-blue-200"
                  : "text-purple hover:darkPurple"
              }`}
            >
              Chatbot
            </button>
          </div>
        </li>
      </ol>
    </nav>
  );
};

const Scene = (props) => {
  const [currentSection, setCurrentSection] = useState(1); // Track the active section
  const [screenPlayData, setScreenPlayData] = useState(""); // Moved screenPlayData state here
  const { sceneId } = useParams();

  // Function to fetch screenplay data
  const handleScreenPlay = async () => {
    try {
      const response = await axiosInstance.get(`/api/get_scene_formatted/scene/${sceneId}`);
      setScreenPlayData(response.data.formatted);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4 pt-8 bg-black">
      {/* Breadcrumb component */}
      <Breadcrumb
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        handleScreenPlay={handleScreenPlay} // Passing handleScreenPlay to Breadcrumb
      />

      <div className="">
        {/* Conditionally rendering each section based on the selected section */}
        {currentSection === 1 && (
          <section className="h-screen flex items-center justify-center">
            <ScreenPlay data={screenPlayData} /> {/* Pass screenplay data to ScreenPlay component */}
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
