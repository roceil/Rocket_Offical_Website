import Image from 'next/image';
import shareSpace from '/public/images/banner/shareSpace.png';
import spaceBtn from '/public/images/banner/spaceBtn.svg';
import arrowLeft from '/public/images/banner/arrowLeft.svg';

export function SpaceCardMobile() {
  return (
    <div className="w-[294px] border-2 rounded-2xl border-neutral-300 py-[23px] px-[25px] bg-white relative banner-space-ball group">
      <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <Image
            src={spaceBtn}
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
        <Image src={shareSpace} alt="banner" width={48} height={48} />
        <h1>共同空間</h1>
      </div>
      <p className="text-xl text-neutral-500 font-bold">Co-working Space</p>
    </div>
  );
}
