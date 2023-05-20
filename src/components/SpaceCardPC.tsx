import Image from 'next/image';
import Link from 'next/link';
import shareSpace_icon_LG from 'public/images/banner/shareSpace/shareSpace_LG.svg';
import spaceHalfCircle_LG from 'public/images/banner/shareSpace/spaceHalfCircle.svg';
import spaceHighLight_LG from 'public/images/banner/shareSpace/spaceHighLight_LG.svg';
import spaceBtnLG from 'public/images/banner/shareSpace/spaceBtnLG.svg';
import spaceInterest from 'public/images/banner/shareSpace/spaceInterest.svg';

type BannerCardPCProps = {
  pathname: string;
};

const bannerSpaceTexts = [
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

function SpaceCardPC({ pathname }: BannerCardPCProps) {
  const isShareSpace = pathname === '/sharespace' ? 'block' : 'hidden';
  const isActive = pathname === '/sharespace' ? '!opacity-100' : '';
  return (
    <Link
      href="/sharespace"
      className="group duration-300 hover:-translate-y-5 hover:opacity-100"
    >
      <div className="relative h-[448px] w-[440px] rounded-3xl border-2 border-neutral-300 bg-white py-9">
        {/* 裝飾用陰影 */}
        <div
          className={`absolute left-2 top-2 -z-10 h-[448px] w-[440px] rounded-3xl bg-space_violet_tint opacity-0 ${isActive}`}
        ></div>

        {/* 裝飾用半圓 */}
        <div
          className={`absolute bottom-0 left-1/2 h-[60px] w-[120px] -translate-x-1/2 translate-y-[calc(100%+2px)] opacity-50 ${isActive} duration-300 group-hover:opacity-100`}
        >
          <Image
            src={spaceHalfCircle_LG}
            alt="rocketHalfCircle_LG"
            width={120}
            height={60}
          />
        </div>

        {/* 裝飾用highlight */}
        <div
          className={`absolute right-[-30px] top-[-45px] h-12 w-10 opacity-0 ${isActive}`}
        >
          <Image
            src={spaceHighLight_LG}
            alt="rocketHighLight_LG"
            width={40}
            height={48}
          />
        </div>

        {/* 裝飾用按鈕 */}
        <div className="absolute bottom-0 left-1/2 h-[100px] w-[100px] -translate-x-1/2 translate-y-1/2">
          <div className="relative h-full w-full">
            <Image
              src={spaceBtnLG}
              alt="rocketBtnLG"
              width={100}
              height={100}
              className="group-hover:animate-spin-slow"
            />
            <Image
              src={spaceInterest}
              alt="interest"
              width={120}
              height={143}
              className={`absolute left-1/2 top-[-19px] -translate-x-1/2 opacity-50 ${isActive} duration-300 group-hover:opacity-100`}
            />
          </div>
        </div>

        {/* 裝飾用標題 */}
        <div
          className={`absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 text-neutral-400 duration-300 group-hover:text-neutral-700 ${
            pathname === '/sharespace' && 'text-neutral-900'
          }`}
        >
          <p className="h1">共同空間</p>
        </div>

        {/* 主要內容 */}
        <div
          className={`flex flex-col items-center opacity-50 ${isActive} duration-300 group-hover:opacity-100`}
        >
          {/* 副標題 */}
          <p className="mb-6 text-center text-2xl font-bold text-neutral-500">
            Co-working Space
          </p>

          {/* 圖片 */}
          <div className="mb-4 h-[124px] w-[124px]">
            <Image
              src={shareSpace_icon_LG}
              alt="rocket_icon_LG"
              width={124}
              height={124}
            />
          </div>

          {/* 特色 */}
          <ul className="text-xl font-bold leading-[1.75]">
            <li># 超 chill 的共同工作場域</li>
            <li># 餅乾、零食、咖啡應有盡有</li>
            <li># 等你來一同交流成長</li>
          </ul>
        </div>
      </div>
    </Link>
  );
}

export default SpaceCardPC;
