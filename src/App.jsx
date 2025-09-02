import { Routes, Route } from "react-router-dom";
import React from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import News from "./pages/News.jsx";
import SearchResults from "./pages/SearchResults.jsx";
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/category/:name" element={<News />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
