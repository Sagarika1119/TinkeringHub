'use client'
import React, { useState, useEffect } from 'react';

const containerStyle = {
  marginTop: '3rem',
  textAlign: 'center',
};

const headingStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginTop: '0.2rem',
};

const cardContainerStyle = (isMobile) => ({
  display: isMobile ? 'none' : 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)', // 4 cards per row
  gap: '1rem', // Gap between cards
  marginTop: '2rem',
  justifyItems: 'center', // Center align cards horizontally
});

const carouselStyle = (isMobile) => ({
  display: isMobile ? 'block' : 'none', // Show carousel for mobile screens
});

const cardStyle = {
  position: 'relative',
  width: '200px',
  height: '250px',
  borderRadius: '8px',
  overflow: 'hidden',
  marginBottom: '1rem',
  // boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '10px',
  opacity: '1', // Adjust the image opacity here (1 is fully opaque)
};

const overlayStyle = {
  position: 'absolute',
  inset: '0',
  // background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent)', // Reduced the overlay opacity
  borderRadius: '8px',
};

const contentStyle = {
  position: 'absolute',
  bottom: '1rem',
  left: '1rem',
  color: 'white',
  textAlign: 'left',
};

const titleStyle = {
  fontSize: '1.25rem',
  fontWeight: '600',
};

const cardTitles = [
  "Track 1:APP-O-THON",
  "Track 2:DESIGN-O-THON",
  "Track 3:DRONE-O-THON",
  "Track 4:ROB-O-THON",
  "Track 5:SMART-O-THON",
  "Track 6:AR/VR-THON",
  "Track 7:EV-THON",
  "Track 8:GAME-O-THON",
];

const Tracks = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Vadodara Hackathon 3.0</h2>
      <h2 style={headingStyle}>Tracks In Vadodara</h2>
      <h2 style={headingStyle}>Hackathon 3.0</h2>

      <div style={cardContainerStyle(isMobile)}>
        {cardTitles.map((title, index) => (
          <div key={index} style={cardStyle}>
            <img
              src={`/images/track${index + 1}.jpg`}
              alt={`Card ${index + 1}`}
              style={imageStyle}
            />
            <div style={overlayStyle}></div>
            <div style={contentStyle}>
              <h3 style={titleStyle}>{title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div style={carouselStyle(isMobile)} className="carousel">
        {cardTitles.map((title, index) => (
          <div key={index} className="carousel-item w-full">
            <img
              src={`/images/track${index + 1}.jpg`}
              alt={`Card ${index + 1}`}
              style={imageStyle}
            />
            <div style={overlayStyle}></div>
            <div style={contentStyle}>
              <h3 style={titleStyle}>{title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tracks;
