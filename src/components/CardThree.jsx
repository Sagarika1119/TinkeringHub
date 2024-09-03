'use client'
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export function CardThree() {
  const cards = [
    {
      title: 'Sensitizing',
      description: 'Promotion of Concept to Every Stakeholders',
      imageUrl: '/images/img1.png'
    },
    {
      title: 'Training',
      description: 'Student from Beginning to Advance Level',
      imageUrl: '/images/img2.png'
    },
    {
      title: 'Interning',
      description: 'Engaging in Various Live Projects Real-world Problems',
      imageUrl: '/images/img3.png'
    },
    {
      title: 'Testing',
      description: 'Appearing for Professional Certifications (Microsoft / Google / IBM)',
      imageUrl: '/images/img4.png'
    },
    {
      title: 'Challenging',
      description: 'Work on Complex Problem Research / Startups / Innovation',
      imageUrl: '/images/img5.png'
    }
  ];

  return (
    <div className="mobile-cards-container">
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {cards.map((card, index) => (
          <div key={index} className="w-full sm:w-[300px] md:w-[250px] lg:w-[300px] rounded-md border overflow-hidden">
            <img
              src={card.imageUrl}
              alt={card.title}
              className="h-[200px] w-full object-cover"
            />
            <div className="p-4">
              <h1 className="inline-flex items-center text-lg font-semibold">
                {card.title} &nbsp; <ArrowUpRight className="h-4 w-4" />
              </h1>
              <p className="mt-3 text-sm text-gray-600">{card.description}</p>
              <button
                type="button"
                className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Read
              </button>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .mobile-cards-container {
          display: block; /* Show by default on mobile */
        }

        @media (min-width: 769px) {
          .mobile-cards-container {
            display: none; /* Hide on larger screens */
          }
        }
      `}</style>
    </div>
  );
}
