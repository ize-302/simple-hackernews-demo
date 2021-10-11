import React from "react";
import { getStoryIds } from "../services/index";
import Story from "./Story";

const Stories = () => {
  const [count, setcount] = React.useState(20);
  const [storyIds, setStoryIds] = React.useState([]);

  React.useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
  }, []);

  return (
    <>
      <div className="stories">
        {storyIds.slice(0, count).map((storyId, index) => (
          <Story key={storyId} index={index} storyId={storyId} />
        ))}
        <div className="button__wrapper">
          <button onClick={() => setcount(count + 10)}>More stories</button>
        </div>
      </div>
    </>
  );
};

export default Stories;
