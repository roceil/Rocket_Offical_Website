import Image from 'next/image';
import check_SM from 'public/images/cost/ic-check-sm.svg';

type CostCardMobileProps = {
  title: string;
  price: string;
  optional: boolean;
  service: {
    text: string;
    highlight: boolean;
  }[];
};

function CostCardMobile({
  title,
  price,
  optional,
  service,
}: CostCardMobileProps) {
  return (
    <div
      className={`mb-8 flex h-full w-full flex-col items-center rounded-2xl border-2 border-neutral-700 bg-white px-7 py-8 ${
        !optional && 'cursor-not-allowed border-none'
      }`}
    >
      {/* 標題 */}
      <p className="h3 mb-4">{title}</p>

      {/* 價格 */}
      <div className="mb-4 w-full bg-[#F0F0F0] py-5 text-center text-2xl font-bold">
        <p>{price}</p>
      </div>

      {/* 選項 */}
      <ul className="flex w-full flex-col space-y-3">
        {service.map(({ text, highlight }) => (
          <li key={text} className="flex items-center space-x-3">
            <Image src={check_SM} alt="check" width={28} height={28} />
            <p className={`relative z-10 ${highlight && 'costTextAccent'}`}>
              {text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CostCardMobile;
