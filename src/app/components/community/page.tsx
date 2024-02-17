import React, { useState, useEffect } from "react";

// Step 1: Define an interface to describe the shape of your story object
interface Story {
  url: string;
  title: string;
  urlToImage: string;
  description: string;
}

const Community: React.FC = () => {
  // Step 2: Adjust the initial state to match the Story interface
  const [story, setStory] = useState<Story>({ url: "", title: "", urlToImage: "", description: "" });

  useEffect(() => {
    // Retrieve the story object from localStorage
    const storedStory = localStorage.getItem("story");
    if (storedStory) {
      // Parse the string back into an object and assert the parsed object as type Story
      setStory(JSON.parse(storedStory) as Story);
      console.log(story)
    }else{
      console.log('none')
    }
  }, []);

  return (
    <div>
      {story ? (
        <div>
          <h2>{story.title}</h2>
          <img src={story.urlToImage} alt={story.title} style={{ width: '100px', height: '100px' }} />
          <p>{story.description}</p>
          <a href={story.url} target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
      ) : (
        <p>No story found</p>
      )}
    </div>
  );
};

export default Community;
