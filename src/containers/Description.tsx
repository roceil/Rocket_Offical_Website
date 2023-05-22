import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import discuss_LG from 'public/images/description/hardware/intro-discuss-lg-3x.png';
import discuss_SM from 'public/images/description/hardware/intro-discuss-sm-2x.png';
import rest_LG from 'public/images/description/hardware/intro-rest-lg-3x.png';
import rest_SM from 'public/images/description/hardware/intro-rest-sm-2x.png';
import workspace_LG from 'public/images/description/hardware/intro-workspace-lg-3x.png';
import workspace_SM from 'public/images/description/hardware/intro-workspace-lg-2x.png';

import carousel1_LG from 'public/images/description/marquee/carousel1-lg.png';
import carousel1_SM from 'public/images/description/marquee/carousel1-sm.png';
import carousel2_LG from 'public/images/description/marquee/carousel2-lg.png';
import carousel2_SM from 'public/images/description/marquee/carousel2-sm.png';
import carousel3_LG from 'public/images/description/marquee/carousel3-lg.png';
import carousel3_SM from 'public/images/description/marquee/carousel3-sm.png';
import carousel4_LG from 'public/images/description/marquee/carousel4-lg.png';
import carousel4_SM from 'public/images/description/marquee/carousel4-sm.png';
import carousel5_LG from 'public/images/description/marquee/carousel5-lg.png';
import carousel5_SM from 'public/images/description/marquee/carousel5-sm.png';
import carousel6_LG from 'public/images/description/marquee/carousel6-lg.png';
import carousel6_SM from 'public/images/description/marquee/carousel6-sm.png';
import carousel7_LG from 'public/images/description/marquee/carousel7-lg.png';
import carousel7_SM from 'public/images/description/marquee/carousel7-sm.png';
import carousel8_LG from 'public/images/description/marquee/carousel8-lg.png';
import carousel8_SM from 'public/images/description/marquee/carousel8-sm.png';

import coffee_LG from 'public/images/description/service/ic-coffee-lg.svg';
import coffee_SM from 'public/images/description/service/ic-coffee-sm.svg';
import wifi_LG from 'public/images/description/service/ic-wifi-lg.svg';
import wifi_SM from 'public/images/description/service/ic-wifi-sm.svg';
import chair_LG from 'public/images/description/service/ic-chair-lg.svg';
import chair_SM from 'public/images/description/service/ic-chair-sm.svg';
import chat_LG from 'public/images/description/service/ic-chat-lg.svg';
import chat_SM from 'public/images/description/service/ic-chat-sm.svg';
import traffic_LG from 'public/images/description/service/ic-traffic-lg.svg';
import traffic_SM from 'public/images/description/service/ic-traffic-sm.svg';
import food_LG from 'public/images/description/service/ic-food-lg.svg';
import food_SM from 'public/images/description/service/ic-food-sm.svg';
import ServiceCardMobile from '@/components/ServiceCardMobile';
import ServiceCardPC from '../components/ServiceCardPC';

const hardwareDescriptions = [
  {
    title: '\\ 很 chill 的休憩區 /',
    content: (
      <p className="text-neutral-600">
        我們貼心提供{' '}
        <span className="font-bold">
          飲水機、冰箱、微波爐、果汁機、膠囊咖啡機
        </span>
        及不定時茶包及小餅乾零食，我們想讓在工作認真打拼之餘的你也是需要中場休息補充能量，然後再輕鬆泡上一杯咖啡坐在吧台或懶骨頭放空冥想，讓自己
        chill 一下轉換心情！
      </p>
    ),
    image_LG: discuss_LG,
    image_SM: discuss_SM,
  },
  {
    title: '\\ 舒適沙發討論區 /',
    content: (
      <p>
        如果你有想要與夥伴們討論事情這裡也很適合三、五人一起共同開會討論哦！
      </p>
    ),
    image_LG: rest_LG,
    image_SM: rest_SM,
    reverse: true,
  },
  {
    title: '\\ 進駐者區域 /',
    content: (
      <div className="space-y-2">
        <p>
          我們的目標是凝聚更多開發者，為他們提供一個充滿活力的交流空間。在這裡，開發者可以互相學習、分享，透過交流讓自己的技能和視野得到更快速的成長。我們相信，一個好的環境能夠激發創意，促進專業能力的提升。
        </p>
        <p>
          我們希望將這樣的場域擴展至高雄，誠摯地邀請您加入我們，一起為開發者打造一個交流與學習的樂園，讓大家在這裡彼此成長，共同推動科技產業的進步。
        </p>
      </div>
    ),
    image_LG: workspace_LG,
    image_SM: workspace_SM,
  },
];

const marqueeItems = [
  {
    image_LG: carousel1_LG,
    image_SM: carousel1_SM,
  },
  {
    image_LG: carousel2_LG,
    image_SM: carousel2_SM,
  },
  {
    image_LG: carousel3_LG,
    image_SM: carousel3_SM,
  },
  {
    image_LG: carousel4_LG,
    image_SM: carousel4_SM,
  },
  {
    image_LG: carousel5_LG,
    image_SM: carousel5_SM,
  },
  {
    image_LG: carousel6_LG,
    image_SM: carousel6_SM,
  },
  {
    image_LG: carousel7_LG,
    image_SM: carousel7_SM,
  },
  {
    image_LG: carousel8_LG,
    image_SM: carousel8_SM,
  },
];

const serviceData = [
  {
    title: '咖啡、茶水',
    content_LG: (
      <p>
        飲水機、冰箱、微波爐、果汁機、 <br />
        膠囊咖啡機及不定時茶包及小餅乾零食
      </p>
    ),
    content_SM:
      '飲水機、冰箱、微波爐、果汁機、 膠囊咖啡機及不定時茶包及小餅乾零食',
    image_LG: coffee_LG,
    image_SM: coffee_SM,
  },
  {
    title: '超快速網路',
    content_LG: (
      <p>
        使用 Wifi Mesh，
        <br /> 讓你在場域中都有順暢的網路
      </p>
    ),
    content_SM: '使用 Wifi Mesh，讓你在場域中都有順暢的網路',
    image_LG: wifi_LG,
    image_SM: wifi_SM,
  },
  {
    title: '舒服的桌椅',
    content_LG: (
      <p>
        白色辦公桌設計簡潔大方，搭配上人體工學椅，
        <br /> 讓您的身體在長時間辦公後仍能保持舒適
      </p>
    ),
    content_SM:
      '白色辦公桌設計簡潔大方，搭配上人體工學椅，讓您的身體在長時間辦公後仍能保持舒適',
    image_LG: chair_LG,
    image_SM: chair_SM,
  },
  {
    title: '與火箭隊培訓營交流',
    content_LG: (
      <p>
        進駐者能夠與開發團隊暢通無阻地交流，
        <br /> 共同分享各自的專業知識和經驗。
      </p>
    ),
    content_SM:
      '進駐者能夠與開發團隊暢通無阻地交流，共同分享各自的專業知識和經驗。',
    image_LG: chat_LG,
    image_SM: chat_SM,
  },
  {
    title: '便捷的交通',
    content_LG: (
      <p>
        共享空間位於捷運信義國小站附近，
        <br /> 為您提供極佳的交通便利性。
      </p>
    ),
    content_SM: '共享空間位於捷運信義國小站附近，為您提供極佳的交通便利性。',
    image_LG: traffic_LG,
    image_SM: traffic_SM,
  },
  {
    title: '超多美食在附近',
    content_LG: (
      <p>
        無論你要日式、西式、台式，
        <br /> 各種美食應有盡有
      </p>
    ),
    content_SM: '無論你要日式、西式、台式，各種美食應有盡有',
    image_LG: food_LG,
    image_SM: food_SM,
  },
];

function Description() {
  return (
    <section className="container lg:flex lg:justify-center">
      <div className="w-full py-12 lg:max-w-[1076px] lg:py-20">
        <p className="h2 mb-4 text-center">場域說明</p>

        {/* 硬體區塊 */}
        <div className="mb-12 lg:mb-[76px]">
          {/* 標題 */}
          <p className="costTextAccent relative mb-4 inline-block text-xl font-bold lg:mb-6 lg:text-[28px]">
            #硬體
          </p>
          {/* 硬體 */}
          <ul className="flex flex-col space-y-10 text-justify">
            {hardwareDescriptions.map(
              ({ title, content, image_LG, image_SM, reverse = false }) => (
                <li
                  key={title}
                  className={`lg:flex lg:items-center lg:justify-between ${
                    reverse && 'lg:flex-row-reverse'
                  }`}
                >
                  {/* 圖片 */}
                  <div className="mb-4 lg:mb-0 w-full">
                    <Image
                      src={image_SM}
                      alt={title}
                      width={335}
                      height={222}
                      className="lg:hidden"
                    />
                    <Image
                      src={image_LG}
                      alt={title}
                      width={510}
                      height={372}
                      className="hidden lg:block"
                    />
                  </div>

                  {/* 文字敘述 */}
                  <div className="lg:max-w-[494px]">
                    <p className="mb-2 text-xl font-bold lg:mb-5 lg:text-2xl">
                      {title}
                    </p>
                    <div className="text-sm text-neutral-600 lg:text-base">
                      {content}
                    </div>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>

        {/* 服務區塊 */}
        <div className="mb-10 lg:mb-20">
          {/* 服務 */}
          <p className="costTextAccent relative mb-4 inline-block text-xl font-bold lg:mb-6 lg:text-[28px]">
            #服務
          </p>

          {/* 手機版服務項目 */}
          <ul className="mb-2 space-y-7 lg:hidden">
            {serviceData.map(({ title, content_SM, image_LG, image_SM }) => (
              <ServiceCardMobile
                key={title}
                title={title}
                content={content_SM}
                image_SM={image_SM}
              />
            ))}
          </ul>

          {/* 桌機版服務項目 */}
          <div className="">
            <ul className="mb-2 hidden w-full space-y-7 lg:flex lg:flex-wrap lg:justify-center lg:space-y-0">
              {serviceData.map(({ title, content_LG, image_LG }, index) => {
                if (index < 3) {
                  return (
                    <ServiceCardPC
                      key={title}
                      title={title}
                      content_LG={content_LG}
                      image_LG={image_LG}
                    />
                  );
                } else {
                  return (
                    <ServiceCardPC
                      key={title}
                      title={title}
                      content_LG={content_LG}
                      image_LG={image_LG}
                    />
                  );
                }
              })}
            </ul>
          </div>
        </div>

        {/* 跑馬燈區塊 */}
        <Marquee speed={40} pauseOnHover>
          {marqueeItems.map(({ image_LG, image_SM }, index) => (
            <div key={index} className="mr-6">
              <Image
                src={image_SM}
                alt="carousel"
                width={332}
                height={240}
                className="lg:hidden"
              />
              <Image
                src={image_LG}
                alt="carousel"
                width={636}
                height={424}
                className="hidden lg:block"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
export default Description;
