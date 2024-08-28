import React from 'react';

const StoryNode = ({ text, options, onSelectOption }) => {
  return (
    <div>
      <p>{text}</p>
      <div>
        {options.map((option, index) => (
          <button key={index} onClick={() => onSelectOption(option.next)}>
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StoryNode;
