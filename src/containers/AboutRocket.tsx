import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import frontEnd from 'public/images/aboutRocket/about-rocket-frontend.svg';
import backEnd from 'public/images/aboutRocket/about-rocket-backend.svg';
import uiDesign from 'public/images/aboutRocket/about-rocket-ui.svg';
import { AboutRocketJobCardMobile } from '../components/AboutRocketJobCardMobile';
import { AboutRocketJobCardPC } from '../components/AboutRocketJobCardPC';
import { useEffect, useRef } from 'react';

const jobList = [
  {
    title: '前端工程師',
    skills: ['HTML', 'CSS', 'JavaScript'],
    jobTitle: 'Front-end engineer',
    img: frontEnd,
  },
  {
    title: '後端工程師',
    skills: ['C#', '.NET'],
    jobTitle: 'Back-end engineer',
    img: backEnd,
  },
  {
    title: 'UI 設計師',
    skills: ['Figma', 'HTML', 'CSS'],
    jobTitle: 'UI designer',
    img: uiDesign,
  },
];

function AboutRocket() {
  // ==================== GSAP ====================
  gsap.registerPlugin(ScrollTrigger);
  const aboutRocketRef = useRef(null);

  useEffect(() => {
    const scrollTL = gsap.timeline({
      scrollTrigger: {
        trigger: '#rocketSection',
        // pin: true, //重要！ pin需設為true
        // markers: true, // 顯示起始點
        scrub: true,
        start: 'top 20%',
        end: 'top -25%',
      },
    });

    scrollTL.to('#jobCard1', { yPercent: '-150' });
    scrollTL.to('#jobCard2', { yPercent: '-150' }, '<');
    scrollTL.to('#jobCard3', { yPercent: '-150' }, '<');
  }, []);

  return (
    <section className="z-10 bg-banner_bg" id="rocketSection">
      <div className="bg-rocket_blue_tint rounded-3xl xl:rounded-none">
        <div className="container py-9 lg:py-[60px] xl:px-[72px]">
          <div className="lg:flex lg:justify-between">
            {/* 文字區塊 */}
            <div className="lg:max-w-[526px]">
              <p className="pl-1 lg:text-xl">About Rocket</p>
              <p className="h1 mb-4 leading-relaxed lg:mb-10">什麼是火箭隊</p>

              <p className="mb-6 lg:text-xl">
                火箭隊位於高雄的工程師培訓營，針對市場急需的前端、後端工程師與
                UI 設計師職缺而設。為期
                <span className="font-bold">七個月的免費課程</span>
                ，學員全程參與，
                <span className="font-bold">僅需支付場地費</span>
                。
                <br />
                <br />
                火箭隊培育具備問題解決能力的專業人才，滿足企業需求。透過教練的觀察與協助，學員將建立階段性目標，確保技能成長。加入火箭隊，您將獲得實戰經驗，迅速融入職場，並滿足市場對高品質工程師的渴求。
              </p>
            </div>

            {/* 圖片區塊 */}
            <ul className="flex flex-col items-center justify-center space-y-6 overflow-hidden lg:h-[592px] lg:justify-start lg:space-y-8">
              {/* 手機版卡片 */}
              <ul className="space-y-6 lg:hidden">
                {jobList.map(({ title, img, jobTitle, skills }) => {
                  return (
                    <AboutRocketJobCardMobile
                      key={title}
                      title={title}
                      img={img}
                      jobTitle={jobTitle}
                      skills={skills}
                    />
                  );
                })}
              </ul>

              {/* 桌機版卡片 */}
              <ul className="hidden lg:block lg:space-y-8">
                {jobList.map(({ title, img, jobTitle, skills }, index) => {
                  return (
                    <AboutRocketJobCardPC
                      key={title}
                      title={title}
                      img={img}
                      jobTitle={jobTitle}
                      skills={skills}
                      index={index}
                    />
                  );
                })}
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutRocket;
