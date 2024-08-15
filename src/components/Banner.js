import React from 'react';
import './Banner.css';
import bannerVideo from '../assets/Videos/Banner-video.mp4'; // Import the video file

const Banner = () => {
  return (
    <section className="banner">
      <video className="banner-video" src={bannerVideo} autoPlay loop muted />
      <div className="banner-overlay">
        <h2>Proud to be an Indian</h2>
      </div>
    </section>
  );
};

export default Banner;
