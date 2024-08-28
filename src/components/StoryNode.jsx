import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const story = {
  start: {
    text: "You find yourself in a dark forest. What do you do?",
    options: [
      { text: "Explore the forest", next: "explore" },
      { text: "Head back home", next: "home" }
    ],
  },
  explore: {
    text: "You encounter a wild creature. Do you fight or flee?",
    options: [
      { text: "Fight", next: "fight" },
      { text: "Flee", next: "flee" }
    ],
  },
  home: {
    text: "You decide to return home, but something feels off...",
    options: [
      { text: "Investigate", next: "explore" },
      { text: "Rest", next: "rest" }
    ],
  },
  // More nodes can be added here...
};

const StoryNode = () => {
  const { nodeId } = useParams();
  const navigate = useNavigate();
  const node = story[nodeId];

  const handleOptionSelect = (nextNode) => {
    navigate(`/story/${nextNode}`);
  };

  return (
    <div className="story-node">
      <p>{node.text}</p>
      <div>
        {node.options.map((option, index) => (
          <button key={index} onClick={() => handleOptionSelect(option.next)}>
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StoryNode;
