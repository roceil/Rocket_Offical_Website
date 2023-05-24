import Image from 'next/image';
import check_LG from 'public/images/cost/ic-check-lg.svg';

type CostCardPCProps = {
  title: string;
  price: string;
  optional: boolean;
  service: {
    text: string;
    highlight: boolean;
  }[];
};

function CostCardPC({ title, price, optional, service }: CostCardPCProps) {
  return (
    <li
      className={`h-[608px] w-[526px] rounded-2xl border-2 border-neutral-700 bg-white px-20 pb-12 pt-9 ${
        !optional && 'cursor-not-allowed border-none'
      }`}
    >
      {/* 標題 */}
      <p className="mb-5 text-center text-2xl font-bold">{title}</p>

      {/* 價格 */}
      <div className="mb-7 bg-[#F0F0F0] p-10 text-center text-4xl font-bold">
        <p>{price}</p>
      </div>

      {/* 服務項目*/}
      <ul className="space-y-4">
        {service.map(({ text, highlight }) => (
          <li key={text} className="flex items-center space-x-3">
            <Image src={check_LG} alt="check" width={28} height={28} />
            <p
              className={`relative z-10 text-xl ${
                highlight && 'costTextAccent'
              }`}
            >
              {text}
            </p>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default CostCardPC;
