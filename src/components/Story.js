import React, { useState, useEffect, memo } from "react";
import { getStory } from "../services/index";
import { mapTime } from "../utils/mapTime";

const Story = memo(function Story({ storyId, index }) {
  const [story, setStory] = useState({});

  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
  }, []);

  return story && story.url ? (
    <div className="story">
      <div className="story__num">{index + 1}</div>
      <div>
        <a className="story__title" href={story.url}>
          {story.title}
        </a>
        <div>
          <span className="story__author">
            by <b>{story.by}</b>
          </span>
          <span className="story__time">{mapTime(story.time)} ago</span>
        </div>
      </div>
    </div>
  ) : null;
});

export default Story;
