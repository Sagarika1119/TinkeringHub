'use client';

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CardTwo } from "@/components/card"; // Import your CardTwo component

export function CarouselSpacing() {
  const cards = [
    {
      imageSrc: "/images/school.png",
      title: "About Macbook",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"
    },
    {
      imageSrc: "/images/team.png",
      title: "Laptop Overview",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"
    },
    {
      imageSrc: "/images/school.png",
      title: "Tech Gadget",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"
    },
    {
      imageSrc: "/images/team.png",
      title: "Gaming Setup",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"
    },
    {
      imageSrc: "/images/school.png",
      title: "Office Gear",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"
    }
  ];

  return (
    <Carousel className="w-full max-w-screen-xl mx-auto">
      {/* Center the carousel */}
      <CarouselContent className="flex items-center overflow-hidden">
        {cards.map((card, index) => (
          <CarouselItem
            key={index}
            className="flex-none w-1/3 px-2"
          >
            <div className="p-1">
              <CardTwo 
                imageSrc={card.imageSrc}
                title={card.title}
                description={card.description}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
