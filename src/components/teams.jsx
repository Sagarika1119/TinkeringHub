import React from 'react';

const headingStyle = {
  fontSize: '2.8rem',
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: '8rem',
};

const teamContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '1rem',
  flexWrap: 'wrap',
};

const teamCardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  width: '200px',
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  marginBottom: '1rem',
  overflow: 'hidden',  // Ensures the image doesn't overflow the card
};

const teamImageStyle = {
  width: '100%',
  height: '100%',  // Makes the image cover the entire card height
  objectFit: 'cover',  // Ensures the image fills the entire card
  borderRadius: '8px 8px 0 0',  // Round only the top corners
};

const OurTeams = () => {
  return (
    <div>
      <h2 style={headingStyle}>Our Teams</h2>
      <div style={teamContainerStyle}>
        <div style={teamCardStyle}>
          <img src="/images/pic1.png" alt="Team 1" style={teamImageStyle} />
        </div>
        <div style={teamCardStyle}>
          <img src="/images/pic2.jpg" alt="Team 2" style={teamImageStyle} />
        </div>
        <div style={teamCardStyle}>
          <img src="/images/pic3.png" alt="Team 3" style={teamImageStyle} />
        </div>
      </div>
      {/* Additional set of three cards */}
      <div style={teamContainerStyle}>
        <div style={teamCardStyle}>
          <img src="/images/pic4.jpg" alt="Team 4" style={teamImageStyle} />
        </div>
        <div style={teamCardStyle}>
          <img src="/images/pic5.png" alt="Team 5" style={teamImageStyle} />
        </div>
        <div style={teamCardStyle}>
          <img src="/images/pic6.png" alt="Team 6" style={teamImageStyle} />
        </div>
      </div>
    </div>
  );
};

export default OurTeams;
