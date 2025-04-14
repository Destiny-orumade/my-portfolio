
import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';


const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <Skills />
   
    </div>
  );
};

export default App;
