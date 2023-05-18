import Image from 'next/image';

type ServiceCardPCProps = {
  title: string;
  content_LG: JSX.Element;
  image_LG: string;
};

function ServiceCardPC({content_LG,image_LG,title}: ServiceCardPCProps) {
  return (
    <li className="mb-12 flex w-[340px] flex-col items-center text-center">
      {/* 圖片 */}
      <div className="rounded-full bg-white lg:mb-6 lg:h-[120px] lg:w-[120px] ">
        <Image
          src={image_LG}
          alt={title}
          width={120}
          height={120}
          className="hidden lg:block" />
      </div>

      {/* 文字敘述 */}
      <div className=" space-y-2">
        <p className="font-bold">{title}</p>
        <div className="text-sm text-neutral-600">{content_LG}</div>
      </div>
    </li>
  );
}

export default ServiceCardPC;