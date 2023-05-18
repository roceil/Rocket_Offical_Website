import Image from 'next/image';
import frontEnd from 'public/images/aboutRocket/about-rocket-frontend.svg';
import backEnd from 'public/images/aboutRocket/about-rocket-backend.svg';
import uiDesign from 'public/images/aboutRocket/about-rocket-ui.svg';

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
  return (
    <section className="bg-banner_bg">
      <div className="bg-rocket_blue_tint lg:rounded-[40px] xl:rounded-none">
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
            <ul className="flex flex-col items-center justify-center space-y-6 overflow-y-auto lg:h-[592px] lg:space-y-8 lg:justify-start">
              {/* 手機版卡片 */}
              <ul className="lg:hidden space-y-6">
                {jobList.map(({ title, img, jobTitle, skills }) => {
                  return (
                    <li className="w-full rounded-3xl bg-white px-4 py-5">
                      <p className="h3 mb-4">{title}</p>

                      {/* 技能區塊 */}
                      <ul className="mb-3 space-x-2">
                        {skills.map((skill) => {
                          return (
                            <li className="inline-block rounded-full border-2 border-rocket_blue_default px-4 py-2 text-xs font-bold text-rocket_blue_dark">
                              {skill}
                            </li>
                          );
                        })}
                      </ul>

                      {/* 職稱 */}
                      <p className="mb-7 text-xl font-bold text-neutral-500">
                        {jobTitle}
                      </p>

                      {/* 圖片 */}
                      <div className="relative flex items-center justify-center">
                        <Image
                          src={img}
                          alt="前端工程師"
                          width={164}
                          height={160}
                          className="relative z-10"
                        />
                        <div className="absolute bottom-0 left-0 h-[60px] w-full rounded-xl bg-neutral-200"></div>
                      </div>
                    </li>
                  );
                })}
              </ul>

              {/* 桌機版卡片 */}
              <ul className="hidden lg:block lg:space-y-8">
                {jobList.map(({ title, img, jobTitle, skills }) => {
                  return (
                    <li className="flex rounded-3xl bg-white p-9 w-[636px] justify-between">
                      <div className="min-w-[290px]">
                        <div className="mb-20">
                          <p className="h3 mb-3">{title}</p>

                          {/* 技能區塊 */}
                          <ul className="mb-3 space-x-2">
                            {skills.map((skill) => {
                              return (
                                <li className="inline-block rounded-full border-2 border-rocket_blue_default px-4 py-2 font-bold text-rocket_blue_dark">
                                  {skill}
                                </li>
                              );
                            })}
                          </ul>
                        </div>

                        {/* 職稱 */}
                        <p className="mb-7 text-xl font-bold text-neutral-500">
                          {jobTitle}
                        </p>
                      </div>

                      {/* 圖片 */}
                      <div className="relative flex items-center justify-center bg-neutral-200 rounded-3xl">
                        <Image
                          src={img}
                          alt="前端工程師"
                          width={164}
                          height={160}
                          className="relative z-10 right-[54px]"
                        />
                      </div>
                    </li>
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