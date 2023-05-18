import Image from 'next/image';
import rocket from '/public/images/banner/rocket.png';
import interest from '/public/images/banner/interest.svg';
import rocketBtnLg from '/public/images/banner/rocketBtnLg.svg';
import highlightPC from '/public/images/banner/highlightPC.svg';

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
  const isActive = pathname === '/' ? 'opacity-100' : '';

  return (
    <div
      className={`group relative flex h-[448px] w-[440px] flex-col items-center rounded-3xl border-2 border-neutral-300 bg-white py-9 `}
    >
      {/* 裝飾背景 */}
      <div
        className={`absolute left-2 top-2 -z-10 h-full w-full rounded-2xl bg-[#BFC9F0] ${isRocket}`}
      ></div>

      {/* 裝飾 highlight */}
      <div className={`absolute -top-10 right-[-30px] ${isRocket}`}>
        <Image src={highlightPC} alt="highligh" width={36} height={40} />
      </div>

      {/* 裝飾半圓形 */}
      <div className="absolute bottom-0 -z-10 h-[120px] w-[120px] translate-y-1/2 rounded-full bg-[#BFC9F0] "></div>

      <p className="h1 absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
        火箭隊
      </p>
      <p className="mb-6 text-2xl font-bold text-neutral-500">
        Bootcamp Rocket
      </p>

      <Image src={rocket} alt="rocket" className="mb-4" />

      <ul className="mb-6">
        {bannerRocketTexts.map(({ title }, index) => (
          <li
            key={index}
            className="text-center text-xl font-bold leading-[1.75]"
          >
            {title}
          </li>
        ))}
      </ul>

      {/* 我有興趣 */}
      <div className="relative flex flex-col items-center justify-center">
        <Image
          src={rocketBtnLg}
          width={100}
          height={100}
          alt="test"
          className="relative mt-7 group-hover:animate-spin-slow"
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
  );
}

export default RocketCardPC;
