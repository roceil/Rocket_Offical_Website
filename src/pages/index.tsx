import { RocketCardMobile } from '@/components/RocketCardMobile';
import { SpaceCardMobile } from '@/components/SpaceCardMobile';
import Banner from '@/containers/Banner';
import Image from 'next/image';

import rocket from '/public/images/banner/rocket.png';
import shareSpace from '/public/images/banner/shareSpace.png';
import interest from '/public/images/banner/interest.svg';
import rocketBtnLg from '/public/images/banner/rocketBtnLg.svg';
import interestSpace from '/public/images/banner/interestSpace.svg';
import spaceBtnLg from '/public/images/banner/spaceBtnLg.svg';

const bannerRocketTexts = [
  {
    title: '# 軟體工程師培訓營',
  },
  {
    title: '# 全程免費的扎實訓練',
  },
  {
    title: '# 帶你翻轉人生！',
  },
];

const bannerShareSpaceTexts = [
  {
    title: '# 超 chill 的共同工作場域',
  },
  {
    title: '# 餅乾、零食、咖啡應有盡有',
  },
  {
    title: '# 等你來一同交流成長',
  },
];

export default function index() {
  return (
    <>
      <div className="bg-banner_bg">
        {/* 手機版 banner */}
        <div className="container py-16 space-y-12 lg:hidden">
          {/* 火箭隊 */}
          <RocketCardMobile />

          {/* 共同空間 */}
          <SpaceCardMobile />
        </div>

        {/* 桌機版 banner */}
        <div className="hidden lg:block lg:py-[91px]">
          <div className="container flex justify-between items-center max-w-[1171px]">
            {/* 火箭隊 */}
            <div className="bg-white w-[440px] h-[448px] rounded-3xl border-2 border-neutral-300 py-9 flex flex-col items-center relative group">
              <h1 className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                火箭隊
              </h1>
              <p className="text-2xl font-bold text-neutral-500 mb-6">
                Bootcamp Rocket
              </p>

              <Image src={rocket} alt="rocket" className="mb-4" />

              <ul className="mb-6">
                {bannerRocketTexts.map(({ title }, index) => (
                  <li
                    key={index}
                    className="text-xl font-bold text-center leading-[1.75]"
                  >
                    {title}
                  </li>
                ))}
              </ul>

              <div className="absolute bg-rocket_blue_dark w-[120px] h-[120px] bottom-0 rounded-full opacity-50 translate-y-1/2 -z-10"></div>

              <div className="relative flex justify-center items-center flex-col">
                <Image
                  src={rocketBtnLg}
                  width={100}
                  height={100}
                  alt="test"
                  className="group-hover:animate-spin-slow relative mt-7"
                />
                <Image
                  src={interest}
                  alt="test"
                  width={120}
                  height={126}
                  className="relative mt-[-130px]"
                />
              </div>
            </div>

            {/* 中間叉叉 */}
            <p className="text-5xl font-bold">X</p>

            {/* 共同空間 */}
            <div className="bg-white w-[440px] h-[448px] rounded-3xl border-2 border-neutral-300 py-9 flex flex-col items-center relative group">
              <h1 className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                共同空間
              </h1>
              <p className="text-2xl font-bold text-neutral-500 mb-6">
                Co-working Space
              </p>

              <Image src={shareSpace} alt="rocket" className="mb-4" />

              <ul className="mb-6">
                {bannerShareSpaceTexts.map(({ title }, index) => (
                  <li
                    key={index}
                    className="text-xl font-bold text-center leading-[1.75]"
                  >
                    {title}
                  </li>
                ))}
              </ul>

              <div className="absolute bg-[#E4D8F7] w-[120px] h-[120px] bottom-0 rounded-full translate-y-1/2 -z-10" />

              <div className="relative flex justify-center items-center flex-col">
                <Image
                  src={spaceBtnLg}
                  width={100}
                  height={100}
                  alt="test"
                  className="group-hover:animate-spin-slow relative mt-7"
                />
                <Image
                  src={interestSpace}
                  alt="test"
                  width={120}
                  height={126}
                  className="relative mt-[-130px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
