import Image from 'next/image';
import Link from 'next/link';
import rocketHalfCircle from 'public/images/banner/rocket/rocketHalfCircle_SM.svg';
import rocket_icon from 'public/images/banner/rocket/rocket.png';
import rocketBtn from 'public/images/banner/rocketBtn.svg';
import arrowLeft from 'public/images/banner/arrowLeft.svg';
import highlight from 'public/images/banner/rocket/rocketHighlight.svg';

type RocketCardProps = {
  pathname: string;
};

function RocketCardMobile({ pathname }: RocketCardProps) {
  const isActive = pathname === '/' ? '!opacity-100' : '';

  return (
    <Link href="/" className="block hover:opacity-100">
      <div className="relative h-[134px] w-[294px] rounded-2xl border-2 border-neutral-200 bg-white py-6 pl-6">
        {/* 裝飾用半圓 */}
        <div
          className={`absolute right-0 top-1/2 h-20 w-[38px] -translate-y-1/2 translate-x-[calc(100%+2px)] opacity-50 ${isActive}`}
        >
          <Image
            src={rocketHalfCircle}
            alt="rocketHalfCircle"
            width={38}
            height={80}
          />
        </div>

        {/* 裝適用陰影 */}
        <div
          className={`absolute -bottom-2 left-2 -z-10 h-[134px] w-[294px] rounded-2xl bg-[#BFC9F0] opacity-0 ${isActive}`}
        ></div>

        {/* 裝飾用按鈕 */}
        <div className="absolute right-0 top-1/2 h-[60px] w-[60px] -translate-y-1/2 translate-x-1/2">
          <div className="relative">
            <Image src={rocketBtn} alt="rocketBtn" width={60} height={60} />
            <Image
              src={arrowLeft}
              alt="arrowLeft"
              width={30}
              height={30}
              className={`absolute left-0 top-0 translate-x-1/2 translate-y-1/2 opacity-50 ${isActive}`}
            />
          </div>
        </div>

        {/* 裝飾highlight */}
        <div
          className={`absolute -left-5 -top-5 h-10 w-9 opacity-0 ${isActive}`}
        >
          <Image src={highlight} alt="highlight" width={36} height={40} />
        </div>

        {/* 主要內容 */}
        <div className={`opacity-50 ${isActive}`}>
          {/* 圖片＆標題 */}
          <div className="flex items-center space-x-2 space-y-2">
            <div className="h-12 w-12">
              <Image
                src={rocket_icon}
                alt="rocket_icon"
                width={48}
                height={48}
              />
            </div>
            <p className="h1">火箭隊</p>
          </div>

          {/* 副標題 */}
          <p className="text-xl font-bold text-neutral-500">Bootcamp Rocket</p>
        </div>
      </div>
    </Link>
  );
}

export default RocketCardMobile;
