import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../UI/Layout";

const Scene = (props) => {
  const movie = useContext(UserContext);
  const { sceneName } = useParams();
  const array = [{ sceneName: "intro" }, { sceneName: "hi" }];
  const a = movie.scenes.find((scene) => {
    return scene.sceneName == sceneName;
  });
  console.log(a);
  return (
    <div className="screenplay-page">
      <div
        id="screenplay-content"
        className="screenplay-container"
        dangerouslySetInnerHTML={{ __html: a.screenPlay }}
      />
      {/* <button className="download-button" onClick={handleDownloadPDF}>
        Download PDF
      </button> */}
    </div>
  );
};

export default Scene;
