export interface TransportDetail {
  summary: string;
  steps: string[];
}

export interface Spot {
  id: string;
  time: string;
  title: string;
  description: string;
  openingHours?: string;
  openingHoursLabel?: string;
  note?: string;
  price?: string;
  mapQuery?: string;
  transport?: TransportDetail;
  modalKey?: string;
  modalLabel?: string;
  imageUrl?: string;
  menuUrl?: string;
  isTransportCard?: boolean;
  hideCopyButton?: boolean;
}

export interface DayItinerary {
  dayNumber: number;
  date: string;
  title: string;
  spots: Spot[];
}

export interface WeatherDay {
  day: string;
  dateLabel: string;
  location: string;
  icon: string;
  highTemp: number;
  lowTemp: number;
  morningTemp: number;
  noonTemp: number;
  eveningTemp: number;
  clothingTip: string;
}

export interface TimetableRow {
  trainNo: string;
  departure: string; // Suvarnabhumi or Phaya Thai departure
  makkasan: string;
  phayaThai: string; // or Suvarnabhumi arrival
  direction?: 'city-to-airport' | 'airport-to-city';
  note?: string;
  isRecommended?: boolean;
}

export interface ModalContentData {
  title: string;
  contentHtml: string;
}
