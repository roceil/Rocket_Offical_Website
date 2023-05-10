import Image from 'next/image';
import rocket from '/public/images/banner/rocket.png';
import rocketBtn from '/public/images/banner/rocketBtn.svg';
import arrowLeft from '/public/images/banner/arrowLeft.svg';

export function RocketCardMobile() {
  return (
    <div className="w-[294px] border-2 rounded-2xl border-neutral-300 py-[23px] px-[25px] bg-white relative banner-rocket-ball group">
      <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <Image
            src={rocketBtn}
            alt="banner"
            width={60}
            height={60}
            priority
            className="group-hover:animate-spin-slow" />

          <Image
            src={arrowLeft}
            alt="banner"
            width={30}
            height={30}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>

      <div className="flex space-x-3 mb-2">
        <Image src={rocket} alt="banner" width={48} height={48} />
        <h1>火箭隊</h1>
      </div>
      <p className="text-xl text-neutral-500 font-bold">Bootcamp Rocket</p>
    </div>
  );
}
