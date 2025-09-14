import React, { useState, useEffect } from 'react';

const scheduleData = {
  L: { day: 'LUNES', hours: '07:30 - 16:00', hoursShort: '07:30-16:00' },
  M: { day: 'MARTES', hours: '07:30 - 16:00', hoursShort: '07:30-16:00' },
  X: { day: 'MIÉRCOLES', hours: 'CERRADO', hoursShort: 'CERRADO' },
  J: { day: 'JUEVES', hours: '07:30 - 16:00', hoursShort: '07:30-16:00' },
  V: { day: 'VIERNES', hours: '08:00-Cierre', hoursShort: '08:00-Cierre' },
  S: { day: 'SÁBADO', hours: '08:00-Cierre', hoursShort: '08:00-Cierre' },
  D: { day: 'DOMINGO', hours: '08:00-Cierre', hoursShort: '08:00-Cierre' }
};

const getCurrentDay = () => {
  const days = ['D', 'L', 'M', 'X', 'J', 'V', 'S'];
  const today = new Date().getDay(); // 0 = domingo, 1 = lunes, etc.
  return days[today];
};

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState(getCurrentDay());

  return (
    <div className="flex flex-col items-center w-full max-w-[420px]">
      <div className="bg-[#FFC49D] rounded-2xl p-3 gap-2 flex relative mt-11 border-2 border-black shadow-lg w-full overflow">
        <div className={`absolute -top-11 transition-all duration-500 ease-out ${
          selectedDay === 'L' ? 'left-3' :
          selectedDay === 'M' ? 'left-[calc(3rem+0.5rem)]' :
          selectedDay === 'X' ? 'left-[calc(6rem+1rem)]' :
          selectedDay === 'J' ? 'left-[calc(9rem+1.5rem)]' :
          selectedDay === 'V' ? 'left-[calc(12rem+2rem)]' :
          selectedDay === 'S' ? 'left-[calc(12rem+2rem)]' :
          'left-[calc(12rem+2rem)]'
        }`}>
          <div className="flex flex-col border-2 border-black rounded-2xl shadow-lg">
            <div className="bg-[#FF8833] text-white font-bold px-2 sm:px-3 lg:px-4 py-2 sm:py-3 rounded-t-2xl text-xs sm:text-sm whitespace-nowrap">
              <span className="sm:hidden">{scheduleData[selectedDay].hoursShort}</span>
              <span className="hidden sm:inline">{scheduleData[selectedDay].hours}</span>
            </div>
            <div className="w-full h-2 sm:h-3 bg-[#FF8833] rounded-b-2xl"></div>
          </div>
        </div>
        {Object.keys(scheduleData).map((day) => (
          <button
            key={day}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setSelectedDay(day);
            }}
            className={`w-12 h-12 flex items-center justify-center text-sm font-bold rounded-xl transition-all duration-300 border-2 border-black transform hover:scale-105
              ${selectedDay === day
                ? 'bg-[#FF8833] text-white shadow-lg scale-105'
                : day === 'X'
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-white text-[#FF8833] hover:bg-orange-50 hover:shadow-md'
              }`}
            disabled={day === 'X'}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
}
