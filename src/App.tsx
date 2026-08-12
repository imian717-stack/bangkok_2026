import { useState } from 'react';
import { Header } from './components/Header';
import { SpotCard } from './components/SpotCard';
import { TransportView } from './components/TransportView';
import { BottomNav } from './components/BottomNav';
import { Modal } from './components/Modal';
import {
  TropicalSunDoodle,
  MangoDoodle,
  HibiscusFlowerDoodle,
  SparkleDoodle,
  PalmTreeDoodle,
} from './components/TropicalDoodles';
import {
  bangkokItineraries,
  arlTimetable,
  modalDataMap,
} from './data/bangkokData';

const dayIcons: Record<number, string> = {
  1: '🛬 Day 01',
  2: '🥭 Day 02',
  3: '🏊‍♂️ Day 03',
  4: '🚤 Day 04',
  5: '🛍️ Day 05',
};

export default function App() {
  const [currentDay, setCurrentDay] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'itinerary' | 'transport'>('itinerary');
  const [activeModalKey, setActiveModalKey] = useState<string | null>(null);

  const activeDayData = bangkokItineraries.find((d) => d.dayNumber === currentDay) || bangkokItineraries[0];

  const handleSelectDay = (dayNum: number) => {
    setCurrentDay(dayNum);
    setActiveTab('itinerary');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTool = () => {
    setActiveTab('transport');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-[#3D352E] pb-28 font-jp-body selection:bg-[#EAF2EF]">
      {/* 頂部 Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenModal={(key) => setActiveModalKey(key)}
      />

      {/* 主要內容區域 */}
      <main className="max-w-md mx-auto px-3.5 pt-3 animate-fadeIn">
        {/* Tab 1: 行程內容 */}
        {activeTab === 'itinerary' && (
          <section className="itinerary-section">
            {/* 每日 Title Banner - Japanese Magazine Header */}
            <div className="day-banner my-3 p-3.5 bg-gradient-to-r from-[#FEF6EC] to-[#EAF2EF] border border-[#E2D8C7] rounded-2xl jp-card-shadow relative overflow-hidden flex items-center justify-between">
              <div>
                <div className="flex items-center">
                  <span className="inline-flex items-center gap-2 text-xs font-jp-rounded bg-white px-3 py-1 rounded-full border border-[#F4A261]/40 jp-card-shadow-sm">
                    <span className="font-black text-[#E07A5F]">{dayIcons[activeDayData.dayNumber] || `Day 0${activeDayData.dayNumber}`}</span>
                    <span className="text-[#E2C097] font-normal">•</span>
                    <span className="font-bold text-[#C06C53]">{activeDayData.date}</span>
                  </span>
                </div>
                <h2 className="text-xs font-jp-rounded font-bold text-[#3D352E] mt-2 leading-relaxed">
                  {activeDayData.title}
                </h2>
              </div>
              <div className="shrink-0 ml-2 animate-floatGentle">
                {activeDayData.dayNumber === 2 && <MangoDoodle className="w-10 h-10" />}
                {activeDayData.dayNumber === 3 && <HibiscusFlowerDoodle className="w-10 h-10" />}
                {activeDayData.dayNumber === 1 && <TropicalSunDoodle className="w-10 h-10" />}
                {activeDayData.dayNumber === 4 && <PalmTreeDoodle className="w-10 h-10" />}
                {activeDayData.dayNumber === 5 && <SparkleDoodle className="w-8 h-8 text-[#E07A5F]" />}
              </div>
            </div>

            {/* 景點卡片列表 */}
            <div className="spots-container space-y-1">
              {activeDayData.spots.map((spot, idx) => (
                <SpotCard
                  key={spot.id}
                  spot={spot}
                  index={idx}
                  onOpenModal={(key) => setActiveModalKey(key)}
                />
              ))}
            </div>
          </section>
        )}

        {/* Tab 2: 交通工具箱 */}
        {activeTab === 'transport' && (
          <TransportView
            arlTimetable={arlTimetable}
            onOpenModal={(key) => setActiveModalKey(key)}
          />
        )}

        {/* Footer Decorative Element - Japanese Travel Guidebook Note */}
        <footer className="pt-8 pb-6 text-center space-y-2">
          <div className="flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-[#D5CBB8]"></span>
            <span className="text-xs font-jp-rounded font-bold text-[#6B9080]">BANGKOK VACATION • 旅のしおり 🇹🇭</span>
            <span className="h-px w-8 bg-[#D5CBB8]"></span>
          </div>
          <p className="text-[11px] font-jp-body text-[#6E6359]">
            Enjoy your gentle summer trip, tropical sunshine & delicious Thai food! 🥭 🌴 ✈️
          </p>
        </footer>
      </main>

      {/* 底部導航列 */}
      <BottomNav
        currentDay={currentDay}
        activeTab={activeTab}
        onSelectDay={handleSelectDay}
        onSelectTool={handleSelectTool}
      />

      {/* 詳細憑證 / 航班 / 飯店彈窗 Modal */}
      <Modal
        isOpen={Boolean(activeModalKey)}
        onClose={() => setActiveModalKey(null)}
        data={activeModalKey ? modalDataMap[activeModalKey] || null : null}
      />
    </div>
  );
}
