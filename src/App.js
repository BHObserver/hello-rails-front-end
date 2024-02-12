import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes

// Import your components here
import Greeting from './Greeting';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
