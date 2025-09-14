import React, { useState, useEffect } from 'react';

const images = [
  '/public/IMG-20250911-WA0001.jpg',
  '/public/IMG-20250911-WA0004.jpg',
  '/public/IMG-20250911-WA0003.jpg',
  '/public/IMG-20250911-WA0002.jpg'
];

export default function ImageCarousel() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[900px] h-[500px] mx-auto overflow-hidden rounded-xl">
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentImage * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Imagen ${index + 1} de la taberna`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentImage === index ? 'bg-[#FF8833]' : 'bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
