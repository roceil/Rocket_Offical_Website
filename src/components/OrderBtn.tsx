import Image, { StaticImageData } from 'next/image';

type orderBtnProps = {
  image: StaticImageData;
  text: string;
  bgColor: string;
  needPosition?: boolean;
};

function OrderBtn({ image, text, bgColor, needPosition }: orderBtnProps) {
  return (
    <button
      type="button"
      className={`group w-[335px] rounded-2xl border-2 border-neutral-700 py-5 lg:flex lg:w-[1076px] lg:items-center lg:justify-center lg:py-6 ${
        needPosition && 'orderNowBtnPosition'
      }`}
      style={{
        backgroundColor: bgColor,
      }}
    >
      <p className="h3 relative transform duration-300 lg:left-[32px] lg:mr-5 lg:group-hover:left-0">
        {text}
      </p>
      <Image
        src={image}
        alt="馬上報名！"
        width={64}
        height={64}
        className="hidden transform opacity-0 duration-300 lg:block lg:group-hover:opacity-100"
      />
    </button>
  );
}

export default OrderBtn;
