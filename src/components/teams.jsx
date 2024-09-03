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
  boxShadow: '0 4px 8px #faf089', // Pale yellow shadow
  marginBottom: '0.5rem',
  overflow: 'hidden',  // Ensures the image doesn't overflow the card
};

const teamImageStyle = {
  width: '100%',
  height: '70%',  // Adjusted height to fit the increased card height
  objectFit: 'cover',  // Ensures the image fills the entire card
  borderRadius: '8px 8px 0 0',  // Round only the top corners
};

const descriptionStyle = {
  textAlign: 'center',
  marginBottom: '1rem',
  color: '#000', // Black text color
  fontWeight: 'bold', // Bold text
  fontSize: '1.2rem', // Increased font size
};

const spanStyle = {
  display: 'block',
  marginBottom: '0.2rem', // Smaller gap between spans
};

const OurTeams = () => {
  return (
    <div>
      <h2 style={headingStyle}>Our Teams</h2>
      <div style={teamContainerStyle}>
        <div>
          <div style={teamCardStyle}>
            <img src="/images/pic1.png" alt="Team 1" style={teamImageStyle} />
          </div>
          <div style={descriptionStyle}>
            <span style={spanStyle}>DR. Harshal Shah</span>
            <span style={spanStyle}>Manager</span>
          </div>
        </div>
        <div>
          <div style={teamCardStyle}>
            <img src="/images/pic2.jpg" alt="Team 2" style={teamImageStyle} />
          </div>
          <div style={descriptionStyle}>
            <span style={spanStyle}>Mr. Bharat Tank</span>
            <span style={spanStyle}>Dy. Manager</span>
          </div>
        </div>
        <div>
          <div style={teamCardStyle}>
            <img src="/images/pic3.png" alt="Team 3" style={teamImageStyle} />
          </div>
          <div style={descriptionStyle}>
            <span style={spanStyle}>Dr. Umang Panchal</span>
          </div>
        </div>
      </div>
      {/* Additional set of three cards */}
      <div style={teamContainerStyle}>
        <div>
          <div style={teamCardStyle}>
            <img src="/images/pic4.jpg" alt="Team 4" style={teamImageStyle} />
          </div>
          <div style={descriptionStyle}>
            <span style={spanStyle}>Mr. Mohammad</span>
            <span style={spanStyle}>Ishrar Jiva</span>
          </div>
        </div>
        <div>
          <div style={teamCardStyle}>
            <img src="/images/pic5.png" alt="Team 5" style={teamImageStyle} />
          </div>
          <div style={descriptionStyle}>
            <span style={spanStyle}>Mr. Sheel Shah</span>
          </div>
        </div>
        <div>
          <div style={teamCardStyle}>
            <img src="/images/pic6.png" alt="Team 6" style={teamImageStyle} />
          </div>
          <div style={descriptionStyle}>
            <span style={spanStyle}>Mr. Viraj Soni</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeams;
