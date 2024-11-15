import React from 'react';
import '../css/common.css';
import '../css/home.css'
import hero_img from '../assets/hero_image.jpeg'

const Home = () => {
  return (
    <div className="home_page wrapper">
      <div className='hero-text'>
        <h1>LiteGPT 🤖</h1>
        <p>“Meet LiteGPT – an affordable, intelligent chatbot here to answer your questions, provide assistance, and keep conversations engaging, just like the pros!”</p>
      </div>
    </div>
  )
}

export default Home;
