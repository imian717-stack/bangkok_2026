import React from 'react';
import {
  JapaneseShioriBadge,
  CameraStampDoodle,
  PalmTreeDoodle,
  CoconutDrinkDoodle,
  SparkleDoodle,
} from './TropicalDoodles';

interface HeaderProps {
  activeTab: 'itinerary' | 'transport';
  setActiveTab: (tab: 'itinerary' | 'transport') => void;
  onOpenModal: (key: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenModal,
}) => {
  return (
    <header className="app-header sticky top-0 z-40 bg-[#F8F5EE]/95 backdrop-blur-md border-b-2 border-[#E2D8C7] px-3 pt-3 pb-2.5 jp-card-shadow relative overflow-hidden">
      {/* Decorative Washi Tape Bar at top */}
      <div className="absolute top-0 left-0 right-0 h-1.5 washi-tape-green"></div>

      {/* Background Decorative Doodles */}
      <div className="absolute -right-1 top-2 opacity-30 pointer-events-none animate-floatGentle">
        <PalmTreeDoodle className="w-14 h-14" />
      </div>

      <div className="max-w-md mx-auto relative z-10">
        {/* Top bar with Japanese Youth Travel Journal Badges */}
        <div className="flex items-center justify-between mb-2 mt-1">
          <div className="inline-flex items-center gap-1.5 bg-[#EAF2EF] text-[#2D5A46] text-[11px] font-jp-rounded font-bold px-2.5 py-0.5 rounded-full border border-[#81B29A] jp-card-shadow-sm">
            <SparkleDoodle className="w-3.5 h-3.5 text-[#E07A5F]" />
            <span>バンコク旅のしおり</span>
            <span className="text-xs">🇹🇭</span>
          </div>
        </div>

        {/* Title and Subtitle in Japanese Magazine Style */}
        <div className="flex items-center justify-between gap-2 my-1.5">
          <div>
            <h1 className="app-title text-2xl font-jp-title font-bold text-[#3D352E] tracking-tight flex items-center gap-2">
              <span>曼谷夏日大冒險</span>
              <CoconutDrinkDoodle className="w-7 h-7 inline-block animate-floatGentle" />
            </h1>
            <p className="app-dates text-[12px] text-[#6B9080] font-jp-body font-semibold mt-0.5 flex items-center gap-1">
              <span>8/23 (日) - 8/27 (四)</span>
              <span className="text-[#D5CBB8]">•</span>
              <span className="text-[#E07A5F]">5天4夜高溫奔跑中</span>
            </p>
          </div>
        </div>



        {/* Navigation Tabs - Japanese Clean Journal Tabs */}
        <nav className="tabs-nav flex w-full gap-2 mt-2 pt-1">
          <button
            type="button"
            onClick={() => setActiveTab('itinerary')}
            className={`tab-button flex-1 py-2 px-3 text-xs font-jp-rounded font-bold rounded-xl border transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === 'itinerary'
                ? 'bg-[#E07A5F] text-[#FFFFFF] border-[#C06C53] jp-card-shadow-sm scale-[1.01]'
                : 'bg-[#FFFFFF] text-[#6E6359] border-[#E2D8C7] hover:bg-[#F8F5EE]'
            }`}
          >
            <span className="text-sm">🗓️</span>
            <span>每日行程</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('transport')}
            className={`tab-button flex-1 py-2 px-3 text-xs font-jp-rounded font-bold rounded-xl border transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeTab === 'transport'
                ? 'bg-[#6B9080] text-[#FFFFFF] border-[#527364] jp-card-shadow-sm scale-[1.01]'
                : 'bg-[#FFFFFF] text-[#6E6359] border-[#E2D8C7] hover:bg-[#F8F5EE]'
            }`}
          >
            <span className="text-sm">🚆</span>
            <span>交通便利指南</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
