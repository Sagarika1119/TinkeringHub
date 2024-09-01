import React from 'react';
import Image from 'next/image'; // Adjust if using Next.js image optimization

const headingStyle = {
  fontSize: '2rem',
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: '2rem', // Adjust margin as needed
};

const imageContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '1.5rem', // Adjust margin as needed
};

const GallerySection = () => {
  return (
    <div>
      <h2 style={headingStyle}>Gallery</h2>
      <div style={imageContainerStyle}>
        <Image
          src="/images/gallery.png" // Update with the actual path to the image
          alt="Gallery Image"
          width={850} // Adjust width as needed
          height={300} // Adjust height as needed
        />
      </div>
    </div>
  );
};

export default GallerySection;
