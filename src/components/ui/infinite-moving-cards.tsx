"use client";

import { cn } from "../../lib/utils";
import React, { useEffect, useState } from "react";
import { Star, StarHalf } from "lucide-react"; // You'll need to install lucide-react: npm install lucide-react

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
    image: string;
    rating: number;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  // Star rating component
  const StarRating = ({ rating }: { rating: number }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="relative">
            {i < fullStars ? (
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ) : i === fullStars && hasHalfStar ? (
              <div className="relative">
                <Star className="w-4 h-4 text-gray-300" />
                <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                </div>
              </div>
            ) : (
              <Star className="w-4 h-4 text-gray-300" />
            )}
          </div>
        ))}
        <span className="text-sm text-yellow-600 font-medium ml-1">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-[95rem] overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[380px] max-w-full shrink-0 rounded-2xl border border-zinc-200 bg-gradient-to-br from-white to-gray-50/80 px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 md:w-[450px] dark:border-zinc-700 dark:from-zinc-900 dark:to-zinc-800/80"
            key={`${item.name}-${idx}`}
          >
            {/* Rating */}
            <div className="absolute -top-3 left-6 bg-white dark:bg-zinc-800 px-3 py-1 rounded-full shadow-md">
              <StarRating rating={item.rating} />
            </div>

            <blockquote className="relative">
              {/* Quote icon */}
              <div className="absolute -top-2 -left-2 text-4xl opacity-10">"</div>
              
              <span className="relative z-20 text-sm leading-[1.7] font-normal text-neutral-800 dark:text-gray-100 line-clamp-4">
                {item.quote}
              </span>

              <div className="relative z-20 mt-6 flex flex-row items-center gap-4">
                {/* Profile image */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 overflow-hidden shadow-md">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback for image error
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.className = 'w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg';
                        target.parentElement!.textContent = item.name.split(' ').map(n => n[0]).join('');
                      }}
                    />
                  </div>
                </div>

                {/* Name and title */}
                <div className="flex flex-col gap-1 flex-1 min-w-0">
                  <span className="text-sm font-semibold text-neutral-800 dark:text-gray-100 truncate">
                    {item.name}
                  </span>
                  <span className="text-xs leading-[1.6] font-normal text-neutral-500 dark:text-gray-400 truncate">
                    {item.title}
                  </span>
                </div>
              </div>
            </blockquote>

            {/* Decorative elements */}
            <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-l from-blue-500/10 to-transparent rounded-tl-full"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};