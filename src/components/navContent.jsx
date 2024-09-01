'use client';

import React, { useState } from 'react';
import Image from 'next/image'; // Adjust if using Next.js image optimization

// Styles for the navigation links
const navLinksContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '3rem', // Adjust space above links
};

const navLinkStyle = {
  margin: '0 1rem', // Space between links
  fontSize: '1rem',
  color: 'darkgrey', // Default color
  cursor: 'pointer',
  transition: 'color 0.3s', // Smooth color transition on hover
};

const activeLinkStyle = {
  color: 'black', // Active link color
};

// Styles for the additional content section
const additionalContentStyle = {
  display: 'flex',
  alignItems: 'flex-start', // Align text to the top of the section
  justifyContent: 'space-between',
  marginTop: '3rem', // Adjust space above the section
};

const additionalTextStyle = {
  flex: '1',
  marginLeft: '2rem', // Add left margin here
};

const boldTextStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '0.5rem',
};

const imageWrapperStyle = {
  flex: '1',
  display: 'flex',
  justifyContent: 'center',
};

// Component for "Tech Support & Internship" section
const TechSupportInternshipSection = () => (
  <div style={additionalContentStyle}>
    <div style={additionalTextStyle}>
      <div>
        <p style={boldTextStyle}>Tech Support &</p>
        <p style={boldTextStyle}>Internship</p>
      </div>
      <h3>
        We offer specialized tech support and internship programs for startups, providing expert guidance and remote assistance. 
        Our internships connect aspiring tech professionals with startups, offering hands-on experience and mentorship. 
        This collaboration helps startups grow while giving interns valuable industry insights and skills.
      </h3>
    </div>
    <div style={imageWrapperStyle}>
      <Image
        src="/images/tech-support.jpg" // Update with actual path to the image
        alt="Tech Support & Internship Image"
        width={400} // Adjust width as needed
        height={300} // Adjust height as needed
      />
    </div>
  </div>
);

// Component for "Microsoft Certification Courses" section
const MicrosoftCertificationSection = () => (
  <div style={additionalContentStyle}>
    <div style={additionalTextStyle}>
      <div>
        <p style={boldTextStyle}>Microsoft Certification</p>
        <p style={boldTextStyle}>Courses</p>
      </div>
      <h3>
        Connect, collaborate, and innovate with like-minded individuals in our dynamic Tinkering Hub Communities. 
        Share ideas, solve challenges, and advance your skills in a supportive network.
      </h3>
    </div>
    <div style={imageWrapperStyle}>
      <Image
        src="/images/certification.png" // Update with actual path to the image
        alt="Microsoft Certification Courses Image"
        width={400} // Adjust width as needed
        height={300} // Adjust height as needed
      />
    </div>
  </div>
);

// Component for "Benefits to Students" section
const BenefitsToStudentsSection = () => (
  <div style={additionalContentStyle}>
    <div style={additionalTextStyle}>
      <div>
        <p style={boldTextStyle}>Design System for easy</p>
        <p style={boldTextStyle}>community access</p>
      </div>
      <h3>
        Connect, collaborate, and innovate with like-minded individuals in our dynamic Tinkering Hub Communities. 
        Share ideas, solve challenges, and advance your skills in a supportive network.
      </h3>
    </div>
    <div style={imageWrapperStyle}>
      <Image
        src="/images/benefits.png" // Update with actual path to the image
        alt="Benefits to Students Image"
        width={400} // Adjust width as needed
        height={300} // Adjust height as needed
      />
    </div>
  </div>
);

const NavAndContentSection = () => {
  const [activeSection, setActiveSection] = useState('tinkering');

  return (
    <>
      {/* Navigation Links */}
      <nav style={navLinksContainerStyle}>
        <a 
          href="#tinkering" 
          style={{ ...navLinkStyle, ...(activeSection === 'tinkering' ? activeLinkStyle : {}) }}
          onClick={() => setActiveSection('tinkering')}
        >
          Tinkering Hub Communities
        </a>
        <a 
          href="#tech-support" 
          style={{ ...navLinkStyle, ...(activeSection === 'tech-support' ? activeLinkStyle : {}) }}
          onClick={() => setActiveSection('tech-support')}
        >
          Tech Support & Internship
        </a>
        <a 
          href="#certification" 
          style={{ ...navLinkStyle, ...(activeSection === 'certification' ? activeLinkStyle : {}) }}
          onClick={() => setActiveSection('certification')}
        >
          Microsoft Certification Courses
        </a>
        <a 
          href="#benefits" 
          style={{ ...navLinkStyle, ...(activeSection === 'benefits' ? activeLinkStyle : {}) }}
          onClick={() => setActiveSection('benefits')}
        >
          Benefits to Students
        </a>
      </nav>

      {/* Content Sections */}
      {activeSection === 'tinkering' && (
        <div style={additionalContentStyle}>
          <div style={additionalTextStyle}>
            <div>
              <p style={boldTextStyle}>Tinkering Hub</p>
              <p style={boldTextStyle}>Communities</p>
            </div>
            <h3>
              Connect, collaborate, and innovate with like-minded individuals in our dynamic Tinkering Hub Communities. 
              Share ideas, solve challenges, and advance your skills in a supportive network.
            </h3>
          </div>
          <div style={imageWrapperStyle}>
            <Image
              src="/images/Community.png" // Update with actual path to the image
              alt="Tinkering Hub Image"
              width={400} // Adjust width as needed
              height={300} // Adjust height as needed
            />
          </div>
        </div>
      )}

      {activeSection === 'tech-support' && <TechSupportInternshipSection />}
      {activeSection === 'certification' && <MicrosoftCertificationSection />}
      {activeSection === 'benefits' && <BenefitsToStudentsSection />}
    </>
  );
};

export default NavAndContentSection;
