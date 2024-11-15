import React from 'react';
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import ChatBot from './components/ChatBot.jsx'
import { Routes, Route } from'react-router-dom'
function App() {

  return (
    <div>
      <Navbar></Navbar>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/navbar" element={<Navbar />} />
      <Route path="/chat-bot" element={<ChatBot />} />
      </Routes>
    </div>
  )
}

export default App
