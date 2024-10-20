import React, { useState, useEffect } from "react";
import axiosInstance from "../../axios"; // Ensure axiosInstance is set up correctly
import Card from "./Card";
import { Link } from "react-router-dom";
import NewMovieForm from "../Forms/NewMovieForm";

const Home = () => {
  const [cardData, setCardData] = useState([]);
  const [isOpenCreatePrompt, setIsOpenCreatePrompt] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [scene, setScene] = useState([]);

  const isOpenCreatePromptHandler = () => {
    setIsOpenCreatePrompt(!isOpenCreatePrompt);
  };

  useEffect(() => {
    // Fetch the stories from the API when the component mounts
    const fetchStories = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axiosInstance.get("/api/get_stories");
        const { scenes_data } = response.data;
        // Map the fetched data to the format required for cardData
        const formattedData = scenes_data.map((story) => ({
          title: story.title,
          shortDescription: story.description,
          imgSrc: story.image_link,
          date: `Created: ${new Date(story.created_at).toLocaleDateString()}`,
          id: story.id,
        }));
        setCardData(formattedData);
      } catch (error) {
        setError("Failed to load stories. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  const cardSubmitHandler = async (id, data) => {
    console.log("hi");
    try {
      const response = await axiosInstance.get(
        `/api/story/${id}/get_scenes`,
        data
      ); // Use template literals here
      console.log(response.data);
      setScene(response.data);
      console.log(scene);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {isOpenCreatePrompt && (
        <NewMovieForm onCancel={isOpenCreatePromptHandler} />
      )}
      <div className="bg-black pb-20">
        <div className="flex justify-center pt-12">
          <Link
            type="button"
            onClick={isOpenCreatePromptHandler}
            className="relative px-9 py-4 ml-4 text-xl overflow-hidden font-semibold rounded text-white hover:bg-darkPurple transition-all bg-purple"
          >
            Scene
            <span className="absolute top-0 text-black right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-white">
              New
            </span>
          </Link>
        </div>

        <div className="flex flex-wrap justify-center">
          {loading ? (
            <p className="text-white">Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            // Map over the cardData array to dynamically generate Card components
            cardData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                shortDescription={card.shortDescription}
                imgSrc={card.imgSrc}
                date={card.date}
                onClick={() => {
                  cardSubmitHandler(card.id);
                }} // Display date information as needed
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
