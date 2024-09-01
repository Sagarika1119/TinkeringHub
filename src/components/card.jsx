import React from 'react';

export function CardTwo({ imageSrc, title, description }) {
  return (
    <div className="w-[200px] h-[250px] rounded-md border overflow-hidden"> {/* Adjusted card height */}
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-[120px] object-cover" /* Adjusted image height */
      />
      <div className="p-4 flex flex-col justify-between h-[130px]"> {/* Adjusted content height */}
        <div>
          <h1 className="text-md font-semibold">{title}</h1> {/* Adjusted text size */}
          <p className="mt-2 text-sm text-gray-600">
            {description}
          </p>
        </div>
        <button
          type="button"
          className="mt-2 flex items-center rounded-sm bg-black px-2 py-1 text-[12px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 mr-1" /* Adjusted icon size */
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
          Read
        </button>
      </div>
    </div>
  );
}
