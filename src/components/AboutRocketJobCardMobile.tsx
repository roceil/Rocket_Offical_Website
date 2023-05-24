import Image from 'next/image';
import { type } from 'os';

type AboutRocketJobCardMobileProps = {
  title: string;
  skills: string[];
  jobTitle: string;
  img: string;
};

export function AboutRocketJobCardMobile({
  title,
  jobTitle,
  img,
  skills,
}: AboutRocketJobCardMobileProps) {
  return (
    <li className="w-full rounded-3xl bg-white px-4 py-5">
      <p className="h3 mb-4">{title}</p>

      {/* 技能區塊 */}
      <ul className="mb-3 space-x-2">
        {skills.map((skill) => {
          return (
            <li
              key={skill}
              className="inline-block rounded-full border-2 border-rocket_blue_default px-4 py-2 text-xs font-bold text-rocket_blue_dark"
            >
              {skill}
            </li>
          );
        })}
      </ul>

      {/* 職稱 */}
      <p className="mb-7 text-xl font-bold text-neutral-500">{jobTitle}</p>

      {/* 圖片 */}
      <div className="relative flex items-center justify-center">
        <Image
          src={img}
          alt="前端工程師"
          width={164}
          height={160}
          className="relative z-10 h-[160px]"
        />
        <div className="absolute bottom-0 left-0 h-[60px] w-full rounded-xl bg-[#F0F0F0]"></div>
      </div>
    </li>
  );
}
