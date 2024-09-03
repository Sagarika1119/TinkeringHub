'use client'
import React from 'react';
import Image from 'next/image';
import { CardThree } from './CardThree';

const heroStyle = {
  textAlign: 'center',
  margin: '2rem auto',
  maxWidth: '1200px',
};

const headingStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
};

const paragraphStyle = {
  fontSize: '1rem',
  lineHeight: '1.4',
  marginBottom: '1.5rem',
  maxWidth: '800px',
  margin: '0 auto',
};

const sectionStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '2rem',
  gap: '2rem',
  paddingBottom: '2rem',
};

const textSectionStyle = {
  flex: '1',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginLeft: '7rem',
  color: '#333333',
};

const spanStyle = {
  display: 'block',
  width: '100%',
  textAlign: 'left',
  marginBottom: '0.5rem',
  fontSize: '1.3rem',
  color: '#333333',
};

const imageSectionStyle = {
  flex: '1',
  display: 'flex',
  justifyContent: 'center',
};

const subheadingStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
};

const HeroSection = () => {
  return (
    <>
      <section style={heroStyle} className="desktop-section">
        <h1 style={headingStyle}>Tinkering Process</h1>
        <p style={paragraphStyle}>
          Your compass to innovation and design excellence. From exploration to execution, this dynamic framework fuels creativity and precision, ensuring your product journey aligns seamlessly with user desires.
        </p>

        {/* Sensitizing Section */}
        <div style={sectionStyle}>
          <div style={textSectionStyle}>
            <h2 style={subheadingStyle}>Sensitizing</h2>
            <h3 style={{ margin: 0 }}>
              <span style={spanStyle}>Promotion of Concept to Every</span>
              <span style={spanStyle}>Stakeholder</span>
            </h3>
          </div>
          <div style={imageSectionStyle}>
            <Image
              src="/images/img1.png"
              alt="Vector Image"
              width={250}
              height={250}
            />
          </div>
        </div>

        {/* Training Section */}
        <div style={sectionStyle}>
          <div style={imageSectionStyle}>
            <Image
              src="/images/img2.png"
              alt="Training Image"
              width={400}
              height={400}
            />
          </div>
          <div style={textSectionStyle}>
            <h2 style={subheadingStyle}>Training</h2>
            <h3 style={{ margin: 0 }}>
              <span style={spanStyle}>Student from Beginning to Advance</span>
              <span style={spanStyle}>Level</span>
            </h3>
          </div>
        </div>

        {/* Interning Section */}
        <div style={sectionStyle}>
          <div style={textSectionStyle}>
            <h2 style={subheadingStyle}>Interning</h2>
            <h3 style={{ margin: 0 }}>
              <span style={spanStyle}>Engaging in Various Live Projects /</span>
              <span style={spanStyle}>Real-World Problems</span>
            </h3>
          </div>
          <div style={imageSectionStyle}>
            <Image
              src="/images/img3.png"
              alt="Interning Image"
              width={400}
              height={400}
            />
          </div>
        </div>

        {/* Testing Section */}
        <div style={sectionStyle}>
          <div style={imageSectionStyle}>
            <Image
              src="/images/img4.png"
              alt="Testing Image"
              width={400}
              height={400}
            />
          </div>
          <div style={textSectionStyle}>
            <h2 style={subheadingStyle}>Testing</h2>
            <h3 style={{ margin: 0 }}>
              <span style={spanStyle}>Appearing for Professional</span>
              <span style={spanStyle}>Certifications (Microsoft / Google / IBM)</span>
            </h3>
          </div>
        </div>

        {/* Challenging Section */}
        <div style={sectionStyle}>
          <div style={textSectionStyle}>
            <h2 style={subheadingStyle}>Challenging</h2>
            <h3 style={{ margin: 0 }}>
              <span style={spanStyle}>Work on Complex Problem /</span>
              <span style={spanStyle}>Research / Startups / Innovation</span>
            </h3>
          </div>
          <div style={imageSectionStyle}>
            <Image
              src="/images/img5.png"
              alt="Challenging Image"
              width={400}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* Mobile Cards */}
      <div className="mobile-cards">
        <CardThree />
      </div>

      {/* CSS for responsiveness */}
      <style jsx>{`
        .desktop-section {
          display: block; /* Show by default */
        }

        .mobile-cards {
          display: none; /* Hidden by default */
        }

        @media (max-width: 768px) {
          .desktop-section {
            display: none; /* Hide on mobile */
          }

          .mobile-cards {
            display: block; /* Show on mobile */
          }
        }
      `}</style>
    </>
  );
};

export default HeroSection;
