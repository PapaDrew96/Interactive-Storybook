import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import StoryNode from './components/StoryNode';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story/:nodeId" element={<StoryNode />} />
      </Routes>
    </div>
  );
}

export default App;
