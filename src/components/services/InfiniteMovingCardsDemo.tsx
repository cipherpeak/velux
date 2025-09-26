"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[50rem] rounded-md flex flex-col antialiased bg-primary items-center justify-center relative overflow-hidden">
      {/* Modern Heading */}
      <div className="text-center mb-12 z-10">
        <h2 className="text-4xl md:text-6xl font-bold bg-secondary bg-clip-text text-transparent mb-4">
          Our Testimonials
        </h2>
        <p className="text-lg text-white max-w-2xl mx-auto">
          Discover what our clients have to say about their experiences
        </p>
      </div>
      
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote: "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    image: "/api/placeholder/80/80", // Replace with actual image paths
    rating: 5
  },
  {
    quote: "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune.",
    name: "William Shakespeare",
    title: "Hamlet",
    image: "/api/placeholder/80/80",
    rating: 4
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
    image: "/api/placeholder/80/80",
    rating: 5
  },
  {
    quote: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
    image: "/api/placeholder/80/80",
    rating: 4
  },
  {
    quote: "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore.",
    name: "Herman Melville",
    title: "Moby-Dick",
    image: "/api/placeholder/80/80",
    rating: 5
  },
];