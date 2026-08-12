import React from 'react';

interface BottomNavProps {
  currentDay: number;
  activeTab: 'itinerary' | 'transport';
  onSelectDay: (day: number) => void;
  onSelectTool: () => void;
}

const dayEmojis: Record<number, string> = {
  1: '🛬',
  2: '🥭',
  3: '🏊‍♂️',
  4: '🚤',
  5: '🛍️',
};

export const BottomNav: React.FC<BottomNavProps> = ({
  currentDay,
  activeTab,
  onSelectDay,
  onSelectTool,
}) => {
  return (
    <div className="fixed bottom-3 left-0 right-0 z-40 px-3 max-w-md mx-auto pointer-events-none">
      <nav className="bottom-nav pointer-events-auto bg-white/95 backdrop-blur-md border border-[#E2D8C7] rounded-2xl jp-card-shadow h-16 flex items-center justify-around px-1.5 font-jp-rounded">
        {[1, 2, 3, 4, 5].map((day) => {
          const isActive = activeTab === 'itinerary' && currentDay === day;
          return (
            <button
              key={day}
              type="button"
              onClick={() => onSelectDay(day)}
              className={`nav-button flex-1 flex flex-col items-center justify-center py-1 rounded-xl transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#E07A5F] text-white font-bold jp-card-shadow-sm scale-105'
                  : 'text-[#6E6359] hover:text-[#3D352E] hover:bg-[#F8F5EE]'
              }`}
            >
              <span className="text-sm leading-none">{dayEmojis[day]}</span>
              <span className="text-[10px] font-jp-rounded font-bold leading-tight mt-0.5">
                D{day}
              </span>
            </button>
          );
        })}

        {/* Separator Line */}
        <div className="h-8 w-px bg-[#E2D8C7] my-auto mx-0.5"></div>

        {/* 工具箱 Button */}
        <button
          type="button"
          onClick={onSelectTool}
          className={`nav-button flex-1 flex flex-col items-center justify-center py-1 rounded-xl transition-all cursor-pointer ${
            activeTab === 'transport'
              ? 'bg-[#6B9080] text-white font-bold jp-card-shadow-sm scale-105'
              : 'text-[#6E6359] hover:text-[#3D352E] hover:bg-[#F8F5EE]'
          }`}
        >
          <span className="text-sm leading-none">🧰</span>
          <span className="text-[10px] font-jp-rounded font-bold leading-tight mt-0.5">
            交通
          </span>
        </button>
      </nav>
    </div>
  );
};
