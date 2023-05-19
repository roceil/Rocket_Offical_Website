import Image from 'next/image';
import Link from 'next/link';
import shareSpace from 'public/images/banner/shareSpace.png';
import spaceHalfCircle from 'public/images/banner/spaceHalfCircle.svg';
import spaceInterest from 'public/images/banner/spaceInterest.svg';
import spaceBtnLG from 'public/images/banner/spaceBtnLg.svg';
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
  const isActive = pathname === '/sharespace' ? 'opacity-100' : '';
  return (
    <Link href="/sharespace"
      className={`group relative flex h-[448px] w-[440px] flex-col items-center rounded-3xl border-2 border-neutral-300 bg-white py-9 duration-300 hover:-translate-y-5`}
    >
      {/* 裝飾背景 */}
      <div
        className={`absolute left-2 top-2 !-z-10 h-full w-full rounded-2xl bg-[#EEE5FF] ${isShareSpace}`}
      ></div>

      {/* 裝飾半圓形 */}
      <div
        className={`absolute bottom-0 h-[60px] w-[120px] translate-y-[calc(100%+2px)] opacity-50 group-hover:opacity-100 ${isActive}`}
      >
        <Image src={spaceHalfCircle} alt="test" width={120} height={60} />
      </div>

      {/* 主要內容 */}
      <div className="flex flex-col items-center opacity-50 duration-300 group-hover:opacity-100 ">
        {/* 標題 */}
        <p className="h1 absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          共同空間
        </p>

        {/* 英文標題 */}
        <p className="mb-6 text-2xl font-bold text-neutral-500">
          Co-working Space
        </p>

        {/* 圖片 */}
        <Image src={shareSpace} alt="rocket" className="mb-4" />

        {/* 文字列表 */}
        <ul className="mb-6">
          {bannerSpaceTexts.map(({ title }, index) => (
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
            src={spaceBtnLG}
            width={100}
            height={100}
            alt="test"
            className="relative mt-7 group-hover:animate-spin-slow"
          />
          <Image
            src={spaceInterest}
            alt="test"
            width={120}
            height={126}
            className="relative mt-[-130px]"
          />
        </div>
      </div>
    </Link>
  );
}

export default SpaceCardPC;