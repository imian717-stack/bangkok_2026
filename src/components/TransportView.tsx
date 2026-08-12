import React, { useState } from 'react';
import { TimetableRow } from '../types';
import { SparkleDoodle, TukTukDoodle } from './TropicalDoodles';

interface TransportViewProps {
  arlTimetable: TimetableRow[];
  onOpenModal?: (key: string) => void;
}

export const TransportView: React.FC<TransportViewProps> = ({
  arlTimetable,
  onOpenModal,
}) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<'city-to-airport' | 'airport-to-city'>('city-to-airport');
  const [selectedTimeRange, setSelectedTimeRange] = useState<string>('day5-return'); // 'day5-return' | 'morning' | 'noon' | 'evening' | 'all'
  const [isBoatOpen, setIsBoatOpen] = useState<boolean>(false);

  const thaiPhrases = [
    {
      title: '請開計程表 (By Meter)',
      thai: 'กรุณาเปิดมิเตอร์ครับ/ค่ะ',
      phonetic: 'Kru-na poed meter krub/ka',
      emoji: '⏱️',
    },
    {
      title: '前往 Miami Hotel Bangkok',
      thai: 'ไปโรงแรม ไมอามี่ โฮเต็ล กรุงเทพฯ ครับ/ค่ะ',
      phonetic: 'Pai Rong-raem Miami Hotel Krung-thep krub/ka',
      emoji: '🏨',
    },
    {
      title: '前往 Suvarnabhumi BKK 機場',
      thai: 'ไปสนามบินสุวรรณภูมิ ครับ/ค่ะ',
      phonetic: 'Pai Sa-nam-bin Su-var-na-bhu-mi krub/ka',
      emoji: '✈️',
    },
    {
      title: '前往 Don Mueang DMK 機場',
      thai: 'ไปสนามบินดอนเมือง ครับ/ค่ะ',
      phonetic: 'Pai Sa-nam-bin Don Mueang krub/ka',
      emoji: '🛬',
    },
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  // 路線圖 8 個站點資料 (市區往 BKK 機場：Phaya Thai 始發 -> Suvarnabhumi Airport 終點)
  const routeStations = [
    { name: 'Phaya Thai', code: 'A8', isTerminal: true, isTransfer: true, transferType: 'BTS', durationAfter: '1 MIN', desc: '轉乘 BTS 帕亞泰' },
    { name: 'Ratchaprarop', code: 'A7', durationAfter: '3 MINS', desc: '拉差巴洛' },
    { name: 'Makkasan', code: 'A6', isTransfer: true, transferType: 'MRT', durationAfter: '4 MINS', desc: '轉乘 MRT 碧差汶里' },
    { name: 'Ramkhamhaeng', code: 'A5', durationAfter: '4 MINS', desc: '藍甘杏' },
    { name: 'Hua Mak', code: 'A4', durationAfter: '4 MINS', desc: '華麥' },
    { name: 'Ban Tab Chang', code: 'A3', durationAfter: '5 MINS', desc: '班塔昌' },
    { name: 'Lat Krabang', code: 'A2', durationAfter: '5 MINS', desc: '拉卡邦' },
    { name: 'Suvarnabhumi', code: 'BKK', isTerminal: true, desc: 'BKK 機場 B1 層' },
  ];

  // 篩選 Timetable 班次
  const filteredRows = arlTimetable.filter((row) => {
    // 方向篩選
    const rowDir = row.direction || 'city-to-airport';
    if (rowDir !== direction) return false;

    // 時間區間篩選
    if (selectedTimeRange === 'day5-return') {
      // Day 5 返程：出發時間 14:00 - 17:00 (前後 1 小時涵蓋 13:30 - 17:30)
      const depTime = row.departure;
      return depTime >= '13:30' && depTime <= '17:30';
    } else if (selectedTimeRange === 'morning') {
      return row.departure >= '05:30' && row.departure <= '09:00';
    } else if (selectedTimeRange === 'noon') {
      return row.departure >= '11:00' && row.departure <= '14:00';
    } else if (selectedTimeRange === 'evening') {
      return row.departure >= '18:00' && row.departure <= '24:00';
    }
    return true; // 'all'
  });

  return (
    <section className="transport-section space-y-4 my-3">
      {/* 標題卡 Banner */}
      <div className="bg-[#6B9080] text-white p-4.5 rounded-2xl border border-[#527364] jp-card-shadow relative overflow-hidden">
        <div className="flex items-center justify-between relative z-10">
          <div>
            <span className="inline-flex items-center gap-1 bg-[#EAF2EF] text-[#2D5A46] text-[10px] font-jp-rounded font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              <SparkleDoodle className="w-3 h-3 text-[#E07A5F]" />
              TRANSIT & LOGISTICS
            </span>
            <h2 className="text-xl font-jp-title font-bold text-white mt-1 flex items-center gap-2">
              <span>曼谷交通指南工具箱 🚆</span>
            </h2>
            <p className="text-xs font-jp-body text-[#EAF2EF] mt-1 leading-relaxed">
              整合 ARL 機場快線路線圖、出發前後時間表、BTS 捷運、MRT 地鐵與 Grab 泰文溝通卡！
            </p>
          </div>
          <div className="shrink-0 ml-2">
            <TukTukDoodle className="w-12 h-12" />
          </div>
        </div>
      </div>

      {/* 航班資訊簡卡 Flight Info Summary */}
      <div className="flight-info-card bg-white rounded-2xl p-4 border border-[#E2D8C7] jp-card-shadow">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-2">
            <span className="text-xl">✈️</span>
            <div>
              <h3 className="font-jp-title font-bold text-[#3D352E] text-base">
                航班 quick summary (航班資訊)
              </h3>
              <p className="text-[11px] font-jp-body text-[#6E6359]">
                8/23 - 8/27 台北桃園 (TPE) ↔ 曼谷來回航班
              </p>
            </div>
          </div>
          {onOpenModal && (
            <button
              type="button"
              onClick={() => onOpenModal('flight-outbound')}
              className="text-[10px] font-jp-rounded font-bold bg-[#EAF2EF] hover:bg-[#D8E8E2] text-[#2D5A46] px-2.5 py-1 rounded-lg border border-[#81B29A] transition-all cursor-pointer shrink-0 shadow-2xs active:scale-95"
            >
              詳細機票憑證 ↗
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-jp-body">
          {/* 去程 (綠色/抹茶調) */}
          <div className="p-3 bg-[#EAF2EF] border border-[#81B29A]/60 rounded-xl space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#2D5A46] text-xs">🛫 去程：泰國亞航 (8/23 日)</span>
              <span className="bg-white text-[#2D5A46] text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border border-[#81B29A]/50">FD 231</span>
            </div>
            <p className="text-[#3D352E] font-bold">桃園 T1 (18:30) ➔ 廊曼 DMK (21:20)</p>
            <p className="text-[11px] text-[#6E6359]">訂位代號: <strong className="text-[#2D5A46] font-mono">QFF12A</strong> • 20kg 託運</p>
          </div>

          {/* 回程 (橙色/磚紅調) */}
          <div className="p-3 bg-[#FEF6EC] border border-[#F4A261]/60 rounded-xl space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#C06C53] text-xs">🛬 回程：泰越捷 (8/27 四)</span>
              <span className="bg-white text-[#C06C53] text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border border-[#F4A261]/50">VZ 570</span>
            </div>
            <p className="text-[#3D352E] font-bold">BKK 主航廈 (20:00) ➔ 桃園 T1 (00:50+1)</p>
            <p className="text-[11px] text-[#6E6359]">訂位代號: <strong className="text-[#E07A5F] font-mono">WMCRAD</strong> • 20kg 託運</p>
          </div>
        </div>
      </div>

      {/* ARL 機場快線 路線圖 Card */}
      <div className="map-card bg-white rounded-2xl p-4 border border-[#E2D8C7] jp-card-shadow">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-xl">🗺️</span>
            <div>
              <h3 className="font-jp-title font-bold text-[#3D352E] text-base">
                ARL 機場快線 路線圖 (Route Map)
              </h3>
              <p className="text-[11px] font-jp-body text-[#6E6359]">
                全線共 8 站 • 總行車時間僅需 <strong>26 分鐘</strong>
              </p>
            </div>
          </div>
          <span className="text-[10px] bg-[#FEF6EC] text-[#E07A5F] font-jp-rounded font-bold px-2.5 py-1 rounded-full border border-[#F4A261]/40 shrink-0">
            全線 26 MINS ⚡
          </span>
        </div>

        {/* 橫向滾動式簡潔路線圖 */}
        <div className="relative my-3 p-3 bg-[#F8F5EE] rounded-xl border border-[#E2D8C7] overflow-x-auto">
          {/* Top total journey banner */}
          <div className="text-center mb-3">
            <span className="inline-block bg-[#E07A5F] text-white text-[10px] font-jp-rounded font-bold px-3 py-0.5 rounded-full tracking-wider shadow-xs">
              CITY CENTRE ➔ AIRPORT JOURNEY TIME 26 MINUTES
            </span>
          </div>

          {/* Interactive Line representation */}
          <div className="min-w-[580px] px-2 py-2">
            {/* Connecting Line background */}
            <div className="relative flex items-center justify-between">
              <div className="absolute top-3.5 left-4 right-4 h-1 bg-[#457B9D] z-0"></div>

              {routeStations.map((st, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center text-center w-16">
                  {/* Station Node Icon */}
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center border-2 transition-transform ${
                    st.isTerminal
                      ? 'bg-[#E07A5F] border-white text-white font-bold text-[10px] ring-2 ring-[#E07A5F]/30'
                      : st.isTransfer
                      ? 'bg-[#6B9080] border-white text-white font-bold text-[10px]'
                      : 'bg-white border-[#457B9D] text-[#3D352E] font-bold text-[10px]'
                  }`}>
                    {st.isTerminal ? (idx === 0 ? '🚉' : '✈️') : idx + 1}
                  </div>

                  {/* Station Name */}
                  <span className="text-[10px] font-jp-rounded font-bold text-[#3D352E] mt-1.5 leading-tight truncate w-full">
                    {st.name}
                  </span>
                  <span className="text-[9px] font-jp-body text-[#6E6359] scale-90 origin-top">
                    {st.desc}
                  </span>

                  {/* Transfer Tag */}
                  {st.isTransfer && (
                    <span className="mt-1 text-[8px] font-bold bg-[#EAF2EF] text-[#2D5A46] px-1.5 py-0.2 rounded border border-[#81B29A]">
                      {st.transferType} 轉乘
                    </span>
                  )}

                  {/* Interval Duration Arrow Badge (shown between stations) */}
                  {st.durationAfter && (
                    <div className="absolute -right-8 top-1.5 z-20 pointer-events-none">
                      <span className="text-[8px] font-bold text-[#E07A5F] bg-[#FEF6EC] border border-[#F4A261]/60 px-1 py-0.2 rounded shadow-2xs whitespace-nowrap">
                        {st.durationAfter}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 轉乘提示 Note */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-jp-body">
          <div className="p-2.5 bg-[#EAF2EF] border border-[#81B29A]/50 rounded-xl flex items-start gap-1.5 text-[#2D5A46]">
            <span>🚇</span>
            <span><strong>Makkasan 站</strong>：連通道直通 <strong>MRT Phetchaburi (碧差汶里站)</strong>。</span>
          </div>
          <div className="p-2.5 bg-[#FEF6EC] border border-[#F4A261]/50 rounded-xl flex items-start gap-1.5 text-[#C06C53]">
            <span>🚝</span>
            <span><strong>Phaya Thai 站</strong>：連通道直通 <strong>BTS Phaya Thai (帕亞泰站)</strong>。</span>
          </div>
        </div>
      </div>

      {/* ARL 時刻表：市區往 BKK 機場 (15:00 - 17:00 Focus) */}
      <div className="map-card bg-white rounded-2xl p-4 border border-[#C2D4C8] jp-card-shadow">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <span className="text-xl">🚄</span>
            <div>
              <h3 className="font-jp-title font-bold text-[#2D3A32] text-base">
                ARL 班次時刻表 (市區 往 BKK 機場)
              </h3>
              <p className="text-[11px] font-jp-body text-[#536458]">
                Day 5 返程以 15:56 抵達班次 (A-36) 為中心點列出
              </p>
            </div>
          </div>

          <a
            href="https://bangkokairporttrain.com/timetable/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-jp-rounded font-bold bg-[#E8F2EE] hover:bg-[#D8E8E2] text-[#2D5A46] px-2.5 py-1 rounded-lg border border-[#81B29A] transition-colors"
          >
            官網完整時刻表 ↗
          </a>
        </div>

        {/* 時刻表表格 */}
        <div className="overflow-x-auto rounded-xl border border-[#C2D4C8] bg-[#F4F7F4] mt-3">
          <table className="timetable w-full text-xs text-center border-collapse font-jp-body">
            <thead>
              <tr className="bg-[#E8F2EE] text-[#2D5A46] border-b border-[#C2D4C8] font-jp-rounded font-bold text-[11px]">
                <th className="py-2.5 px-2">車次</th>
                <th className="py-2.5 px-2">Phaya Thai 發車</th>
                <th className="py-2.5 px-2 bg-[#81B29A]/20 text-[#1E3F31]">
                  📍 Makkasan 出發時間
                </th>
                <th className="py-2.5 px-2">BKK 機場抵達</th>
                <th className="py-2.5 px-2">備註標籤</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#C2D4C8]/50 text-[#2D3A32]">
              {arlTimetable.map((row, idx) => (
                <tr
                  key={idx}
                  className={
                    row.isRecommended
                      ? 'bg-[#E8F2EE] font-bold text-[#2D3A32]'
                      : idx % 2 === 0
                      ? 'bg-white'
                      : 'bg-[#F4F7F4]'
                  }
                >
                  <td className="py-2.5 px-2 font-bold text-[#2D5A46]">
                    {row.trainNo}
                  </td>
                  <td className="py-2.5 px-2 font-medium">{row.departure}</td>
                  <td className="py-2.5 px-2 font-bold text-[#2D5A46] bg-[#E8F2EE]/80">
                    {row.makkasan}
                  </td>
                  <td className="py-2.5 px-2 font-medium">{row.phayaThai}</td>
                  <td className="py-2.5 px-2">
                    {row.note ? (
                      <span
                        className={`inline-block text-[10px] font-jp-rounded font-bold px-2 py-0.5 rounded-full ${
                          row.isRecommended
                            ? 'bg-[#2D5A46] text-white'
                            : 'bg-[#E8F2EE] text-[#2D5A46] border border-[#81B29A]'
                        }`}
                      >
                        {row.note}
                      </span>
                    ) : (
                      <span className="text-[10px] text-[#81B29A]">-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-2.5 p-2.5 bg-[#E8F2EE] border border-[#81B29A] rounded-xl text-[11px] text-[#2D5A46] font-jp-body font-medium flex items-start gap-1.5">
          <span>💡</span>
          <span>
            <strong>Day 5 回程建議：</strong>班機為 20:00 起飛，最晚建議搭乘 <strong>16:08 Makkasan 站發車班次 (A-40，16:26 抵達機場)</strong>，預留充足時間辦理託運、退稅與通關！
          </span>
        </div>
      </div>

      {/* BTS / MRT 地鐵導覽 */}
      <div className="map-card bg-white rounded-2xl p-4 border border-[#C2D4C8] jp-card-shadow">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-jp-title font-bold text-[#2D3A32] text-base mb-1 flex items-center gap-1.5">
              <span>🚇</span>
              <span>BTS & MRT 捷運卡與路線</span>
            </h3>
            <p className="text-xs font-jp-body text-[#536458] leading-relaxed">
              BTS 可使用 Rabbit 兔兔卡或用 Line pay 買單程票，MRT 地鐵可以直接刷 Visa / Mastercard 感應進站！
            </p>
          </div>
        </div>
        <a
          href="https://www.bts.co.th/eng/routemap.html"
          target="_blank"
          rel="noopener noreferrer"
          className="map-link inline-flex items-center gap-1.5 bg-[#356859] hover:bg-[#2D5A46] text-white text-[11px] font-jp-rounded font-bold px-3.5 py-2 rounded-xl mt-3 transition-all active:scale-98"
        >
          <span>開啟 BTS 高畫質路線圖 ↗</span>
        </a>
      </div>

      {/* 昭披耶河與運河快艇到站順序 */}
      <div className="map-card bg-white rounded-2xl p-4 border border-[#C2D4C8] jp-card-shadow space-y-3">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <h3 className="font-jp-title font-bold text-[#2D3A32] text-base flex items-center gap-1.5">
              <span>🚤</span>
              <span>水上巴士與運河快艇到站順序 (Boat Station Sequences)</span>
            </h3>
            <p className="text-xs font-jp-body text-[#536458] mt-0.5">
              包含空盛桑運河快艇與昭披耶河快艇的沿途停靠碼頭順序 (按鈕切換展開)：
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsBoatOpen(!isBoatOpen)}
            className="inline-flex items-center gap-1.5 bg-[#E07A5F] hover:bg-[#C06C53] text-white text-xs font-jp-rounded font-bold px-3.5 py-1.5 rounded-xl transition-all cursor-pointer shadow-2xs active:scale-98 ml-auto"
          >
            <span>{isBoatOpen ? '▲ 收起到站順序' : '▼ 展開到站順序'}</span>
          </button>
        </div>

        {isBoatOpen && (
          <div className="space-y-4 pt-1 animate-fadeIn">
            {/* 1. 空盛桑運河快艇 (Khlong Saen Saep Boat) */}
            <div className="p-3 bg-[#F4F7F4] rounded-xl border border-[#C2D4C8] space-y-2.5">
              <div className="flex items-center justify-between flex-wrap gap-1">
                <span className="font-jp-title font-bold text-xs text-[#2D3A32] flex items-center gap-1">
                  <span>🛶</span>
                  <span>1. 空盛桑運河快艇 (Khlong Saen Saep Boat)</span>
                </span>
                <span className="text-[10px] bg-[#2D5A46] text-white font-bold px-2 py-0.5 rounded-full">
                  往 1981 Soul & Dib Bangkok
                </span>
              </div>
              <p className="text-[11px] text-[#536458]">
                路線：Pratunam ↔ Wat Sriboonreung (船票約 ฿10–฿20，主要搭乘段 11 站與 3 站)
              </p>

              {/* 從上到下站點列表 */}
              <div className="bg-white p-3 rounded-lg border border-[#C2D4C8] space-y-1.5 text-[11px] font-jp-body">
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-6 h-6 rounded-full bg-[#F4F7F4] text-[#536458] font-bold flex items-center justify-center text-[10px] shrink-0 border border-[#C2D4C8]">9</span>
                  <span className="text-[#536458]">9. Nana Nuea</span>
                </div>
                <div className="text-[#81B29A] pl-2.5 text-[10px]">↓</div>

                <div className="flex items-center gap-2 text-xs bg-[#E8F2EE] p-2 rounded-lg border border-[#81B29A]">
                  <span className="w-6 h-6 rounded-full bg-[#2D5A46] text-white font-bold flex items-center justify-center text-[10px] shrink-0 shadow-xs">10</span>
                  <div className="flex-1">
                    <span className="font-bold text-[#2D5A46]">10. Nana Chard</span>
                    <span className="ml-2 text-[10px] bg-[#2D5A46] text-white px-1.5 py-0.5 rounded font-bold">🟢 上船點 (Day 2)</span>
                  </div>
                </div>
                <div className="text-[#81B29A] pl-2.5 text-[10px]">↓</div>

                <div className="flex items-center gap-2 text-xs"><span className="w-6 h-6 rounded-full bg-[#F4F7F4] text-[#536458] font-bold flex items-center justify-center text-[10px] shrink-0 border border-[#C2D4C8]">11</span><span className="text-[#536458]">11. Saphan Asok</span></div>
                <div className="text-[#81B29A] pl-2.5 text-[10px]">↓</div>

                <div className="flex items-center gap-2 text-xs"><span className="w-6 h-6 rounded-full bg-[#F4F7F4] text-[#536458] font-bold flex items-center justify-center text-[10px] shrink-0 border border-[#C2D4C8]">12</span><span className="text-[#536458]">12. Prasan Mit</span></div>
                <div className="text-[#81B29A] pl-2.5 text-[10px]">↓</div>

                <div className="flex items-center gap-2 text-xs"><span className="w-6 h-6 rounded-full bg-[#F4F7F4] text-[#536458] font-bold flex items-center justify-center text-[10px] shrink-0 border border-[#C2D4C8]">13</span><span className="text-[#536458]">13. Ital-Thai</span></div>
                <div className="text-[#81B29A] pl-2.5 text-[10px]">↓</div>

                <div className="flex items-center gap-2 text-xs"><span className="w-6 h-6 rounded-full bg-[#F4F7F4] text-[#536458] font-bold flex items-center justify-center text-[10px] shrink-0 border border-[#C2D4C8]">14</span><span className="text-[#536458]">14. Wat Mai Chong Lom</span></div>
                <div className="text-[#81B29A] pl-2.5 text-[10px]">↓</div>

                <div className="flex items-center gap-2 text-xs"><span className="w-6 h-6 rounded-full bg-[#F4F7F4] text-[#536458] font-bold flex items-center justify-center text-[10px] shrink-0 border border-[#C2D4C8]">15</span><span className="text-[#536458]">15. Baan Don Mosque</span></div>
                <div className="text-[#81B29A] pl-2.5 text-[10px]">↓</div>

                <div className="flex items-center gap-2 text-xs"><span className="w-6 h-6 rounded-full bg-[#F4F7F4] text-[#536458] font-bold flex items-center justify-center text-[10px] shrink-0 border border-[#C2D4C8]">16</span><span className="text-[#536458]">16. Thong Lo</span></div>
                <div className="text-[#81B29A] pl-2.5 text-[10px]">↓</div>

                <div className="flex items-center gap-2 text-xs"><span className="w-6 h-6 rounded-full bg-[#F4F7F4] text-[#536458] font-bold flex items-center justify-center text-[10px] shrink-0 border border-[#C2D4C8]">17</span><span className="text-[#536458]">17. Charn Issara</span></div>
                <div className="text-[#81B29A] pl-2.5 text-[10px]">↓</div>

                <div className="flex items-center gap-2 text-xs bg-[#F4F7F4] p-2 rounded-lg border border-[#52796F]">
                  <span className="w-6 h-6 rounded-full bg-[#52796F] text-white font-bold flex items-center justify-center text-[10px] shrink-0 shadow-xs">18</span>
                  <div className="flex-1">
                    <span className="font-bold text-[#2D5A46]">18. Vijit School</span>
                    <span className="ml-2 text-[10px] bg-[#52796F] text-white px-1.5 py-0.5 rounded font-bold">🔵 下船點 (Dib Bangkok)</span>
                  </div>
                </div>
                <div className="text-[#81B29A] pl-2.5 text-[10px]">↓</div>

                <div className="flex items-center gap-2 text-xs"><span className="w-6 h-6 rounded-full bg-[#F4F7F4] text-[#536458] font-bold flex items-center justify-center text-[10px] shrink-0 border border-[#C2D4C8]">19</span><span className="text-[#536458]">19. Klong Tan</span></div>
                <div className="text-[#81B29A] pl-2.5 text-[10px]">↓</div>

                <div className="flex items-center gap-2 text-xs bg-[#E8F2EE] p-2 rounded-lg border border-[#2D5A46]">
                  <span className="w-6 h-6 rounded-full bg-[#2D5A46] text-white font-bold flex items-center justify-center text-[10px] shrink-0 shadow-xs">20</span>
                  <div className="flex-1">
                    <span className="font-bold text-[#2D5A46]">20. The Mall 3</span>
                    <span className="ml-2 text-[10px] bg-[#2D5A46] text-white px-1.5 py-0.5 rounded font-bold">🔴 下船點 (1981 Soul)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. 昭披耶河快艇 (Chao Phraya Express Boat - Orange Flag) */}
            <div className="p-3 bg-[#F4F7F4] rounded-xl border border-[#C2D4C8] space-y-2.5">
              <div className="flex items-center justify-between flex-wrap gap-1">
                <span className="font-jp-title font-bold text-xs text-[#2D3A32] flex items-center gap-1">
                  <span>⛵</span>
                  <span>2. 昭披耶河快艇 橘旗 / Urban Line (Chao Phraya Boat)</span>
                </span>
                <span className="text-[10px] bg-[#356859] text-white font-bold px-2 py-0.5 rounded-full">
                  往 Warehouse 30 & Songwat
                </span>
              </div>
              <p className="text-[11px] text-[#536458]">
                航線：Nonthaburi ↔ Wat Rajsingkorn (固定船票約 ฿16，主要搭乘 6 站與 3 站)
              </p>

              {/* 從上到下站點列表 */}
              <div className="bg-white p-3 rounded-lg border border-[#C2D4C8] space-y-1.5 text-[11px] font-jp-body">
                <div className="flex items-center gap-2 text-xs bg-[#EAF2EF] p-2 rounded-lg border border-[#81B29A]">
                  <span className="w-6 h-6 rounded-full bg-[#2D5A46] text-white font-bold flex items-center justify-center text-[9px] shrink-0 shadow-xs">N9</span>
                  <div className="flex-1">
                    <span className="font-bold text-[#2D5A46]">Tha Chang (N9)</span>
                    <span className="ml-2 text-[10px] bg-[#2D5A46] text-white px-1.5 py-0.5 rounded font-bold">🟢 上船點 (大皇宮)</span>
                  </div>
                </div>
                <div className="text-[#81B29A] pl-2.5 text-[10px]">↓</div>

                <div className="flex items-center gap-2 text-xs"><span className="w-6 h-6 rounded-full bg-[#F4F7F4] text-[#536458] font-bold flex items-center justify-center text-[9px] shrink-0 border border-[#C2D4C8]">N8</span><span className="text-[#536458]">Tha Tian (N8)</span></div>
                <div className="text-[#81B29A] pl-2.5 text-[10px]">↓</div>

                <div className="flex items-center gap-2 text-xs"><span className="w-6 h-6 rounded-full bg-[#F4F7F4] text-[#536458] font-bold flex items-center justify-center text-[9px] shrink-0 border border-[#C2D4C8]">N7</span><span className="text-[#536458]">Rajinee (N7)</span></div>
                <div className="text-[#81B29A] pl-2.5 text-[10px]">↓</div>

                <div className="flex items-center gap-2 text-xs"><span className="w-6 h-6 rounded-full bg-[#F4F7F4] text-[#536458] font-bold flex items-center justify-center text-[9px] shrink-0 border border-[#C2D4C8]">N6</span><span className="text-[#536458]">Memorial Bridge (N6)</span></div>
                <div className="text-[#81B29A] pl-2.5 text-[10px]">↓</div>

                <div className="flex items-center gap-2 text-xs bg-[#F4F7F4] p-2 rounded-lg border border-[#52796F]">
                  <span className="w-6 h-6 rounded-full bg-[#52796F] text-white font-bold flex items-center justify-center text-[9px] shrink-0 shadow-xs">N5</span>
                  <div className="flex-1">
                    <span className="font-bold text-[#2D5A46]">Ratchawong (N5)</span>
                    <span className="ml-2 text-[10px] bg-[#52796F] text-white px-1.5 py-0.5 rounded font-bold">🔵 下船點 (Ega / Songwat)</span>
                  </div>
                </div>
                <div className="text-[#81B29A] pl-2.5 text-[10px]">↓</div>

                <div className="flex items-center gap-2 text-xs"><span className="w-6 h-6 rounded-full bg-[#F4F7F4] text-[#536458] font-bold flex items-center justify-center text-[9px] shrink-0 border border-[#C2D4C8]">N4</span><span className="text-[#536458]">Marine Dept (N4)</span></div>
                <div className="text-[#81B29A] pl-2.5 text-[10px]">↓</div>

                <div className="flex items-center gap-2 text-xs bg-[#E8F2EE] p-2 rounded-lg border border-[#356859]">
                  <span className="w-6 h-6 rounded-full bg-[#356859] text-white font-bold flex items-center justify-center text-[9px] shrink-0 shadow-xs">N3</span>
                  <div className="flex-1">
                    <span className="font-bold text-[#2D5A46]">Si Phraya (N3)</span>
                    <span className="ml-2 text-[10px] bg-[#356859] text-white px-1.5 py-0.5 rounded font-bold">🔴 下船點 (Warehouse 30)</span>
                  </div>
                </div>
                <div className="text-[#81B29A] pl-2.5 text-[10px]">↓</div>

                <div className="flex items-center gap-2 text-xs"><span className="w-6 h-6 rounded-full bg-[#E8F2EE] text-[#2D5A46] font-bold flex items-center justify-center text-[9px] shrink-0 border border-[#81B29A]">C</span><span className="text-[#2D5A46] font-bold">Sathorn (Central / 轉乘 BTS 鄭王橋)</span></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Grab / Bolt 常用泰文語句卡 */}
      <div className="map-card bg-white rounded-2xl p-4 border border-[#C2D4C8] jp-card-shadow">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-jp-title font-bold text-[#2D3A32] text-base flex items-center gap-1.5">
            <span>🚕</span>
            <span>Grab / Bolt 溝通泰文卡</span>
          </h3>
          <span className="text-[10px] bg-[#2D5A46] text-white font-jp-rounded font-bold px-2 py-0.5 rounded-full">
            出示司機 📲
          </span>
        </div>

        <div className="space-y-2.5 text-xs font-jp-body">
          {thaiPhrases.map((item, idx) => (
            <div
              key={idx}
              className="p-3 bg-[#E8F2EE] rounded-xl border border-[#81B29A] relative"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-jp-rounded font-bold text-[#2D3A32] text-xs flex items-center gap-1">
                  <span>{item.emoji}</span>
                  <span>{item.title}</span>
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy(item.thai, idx)}
                  className="text-[10px] font-jp-rounded font-bold bg-[#2D5A46] hover:bg-[#1E3F31] text-white px-2.5 py-1 rounded-lg cursor-pointer transition-colors"
                >
                  {copiedIndex === idx ? '已複製! 📋' : '複製泰文'}
                </button>
              </div>
              <p className="text-base font-bold text-[#2D5A46] tracking-wide my-1">
                {item.thai}
              </p>
              <p className="text-[11px] text-[#536458] font-jp-body">
                {item.phonetic}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

