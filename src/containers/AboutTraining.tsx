import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import OrderBtn from '../components/OrderBtn';

import orderNowBtn from 'public/images/aboutTraining/orderNowBtn.svg';
import frontEnd from 'public/images/aboutTraining/frontend.svg';
import backEnd from 'public/images/aboutTraining/backend.svg';
import ui from 'public/images/aboutTraining/ui.svg';
import weijie_LG from 'public/images/aboutTraining/coach-weijie-3x.png';
import weijie_SM from 'public/images/aboutTraining/coach-weijie-2x.png';
import yinmin_LG from 'public/images/aboutTraining/coach-yinmin-3x.png';
import yinmin_SM from 'public/images/aboutTraining/coach-yinmin-2x.png';
import casper_LG from 'public/images/aboutTraining/coach-casper-3x.png';
import casper_SM from 'public/images/aboutTraining/coach-casper-2x.png';
import justin_LG from 'public/images/aboutTraining/coach-justin-3x.png';
import justin_SM from 'public/images/aboutTraining/coach-justin-2x.png';

const frontEndTexts = [
  { text: '網頁切版技能：HTML5、CSS3、SCSS、Bootsrap5、TailwindCSS' },
  {
    text: '前端開發技能：JavaScript、TypeScript、ES6、SPA、JS plugin 整合、API 介接、NPM',
  },
  { text: '後端開發技能：Node.js、MongoDB、heroku、express、JWT JS' },
  { text: '框架：React(Hooks)、Vue3，會依照未來你想投入的公司進行調整' },
  { text: '程式版控：Git、GitHub、Git Flow 工作流程' },
];

const backEndTexts = [
  { text: '後端語言：C#' },
  {
    text: `程式架構：<a href="https://dotnet.microsoft.com/zh-cn/apps/aspnet" className='underline'>
    ASP.NET  </a> Web Form、<a href="https://dotnet.microsoft.com/zh-cn/apps/aspnet" className='underline'>
  ASP.NET</a> MVC、Web API`,
  },
  { text: '資料庫與雲端主機：MSSQL、Microsoft Azure' },
];

const uiTexts = [
  { text: '網頁前置規劃：Logic Flow、Wireframe、網格系統、使用者體驗' },
  { text: '介面繪製流程：Figma 操作、Mockup、Prototype、標註文件' },
  { text: '網頁切版技能：HTML5、CSS、Bootstrap5' },
];

const coachs = [
  {
    id: 0,
    name: '廖洧杰',
    photo_LG: weijie_LG,
    photo_SM: weijie_SM,
  },
  {
    id: 1,
    name: '穎旻',
    photo_LG: yinmin_LG,
    photo_SM: yinmin_SM,
  },
  {
    id: 2,
    name: '賈斯汀',
    photo_LG: justin_LG,
    photo_SM: justin_SM,
  },
  {
    id: 3,
    name: '卡斯伯',
    photo_LG: casper_LG,
    photo_SM: casper_SM,
  },
];

const coachsDescriptions = [
  {
    name: '廖洧杰',
    title: '前端教練 | 廖洧杰',
    description: [
      '2016-2022 過往經歷：六角學院校長、高雄火箭隊前端教練',
      '2013-2019 成功案例：協助無資訊背景轉職工程師人數超過 500 位',
      '2013-2019 授課人數：線上+線下授課學員超過 25,000 位',
      '2014-2019 線下授課：高雄大學前端領域兼任講師',
      '2007-2019 實務經驗：經手超過 100 個實際專案，其領域不乏中小企業、政府專案、銀行系統',
    ],
  },
  {
    name: '穎旻',
    title: '前端教練 | 穎旻',
    description: [
      '六角學院前端工程師',
      '六角學院前端講師',
      '金龍國小教育訓練講師',
      '國泰產險教育訓練講師',
    ],
  },
  {
    name: '賈斯汀',
    title: '後端教練 | 賈斯汀',
    description: [
      '高雄市警察局縣市合併內外部整合',
      '嘉義縣警察局全球資訊網與內部知識網',
      '總統府全球資訊網系統維護及開發',
      '總統府 APP 新聞即時通系統開發',
      '金管會 EIP SSO 整合',
      '經濟部工業局電子書包加值應用計畫系統規劃、設計開發',
      '國立海生館活動與報名系統規劃開發',
      '國立海生館海洋教育網規劃開發',
      '台灣淨水器材百科商務平台規劃開發',
      '高雄市小學電子書包試行計畫',
      '屏東國立海生館活動與報名系統',
      '屏東國立海生館海洋教育網',
      '威錦水器材百科補助計畫',
      'supermediastore（美國購物網站）',
      '高雄捷運網站',
      '高雄世運志工服務系統',
      '高雄市 85 大樓招商網',
      '高雄市國稅局稅務宣導活動網站',
      '高雄市民政局業務資訊化委外作業',
      '高雄市國稅局全球資訊網',
      '高雄市府衛生局中英全球資訊網',
      '高雄市新聞處圖文影像管理系統',
      '高雄市政府文化局中英文網站',
      '屏東縣政府旅遊網',
      '屏東縣政府招商網',
      '行政院南區服務中心網站',
      '經濟部水利署南區水資源局 105 年度業務及全球資訊網站維護及功能擴充計畫',
    ],
  },
  {
    name: '卡斯伯',
    title: 'UI 教練 | 卡斯伯',
    description: [
      '2016-2022 過往經歷：六角學院共同創辦人',
      '2016-2022 近期授課經驗：Vue 3 直播班講師、從 Figma 到 VSCode，設計做到網頁切版',
      '2013-2016 實務經驗：鴻海軟體工程師，設計師轉職前端工程師，擅長將複雜觀念用圖形化方式呈現',
      '六屆 IT 鐵人邦獲選紀錄',
      'Modern Web 研討會講者',
      '線上課程超過萬人註冊',
      '研討會經驗-經驗豐富的技術開發者 2017 Modern Web 技術講者',
      '2021 {Laravel x Vue}Conf 技術講者',
      '五屆 IT 鐵人賽優選',
      '技術 Blog - 卡斯伯前端',
    ],
  },
];

function AboutTraining() {
  const [clickCoach, setClickCoach] = useState<string>('廖洧杰');
  const coachsRef = useRef<HTMLDivElement>(null);
  const [isScroll, setIsScroll] = useState(false);
  const checkCoach = (name: string) => {
    return name === clickCoach
      ? '!bg-rocket_blue_tint'
      : 'lg:hover:bg-rocket_blue_tint transition-all duration-300';
  };

  // ==================== 確認點擊的教練(電腦版) ====================
  const handleCoachClick = (name: string) => {
    setIsScroll(true);
    // 更新 clickCoach 狀態
    setClickCoach(name);
  };

  useEffect(() => {
    if (coachsRef.current && isScroll) {
      coachsRef.current.scrollIntoView({
        block: 'start',
      });
      setIsScroll(false);
    }
  }, [isScroll]);

  // ==================== 確認點擊的教練(手機版) ====================
  const checkCoachName = ({ activeIndex }: { activeIndex: number }) => {
    switch (activeIndex) {
      case 0:
        setClickCoach('廖洧杰');
        return;

      case 1:
        setClickCoach('穎旻');
        return;

      case 2:
        setClickCoach('賈斯汀');
        return;

      case 3:
        setClickCoach('卡斯伯');
        return;

      default:
        setClickCoach('廖洧杰');
        return;
    }
  };

  return (
    <section className="bg-[#F8F9FD]">
      <div className="relative pb-[72px] pt-[30px] lg:pt-[38px] lg:pb-[128px]">
        <h2 className="h2 absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 text-center">
          關於培訓
        </h2>

        {/* 馬上報名_按鈕 */}
        <OrderBtn
          image={orderNowBtn}
          text="馬上報名！"
          bgColor="#E5EBFF"
          needPosition
        />

        {/* 近期梯次_手機版 */}
        <div className="container lg:hidden">
          <div className="relative mb-20 flex items-center rounded-[50px] bg-white px-5 py-3">
            <p className="absolute left-5 top-1/2 -translate-y-1/2 border-r-2 border-neutral-200 pr-3 text-sm font-bold">
              近期梯次
            </p>

            <Marquee className="ml-[84px] text-sm" speed={20} pauseOnHover>
              <p>第十三梯 (2023/5/8~2023/11/30)</p>
              <p>、</p>
              <p className="mr-4">第十四梯 (2023/7/31~2024/2/28)</p>
            </Marquee>
          </div>
        </div>

        {/* 近期梯次_桌機版 */}
        <div className="container hidden lg:block">
          <div className="flex w-full justify-center">
            <div className="flex w-full max-w-[636px] items-center justify-between rounded-full bg-white px-5 py-3">
              <span className="border-r-2 border-neutral-700 py-[5px] pr-3 font-bold">
                近期梯次
              </span>
              <span>
                第十三梯 (2023/5/8~2023/11/30) 、第十四梯 (2023/7/31~2024/2/28)
              </span>
            </div>
          </div>
        </div>

        {/* 前端工程師 _手機版*/}
        <div className="bg-white bg-training_bg lg:mt-20 lg:hidden">
          <div className="container relative pb-[37px] pt-[49px]">
            {/* 標題Tag */}
            <div className="absolute left-[47px] top-0 h-[54px] w-[142px] -translate-y-1/2">
              <div className="relative h-full w-full">
                {/* 文字區塊 */}
                <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center rounded-xl border-2 border-neutral-700 bg-white text-xl font-bold">
                  <p>前端工程師</p>
                </div>

                {/* 背景區塊 */}
                <div className="relative left-1 top-1 h-full w-full rounded-xl bg-neutral-700"></div>
              </div>
            </div>

            {/* 圖片 */}
            <div className="flex w-full items-center justify-center">
              <Image src={frontEnd} alt="前端工程師" width={218} height={200} />
            </div>

            {/* 關於前端 */}
            <div className="mb-6">
              <p className="mt-6 inline-block border-b-2 border-neutral-700 text-lg font-bold">
                關於前端
              </p>

              <p className="mt-3">
                主要專精 JavaScript 前端 (65%)、後端 (35%) 開發，投入語言為
                HTML、CSS、JavaScript，
                <span className="bg-accent font-bold">
                  適合有一些 HTML、CSS、JS 基礎的學員報名
                </span>
                。
              </p>
            </div>

            {/* 應徵門檻 */}
            <div className="mb-6">
              <p className="mt-6 inline-block border-b-2 border-neutral-700 text-lg font-bold">
                應徵門檻
              </p>
              <ul className="list-decimal pl-[25px]">
                <li className="my-3">
                  會用 CSS Flexbox 排過網頁，有 RWD 響應式網頁概念，需提交 CSS
                  切版作品，
                  <span className="font-bold">請在履歷上需附網頁切版作品</span>
                  ，Codepen、GitHub Pages 皆可
                </li>

                <li>
                  了解 JS 變數、陣列物件、DOM、監聽、AJAX
                  等知識，尚未熟練也沒關係。
                </li>
              </ul>
            </div>

            {/* 你會學到 */}
            <div>
              <p className="mb-3 mt-6 inline-block border-b-2 border-neutral-700 text-lg font-bold">
                你會學到
              </p>
              <ul className="pl-[25px]">
                {frontEndTexts.map((item, index) => {
                  return (
                    <li key={index} className="mb-3 list-decimal">
                      {item.text}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* 前端工程師 _桌機版*/}
        <div className="container mt-20 hidden lg:block">
          <div className="flex items-center justify-center">
            <div className="relative flex w-[1076px] justify-between rounded-2xl border-2 border-neutral-200 bg-white bg-training_bg_large pb-[42px] pl-12 pr-[82px] pt-[60px]">
              {/* 標題Tag */}
              <div className="absolute left-10 top-0 h-[54px] w-[142px] -translate-y-1/2">
                <div className="relative h-full w-full">
                  {/* 文字區塊 */}
                  <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center rounded-xl border-2 border-neutral-700 bg-white text-xl font-bold">
                    <p>前端工程師</p>
                  </div>

                  {/* 背景區塊 */}
                  <div className="relative left-1 top-1 h-full w-full rounded-xl bg-neutral-700"></div>
                </div>
              </div>
              {/* 文字區塊 */}
              <div className="w-full max-w-[618px]">
                {/* 關於前端 */}
                <div className="mb-9">
                  <p className="inline-block border-b-2 border-neutral-700 text-xl font-bold ">
                    關於前端
                  </p>
                  <p className="mt-4">
                    主要專精 JavaScript 前端 (65%)、後端 (35%) 開發，投入語言為
                    HTML、CSS、JavaScript，
                    <span className=" bg-accent font-bold">
                      適合有一些 HTML、CSS、JS 基礎的學員報名
                    </span>
                    。
                  </p>
                </div>

                {/* 應徵門檻 */}
                <div className="mb-9">
                  <p className="inline-block border-b-2 border-neutral-700 text-xl font-bold">
                    應徵門檻
                  </p>
                  <ul className="mt-4 list-decimal pl-[25px]">
                    <li className="">
                      會用 CSS Flexbox 排過網頁，有 RWD 響應式網頁概念，需提交
                      CSS 切版作品，
                      <span className="bg-accent font-bold">
                        請在履歷上需附網頁切版作品
                      </span>
                      ，Codepen、GitHub Pages 皆可
                    </li>

                    <li>
                      了解 JS 變數、陣列物件、DOM、監聽、AJAX
                      等知識，尚未熟練也沒關係。
                    </li>
                  </ul>
                </div>

                {/* 你會學到 */}
                <div>
                  <p className="inline-block border-b-2 border-neutral-700 text-xl font-bold">
                    你會學到
                  </p>
                  <ul className="mt-3 list-decimal pl-[25px]">
                    {frontEndTexts.map((item, index) => {
                      return <li key={index}>{item.text}</li>;
                    })}
                  </ul>
                </div>
              </div>
              {/* 圖片區塊 */}
              <Image src={frontEnd} alt="前端工程師" width={280} height={280} />
            </div>
          </div>
        </div>

        {/* 後端工程師_手機版 */}
        <div className="mt-20 bg-white bg-training_bg lg:hidden">
          <div className="container relative pb-[37px] pt-[49px]">
            {/* 標題Tag */}
            <div className="absolute left-[47px] top-0 h-[54px] w-[142px] -translate-y-1/2">
              <div className="relative h-full w-full">
                {/* 文字區塊 */}
                <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center rounded-xl border-2 border-neutral-700 bg-white text-xl font-bold">
                  <p>後端工程師</p>
                </div>

                {/* 背景區塊 */}
                <div className="relative left-1 top-1 h-full w-full rounded-xl bg-neutral-700"></div>
              </div>
            </div>

            {/* 圖片 */}
            <div className="flex w-full items-center justify-center">
              <Image src={backEnd} alt="後端工程師" width={218} height={200} />
            </div>

            {/* 關於後端 */}
            <div className="mb-6">
              <p className="mt-6 inline-block border-b-2 border-neutral-700 text-lg font-bold">
                關於後端
              </p>

              <p className="mt-3">
                後端工程師組主要專注為後端開發，投入後端語言為 C#、.Net，
                <span className="bg-accent font-bold">
                  適合無程式背景的學員報名
                </span>
                。
              </p>
            </div>

            {/* 你會學到 */}
            <div>
              <p className="mb-3 mt-6 inline-block border-b-2 border-neutral-700 text-lg font-bold">
                你會學到
              </p>
              <ul className="list-decimal pl-[25px]">
                <li>後端語言：C#</li>
                <li>
                  程式架構：
                  <a
                    href="https://dotnet.microsoft.com/zh-cn/apps/aspnet"
                    className="underline"
                    target="_blank"
                  >
                    ASP.NET
                  </a>{' '}
                  Web Form、
                  <a
                    href="https://dotnet.microsoft.com/zh-cn/apps/aspnet"
                    className="underline"
                    target="_blank"
                  >
                    ASP.NET
                  </a>{' '}
                  MVC、Web API
                </li>
                <li>資料庫與雲端主機：MSSQL、Microsoft Azure</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 後端工程師 _桌機版*/}
        <div className="container mt-20 hidden lg:block">
          <div className="flex items-center justify-center">
            <div className="relative flex w-[1076px] flex-row-reverse justify-between rounded-2xl border-2 border-neutral-200 bg-white bg-training_bg_large pb-[42px] pl-12 pr-[82px] pt-[60px]">
              {/* 標題Tag */}
              <div className="absolute left-10 top-0 h-[54px] w-[142px] -translate-y-1/2">
                <div className="relative h-full w-full">
                  {/* 文字區塊 */}
                  <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center rounded-xl border-2 border-neutral-700 bg-white text-xl font-bold">
                    <p>後端工程師</p>
                  </div>

                  {/* 背景區塊 */}
                  <div className="relative left-1 top-1 h-full w-full rounded-xl bg-neutral-700"></div>
                </div>
              </div>
              {/* 文字區塊 */}
              <div className="w-full max-w-[618px]">
                {/* 關於後端 */}
                <div className="mb-9">
                  <p className="inline-block border-b-2 border-neutral-700 text-xl font-bold ">
                    關於後端
                  </p>
                  <p className="mt-4">
                    後端工程師組主要專注為後端開發，投入後端語言為
                    <span className="bg-accent font-bold leading-[0.6]">
                      C#、.Net，適合無程式背景的學員報名
                    </span>
                    。
                  </p>
                </div>

                {/* 你會學到 */}
                <div>
                  <p className="mb-3 mt-6 inline-block border-b-2 border-neutral-700 text-lg font-bold">
                    你會學到
                  </p>
                  <ul className="list-decimal pl-[25px]">
                    <li>後端語言：C#</li>
                    <li>
                      程式架構：
                      <a
                        href="https://dotnet.microsoft.com/zh-cn/apps/aspnet"
                        className="underline"
                        target="_blank"
                      >
                        ASP.NET
                      </a>{' '}
                      Web Form、
                      <a
                        href="https://dotnet.microsoft.com/zh-cn/apps/aspnet"
                        className="underline"
                        target="_blank"
                      >
                        ASP.NET
                      </a>{' '}
                      MVC、Web API
                    </li>
                    <li>資料庫與雲端主機：MSSQL、Microsoft Azure</li>
                  </ul>
                </div>
              </div>
              {/* 圖片區塊 */}
              <Image src={backEnd} alt="後端工程師" width={280} height={280} />
            </div>
          </div>
        </div>

        {/* UI設計師_手機版 */}
        <div className="mt-20 bg-white bg-training_bg lg:hidden">
          <div className="container relative pb-[37px] pt-[49px]">
            {/* 標題Tag */}
            <div className="absolute left-[47px] top-0 h-[54px] w-[142px] -translate-y-1/2">
              <div className="relative h-full w-full">
                {/* 文字區塊 */}
                <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center rounded-xl border-2 border-neutral-700 bg-white text-xl font-bold">
                  <p>UI設計師</p>
                </div>

                {/* 背景區塊 */}
                <div className="relative left-1 top-1 h-full w-full rounded-xl bg-neutral-700"></div>
              </div>
            </div>

            {/* 圖片 */}
            <div className="flex w-full items-center justify-center">
              <Image src={ui} alt="UI設計師" width={218} height={200} />
            </div>

            {/* 關於設計 */}
            <div className="mb-6">
              <p className="mt-6 inline-block border-b-2 border-neutral-700 text-lg font-bold">
                關於設計
              </p>

              <p className="mt-3">
                主要以網頁 UI 設計 50%、網頁前端 50% 的雙技能樹養成，
                <span className="bg-accent font-bold">
                  適合具備視覺背景，操作過繪圖軟體尤佳，歡迎無工作經驗的學員報名
                </span>
                。
              </p>
            </div>

            {/* 你會學到 */}
            <div>
              <p className="mb-3 mt-6 inline-block border-b-2 border-neutral-700 text-lg font-bold">
                你會學到
              </p>
              <ul className="list-decimal pl-[25px]">
                {uiTexts.map((item, index) => (
                  <li key={index} className="mb-3">
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* UI設計師 _桌機版*/}
        <div className="container mt-20 hidden lg:block">
          <div className="flex items-center justify-center">
            <div className="relative flex w-[1076px] justify-between rounded-2xl border-2 border-neutral-200 bg-white bg-training_bg_large pb-[42px] pl-12 pr-[82px] pt-[60px]">
              {/* 標題Tag */}
              <div className="absolute left-10 top-0 h-[54px] w-[142px] -translate-y-1/2">
                <div className="relative h-full w-full">
                  {/* 文字區塊 */}
                  <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center rounded-xl border-2 border-neutral-700 bg-white text-xl font-bold">
                    <p>UI設計師</p>
                  </div>

                  {/* 背景區塊 */}
                  <div className="relative left-1 top-1 h-full w-full rounded-xl bg-neutral-700"></div>
                </div>
              </div>
              {/* 文字區塊 */}
              <div className="w-full max-w-[618px]">
                {/* 關於設計 */}
                <div className="mb-6">
                  <p className="mt-6 inline-block border-b-2 border-neutral-700 text-lg font-bold">
                    關於設計
                  </p>

                  <p className="mt-3">
                    主要以網頁 UI 設計 50%、網頁前端 50% 的雙技能樹養成，
                    <span className="bg-accent font-bold">
                      適合具備視覺背景，操作過繪圖軟體尤佳，歡迎無工作經驗的學員報名
                    </span>
                    。
                  </p>
                </div>

                {/* 你會學到 */}
                <div>
                  <p className="mb-3 mt-6 inline-block border-b-2 border-neutral-700 text-lg font-bold">
                    你會學到
                  </p>
                  <ul className="list-decimal pl-[25px]">
                    {uiTexts.map((item, index) => (
                      <li key={index} className="mb-3">
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* 圖片區塊 */}
              <Image src={ui} alt="UI設計師" width={280} height={280} />
            </div>
          </div>
        </div>

        {/* 教練團 */}
        <div
          className=" flex justify-center bg-[#F8F9FD] pt-[52px]"
          ref={coachsRef}
        >
          <div className="container max-w-[1076px] lg:px-0">
            <p className="h3 -mb-4 lg:mb-10">教練團</p>

            {/* 教練團 _桌機版*/}
            <div className="hidden lg:block">
              {/* 照片選擇區塊 */}
              <ul className="mb-7 flex items-center space-x-6">
                {coachs.map(({ name, photo_LG }) => {
                  return (
                    <li key={name}>
                      <button
                        onClick={() => handleCoachClick(name)}
                        className={`relative h-[160px] w-[251px] rounded-2xl border-2 border-neutral-700 bg-white ${checkCoach(
                          name
                        )}`}
                      >
                        {/* 圖片 */}
                        <Image
                          src={photo_LG}
                          alt="教練圖片"
                          width={180}
                          height={180}
                          className="absolute bottom-0 left-0"
                        />

                        {/* 姓名 */}
                        <div className="absolute -top-5 right-4 h-[104px] w-12">
                          <div className="relative h-full w-full rounded-xl bg-neutral-700"></div>
                          <div className="absolute -top-1 right-1 flex h-full w-full items-center justify-center rounded-xl border-2 border-neutral-700 bg-white ">
                            <p className="vertical-rl font-bold tracking-[7px]">
                              {name}
                            </p>
                          </div>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>

              {/* 文字區塊 */}
              <div>
                {coachsDescriptions
                  .filter((coach) => coach.name === clickCoach)
                  .map((filterCoach) => (
                    <div key={filterCoach.name}>
                      <p className="mb-3 text-2xl font-bold">
                        前端教練 | {filterCoach.name}
                      </p>
                      <ul className="ml-5 list-disc">
                        {filterCoach.description.map((item, index) => (
                          <li key={index} className="leading-[1.75]">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            </div>

            {/* 教練團 _手機版*/}
            <div className="lg:hidden">
              {/* 照片選擇區塊 */}
              <Swiper
                slidesPerView={'auto'}
                spaceBetween={28}
                pagination={{
                  clickable: true,
                }}
                modules={[FreeMode]}
                onSlideChange={checkCoachName}
                className="mySwiper mb-7 !h-[230px] !pr-0 lg:!hidden"
              >
                {coachs.map(({ name, photo_SM }) => {
                  return (
                    <SwiperSlide key={name} className="!mt-[60px] !w-auto">
                      <button
                        onClick={() => handleCoachClick(name)}
                        className={`relative h-[170px] w-[290px] rounded-2xl border-2 border-neutral-700 bg-white ${checkCoach(
                          name
                        )}`}
                      >
                        {/* 圖片 */}
                        <Image
                          src={photo_SM}
                          alt="教練圖片"
                          width={180}
                          height={180}
                          className="absolute bottom-0 left-0"
                        />

                        {/* 文字 */}
                        <div className="absolute -top-5 right-4 h-[104px] w-12">
                          <div className="relative h-full w-full rounded-xl bg-neutral-700"></div>
                          <div className="absolute -top-1 right-1 flex h-full w-full items-center justify-center rounded-xl border-2 border-neutral-700 bg-white ">
                            <p className="vertical-rl font-bold tracking-[7px]">
                              {name}
                            </p>
                          </div>
                        </div>
                      </button>
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              {/* 文字區塊 */}
              <div>
                {coachsDescriptions
                  .filter((coach) => coach.name === clickCoach)
                  .map((filterCoach) => (
                    <div key={filterCoach.name}>
                      <p className="mb-3 text-2xl font-bold">
                        前端教練 | {filterCoach.name}
                      </p>
                      <ul className="ml-5 list-disc">
                        {filterCoach.description.map((item, index) => (
                          <li key={index} className="leading-[1.75]">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutTraining;
