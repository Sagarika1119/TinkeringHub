import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const headingStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: '2rem',
};


const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start', // Align items to the top
    marginTop: '2rem',
    marginLeft: 'auto',
    marginRight: '3rem', // Increase marginRight to shift the card to the right
    backgroundColor: '#c6f6d5',
    // background-color: #9ae6b4;
    borderRadius: '60px', // Adjusted for a more standard card look
    padding: '1rem',
    maxWidth: '80%',
    gap: '1rem', // Add a small gap between image and text
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Adds a subtle shadow for a card effect
  };

const imageContainerStyle = {
  flex: '0 0 auto', // Keeps the image container at its natural size
  borderRadius: '40px', // Adjust the border radius as desired
  overflow: 'hidden', // Ensures the image fits within the border radius
  width: '200px', // Adjust the width of the image container
  height: 'auto', // Allows the height to adjust based on image aspect ratio
};

const imageStyle = {
  width: '100%', // Image width will be 100% of the container width
  height: '100%', // Image height will be 100% of the container height
  objectFit: 'cover', // Ensures the image covers the entire container without distortion
};

const textStyle = {
    flex: '1',
    textAlign: 'left',
    fontSize: '1rem', // Adjust text size for better readability
    lineHeight: '2', // Increase line height for more space between lines
    marginBottom: '1rem', // Add margin at the bottom for additional spacing
  };
const breadcrumbContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '2rem',
};

const breadcrumbTextStyle = {
  fontSize: '1.2rem',
  borderBottom: '1px solid darkgrey', // Add light grey line below each breadcrumb item
  paddingBottom: '4px', // Add some padding between text and line
};

const Hackathon = () => {
  return (
    <div>
      <h2 style={headingStyle}>Vadodara Hackathon 3.0</h2>
      <div style={containerStyle}>
        <div style={imageContainerStyle}>
          <Image
            src="/images/hackathon1.jpg"
            alt="Vadodara Hackathon 3.0 Image"
            layout="responsive"
            width={200}
            height={100}
            style={imageStyle}
          />
        </div>
        <div style={textStyle}>
          <h3>
            Vadodara Hackathon 3.0 is a dynamic event that brings together students, developers, and tech enthusiasts to solve real-world challenges. Participants will showcase their creativity and technical skills across 8 different tracks. The hackathon offers opportunities for networking, skill development, and recognition, with workshops and sessions led by industry professionals. Join us to innovate, connect, and compete for exciting prizes!
          </h3>
        </div>
      </div>
      <div style={breadcrumbContainerStyle}>
        <BreadcrumbOne />
      </div>
      {/* Add the second breadcrumb below the first one */}
      <div style={breadcrumbContainerStyle}>
        <BreadcrumbTwo />
      </div>
    </div>
  );
};

export default Hackathon;

export function BreadcrumbOne() {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <a
            href="#"
            className="ml-1 inline-flex text-sm font-medium text-gray-800 hover:underline md:ml-2"
            style={breadcrumbTextStyle}
          >
            8 Tracks
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRight className="h-8 w-8" />
            <a
              href="#"
              className="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2"
              style={breadcrumbTextStyle}
            >
              50+ Industry Patterns
            </a>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <ChevronRight className="h-8 w-8" />
            <span
              className="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2"
              style={breadcrumbTextStyle}
            >
              200+ Problem Statement
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
}

export function BreadcrumbTwo() {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <a
            href="#"
            className="ml-1 inline-flex text-sm font-medium text-gray-800 hover:underline md:ml-2"
            style={breadcrumbTextStyle}
          >
            48+ Hours
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRight className="h-8 w-8" />
            <a
              href="#"
              className="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2"
              style={breadcrumbTextStyle}
            >
              50+ Jury/Mentor
            </a>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <ChevronRight className="h-8 w-8" />
            <span
              className="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2"
              style={breadcrumbTextStyle}
            >
              500+ Team Registered
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
}
