import React from 'react';

// Japanese Stamp Seal "旅のしおり" (Travel Guidebook Stamp)
export const JapaneseShioriBadge: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="32" cy="32" r="28" fill="#EAF2EF" stroke="#6B9080" strokeWidth="2.5" strokeDasharray="4 2"/>
    <circle cx="32" cy="32" r="22" fill="#FFFFFF" stroke="#E07A5F" strokeWidth="1.5"/>
    <text x="32" y="28" textAnchor="middle" fill="#E07A5F" fontSize="9" fontWeight="900" fontFamily="M PLUS Rounded 1c, Zen Maru Gothic, sans-serif">旅の</text>
    <text x="32" y="42" textAnchor="middle" fill="#2D5A46" fontSize="10" fontWeight="900" fontFamily="M PLUS Rounded 1c, Zen Maru Gothic, sans-serif">しおり</text>
  </svg>
);

// Japanese Film Camera Doodle
export const CameraStampDoodle: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="8" y="18" width="48" height="34" rx="8" fill="#FFFFFF" stroke="#3D352E" strokeWidth="2.5"/>
    <path d="M22 18L26 12H38L42 18H22Z" fill="#F4A261" stroke="#3D352E" strokeWidth="2"/>
    <circle cx="32" cy="35" r="11" fill="#EBF3F7" stroke="#3D352E" strokeWidth="2.5"/>
    <circle cx="32" cy="35" r="6" fill="#457B9D"/>
    <circle cx="48" cy="25" r="2.5" fill="#E07A5F"/>
  </svg>
);

// Soft Japanese Style Palm Tree
export const PalmTreeDoodle: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M28 56C28 42 32 30 32 24" stroke="#8D7B68" strokeWidth="3" strokeLinecap="round"/>
    {/* Leaves */}
    <path d="M32 24C22 16 12 20 12 20C12 20 22 26 32 26" fill="#81B29A" stroke="#3D352E" strokeWidth="1.5"/>
    <path d="M32 24C42 16 52 20 52 20C52 20 42 26 32 26" fill="#A8DADC" stroke="#3D352E" strokeWidth="1.5"/>
    <path d="M32 24C26 12 34 8 34 8C34 8 36 18 32 24" fill="#6B9080" stroke="#3D352E" strokeWidth="1.5"/>
  </svg>
);

// Japanese Soda / Coconut Cup
export const CoconutDrinkDoodle: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M20 20L24 54H40L44 20H20Z" fill="#EBF3F7" stroke="#3D352E" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M22 26H42V40H22V26Z" fill="#A8DADC" opacity="0.8"/>
    {/* Straw */}
    <path d="M30 20L24 6" stroke="#E07A5F" strokeWidth="3" strokeLinecap="round"/>
    {/* Ice cubes */}
    <rect x="26" y="28" width="6" height="6" rx="1" fill="#FFFFFF" stroke="#3D352E" strokeWidth="1"/>
    <rect x="34" y="32" width="5" height="5" rx="1" fill="#FFFFFF" stroke="#3D352E" strokeWidth="1"/>
    {/* Cherry */}
    <circle cx="40" cy="18" r="4.5" fill="#E07A5F"/>
  </svg>
);

// Japanese Sparkle / Cute Star ✦
export const SparkleDoodle: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z" fill="#F4A261" stroke="#3D352E" strokeWidth="1.2"/>
  </svg>
);

// Cute Japanese Tuk Tuk Illustration
export const TukTukDoodle: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M10 26C10 18 22 12 38 12C50 12 58 18 58 26H10Z" fill="#A8DADC" stroke="#3D352E" strokeWidth="2.5"/>
    <path d="M12 26H54V42H12V26Z" fill="#E07A5F" stroke="#3D352E" strokeWidth="2.5"/>
    <path d="M40 26H54L58 34V42H40V26Z" fill="#6B9080" stroke="#3D352E" strokeWidth="2"/>
    <circle cx="20" cy="46" r="6" fill="#3D352E"/>
    <circle cx="20" cy="46" r="2.5" fill="#FFFFFF"/>
    <circle cx="46" cy="46" r="6" fill="#3D352E"/>
    <circle cx="46" cy="46" r="2.5" fill="#FFFFFF"/>
    <circle cx="58" cy="38" r="3" fill="#F4A261"/>
  </svg>
);

// Japanese Tropical Flower
export const HibiscusFlowerDoodle: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="32" cy="32" r="20" fill="#E07A5F" stroke="#3D352E" strokeWidth="2"/>
    <circle cx="32" cy="32" r="12" fill="#F4A261"/>
    <circle cx="32" cy="32" r="6" fill="#FEF6EC"/>
  </svg>
);

// Japanese Mango Illustration
export const MangoDoodle: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M26 16C42 12 54 26 50 42C46 56 24 56 16 46C8 36 12 20 26 16Z" fill="#F4A261" stroke="#3D352E" strokeWidth="2.5"/>
    <path d="M28 12C22 4 10 8 14 16Z" fill="#6B9080" stroke="#3D352E" strokeWidth="1.5"/>
  </svg>
);

// Japanese Sun Illustration
export const TropicalSunDoodle: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="32" cy="32" r="16" fill="#F4A261" stroke="#3D352E" strokeWidth="2.5"/>
    <circle cx="32" cy="32" r="10" fill="#FEF6EC"/>
    <path d="M32 6V12M32 52V58M6 32H12M52 32H58" stroke="#3D352E" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);
