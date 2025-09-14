
import React, { useEffect, useState } from "react";

const opinions = [
  {
    name: "Juan Beato Fernández",
    text: "¡La mejor comida casera de la zona!",
    stars: 5,
  },
  {
    name: "Rocío del Mar Vega",
    text: "Ambiente acogedor y trato familiar.",
    stars: 4,
  },
  {
    name: "Luz Estrella Santos",
    text: "Platos tradicionales con un toque único.",
    stars: 5,
  },
  {
    name: "Iker Zubieta",
    text: "Sabores auténticos, volveré seguro.",
    stars: 5,
  },
  {
    name: "Macarena Luna",
    text: "El gazpacho, espectacular.",
    stars: 4,
  },
  {
    name: "Xavier Prats",
    text: "Increíble relación calidad-precio.",
    stars: 5,
  },
  {
    name: "Sol María Quintana",
    text: "La tortilla, la mejor que he probado.",
    stars: 5,
  },
  {
    name: "Thor Anderson",
    text: "Typical Spanish food at its best!",
    stars: 4,
  },
  {
    name: "Flor de Lis Ruiz",
    text: "Atmósfera única y comida deliciosa.",
    stars: 5,
  },
  {
    name: "Tristán Montenegro",
    text: "Sus tapas son incomparables.",
    stars: 5,
  },
];

export default function OpinionRotator() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % opinions.length);
        setFade(true);
      }, 400); // fade out duration
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center w-full max-w-[420px]">
      <div className="bg-[#FFC49D] rounded-2xl p-3 relative w-full border-2 border-black shadow-lg hover-lift mt-11">
        <div className="flex flex-col gap-2 px-3 py-1.5">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-sm text-gray-800">{opinions[current].name}</h2>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 transition-all duration-300"
                  viewBox="0 0 20 20"
                  fill={i < opinions[current].stars ? "#facc15" : "#d1d5db"}
                  stroke="black"
                  strokeWidth="1"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.174 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
                </svg>
              ))}
            </div>
          </div>
          <div className={`transition-all duration-500 ${fade ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-2'}`}>
            <p className="text-sm text-gray-700 leading-relaxed italic">"{opinions[current].text}"</p>
          </div>
        </div>
        
        {/* Indicadores de progreso */}
        <div className="flex justify-center space-x-2 mt-3">
          {opinions.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === current ? 'bg-[#FF8833] scale-125' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
