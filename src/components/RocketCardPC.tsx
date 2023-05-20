import Image from 'next/image';
import Link from 'next/link';
import rocket_icon_LG from 'public/images/banner/rocket/rocket_LG.svg';
import rocketHalfCircle_LG from 'public/images/banner/rocket/rocketHalfCircle_LG.svg';
import rocketHighLight_LG from 'public/images/banner/rocket/highlightPC.svg';
import rocketBtnLG from 'public/images/banner/rocket/rocketBtnLG.svg';
import interest from 'public/images/banner/rocket/interest.svg';

type RocketCardProps = {
  pathname: string;
};

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

function RocketCardPC({ pathname }: RocketCardProps) {
  const isRocket = pathname === '/' ? 'block' : 'hidden';
  const isActive = pathname === '/' ? '!opacity-100' : '';

  return (
    <Link
      href="/"
      className="group relative transform duration-300 hover:-translate-y-5 hover:!opacity-100"
    >
      <div className="relative h-[448px] w-[440px] rounded-3xl border-2 border-neutral-300 bg-white py-9">
        {/* 裝飾用陰影 */}
        <div
          className={`absolute left-2 top-2 -z-10 h-[448px] w-[440px] rounded-3xl bg-[#BFC9F0] opacity-0 ${isActive}`}
        ></div>

        {/* 裝飾用半圓 */}
        <div
          className={`absolute bottom-0 left-1/2 h-[60px] w-[120px] -translate-x-1/2 translate-y-[calc(100%+2px)] opacity-50 ${isActive} duration-300 group-hover:opacity-100`}
        >
          <Image
            src={rocketHalfCircle_LG}
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
            src={rocketHighLight_LG}
            alt="rocketHighLight_LG"
            width={40}
            height={48}
          />
        </div>

        {/* 裝飾用按鈕 */}
        <div className="absolute bottom-0 left-1/2 h-[100px] w-[100px] -translate-x-1/2 translate-y-1/2">
          <div className="relative h-full w-full">
            <Image
              src={rocketBtnLG}
              alt="rocketBtnLG"
              width={100}
              height={100}
              className='group-hover:animate-spin-slow'
            />
            <Image
              src={interest}
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
            pathname === '/' && 'text-neutral-700'
          }`}
        >
          <p className="h1">火箭隊</p>
        </div>

        {/* 主要內容 */}
        <div
          className={`flex flex-col items-center opacity-50 ${isActive} duration-300 group-hover:opacity-100`}
        >
          {/* 副標題 */}
          <p className="mb-6 text-center text-2xl font-bold text-neutral-500">
            Bootcamp Rocket
          </p>

          {/* 圖片 */}
          <div className="mb-4 h-[124px] w-[124px]">
            <Image
              src={rocket_icon_LG}
              alt="rocket_icon_LG"
              width={124}
              height={124}
            />
          </div>

          {/* 特色 */}
          <ul className="text-xl font-bold leading-[1.75]">
            <li># 軟體工程師培訓營</li>
            <li># 全程免費的扎實訓練</li>
            <li># 帶你翻轉人生！</li>
          </ul>
        </div>
      </div>
    </Link>
  );
}

export default RocketCardPC;
