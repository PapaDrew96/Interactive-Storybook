import React, { useState } from 'react';
import StoryNode from './components/StoryNode';

const story = {
  start: {
    text: "You find yourself in a dark forest. What do you do?",
    options: [
      { text: "Explore the forest", next: "explore" },
      { text: "Head back home", next: "home" }
    ]
  },
  explore: {
    text: "You encounter a wild creature. Do you fight or flee?",
    options: [
      { text: "Fight", next: "fight" },
      { text: "Flee", next: "flee" }
    ]
  },
  home: {
    text: "You decide to return home, but something feels off...",
    options: [
      { text: "Investigate", next: "explore" },
      { text: "Rest", next: "rest" }
    ]
  },
  // More nodes can be added here...
};

function App() {
  const [currentNode, setCurrentNode] = useState('start');

  const handleOptionSelect = (nextNode) => {
    setCurrentNode(nextNode);
  };

  return (
    <div>
      <StoryNode
        text={story[currentNode].text}
        options={story[currentNode].options}
        onSelectOption={handleOptionSelect}
      />
    </div>
  );
}

export default App;
