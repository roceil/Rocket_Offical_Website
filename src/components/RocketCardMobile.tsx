import Image from 'next/image';
import rocket from '/public/images/banner/rocket.png';
import rocketBtn from '/public/images/banner/rocketBtn.svg';
import arrowLeft from '/public/images/banner/arrowLeft.svg';
import highlight from '/public/images/banner/highlight.svg';

type RocketCardProps = {
  pathname: string;
};

function RocketCardMobile({ pathname }: RocketCardProps) {
  const isRocket = pathname === '/' ? 'block' : 'hidden';

  return (
    <div className="banner-rocket-ball group relative w-[294px] rounded-2xl border-2 border-neutral-300 bg-white px-[25px] py-[23px]">
      {/* 裝飾背景 */}
      <div
        className={`absolute left-2 top-2 -z-10 h-full w-full rounded-2xl bg-[#BFC9F0] ${isRocket}`}
      ></div>

      {/* 裝飾 highlight */}
      <div className={`absolute -left-5 -top-5 ${isRocket}`}>
        <Image src={highlight} alt="highligh" width={36} height={40} />
      </div>

      {/* 我有興趣 */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
        <div className="relative">
          <Image
            src={rocketBtn}
            alt="banner"
            width={60}
            height={60}
            priority
            className="group-hover:animate-spin-slow"
          />

          <Image
            src={arrowLeft}
            alt="banner"
            width={30}
            height={30}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>

      {/* 文字區塊 */}
      <div className="mb-2 flex space-x-3">
        <Image src={rocket} alt="banner" width={48} height={48} />
        <p className="h1">火箭隊</p>
      </div>
      <p className="text-xl font-bold text-neutral-500">Bootcamp Rocket</p>
    </div>
  );
}

export default RocketCardMobile;