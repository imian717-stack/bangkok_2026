import React from 'react';
import { Spot } from '../types';

interface SpotCardProps {
  spot: Spot;
  index: number;
  onOpenModal: (key: string) => void;
}

// Helper to pick the appropriate transport header icon matching the mode of transport
const getTransportHeaderIcon = (summary: string, steps: string[] = []): string => {
  const combined = (summary + ' ' + steps.join(' ')).toLowerCase();
  
  if (combined.includes('arl') || combined.includes('機場快線')) return '🚆';
  if (combined.includes('渡輪') || combined.includes('船') || combined.includes('碼頭') || combined.includes('iconsiam')) return '🚤';
  if (combined.includes('bts') || combined.includes('空軌')) return '🚝';
  if (combined.includes('mrt') || combined.includes('地鐵')) return '🚇';
  if (combined.includes('步行') || combined.includes('走路') || combined.includes('徒步')) {
    // If it's mostly walking
    if (!combined.includes('grab') && !combined.includes('bts') && !combined.includes('mrt')) {
      return '🚶‍♂️';
    }
  }
  if (combined.includes('grab') || combined.includes('bolt') || combined.includes('計程車') || combined.includes('車程')) return '🚕';
  if (combined.includes('dmk') || combined.includes('bkk') || combined.includes('機場')) return '✈️';
  if (combined.includes('嘟嘟車') || combined.includes('tuk tuk')) return '🛺';
  if (combined.includes('巴士') || combined.includes('公車')) return '🚌';

  return '🚕';
};

// Helper to check if a step line already starts with an emoji/symbol
const startsWithEmoji = (text: string): boolean => {
  const trimmed = text.trim();
  return /^[\p{Extended_Pictographic}\u2600-\u27BF\u1F300-\u1F9FF]/u.test(trimmed);
};

// Helper to extract English place name inside parentheses for step quick copying
const extractEnglishNameFromStep = (step: string): string | null => {
  const matches = step.match(/\(([^)]+)\)/g);
  if (!matches) return null;
  for (const match of matches) {
    const inner = match.replace(/[()]/g, '').trim();
    // Exclude currency, short station codes like E3, W1, times or notes
    if (
      /^[A-Za-z0-9\s&.',-]+$/.test(inner) &&
      inner.length >= 3 &&
      !inner.startsWith('THB') &&
      !/^(E\d|W\d|N\d|S\d)$/i.test(inner)
    ) {
      return inner;
    }
  }
  return null;
};

export const SpotCard: React.FC<SpotCardProps> = ({ spot, index, onOpenModal }) => {
  const [copied, setCopied] = React.useState(false);
  const [copiedStepIdx, setCopiedStepIdx] = React.useState<number | null>(null);

  const englishCopyText = spot.mapQuery || spot.title.replace(/[\u4e00-\u9fa5\u3000-\u303f\uff00-\uffef]/g, '').trim() || spot.title;

  const handleCopyEnglishText = () => {
    navigator.clipboard.writeText(englishCopyText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyStepText = (textToCopy: string, stepIdx: number) => {
    navigator.clipboard.writeText(textToCopy);
    setCopiedStepIdx(stepIdx);
    setTimeout(() => setCopiedStepIdx(null), 2000);
  };

  const mapSearchUrl = spot.mapQuery
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        spot.mapQuery
      )}`
    : null;

  return (
    <article className="spot-card relative bg-white rounded-2xl p-4 my-3.5 border border-[#E2D8C7] jp-card-shadow jp-card-shadow-hover transition-all">
      {/* Top Tag & Number Badge */}
      <div className="flex items-center justify-between mb-2.5">
        {/* Spot Number Japanese Stamp Tag */}
        <div className="inline-flex items-center gap-1 bg-[#EAF2EF] text-[#2D5A46] text-[11px] font-jp-rounded font-bold px-3 py-0.5 rounded-full border border-[#81B29A]">
          <span>SPOT</span>
          <span className="text-xs">#{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
        </div>

        {/* Time Pill Badge */}
        {spot.time && (
          <div className="inline-flex items-center gap-1 bg-[#FEF6EC] text-[#E07A5F] text-xs font-jp-rounded font-bold px-3 py-0.5 rounded-full border border-[#F4A261]/40">
            <time>{spot.time}</time>
          </div>
        )}
      </div>

      {/* 景點內容 Box */}
      <div className="content-box">
        {/* 可折疊交通細節 details */}
        {spot.transport && (
          <details className="transport-details mb-3 bg-[#F8F5EE] rounded-xl p-2.5 border border-[#E2D8C7] text-xs group">
            <summary className="cursor-pointer font-jp-rounded font-bold text-[#3D352E] text-[11px] hover:opacity-85 transition-opacity flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <span className="text-sm">
                  {getTransportHeaderIcon(spot.transport.summary, spot.transport.steps)}
                </span>
                <span>{spot.transport.summary}</span>
              </span>
              <span className="text-[10px] bg-white border border-[#E2D8C7] rounded-md px-1.5 py-0.5 group-open:rotate-180 transition-transform font-bold text-[#6E6359]">
                ▼
              </span>
            </summary>
            <div className="transport-content p-2.5 text-xs text-[#3D352E] border-t border-dashed border-[#E2D8C7] space-y-2 mt-2 bg-white rounded-lg font-jp-body">
              {spot.transport.steps.map((step, idx) => {
                const hasEmoji = startsWithEmoji(step);
                const stepCopyTarget = extractEnglishNameFromStep(step);
                return (
                  <div key={idx} className="flex flex-wrap items-start justify-between gap-1.5 py-1 border-b border-[#F4EFE6] last:border-b-0 last:py-0">
                    <div className="flex items-start gap-1.5 flex-1 min-w-[180px]">
                      {!hasEmoji && <span className="text-[#E07A5F] font-bold shrink-0">👉</span>}
                      <span className="leading-relaxed">{step}</span>
                    </div>
                    {stepCopyTarget && (
                      <button
                        type="button"
                        onClick={() => handleCopyStepText(stepCopyTarget, idx)}
                        className={`text-[10px] font-jp-rounded font-bold px-2 py-0.5 rounded-md border transition-all shrink-0 cursor-pointer ${
                          copiedStepIdx === idx
                            ? 'bg-[#EAF2EF] text-[#2D5A46] border-[#81B29A] ring-1 ring-[#81B29A]/30 font-bold'
                            : 'bg-[#F8F5EE] text-[#6E6359] border-[#E2D8C7] hover:bg-[#EAE4D8] hover:text-[#3D352E]'
                        }`}
                        title={`複製中轉英文地名: ${stepCopyTarget}`}
                      >
                        {copiedStepIdx === idx ? '✅ 已複製！' : `📋 複製: ${stepCopyTarget}`}
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </details>
        )}

        {/* 景點名稱 */}
        <h3 className="spot-name font-jp-title text-base font-bold text-[#3D352E] leading-snug mb-1 flex items-start gap-1">
          <span>{spot.title}</span>
        </h3>

        {/* 營業時間 / 開放時間 (簡潔淡雅無外框文字) */}
        {spot.openingHours && (
          <p className="spot-hours text-[11px] font-jp-body text-[#8C8275] mb-1.5 flex items-center gap-1">
            <span className="text-[#E07A5F]">🕒</span>
            <span>{spot.openingHoursLabel || '營業時間'}：{spot.openingHours}</span>
          </p>
        )}

        {/* 景點描述 */}
        <p className="spot-description text-xs font-jp-body text-[#6E6359] leading-relaxed mb-2.5">
          {spot.description}
        </p>

        {/* 圖片展示 (例如 AIRPORTELs 寄放行李地圖) */}
        {spot.imageUrl && (
          <div className="spot-image my-2.5 rounded-xl overflow-hidden border border-[#E2D8C7] bg-[#F8F5EE]">
            <img
              src={spot.imageUrl}
              alt={spot.title}
              referrerPolicy="no-referrer"
              className="w-full object-contain max-h-56 bg-white"
            />
          </div>
        )}

        {/* 備註欄位 (日系清新溫馨便箋) */}
        {spot.note && (
          <div className="spot-note my-2 text-[11px] font-jp-body text-[#C06C53] bg-[#FEF6EC] border border-[#F4A261]/40 rounded-xl p-2.5 flex items-start gap-1.5 leading-relaxed">
            <span className="text-xs shrink-0">💡</span>
            <span>{spot.note}</span>
          </div>
        )}

        {/* 價格註記 */}
        {spot.price && (
          <div className="inline-flex items-center gap-1 text-[11px] bg-[#EBF3F7] text-[#457B9D] font-jp-rounded font-bold px-2.5 py-0.5 rounded-lg border border-[#A8DADC] mb-2.5 mr-2">
            <span>🏷️</span>
            <span>{spot.price}</span>
          </div>
        )}

        {/* 按鈕區域：地圖導航 & 彈窗詳情 & 複製名稱 (位於最右側) */}
        <div className="flex flex-wrap items-center gap-2 mt-2 pt-2 border-t border-[#F0EBE1]">
          {mapSearchUrl && (
            <a
              href={mapSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="map-link inline-flex items-center gap-1.5 bg-[#6B9080] hover:bg-[#527364] text-white text-[11px] font-jp-rounded font-bold px-3 py-1.5 rounded-xl transition-all active:scale-98"
            >
              <span>🧭 地圖導航 ↗</span>
            </a>
          )}

          {spot.menuUrl && (
            <a
              href={spot.menuUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="menu-link inline-flex items-center gap-1.5 bg-[#F4A261] hover:bg-[#E07A5F] text-white text-[11px] font-jp-rounded font-bold px-3 py-1.5 rounded-xl transition-all active:scale-98"
            >
              <span>🍽️ 官網菜單 ↗</span>
            </a>
          )}

          {spot.modalKey && (
            <button
              type="button"
              onClick={() => onOpenModal(spot.modalKey!)}
              className="nav-button inline-flex items-center gap-1.5 bg-[#E07A5F] hover:bg-[#C06C53] text-white text-[11px] font-jp-rounded font-bold px-3 py-1.5 rounded-xl transition-all active:scale-98 cursor-pointer"
            >
              <span>{spot.modalLabel || '📄 查看飯店／憑證'}</span>
            </button>
          )}

          {/* 複製名稱按鈕 (叫車/搜尋用 - 統一放置最右側) */}
          {!spot.hideCopyButton && (
            <button
              type="button"
              onClick={handleCopyEnglishText}
              className={`copy-en-button ml-auto inline-flex items-center gap-1.5 text-[11px] font-jp-rounded font-bold px-3 py-1.5 rounded-xl border transition-all active:scale-98 cursor-pointer ${
                copied
                  ? 'bg-[#EAF2EF] text-[#2D5A46] border-[#81B29A] ring-2 ring-[#81B29A]/30 font-bold'
                  : 'bg-[#F8F5EE] text-[#6E6359] border-[#E2D8C7] hover:bg-[#EAE4D8] hover:text-[#3D352E]'
              }`}
              title="複製英文名稱給 Grab / 計程車司機"
            >
              <span>{copied ? '✅ 已複製名稱！' : '📋 複製名稱'}</span>
            </button>
          )}
        </div>
      </div>
    </article>
  );
};
