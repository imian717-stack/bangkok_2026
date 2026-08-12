import { DayItinerary, WeatherDay, TimetableRow, ModalContentData } from '../types';

export const bangkokItineraries: DayItinerary[] = [
  {
    dayNumber: 1,
    date: '8/23 (日)',
    title: 'Day 1：啟程抵達曼谷 & 入住 Miami Hotel',
    spots: [
      {
        id: 'spot-1-1',
        time: '14:30 - 18:30',
        title: '🛫 桃園國際機場',
        description: '14:30抵達機場，前往環亞貴賓室D區',
        note: '順便前往泰國亞航櫃檯區測量手提行李箱尺寸',
        modalKey: 'flight-outbound',
        modalLabel: '✈️ 機票詳情',
        hideCopyButton: true,
      },
      {
        id: 'spot-1-2',
        time: '21:20 - 22:20',
        title: '🛬 曼谷廊曼機場',
        description: '辦理入境通關、領取行李與確認開通 eSIM 網路。',
        hideCopyButton: true,
      },
      {
        id: 'spot-1-3',
        time: '22:20 - 23:00',
        title: '🏨 入住 Miami Hotel Bangkok',
        description: '前往 Miami Hotel 辦理入住手續（會收押金 ฿500）。',
        mapQuery: 'Miami Hotel Bangkok',
        modalKey: 'hotel-address',
        modalLabel: '🏨 飯店憑證/坐車資訊',
        transport: {
          summary: '交通：DMK 機場 >> Miami Hotel',
          steps: [
            '🚕 KKday 機場接送，至一樓 5 號門上車（司機會等 120 分鐘）',
            '⏱️ 車程約 30-40 分鐘',
          ],
        },
      },
    ],
  },
  {
    dayNumber: 2,
    date: '8/24 (一)',
    title: 'Day 2：Vasu 換泰幣、Breakfast Story 早午餐、1981 Soul 百貨、Dib Bangkok、Keawloon BKK 米其林餐廳與 Mae Varee 芒果糯米飯',
    spots: [
      {
        id: 'spot-2-1',
        time: '10:10 - 10:40',
        title: '💵 Vasu Exchange',
        description: '兌換泰銖現金。',
        openingHours: '09:00 - 18:00 (週日公休)',
        mapQuery: 'Vasu Exchange Bangkok',
        transport: {
          summary: '交通：Miami Hotel >> Vasu Exchange',
          steps: ['🚶‍♂️ 步行 280m'],
        },
      },
      {
        id: 'spot-2-2',
        time: '10:55 - 12:30',
        title: '🥞 Breakfast Story Eleven',
        description: '享用早午餐、鬆餅與咖啡。',
        openingHours: '07:00–23:00',
        menuUrl: 'https://www.breakfaststorybkk.com/menu',
        mapQuery: 'Breakfast Story Phrom Phong Bangkok',
        transport: {
          summary: '交通：Vasu Exchange >> Breakfast Story Eleven',
          steps: ['🚶‍♂️ 步行 500m'],
        },
      },
      {
        id: 'spot-2-3',
        time: '13:50 - 16:00',
        title: '🛍️ 1981 Soul&Sold (百貨公司)',
        description: '風格潮流選物百貨公司購物商場，集結設計品牌與質感咖啡。',
        openingHours: '11:00–22:00',
        mapQuery: '1981 Soul and Sold Bangkok',
        transport: {
          summary: '交通：Breakfast Story >> 1981 Soul&Sold',
          steps: [
            '🚕 12:30 - 12:50 搭乘 Grab (約 ฿110) 至 Nana Chard 碼頭',
            '🚤 13:15 - 13:50 搭乘運河快艇 Khlong Saen Saep Express Boat (11 站：Nana Chard > The Mall 3 碼頭，船票 ฿19)',
            '🚶‍♂️ 出碼頭步行 400m 抵達 1981 Soul&Sold',
            '🟢 備選：直接搭乘 Grab 直達 (約 ฿220，視塞車狀況)',
          ],
        },
      },
      {
        id: 'spot-2-4',
        time: '16:50 - 17:10',
        title: '🖼️ Dib Bangkok',
        description: '曼谷最新藝文展覽館外觀建築巡禮打卡',
        openingHours: '10:00 - 19:00',
        note: '無展覽 | 可看外面庭園與建築',
        mapQuery: 'Dib Bangkok',
        transport: {
          summary: '交通：1981 Soul&Sold >> Dib Bangkok',
          steps: [
            '🚤 從 The Mall 3 碼頭搭乘運河快艇 3 站至 Vijitvittaya School 碼頭 (船票 ฿17)',
            '🚕 搭乘 Grab 直達 Dib Bangkok (約 ฿155)',
            '🟢 備選：直接搭 Grab 可能更便宜 (約 ฿115)，若不塞車可坐車前往',
          ],
        },
      },
      {
        id: 'spot-2-5',
        time: '17:30 - 19:00',
        title: '🥟 Keawloon BKK',
        description: '已預約，米其林餐盤南泰私廚。',
        openingHours: '17:30 - 21:30',
        note: '已預約',
        mapQuery: 'Keawloon BKK',
        modalKey: 'keawloon-menu',
        modalLabel: '🍽️ 菜單與翻譯',
        transport: {
          summary: '交通：Dib Bangkok >> Keawloon BKK',
          steps: ['🚶‍♂️ 步行 550m'],
        },
      },
      {
        id: 'spot-2-6',
        time: '19:15 - 19:30',
        title: '🥭 Mae Varee',
        description: '曼谷知名芒果糯米飯名店，外帶品嚐香甜三色芒果糯米飯。',
        openingHours: '06:00 - 22:00',
        mapQuery: 'Mae Varee Mango Sticky Rice',
        transport: {
          summary: '交通：Keawloon BKK >> Mae Varee',
          steps: ['🚕 搭乘 Grab (約 ฿76)'],
        },
      },
      {
        id: 'spot-2-7',
        time: '19:30 -',
        title: '🏨 回飯店 Miami Hotel',
        description: '返回 Miami Hotel 休息放鬆，或安排周邊泰式按摩。',
        mapQuery: 'Miami Hotel Bangkok',
      },
    ],
  },
  {
    dayNumber: 3,
    date: '8/25 (二)',
    title: 'Day 3：飯店玩水、Krua Khun Puk、曼谷藝術中心、湯普生博物館與 Rajadamnern 泰拳賽',
    spots: [
      {
        id: 'spot-3-0',
        time: '10:00 - 12:00',
        title: '🏊‍♂️ 飯店玩水！(Miami Hotel 泳池)',
        description: '在 Miami Hotel 復古美式戶外泳池游泳玩水放鬆。',
        openingHours: '08:00 至 20:00',
        openingHoursLabel: '開放時間',
        hideCopyButton: true,
      },
      {
        id: 'spot-3-1',
        time: '12:10 - 13:30',
        title: '🍲 Krua Khun Puk',
        description: '平價美味道地泰式傳統料理。',
        openingHours: '08:00 - 22:00',
        mapQuery: 'Krua Khun Puk Bangkok',
        transport: {
          summary: '交通：Miami Hotel >> Krua Khun Puk',
          steps: ['🚶‍♂️ 步行 160m (2 分鐘)'],
        },
      },
      {
        id: 'spot-3-2',
        time: '14:00 - 16:00',
        title: '🎨 曼谷市立藝術文化中心 (BACC)',
        description: '參觀當代藝術展覽、特色手創選物與咖啡館。',
        openingHours: '10:00–20:00',
        mapQuery: 'Bangkok Art and Culture Centre',
        transport: {
          summary: '交通：Krua Khun Puk >> BACC',
          steps: [
            '🚶‍♂️ 步行 150m 至 BTS Nana (E3) 站',
            '🚝 BTS Sukhumvit 線：Nana (E3) > Siam 站',
            '🚝 轉乘 Silom 線：Siam 站 > National Stadium 站 (W1)',
            '🚶‍♂️ 出站步行 240m 抵達 BACC',
          ],
        },
      },
      {
        id: 'spot-3-3',
        time: '16:10 - 17:00',
        title: '🏡 湯普生博物館 (Jim Thompson House)',
        description: '探訪傳奇泰絲大亨的幽靜泰式傳統木造建築與藝術珍藏。',
        openingHours: '10:00–17:00',
        mapQuery: 'Jim Thompson House',
        transport: {
          summary: '交通：BACC >> 湯普生博物館',
          steps: ['🚶‍♂️ 往運河步行 500m'],
        },
      },
      {
        id: 'spot-3-4',
        time: '18:00 - 23:00',
        title: '🥊 Rajadamnern Muay Thai Stadium 泰拳比賽',
        description: '體驗曼谷最古老正宗的頂級泰拳對決！',
        note: '18:00 入場 | 19:00 開打 | 禁帶外食 | 館內有餐點販售',
        mapQuery: 'Rajadamnern Muay Thai Stadium',
        transport: {
          summary: '交通：湯普生博物館 >> 泰拳體育館',
          steps: [
            '🚕 搭乘 Grab (約 ฿188)',
            '⏱️ 遇下班尖峰建議預留 1 小時車程',
          ],
        },
      },
      {
        id: 'spot-3-5',
        time: '23:00 -',
        title: '🍜 朱拉隆功夜市吃宵夜',
        description: '賽後前往熱門朱拉隆功夜市享用道地泰式美食宵夜。',
        openingHours: '16:00 - 00:00',
        mapQuery: 'Chulalongkorn Night Market Bangkok',
      },
      {
        id: 'spot-3-6',
        time: '',
        title: '🏨 回飯店 Miami Hotel',
        description: '搭乘 Grab 或計程車返回 Miami Hotel 休息。',
        mapQuery: 'Miami Hotel Bangkok',
      },
    ],
  },
  {
    dayNumber: 4,
    date: '8/26 (三)',
    title: 'Day 4：Krua Apsorn、K. Panich 芒果糯米飯、Warehouse 30、TCDC 與 Songwat 文青老街',
    spots: [
      {
        id: 'spot-4-1',
        time: '12:00 - 13:30',
        title: '🦀 Krua Apsorn @Dinso (午餐)',
        description: '踩點地球娛樂室景點，米其林必比登推薦泰菜名店，必點蟹肉煎蛋與馬薩曼咖哩，菜單有中文',
        openingHours: '10:30 - 20:30',
        mapQuery: 'Krua Apsorn Dinso',
        transport: {
          summary: '交通：Miami Hotel >> Krua Apsorn',
          steps: [
            '🚶‍♂️ 步行 700m 到 MRT Sukhumvit 站',
            '🚇 搭乘 MRT 藍色線至 Sam Yot 站',
            '🚕 搭乘 Grab (約 ฿106) 直達 Krua Apsorn',
          ],
        },
      },
      {
        id: 'spot-4-2',
        time: '13:40 - 14:00',
        title: '🥭 K. Panich Sticky Rice (百年芒果糯米飯)',
        description: '開業超過 90 年的傳奇老字號，米香濃郁美味。',
        openingHours: '07:00 - 18:00',
        mapQuery: 'Kor Panich Mango Sticky Rice',
        transport: {
          summary: '交通：Krua Apsorn >> K. Panich',
          steps: ['🚶‍♂️ 步行 650m (約 8 分鐘)'],
        },
      },
      {
        id: 'spot-4-3',
        time: '14:37 - 16:37',
        title: '🏭 Warehouse 30 文創園區',
        description: '二次大戰老倉庫改建的選品、畫廊與咖啡空間，有Hay與一些生活用品選品店',
        openingHours: '11:00 - 20:00',
        mapQuery: 'Warehouse 30 Bangkok',
        transport: {
          summary: '交通：K. Panich >> Warehouse 30',
          steps: [
            '🚶‍♂️ 14:00 步行 650m 至 Tha Chang 碼頭',
            '🚤 14:24 搭乘昭披耶河快艇 (橘旗) 6 站至 Si Phraya 碼頭',
            '🚶‍♂️ 出 Si Phraya 碼頭步行 100m 抵達 Warehouse 30',
          ],
        },
      },
      {
        id: 'spot-4-4',
        time: '16:37 - 18:00',
        title: '📐 TCDC Bangkok (泰國創意設計中心)',
        description: '舊郵政總局內，展出泰國頂尖創意與設計圖書館。',
        openingHours: '10:30 - 19:00 (週一休)',
        mapQuery: 'TCDC Bangkok',
      },
      {
        id: 'spot-4-5',
        time: '18:20 - 19:30',
        title: '🍽️ Ega / Songwat (晚餐)',
        description: '位於嵩越路文青舊街區的特色傳統泰式風格餐館。',
        openingHours: '08:00 - 22:00',
        mapQuery: 'Ega Songwat Bangkok',
        transport: {
          summary: '交通：TCDC >> Ega / Songwat',
          steps: [
            '🚶‍♂️ 18:00 步行至 CAT Tower 碼頭',
            '🚤 搭乘渡輪 3 站：CAT Tower > Ratchawong 碼頭',
            '🚶‍♂️ 出 Ratchawong 碼頭步行 300m 抵達 Ega',
          ],
        },
      },
      {
        id: 'spot-4-6',
        time: '19:30 - 20:30',
        title: '🌊 Songwat Rd 閒晃到 Baan Rim Naam Songwat',
        description: 'Songwat Rd 閒晃到 Baan Rim Naam Songwat 看河',
        openingHours: '15:00 - 22:00',
        mapQuery: 'Baan Rim Naam Songwat',
      },
      {
        id: 'spot-4-7',
        time: '20:30 -',
        title: '🏨 回飯店 Miami Hotel',
        description: '搭乘 Grab 或計程車返回 Miami Hotel 休息。',
        mapQuery: 'Miami Hotel Bangkok',
      },
    ],
  },
  {
    dayNumber: 5,
    date: '8/27 (四)',
    title: 'Day 5：Terminal 21 寄放行李、採買、行李取件 & 滿載歸國',
    spots: [
      {
        id: 'spot-5-1',
        time: '12:00 - 12:30',
        title: '🏨 Miami Hotel 退房',
        description: '辦理退房手續，請務必拿回入住押金。',
        mapQuery: 'Miami Hotel Bangkok',
        modalKey: 'hotel-address',
      },
      {
        id: 'spot-5-2',
        time: '12:40 - 13:00',
        title: '🧳 Terminal 21 行李寄放',
        description: '將行李寄放於 Terminal 21 東京區 1 樓 AIRPORTELs 櫃位 (฿150/件)。',
        openingHours: '10:00 - 22:00',
        price: '寄行李約 ฿150/件',
        imageUrl: 'https://www.airportels.asia/wp-content/uploads/2016/12/airportels-map-t21-forweb-01.png',
        mapQuery: 'AIRPORTELs Luggage Storage Terminal 21',
        transport: {
          summary: '交通：Miami Hotel >> Terminal 21',
          steps: ['🚶‍♂️ 步行 550m (約 7 分鐘)'],
        },
      },
      {
        id: 'spot-5-3',
        time: '13:00 - 14:30',
        title: '🛍️ Terminal 21 Asok (吃午餐與採買)',
        description: '5F美食街吃飯+逛逛',
        note: '五樓美食街要儲卡，可退錢，先儲200',
        openingHours: '10:00 - 22:00',
        mapQuery: 'Terminal 21 Asok',
      },
      {
        id: 'spot-5-4',
        time: '14:30 - 14:50',
        title: '🧳 AIRPORTELs 行李取件 (Terminal 21)',
        description: '前往 Terminal 21 Asok 東京區 1 樓（電梯旁）AIRPORTELs 櫃位領取寄放行李，準備出發前往機場。',
        openingHours: '10:00 - 22:00',
        mapQuery: 'AIRPORTELs Luggage Storage Terminal 21',
      },
      {
        id: 'spot-5-5',
        time: '14:50 - 16:00',
        title: '🚆 前往素萬那普機場 Suvarnabhumi Airport (BKK)',
        description: '領取行李後，搭乘大眾運輸直達 BKK 機場。',
        transport: {
          summary: '交通：Terminal 21 >> BKK 機場',
          steps: [
            '🚶‍♂️ 步行至 MRT Sukhumvit 站',
            '🚇 MRT 藍色線：Sukhumvit 站 > Phetchaburi 站 (1 站)',
            '🚶‍♂️ 步行連通道至 ARL Makkasan 站',
            '🚆 ARL 機場快線：15:38 Makkasan 站直達 Suvarnabhumi Airport 站 (20 分鐘)',
          ],
        },
      },
      {
        id: 'spot-5-6',
        time: '16:00 - 20:00',
        title: '🛬 BKK 機場辦理登機與託運 (20:00 起飛)',
        description: '辦理 Check-in、託運行李、退稅與機場巡禮。',
        note: '持JCB卡可以進G區 Miracle貴賓室',
      },
      {
        id: 'spot-5-7',
        time: '20:00 - 00:50(+1)',
        title: '✈️ 回程航班 (BKK 20:00 >> TPE 00:50+1)',
        description: '泰越捷 VZ570 (點擊查看完整航班詳情與機票憑證)。',
        modalKey: 'flight-inbound',
        modalLabel: '✈️ 機票詳情',
      },
    ],
  },
];

export const bangkokWeather: WeatherDay[] = [
  {
    day: 'Day 1',
    dateLabel: '8/23 (日) - 抵達曼谷',
    location: '廊曼機場 & Miami Hotel',
    icon: '🌙',
    highTemp: 33,
    lowTemp: 26,
    morningTemp: 27,
    noonTemp: 32,
    eveningTemp: 28,
    clothingTip: '🌙 **提醒：** 晚間抵達曼谷氣溫溫和，出機場計程車或 Grab 車上冷氣較強，隨身可備薄外套。',
  },
  {
    day: 'Day 2',
    dateLabel: '8/24 (一) - 市區美食與選物',
    location: 'Thong Lor & Sukhumvit',
    icon: '☀️',
    highTemp: 34,
    lowTemp: 26,
    morningTemp: 27,
    noonTemp: 33,
    eveningTemp: 29,
    clothingTip: '☀️ **提醒：** 白天戶外紫外線強烈，建議著涼爽棉麻夏裝、戴墨鏡與擦拭防曬乳。',
  },
  {
    day: 'Day 3',
    dateLabel: '8/25 (二) - 藝文展覽與泰拳賽',
    location: 'BACC & Rajadamnern',
    icon: '🌤️',
    highTemp: 34,
    lowTemp: 25,
    morningTemp: 26,
    noonTemp: 33,
    eveningTemp: 28,
    clothingTip: '🥊 **提醒：** BACC 展館與泰拳體育館內皆開有強冷氣，建議攜帶薄外套觀賽。',
  },
  {
    day: 'Day 4',
    dateLabel: '8/26 (三) - 米其林老街與水上河畔',
    location: 'Dinso, Warehouse 30 & ICONSIAM',
    icon: '🌤️',
    highTemp: 33,
    lowTemp: 25,
    morningTemp: 26,
    noonTemp: 32,
    eveningTemp: 28,
    clothingTip: '🚤 **提醒：** 搭乘昭披耶河渡輪與漫步 Warehouse 30 請注意防曬與補充水分。',
  },
  {
    day: 'Day 5',
    dateLabel: '8/27 (四) - 購物與返程',
    location: 'Terminal 21 & BKK 機場',
    icon: '☀️',
    highTemp: 34,
    lowTemp: 26,
    morningTemp: 27,
    noonTemp: 33,
    eveningTemp: 28,
    clothingTip: '✈️ **提醒：** 整理行李時建議將返程長袖外套置於隨身包中，便於機上保暖。',
  },
];

export const arlTimetable: TimetableRow[] = [
  // 市區 → BKK 機場
  { trainNo: 'A-30', departure: '14:45', makkasan: '14:53', phayaThai: '15:11', direction: 'city-to-airport' },
  { trainNo: 'A-32', departure: '15:00', makkasan: '15:08', phayaThai: '15:26', direction: 'city-to-airport' },
  { trainNo: 'A-34', departure: '15:15', makkasan: '15:23', phayaThai: '15:41', direction: 'city-to-airport' },
  { trainNo: 'A-36', departure: '15:30', makkasan: '15:38', phayaThai: '15:56', direction: 'city-to-airport', isRecommended: true, note: '建議班次 (15:56 抵達)' },
  { trainNo: 'A-38', departure: '15:45', makkasan: '15:53', phayaThai: '16:11', direction: 'city-to-airport' },
  { trainNo: 'A-40', departure: '16:00', makkasan: '16:08', phayaThai: '16:26', direction: 'city-to-airport', isRecommended: true, note: '⭐ 最晚建議班次 (16:26 抵達)' },
  { trainNo: 'A-42', departure: '16:15', makkasan: '16:23', phayaThai: '16:41', direction: 'city-to-airport' },
];

export const modalDataMap: Record<string, ModalContentData> = {
  'flight-outbound': {
    title: '✈️ 機票詳情 (去程與回程)',
    contentHtml: `
      <div class="space-y-4 text-xs font-sans text-[#3D352E]">
        <!-- 去程航班區塊 (綠色/抹茶色調) -->
        <div class="rounded-xl border-2 border-[#81B29A] overflow-hidden shadow-xs bg-[#F4F9F6]">
          <!-- Header: 綠色調 泰國亞航 -->
          <div class="bg-[#2D5A46] text-white px-3.5 py-2 flex items-center justify-between gap-2">
            <div class="flex items-center gap-1.5 font-bold text-xs font-jp-title">
              <span>🛫 去程：泰國亞洲航空 (Thai AirAsia)</span>
            </div>
            <div class="text-[11px] font-mono font-bold bg-white/15 text-white px-2 py-0.5 rounded border border-white/30 shrink-0">
              訂位代號: <span class="text-white font-black text-xs">QFF12A</span>
            </div>
          </div>
          
          <!-- 航線圖標與時間 -->
          <div class="p-3">
            <div class="flex items-center justify-between text-center pb-2.5 border-b border-[#81B29A]/30">
              <div class="text-left">
                <p class="text-[10px] text-[#527364]">起飛 Departure</p>
                <p class="text-base sm:text-lg font-black text-[#2D5A46] font-mono leading-tight my-0.5">18:30</p>
                <p class="font-black text-sm text-[#2D3A32] font-jp-title">桃園國際機場 (TPE)</p>
                <p class="text-[11px] text-[#2D5A46] font-bold">第一航廈 T1</p>
              </div>
              <div class="px-2 text-center shrink-0">
                <span class="text-[#2D5A46] text-sm font-bold block">✈️ ➔</span>
                <span class="text-[10px] text-[#527364] font-mono">約 3h 50m</span>
              </div>
              <div class="text-right">
                <p class="text-[10px] text-[#527364]">抵達 Arrival</p>
                <p class="text-base sm:text-lg font-black text-[#2D5A46] font-mono leading-tight my-0.5">21:20</p>
                <p class="font-black text-sm text-[#2D3A32] font-jp-title">廊曼機場 (DMK)</p>
                <p class="text-[11px] text-[#2D5A46] font-bold">第一航廈 T1</p>
              </div>
            </div>

            <!-- 詳細數據格 -->
            <div class="grid grid-cols-2 gap-2 pt-2.5 text-[11px] font-jp-body">
              <div class="bg-[#EAF2EF] p-2 rounded-lg border border-[#81B29A]/50">
                <span class="text-[#527364] block text-[10px]">搭乘日期 Date</span>
                <strong class="text-[#2D5A46] text-xs font-bold block mt-0.5">2026-08-23 (日)</strong>
              </div>
              <div class="bg-[#EAF2EF] p-2 rounded-lg border border-[#81B29A]/50">
                <span class="text-[#527364] block text-[10px]">航班 Flight</span>
                <strong class="text-[#2D5A46] font-mono text-xs font-bold block mt-0.5">FD 231</strong>
              </div>
              <div class="bg-[#EAF2EF] p-2 rounded-lg border border-[#81B29A]/50">
                <span class="text-[#527364] block text-[10px]">訂位代號 Ref</span>
                <strong class="text-[#2D5A46] font-mono font-black text-xs block mt-0.5">QFF12A</strong>
              </div>
              <div class="bg-[#EAF2EF] p-2 rounded-lg border border-[#81B29A]/50">
                <span class="text-[#527364] block text-[10px]">行李額度 Baggage</span>
                <strong class="text-[#2D5A46] font-bold text-xs block mt-0.5">20kg託運1件+7kg手提</strong>
              </div>
            </div>
          </div>
        </div>

        <!-- 回程航班區塊 (暖橘色/磚紅色調) -->
        <div class="rounded-xl border-2 border-[#F4A261] overflow-hidden shadow-xs bg-[#FFFDF9]">
          <!-- Header: 橙色調 泰越捷 -->
          <div class="bg-[#E07A5F] text-white px-3.5 py-2 flex items-center justify-between gap-2">
            <div class="flex items-center gap-1.5 font-bold text-xs font-jp-title">
              <span>🛬 回程：泰越捷航空 (Thai VietJet Air)</span>
            </div>
            <div class="text-[11px] font-mono font-bold bg-white/15 text-white px-2 py-0.5 rounded border border-white/30 shrink-0">
              訂位代號: <span class="text-white font-black text-xs">WMCRAD</span>
            </div>
          </div>
          
          <!-- 航線圖標與時間 -->
          <div class="p-3">
            <div class="flex items-center justify-between text-center pb-2.5 border-b border-[#F4A261]/30">
              <div class="text-left">
                <p class="text-[10px] text-[#C06C53]">起飛 Departure</p>
                <p class="text-base sm:text-lg font-black text-[#E07A5F] font-mono leading-tight my-0.5">20:00</p>
                <p class="font-black text-sm text-[#3D352E] font-jp-title">蘇凡納布機場 (BKK)</p>
                <p class="text-[11px] text-[#6E6359] font-bold">主航廈 Main</p>
              </div>
              <div class="px-2 text-center shrink-0">
                <span class="text-[#E07A5F] text-sm font-bold block">✈️ ➔</span>
                <span class="text-[10px] text-[#C06C53] font-mono">約 3h 50m</span>
              </div>
              <div class="text-right">
                <p class="text-[10px] text-[#C06C53]">抵達 Arrival</p>
                <p class="text-base sm:text-lg font-black text-[#E07A5F] font-mono leading-tight my-0.5">00:50(+1)</p>
                <p class="font-black text-sm text-[#3D352E] font-jp-title">桃園國際機場 (TPE)</p>
                <p class="text-[11px] text-[#E07A5F] font-bold">第一航廈 T1</p>
              </div>
            </div>

            <!-- 詳細數據格 -->
            <div class="grid grid-cols-2 gap-2 pt-2.5 text-[11px] font-jp-body">
              <div class="bg-[#FEF6EC]/80 p-2 rounded-lg border border-[#F4A261]/40">
                <span class="text-[#C06C53] block text-[10px]">搭乘日期 Date</span>
                <strong class="text-[#E07A5F] text-xs block mt-0.5">2026-08-27 (四)</strong>
              </div>
              <div class="bg-[#FEF6EC]/80 p-2 rounded-lg border border-[#F4A261]/40">
                <span class="text-[#C06C53] block text-[10px]">航班 Flight</span>
                <strong class="text-[#E07A5F] font-mono text-xs block mt-0.5">VZ 570</strong>
              </div>
              <div class="bg-[#FEF6EC]/80 p-2 rounded-lg border border-[#F4A261]/40">
                <span class="text-[#C06C53] block text-[10px]">訂位代號 Ref</span>
                <strong class="text-[#E07A5F] font-mono font-black text-xs block mt-0.5">WMCRAD</strong>
              </div>
              <div class="bg-[#FEF6EC]/80 p-2 rounded-lg border border-[#F4A261]/40">
                <span class="text-[#C06C53] block text-[10px]">行李額度 Baggage</span>
                <strong class="text-[#E07A5F] font-bold text-xs block mt-0.5">20kg託運1件+7kg手提</strong>
              </div>
            </div>
          </div>
        </div>

        <!-- 提醒事項 -->
        <div class="p-3 bg-[#FEF6EC] rounded-xl border border-[#F4A261]/40 space-y-1.5 font-jp-body text-[11px]">
          <p class="font-bold text-xs text-[#3D352E]">💡 機票與登機提醒：</p>
          <ul class="list-disc list-inside space-y-1 text-[#6E6359]">
            <li><strong>去程報到：</strong>請於 <span class="text-[#2D5A46] font-bold">8/23 (日) 16:00 前</span> 抵達桃園 T1 泰國亞航櫃檯。</li>
            <li><strong>回程報到：</strong>請於 <span class="text-[#E07A5F] font-bold">8/27 (四) 17:00 前</span> 抵達 BKK 機場 4 樓泰越捷櫃檯。</li>
            <li><strong>時差提示：</strong>曼谷時差為 GMT+7（比台灣慢 1 小時）。</li>
          </ul>
        </div>
      </div>
    `,
  },
  'flight-inbound': {
    title: '✈️ 機票詳情',
    contentHtml: `
      <div class="space-y-4 text-xs font-sans text-[#3D352E]">
        <!-- 回程航班區塊 (置頂突出) -->
        <div class="bg-white rounded-xl border border-[#F4A261]/50 overflow-hidden shadow-xs">
          <!-- Header: 橙色調 泰越捷 -->
          <div class="bg-[#FEF6EC] px-3 py-2 border-b border-[#F4A261]/30 flex items-center justify-between gap-2">
            <div class="flex items-center gap-1.5 font-bold text-xs text-[#C06C53] font-jp-title">
              <span>🛬 回程：泰越捷航空 (Thai VietJet Air)</span>
            </div>
            <div class="text-[11px] font-mono font-bold bg-white text-[#C06C53] px-2 py-0.5 rounded border border-[#F4A261]/40 shrink-0">
              訂位代號: <span class="text-[#E07A5F] font-black text-xs">WMCRAD</span>
            </div>
          </div>
          
          <!-- 航線圖標與時間 -->
          <div class="p-3 bg-white">
            <div class="flex items-center justify-between text-center pb-2.5 border-b border-[#F0EBE1]">
              <div class="text-left">
                <p class="text-[10px] text-[#8C8275]">起飛 Departure</p>
                <p class="text-base sm:text-lg font-black text-[#E07A5F] font-mono leading-tight my-0.5">20:00</p>
                <p class="font-black text-sm text-[#3D352E] font-jp-title">蘇凡納布機場 (BKK)</p>
                <p class="text-[11px] text-[#8C8275] font-bold">主航廈 Main</p>
              </div>
              <div class="px-2 text-center shrink-0">
                <span class="text-[#E07A5F] text-sm font-bold block">✈️ ➔</span>
                <span class="text-[10px] text-[#8C8275] font-mono">約 3h 50m</span>
              </div>
              <div class="text-right">
                <p class="text-[10px] text-[#8C8275]">抵達 Arrival</p>
                <p class="text-base sm:text-lg font-black text-[#C06C53] font-mono leading-tight my-0.5">00:50(+1)</p>
                <p class="font-black text-sm text-[#3D352E] font-jp-title">桃園國際機場 (TPE)</p>
                <p class="text-[11px] text-[#C06C53] font-bold">第一航廈 T1</p>
              </div>
            </div>

            <!-- 詳細數據格 -->
            <div class="grid grid-cols-2 gap-2 pt-2.5 text-[11px] font-jp-body">
              <div class="bg-[#FEF6EC]/80 p-2 rounded-lg border border-[#F4A261]/40">
                <span class="text-[#C06C53] block text-[10px]">搭乘日期 Date</span>
                <strong class="text-[#E07A5F] text-xs block mt-0.5">2026-08-27 (四)</strong>
              </div>
              <div class="bg-[#FEF6EC]/80 p-2 rounded-lg border border-[#F4A261]/40">
                <span class="text-[#C06C53] block text-[10px]">航班 Flight</span>
                <strong class="text-[#E07A5F] font-mono text-xs block mt-0.5">VZ 570</strong>
              </div>
              <div class="bg-[#FEF6EC]/80 p-2 rounded-lg border border-[#F4A261]/40">
                <span class="text-[#C06C53] block text-[10px]">訂位代號 Ref</span>
                <strong class="text-[#E07A5F] font-mono font-black text-xs block mt-0.5">WMCRAD</strong>
              </div>
              <div class="bg-[#FEF6EC]/80 p-2 rounded-lg border border-[#F4A261]/40">
                <span class="text-[#C06C53] block text-[10px]">行李額度 Baggage</span>
                <strong class="text-[#E07A5F] font-bold text-xs block mt-0.5">20kg託運1件+7kg手提</strong>
              </div>
            </div>
          </div>
        </div>

        <!-- 去程航班區塊 -->
        <div class="bg-white rounded-xl border border-[#81B29A]/50 overflow-hidden shadow-xs opacity-90">
          <!-- Header: 綠色調 泰國亞航 -->
          <div class="bg-[#EAF2EF] px-3 py-2 border-b border-[#81B29A]/30 flex items-center justify-between gap-2">
            <div class="flex items-center gap-1.5 font-bold text-xs text-[#2D5A46] font-jp-title">
              <span>🛫 去程：泰國亞洲航空 (Thai AirAsia)</span>
            </div>
            <div class="text-[11px] font-mono font-bold bg-white text-[#2D5A46] px-2 py-0.5 rounded border border-[#81B29A]/40 shrink-0">
              訂位代號: <span class="text-[#2D5A46] font-black text-xs">QFF12A</span>
            </div>
          </div>
          
          <!-- 航線圖標與時間 -->
          <div class="p-3 bg-white">
            <div class="flex items-center justify-between text-center pb-2.5 border-b border-[#F0EBE1]">
              <div class="text-left">
                <p class="text-[10px] text-[#527364]">起飛 Departure</p>
                <p class="text-base sm:text-lg font-black text-[#2D5A46] font-mono leading-tight my-0.5">18:30</p>
                <p class="font-black text-sm text-[#2D3A32] font-jp-title">桃園國際機場 (TPE)</p>
                <p class="text-[11px] text-[#2D5A46] font-bold">第一航廈 T1</p>
              </div>
              <div class="px-2 text-center shrink-0">
                <span class="text-[#2D5A46] text-sm font-bold block">✈️ ➔</span>
                <span class="text-[10px] text-[#527364] font-mono">約 3h 50m</span>
              </div>
              <div class="text-right">
                <p class="text-[10px] text-[#527364]">抵達 Arrival</p>
                <p class="text-base sm:text-lg font-black text-[#2D5A46] font-mono leading-tight my-0.5">21:20</p>
                <p class="font-black text-sm text-[#2D3A32] font-jp-title">廊曼機場 (DMK)</p>
                <p class="text-[11px] text-[#2D5A46] font-bold">第一航廈 T1</p>
              </div>
            </div>

            <!-- 詳細數據格 -->
            <div class="grid grid-cols-2 gap-2 pt-2.5 text-[11px] font-jp-body">
              <div class="bg-[#EAF2EF] p-2 rounded-lg border border-[#81B29A]/50">
                <span class="text-[#527364] block text-[10px]">搭乘日期 Date</span>
                <strong class="text-[#2D5A46] text-xs font-bold block mt-0.5">2026-08-23 (日)</strong>
              </div>
              <div class="bg-[#EAF2EF] p-2 rounded-lg border border-[#81B29A]/50">
                <span class="text-[#527364] block text-[10px]">航班 Flight</span>
                <strong class="text-[#2D5A46] font-mono text-xs font-bold block mt-0.5">FD 231</strong>
              </div>
              <div class="bg-[#EAF2EF] p-2 rounded-lg border border-[#81B29A]/50">
                <span class="text-[#527364] block text-[10px]">訂位代號 Ref</span>
                <strong class="text-[#2D5A46] font-mono font-black text-xs block mt-0.5">QFF12A</strong>
              </div>
              <div class="bg-[#EAF2EF] p-2 rounded-lg border border-[#81B29A]/50">
                <span class="text-[#527364] block text-[10px]">行李額度 Baggage</span>
                <strong class="text-[#2D5A46] font-bold text-xs block mt-0.5">20kg託運1件+7kg手提</strong>
              </div>
            </div>
          </div>
        </div>

        <!-- 提醒事項 -->
        <div class="p-3 bg-[#FEF6EC] rounded-xl border border-[#F4A261]/40 space-y-1.5 font-jp-body text-[11px]">
          <p class="font-bold text-xs text-[#3D352E]">💡 機票與登機提醒：</p>
          <ul class="list-disc list-inside space-y-1 text-[#6E6359]">
            <li><strong>回程報到：</strong>請於 <span class="text-[#E07A5F] font-bold">8/27 (四) 17:00 前</span> 抵達 BKK 機場 4 樓泰越捷櫃檯。</li>
            <li><strong>去程報到：</strong>請於 <span class="text-[#E07A5F] font-bold">8/23 (日) 16:00 前</span> 抵達桃園 T1 泰國亞航櫃檯。</li>
            <li><strong>時差提示：</strong>曼谷時差為 GMT+7（比台灣慢 1 小時）。</li>
          </ul>
        </div>
      </div>
    `,
  },
  'hotel-address': {
    title: '🏨 Miami Hotel 飯店憑證 / 坐車資訊',
    contentHtml: `
      <div class="space-y-3.5 text-xs font-sans text-[#3D352E]">
        <!-- 🚗 KKday 機場接送資訊 (給現場人員/司機看) -->
        <div class="bg-[#FEF6EC] p-3.5 rounded-xl border-2 border-[#F4A261] space-y-2.5 font-jp-body shadow-xs">
          <div class="flex items-center justify-between pb-1.5 border-b border-[#F4A261]/30">
            <p class="text-[#E07A5F] font-bold text-sm flex items-center gap-1.5">
              <span>🚗</span> KKday 機場接送 / Airport Transfer
            </p>
            <span class="bg-[#E07A5F] text-white text-[10px] font-bold px-2 py-0.5 rounded-full font-jp-rounded">接機坐車資訊</span>
          </div>
          
          <div class="space-y-2">
            <div class="bg-white/90 p-2.5 rounded-lg border border-[#F4A261]/40">
              <span class="text-xs font-bold text-[#6E6359] block mb-0.5">接機訂單編號 Booking number:</span>
              <strong class="font-mono text-lg text-[#E07A5F] font-extrabold tracking-wider select-all block">26KK217344430</strong>
            </div>

            <div class="bg-white/90 p-2.5 rounded-lg border border-[#F4A261]/40">
              <span class="text-xs font-bold text-[#6E6359] block mb-0.5">訂購人 Customer's Name:</span>
              <strong class="font-mono text-base text-[#3D352E] font-extrabold tracking-wide select-all block">Xin Yan, Hsueh</strong>
            </div>

            <div class="text-[12px] text-[#3D352E] bg-[#FFF9F2] p-2.5 rounded-lg border border-[#F4A261]/30 space-y-1">
              <p>📍 <strong>上車地點 Meeting Point:</strong> DMK 機場一樓 5 號門 (Gate 5, 1F, DMK Airport)</p>
              <p>⏱️ <strong>等候時間 Waiting Time:</strong> 司機會於現場等候 120 分鐘 (Driver waits 120 mins)</p>
            </div>
          </div>
        </div>

        <!-- 🏨 飯店入住與憑證資訊 -->
        <div class="bg-[#F8F5EE] p-3.5 rounded-xl border border-[#E2D8C7] space-y-2 font-jp-body">
          <div class="pb-2 border-b border-[#E2D8C7]">
            <p class="font-bold text-base text-[#3D352E] font-jp-title">Miami Hotel Bangkok</p>
            <p class="text-xs text-[#2D5A46] font-jp-body mt-0.5">經典美式復古風飯店 (位於 Sukhumvit Soi 13，近 BTS Nana & Asok)</p>
          </div>
          <div class="bg-white/80 p-2.5 rounded-lg border border-[#E2D8C7] space-y-1 text-xs">
            <p class="text-[#E07A5F] font-bold">📄 訂房憑證 Hotel Booking Details：</p>
            <p class="text-[#3D352E] font-medium">
              確認碼 Confirmation Code：<strong class="font-mono text-sm text-[#E07A5F] font-bold select-all">6300622059</strong>
            </p>
            <p class="text-[#3D352E] font-medium">
              PIN 碼 PIN Code：<strong class="font-mono text-sm text-[#E07A5F] font-bold select-all">6971</strong>
            </p>
          </div>
        </div>

        <!-- 📍 地址資訊 -->
        <div class="space-y-2 font-jp-body">
          <p class="text-xs"><strong>📍 英文地址 English Address：</strong><br/><span class="text-xs font-mono text-[#3D352E] font-semibold">2 Sukhumvit Soi 13, Khlong Toei Nuea, Watthana, Bangkok 10110</span></p>
          <div class="bg-[#F8F5EE] p-3 rounded-xl border border-[#E2D8C7] font-mono text-[13px] leading-relaxed">
            <strong class="text-[#E07A5F] block mb-1 text-xs">🚕 泰文地址 (給計程車司機 Address in Thai)：</strong>
            โรงแรมไมอามี่ กรุงเทพ 2 ซอยสุขุมวิท 13 แขวงคลองเตยเหนือ เขตวัฒนา กรุงเทพฯ 10110
          </div>
        </div>

        <div class="space-y-1 text-[#6E6359] font-jp-body text-xs pt-1">
          <p>💵 押金提醒：辦理入住會收取 ฿500 押金，退房時請務必取回。</p>
          <p>🚇 交通指南：鄰近 BTS Nana 站與 BTS Asok 站，步行 3-5 分鐘。</p>
        </div>
      </div>
    `,
  },
  'keawloon-menu': {
    title: '🥟 Keawloon BKK 菜單與對照翻譯',
    contentHtml: `
      <div class="space-y-4 text-xs font-sans text-[#3D352E]">
        <!-- 餐廳基本資訊與預約 -->
        <div class="p-3 bg-[#FEF6EC] rounded-xl border border-[#F4A261]/40 space-y-1.5">
          <div class="flex items-center justify-between gap-2">
            <div>
              <span class="font-bold text-base text-[#3D352E] font-jp-title block">บ้านแก้วลูน</span>
              <span class="text-xs text-[#6E6359] font-medium font-jp-body">(Baan Keawloon Bangkok)</span>
            </div>
            <span class="bg-[#E07A5F] text-white text-[11px] font-bold px-2.5 py-1 rounded-md font-jp-rounded shrink-0 shadow-xs">米其林推薦</span>
          </div>
          <p class="text-xs text-[#E07A5F] font-bold font-jp-body pt-1 border-t border-[#F0EBE1]">
            7月 - 8月 當月特別套餐 <span class="text-xs font-semibold text-[#2D5A46] font-sans ml-1">(สำหรับประจำเดือน กรกฎาคม สิงหาคม)</span>
          </p>
          <div class="pt-1.5 text-[11px] flex flex-wrap gap-x-3 gap-y-1 text-[#3D352E]/90 border-t border-[#F0EBE1] mt-1.5 font-jp-body">
            <span>💰 套餐總價：<strong class="text-[#E07A5F] text-xs">฿3,426</strong></span>
          </div>
        </div>

        <!-- 1. 當月特別套餐內容 -->
        <div>
          <h4 class="font-bold text-sm text-[#3D352E] mb-2 flex items-center gap-1.5 font-jp-title">
            <span>🍱</span>
            <span>7月 - 8月 當月特別套餐內容 (รายการอาหาร)</span>
          </h4>
          <div class="bg-white rounded-xl border border-[#E2D8C7] overflow-hidden divide-y divide-[#F0EBE1]">
            <div class="p-3 flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-[#E07A5F]/15 text-[#E07A5F] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono">1</span>
              <div>
                <p class="font-bold text-xs sm:text-sm text-[#3D352E]">蝦醬炒肉佐酸果與甜蝦</p>
                <p class="text-xs sm:text-[13px] font-bold text-[#2D5A46] mt-0.5 tracking-wide">เคยผัด ผลไม้เปรี้ยว และกุ้งหวาน</p>
              </div>
            </div>
            <div class="p-3 flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-[#E07A5F]/15 text-[#E07A5F] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono">2</span>
              <div>
                <p class="font-bold text-xs sm:text-sm text-[#3D352E]">Keawloon 特製辣椒醬拼盤</p>
                <p class="text-xs sm:text-[13px] font-bold text-[#2D5A46] mt-0.5 tracking-wide">ถาดน้ำพริกบ้านแก้วลูน</p>
              </div>
            </div>
            <div class="p-3 flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-[#E07A5F]/15 text-[#E07A5F] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono">3</span>
              <div>
                <p class="font-bold text-xs sm:text-sm text-[#3D352E]">椒鹽炸大河蝦 (1隻)</p>
                <p class="text-xs sm:text-[13px] font-bold text-[#2D5A46] mt-0.5 tracking-wide">กุ้งแม่น้ำทอดเกลือ 1 ตัว</p>
              </div>
            </div>
            <div class="p-3 flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-[#E07A5F]/15 text-[#E07A5F] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono">4</span>
              <div>
                <p class="font-bold text-xs sm:text-sm text-[#3D352E]">豆醬炒甘藍豬肉</p>
                <p class="text-xs sm:text-[13px] font-bold text-[#2D5A46] mt-0.5 tracking-wide">ก้านจองผัดเต้าเจี้ยวหมู</p>
              </div>
            </div>
            <div class="p-3 flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-[#E07A5F]/15 text-[#E07A5F] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono">5</span>
              <div>
                <p class="font-bold text-xs sm:text-sm text-[#3D352E]">有機蟹肉拌飯</p>
                <p class="text-xs sm:text-[13px] font-bold text-[#2D5A46] mt-0.5 tracking-wide">ข้าวขยำปูอินทรีย์</p>
              </div>
            </div>
            <div class="p-3 flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-[#E07A5F]/15 text-[#E07A5F] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono">6</span>
              <div>
                <p class="font-bold text-xs sm:text-sm text-[#3D352E]">九層塔炒干貝</p>
                <p class="text-xs sm:text-[13px] font-bold text-[#2D5A46] mt-0.5 tracking-wide">หอยเชลล์ผัดโหระพา</p>
              </div>
            </div>
            <div class="p-3 flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-[#E07A5F]/15 text-[#E07A5F] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono">7</span>
              <div>
                <p class="font-bold text-xs sm:text-sm text-[#3D352E]">羅望子醬烤豬頸肉</p>
                <p class="text-xs sm:text-[13px] font-bold text-[#2D5A46] mt-0.5 tracking-wide">คอหมูย่างส้มมะขาม</p>
              </div>
            </div>
            <div class="p-3 flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-[#E07A5F]/15 text-[#E07A5F] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono">8</span>
              <div>
                <p class="font-bold text-xs sm:text-sm text-[#3D352E]">泰國香米飯 (1鍋)</p>
                <p class="text-xs sm:text-[13px] font-bold text-[#2D5A46] mt-0.5 tracking-wide">ข้าวหอมมะลิ 1 โด</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 2. 可單點加點菜單 -->
        <div>
          <h4 class="font-bold text-sm text-[#3D352E] mb-2 flex items-center justify-between font-jp-title">
            <span class="flex items-center gap-1.5">
              <span>📖</span>
              <span>單點可加點菜單 (A La Carte)</span>
            </span>
            <span class="text-xs font-bold text-[#8C8275]">價格 (THB)</span>
          </h4>
          <div class="bg-white rounded-xl border border-[#E2D8C7] overflow-hidden divide-y divide-[#F0EBE1]">
            <div class="p-3 flex items-center justify-between gap-3">
              <div>
                <p class="font-bold text-xs sm:text-sm text-[#3D352E]">1. 日式卡拉揚風格烤豬肉</p>
                <p class="text-xs sm:text-[13px] font-bold text-[#2D5A46] mt-0.5 tracking-wide">หมูย่างคาราโอเกะ</p>
              </div>
              <span class="font-mono font-bold text-[#E07A5F] text-xs sm:text-sm shrink-0">456 THB</span>
            </div>
            <div class="p-3 flex items-center justify-between gap-3">
              <div>
                <p class="font-bold text-xs sm:text-sm text-[#3D352E]">2. 椒鹽炸大河蝦 (450g/隻)</p>
                <p class="text-xs sm:text-[13px] font-bold text-[#2D5A46] mt-0.5 tracking-wide">กุ้งแม่น้ำทอดเกลือ(450g/ตัว)</p>
              </div>
              <span class="font-mono font-bold text-[#E07A5F] text-xs sm:text-sm shrink-0">879 THB</span>
            </div>
            <div class="p-3 flex items-center justify-between gap-3">
              <div>
                <p class="font-bold text-xs sm:text-sm text-[#3D352E]">3. 燒烤大河蝦 (450g/隻)</p>
                <p class="text-xs sm:text-[13px] font-bold text-[#2D5A46] mt-0.5 tracking-wide">กุ้งแม่น้ำเผา(450g/ตัว)</p>
              </div>
              <span class="font-mono font-bold text-[#E07A5F] text-xs sm:text-sm shrink-0">879 THB</span>
            </div>
            <div class="p-3 flex items-center justify-between gap-3">
              <div>
                <p class="font-bold text-xs sm:text-sm text-[#3D352E]">4. 綠咖哩蝦丸</p>
                <p class="text-xs sm:text-[13px] font-bold text-[#2D5A46] mt-0.5 tracking-wide">แกงเขียวหวานลูกชิ้นกุ้ง</p>
              </div>
              <span class="font-mono font-bold text-[#E07A5F] text-xs sm:text-sm shrink-0">564 THB</span>
            </div>
            <div class="p-3 flex items-center justify-between gap-3">
              <div>
                <p class="font-bold text-xs sm:text-sm text-[#3D352E]">5. 綠咖哩雪花牛 / 花腱肉</p>
                <p class="text-xs sm:text-[13px] font-bold text-[#2D5A46] mt-0.5 tracking-wide">แกงเขียวหวานเนื้อน่องลาย</p>
              </div>
              <span class="font-mono font-bold text-[#E07A5F] text-xs sm:text-sm shrink-0">693 THB</span>
            </div>
            <div class="p-3 flex items-center justify-between gap-3">
              <div>
                <p class="font-bold text-xs sm:text-sm text-[#3D352E]">6. 蝦醬炒豬肉</p>
                <p class="text-xs sm:text-[13px] font-bold text-[#2D5A46] mt-0.5 tracking-wide">หมูผัดเคย</p>
              </div>
              <span class="font-mono font-bold text-[#E07A5F] text-xs sm:text-sm shrink-0">456 THB</span>
            </div>
            <div class="p-3 flex items-center justify-between gap-3">
              <div>
                <p class="font-bold text-xs sm:text-sm text-[#3D352E]">7. 墨汁炒魷魚</p>
                <p class="text-xs sm:text-[13px] font-bold text-[#2D5A46] mt-0.5 tracking-wide">หมึกผัดน้ำดำ</p>
              </div>
              <span class="font-mono font-bold text-[#E07A5F] text-xs sm:text-sm shrink-0">456 THB</span>
            </div>
            <div class="p-3 flex items-center justify-between gap-3">
              <div>
                <p class="font-bold text-xs sm:text-sm text-[#3D352E]">8. 青蔥炒魷魚</p>
                <p class="text-xs sm:text-[13px] font-bold text-[#2D5A46] mt-0.5 tracking-wide">หมึกผัดต้นหอม</p>
              </div>
              <span class="font-mono font-bold text-[#E07A5F] text-xs sm:text-sm shrink-0">456 THB</span>
            </div>
            <div class="p-3 flex items-center justify-between gap-3">
              <div>
                <p class="font-bold text-xs sm:text-sm text-[#3D352E]">9. 酸辣湯 (醃筍 / 綜合蔬菜)</p>
                <p class="text-xs sm:text-[13px] font-bold text-[#2D5A46] mt-0.5 tracking-wide">แกงส้มหน่อไม้ดอง/ผักรวม</p>
              </div>
              <span class="font-mono font-bold text-[#E07A5F] text-xs sm:text-sm shrink-0">456 THB</span>
            </div>
            <div class="p-3 flex items-center justify-between gap-3">
              <div>
                <p class="font-bold text-xs sm:text-sm text-[#3D352E]">10. 臭豆炒蝦</p>
                <p class="text-xs sm:text-[13px] font-bold text-[#2D5A46] mt-0.5 tracking-wide">กุ้งกะปิสะตอ</p>
              </div>
              <span class="font-mono font-bold text-[#E07A5F] text-xs sm:text-sm shrink-0">456 THB</span>
            </div>
            <div class="p-3 flex items-center justify-between gap-3">
              <div>
                <p class="font-bold text-xs sm:text-sm text-[#3D352E]">11. 梁葉 (Liang Leaf) 鮮蝦煮椰奶</p>
                <p class="text-xs sm:text-[13px] font-bold text-[#2D5A46] mt-0.5 tracking-wide">ใบเหลียงต้มกะทิกุ้งสด</p>
              </div>
              <span class="font-mono font-bold text-[#E07A5F] text-xs sm:text-sm shrink-0">396 THB</span>
            </div>
            <div class="p-3 flex items-center justify-between gap-3">
              <div>
                <p class="font-bold text-xs sm:text-sm text-[#3D352E]">12. 魚露浸鮮蝦</p>
                <p class="text-xs sm:text-[13px] font-bold text-[#2D5A46] mt-0.5 tracking-wide">กุ้งดองน้ำปลากวน</p>
              </div>
              <span class="font-mono font-bold text-[#E07A5F] text-xs sm:text-sm shrink-0">259 THB</span>
            </div>
            <div class="p-3 flex items-center justify-between gap-3">
              <div>
                <p class="font-bold text-xs sm:text-sm text-[#3D352E]">13. 巴南 (Pak Phanang) 風格醃豬肉</p>
                <p class="text-xs sm:text-[13px] font-bold text-[#2D5A46] mt-0.5 tracking-wide">หมูโคปากพนัง</p>
              </div>
              <span class="font-mono font-bold text-[#E07A5F] text-xs sm:text-sm shrink-0">369 THB</span>
            </div>
            <div class="p-3 flex items-center justify-between gap-3">
              <div>
                <p class="font-bold text-xs sm:text-sm text-[#3D352E]">14. 馬友鹹魚炒豬肉碎</p>
                <p class="text-xs sm:text-[13px] font-bold text-[#2D5A46] mt-0.5 tracking-wide">หมูสับปลาเค็ม</p>
              </div>
              <span class="font-mono font-bold text-[#E07A5F] text-xs sm:text-sm shrink-0">369 THB</span>
            </div>
            <div class="p-3 flex items-center justify-between gap-3">
              <div>
                <p class="font-bold text-xs sm:text-sm text-[#3D352E]">15. 假葉樹葉 (Chaphlu) 蟹肉黃咖哩</p>
                <p class="text-xs sm:text-[13px] font-bold text-[#2D5A46] mt-0.5 tracking-wide">แกงปูใบชะพลู</p>
              </div>
              <span class="font-mono font-bold text-[#E07A5F] text-xs sm:text-sm shrink-0">892 THB</span>
            </div>
            <div class="p-3 flex items-center justify-between gap-3">
              <div>
                <p class="font-bold text-xs sm:text-sm text-[#3D352E]">16. 醃鹹豬肉</p>
                <p class="text-xs sm:text-[13px] font-bold text-[#2D5A46] mt-0.5 tracking-wide">หมูเค็ม</p>
              </div>
              <span class="font-mono font-bold text-[#E07A5F] text-xs sm:text-sm shrink-0">369 THB</span>
            </div>
            <div class="p-3 flex items-center justify-between gap-3">
              <div>
                <p class="font-bold text-xs sm:text-sm text-[#3D352E]">17. 蒸蟹膏 / 蟹黃飯</p>
                <p class="text-xs sm:text-[13px] font-bold text-[#2D5A46] mt-0.5 tracking-wide">ข้าวผัดมันโคลนปูนึ่ง</p>
              </div>
              <span class="font-mono font-bold text-[#E07A5F] text-xs sm:text-sm shrink-0">789 THB</span>
            </div>
            <div class="p-3 flex items-center justify-between gap-3">
              <div>
                <p class="font-bold text-xs sm:text-sm text-[#3D352E]">18. 薑黃香料炸魚</p>
                <p class="text-xs sm:text-[13px] font-bold text-[#2D5A46] mt-0.5 tracking-wide">ข้าวมิ้นปลาทอดเครื่อง</p>
              </div>
              <span class="font-mono font-bold text-[#E07A5F] text-xs sm:text-sm shrink-0">465 THB</span>
            </div>
            <div class="p-3 flex items-center justify-between gap-3">
              <div>
                <p class="font-bold text-xs sm:text-sm text-[#3D352E]">19. 辣炒軟骨豬肉咖哩</p>
                <p class="text-xs sm:text-[13px] font-bold text-[#2D5A46] mt-0.5 tracking-wide">แกงพริกหมูกระดูกอ่อน</p>
              </div>
              <span class="font-mono font-bold text-[#E07A5F] text-xs sm:text-sm shrink-0">465 THB</span>
            </div>
            <div class="p-3 flex items-center justify-between gap-3">
              <div>
                <p class="font-bold text-xs sm:text-sm text-[#3D352E]">20. 豬肉碎煎蛋</p>
                <p class="text-xs sm:text-[13px] font-bold text-[#2D5A46] mt-0.5 tracking-wide">ไข่เจียวหมูสับ</p>
              </div>
              <span class="font-mono font-bold text-[#E07A5F] text-xs sm:text-sm shrink-0">95 THB</span>
            </div>
          </div>
        </div>
      </div>
    `,
  },
};
