import React from 'react';

const headingStyle = {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: '0.2rem',
};

const containerStyle = {
  marginTop: '3rem',
  textAlign: 'center',
};

const cardContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '2rem',
  flexWrap: 'wrap',
};

const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  width: '200px',
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  marginBottom: '1rem',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
};

const cardTextStyle = {
  marginTop: '0.5rem',
  fontWeight: 'bold',
};

// Sample titles for each card
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
  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Vadodara Hackathon 3.0</h2>
      <h2 style={headingStyle}>Tracks In Vadodara</h2>
      <h2 style={headingStyle}>Hackathon 3.0</h2>
      
      {/* Card Container */}
      <div style={cardContainerStyle}>
        {cardTitles.slice(0, 4).map((title, index) => (
          <div key={index} style={cardStyle}>
            <img src={`/images/track${index + 1}.jpg`} alt={`Card ${index + 1}`} style={imageStyle} />
            <div style={cardTextStyle}>{title}</div>
          </div>
        ))}
      </div>
      <div style={cardContainerStyle}>
        {cardTitles.slice(4).map((title, index) => (
          <div key={index + 4} style={cardStyle}>
            <img src={`/images/track${index + 5}.jpg`} alt={`Card ${index + 5}`} style={imageStyle} />
            <div style={cardTextStyle}>{title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tracks;
