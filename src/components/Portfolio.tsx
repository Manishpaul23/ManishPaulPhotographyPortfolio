import React from 'react';
import { Link } from 'react-router-dom';

// Temporary image paths — update these with your actual image paths or imports
const portfolioImages = [
  'src/assets/portfolio-1.jpg',
  'src/assets/portfolio-3.jpg',
  'src/assets/portfolio-4.jpg',
  
];

const Portfolio = () => {
  const previewImages = portfolioImages.slice(0, 6); // only first 6 images

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {previewImages.map((img, index) => (
        <Link to="/portfolio" key={index}>
          <img
            src={img}
            alt={`Preview ${index}`}
            className="w-full h-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
        </Link>
      ))}
    </div>
  );
};

export default Portfolio;
