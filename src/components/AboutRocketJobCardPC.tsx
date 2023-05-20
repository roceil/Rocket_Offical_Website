import Image from 'next/image';
import { type } from 'os';

type AboutRocketJobCardPCProps = {
  title: string;
  skills: string[];
  jobTitle: string;
  img: string;
  index: number;
};

export function AboutRocketJobCardPC({
  title,
  jobTitle,
  img,
  skills,
  index,
}: AboutRocketJobCardPCProps) {
  return (
    <li
      className="flex xl:w-[636px] justify-between rounded-3xl bg-white p-9"
      id={`jobCard${index + 1}`}
    >
      <div className="min-w-[290px]">
        <div className="mb-20">
          <p className="h3 mb-3">{title}</p>

          {/* 技能區塊 */}
          <ul className="mb-3 space-x-2">
            {skills.map((skill) => {
              return (
                <li className="inline-block rounded-full border-2 border-rocket_blue_default px-4 py-2 font-bold text-rocket_blue_dark">
                  {skill}
                </li>
              );
            })}
          </ul>
        </div>

        {/* 職稱 */}
        <p className="mb-7 text-xl font-bold text-neutral-500">{jobTitle}</p>
      </div>

      {/* 圖片 */}
      <div className="relative flex items-center justify-center rounded-3xl bg-neutral-200">
        <Image
          src={img}
          alt="前端工程師"
          width={164}
          height={160}
          className="relative right-[54px] z-10"
        />
      </div>
    </li>
  );
}
