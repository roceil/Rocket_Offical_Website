import Image from 'next/image';

type ServiceCardMobileProps = {
  title: string;
  content: string;
  image_SM: string;
};

function ServiceCardMobile({
  content,
  image_SM,
  title,
}: ServiceCardMobileProps) {
  return (
    <li className="flex  items-center justify-between lg:mr-[60px] lg:w-1/3  lg:flex-col lg:text-center">
      {/* 圖片 */}
      <div className="h-12 w-12 rounded-full bg-white lg:mb-6 lg:h-[120px] lg:w-[120px] ">
        <Image
          src={image_SM}
          alt={title}
          width={48}
          height={48}
          className="lg:hidden"
        />
      </div>

      {/* 文字敘述 */}
      <div className=" max-w-[268px] space-y-1 lg:max-w-[244px] lg:space-y-2">
        <p className="font-bold">{title}</p>
        <p className="text-sm text-neutral-600">{content}</p>
      </div>
    </li>
  );
}

export default ServiceCardMobile;
