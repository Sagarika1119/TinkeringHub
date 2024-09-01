import React from 'react';
import Image from 'next/image'; // Adjust if using Next.js image optimization

const heroStyle = {
  textAlign: 'center',
  margin: '2rem auto',
  maxWidth: '1200px', // Optional: set max-width for better control
};

const headingStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
};

const paragraphStyle = {
  fontSize: '1rem', // Reduced font size
  lineHeight: '1.4', // Adjust line height if needed
  marginBottom: '1.5rem', // Space below the paragraph
  maxWidth: '800px', // Reduce the width of the text
  margin: '0 auto', // Space below the paragraph
};

const sectionStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '2rem',
  position: 'relative',
  gap: '2rem',
  paddingBottom: '2rem', // Ensure consistent spacing between text and image
};

const textSectionStyle = {
  flex: '1',
  // textAlign: 'left',
};

const imageSectionStyle = {
  flex: '1',
  display: 'flex',
  justifyContent: 'center', // Center the image within its container
};

const subheadingStyle = {
  fontSize: '2rem',
  fontWeight: 'bold', // Make the subheading bold
};

// Styles for the navigation links
// const navLinksContainerStyle = {
//   display: 'flex',
//   justifyContent: 'center',
//   marginTop: '3rem', // Adjust space above links
// };

// const navLinkStyle = {
//   margin: '0 1rem', // Space between links
//   fontSize: '1rem',
//   color: 'darkgrey', // Default color
//   cursor: 'pointer',
//   transition: 'color 0.3s', // Smooth color transition on hover
// };

// const activeLinkStyle = {
//   color: 'black', // Active link color
// };

// // Styles for the additional content section
// const additionalContentStyle = {
//   display: 'flex',
//   alignItems: 'flex-start', // Align text to the top of the section
//   justifyContent: 'space-between',
//   marginTop: '3rem', // Adjust space above the section
// };

// const additionalTextStyle = {
//   flex: '1',
//   marginLeft: '2rem', // Add left margin here
// };

// const boldTextStyle = {
//   fontSize: '2rem',
//   fontWeight: 'bold',
//   marginBottom: '0.5rem',
// };

// const imageWrapperStyle = {
//   flex: '1',
//   display: 'flex',
//   justifyContent: 'center',
// };

const HeroSection = () => {
  return (
    <>
      <section style={heroStyle}>
        <h1 style={headingStyle}>Tinkering Process</h1>
        <p style={paragraphStyle}>
          Your compass to innovation and design excellence. From exploration to execution, this dynamic framework fuels creativity and precision, ensuring your product journey aligns seamlessly with user desires.
        </p>

        {/* Sensitizing Section */}
        <div style={sectionStyle}>
          <div style={textSectionStyle}>
            <h2 style={subheadingStyle}>Sensitizing</h2>
            <h3>Promotion of Concept to Every Stakeholder</h3>
          </div>
          <div style={imageSectionStyle}>
            <Image
              src="/images/img1.jpg" // Update with actual path to vector image
              alt="Vector Image"
              width={250} // Adjust width as needed
              height={250} // Adjust height as needed
            />
          </div>
        </div>

        {/* Training Section */}
        <div style={sectionStyle}>
          <div style={imageSectionStyle}>
            <Image
              src="/images/img2.jpg" // Update with actual path to the new image
              alt="Training Image"
              width={250} // Adjust width as needed
              height={250} // Adjust height as needed
            />
          </div>
          <div style={textSectionStyle}>
            <h2 style={subheadingStyle}>Training</h2>
            <h3>Student from Beginning to Advance Level</h3>
          </div>
        </div>

        {/* Interning Section */}
        <div style={sectionStyle}>
          <div style={textSectionStyle}>
            <h2 style={subheadingStyle}>Interning</h2>
            <h3>Engaging in Various Live Projects / Real-World Problems</h3>
          </div>
          <div style={imageSectionStyle}>
            <Image
              src="/images/img3.jpg" // Update with actual path to the intern image
              alt="Interning Image"
              width={250} // Adjust width as needed
              height={250} // Adjust height as needed
            />
          </div>
        </div>

        {/* Testing Section */}
        <div style={sectionStyle}>
          <div style={imageSectionStyle}>
            <Image
              src="/images/img4.jpg" // Update with actual path to the testing image
              alt="Testing Image"
              width={250} // Adjust width as needed
              height={250} // Adjust height as needed
            />
          </div>
          <div style={textSectionStyle}>
            <h2 style={subheadingStyle}>Testing</h2>
            <h3>Appearing for Professional Certifications (Microsoft / Google / IBM)</h3>
          </div>
        </div>

        {/* Challenging Section */}
        <div style={sectionStyle}>
          <div style={textSectionStyle}>
            <h2 style={subheadingStyle}>Challenging</h2>
            <h3>Work on Cutting Edge Technologies, Research, Startups & Innovation</h3>
          </div>
          <div style={imageSectionStyle}>
            <Image
              src="/images/img5.jpg" // Update with actual path to the challenging image
              alt="Challenging Image"
              width={250} // Adjust width as needed
              height={250} // Adjust height as needed
            />
          </div>
        </div>
      </section>

      {/* Navigation Links
      <nav style={navLinksContainerStyle}>
        <a href="#tinkering" style={{ ...navLinkStyle, ...activeLinkStyle }}>Tinkering Hub Communities</a>
        <a href="#tech-support" style={navLinkStyle}>Tech Support & Internship</a>
        <a href="#certification" style={navLinkStyle}>Microsoft Certification Courses</a>
        <a href="#benefits" style={navLinkStyle}>Benefits to Students</a>
      </nav> */}

      {/* Additional Content */}
      {/* <div style={additionalContentStyle}>
        <div style={additionalTextStyle}>
          <div>
            <p style={boldTextStyle}>Tinkering Hub</p>
            <p style={boldTextStyle}>Communities</p>
          </div>
          <h3>Connect, collaborate, and innovate with like-minded individuals in our dynamic Tinkering Hub Communities. Share ideas, solve challenges, and advance your skills in a supportive network.</h3>
        </div> */}
        {/* <div style={imageWrapperStyle}>
          <Image
            src="/images/Community.png" // Update with actual path to the image
            alt="Tinkering Hub Image"
            width={400} // Adjust width as needed
            height={300} // Adjust height as needed
          />
        </div> */}
      {/* </div> */}
    </>
  );
};

export default HeroSection;
