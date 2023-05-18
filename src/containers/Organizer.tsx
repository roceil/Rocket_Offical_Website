import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import rocket_LG from 'public/images/organizer/organizer-rocket-lg.png';
import rocket_SM from 'public/images/organizer/organizer-rocket-sm.png';
import hexschool_LG from 'public/images/organizer/organizer-hexschool-lg.png';
import hexschool_SM from 'public/images/organizer/organizer-hexschool-sm.png';
import goodidea_LG from 'public/images/organizer/organizer-goodidea-lg.png';
import goodidea_SM from 'public/images/organizer/organizer-goodidea-sm.png';
import kdan_LG from 'public/images/organizer/organizer-kdan-lg.png';
import kdan_SM from 'public/images/organizer/organizer-kdan-sm.png';
import titan_LG from 'public/images/organizer/organizer-titan-lg.png';
import titan_SM from 'public/images/organizer/organizer-titan-sm.png';
import skw_LG from 'public/images/organizer/organizer-skw-lg.png';
import skw_SM from 'public/images/organizer/organizer-skw-sm.png';
import wistron_LG from 'public/images/organizer/organizer-wistron-lg.png';
import wistron_SM from 'public/images/organizer/organizer-wistron-sm.png';

const organizers = [
  {
    name: '火箭隊',
    character: '主辦單位',
    logo_LG: rocket_LG,
    logo_SM: rocket_SM,
  },
  {
    name: '六角學院',
    character: '協辦單位',
    logo_LG: hexschool_LG,
    logo_SM: hexschool_SM,
  },
  {
    name: '好想工作室',
    character: '協辦單位',
    logo_LG: goodidea_LG,
    logo_SM: goodidea_SM,
  },
  {
    name: '凱鈿科技',
    character: '合作招募廠商',
    logo_LG: kdan_LG,
    logo_SM: kdan_SM,
  },
  {
    name: '鈦坦科技',
    character: '合作招募廠商',
    logo_LG: titan_LG,
    logo_SM: titan_SM,
  },
  {
    name: '坂和企業',
    character: '合作招募廠商',
    logo_LG: skw_LG,
    logo_SM: skw_SM,
  },
  {
    name: '緯創資通',
    character: '合作招募廠商',
    logo_LG: wistron_LG,
    logo_SM: wistron_SM,
  },
  {
    name: '火箭隊',
    character: '主辦單位',
    logo_LG: rocket_LG,
    logo_SM: rocket_SM,
  },
  {
    name: '六角學院',
    character: '協辦單位',
    logo_LG: hexschool_LG,
    logo_SM: hexschool_SM,
  },
  {
    name: '好想工作室',
    character: '協辦單位',
    logo_LG: goodidea_LG,
    logo_SM: goodidea_SM,
  },
  {
    name: '凱鈿科技',
    character: '合作招募廠商',
    logo_LG: kdan_LG,
    logo_SM: kdan_SM,
  },
  {
    name: '鈦坦科技',
    character: '合作招募廠商',
    logo_LG: titan_LG,
    logo_SM: titan_SM,
  },
  {
    name: '坂和企業',
    character: '合作招募廠商',
    logo_LG: skw_LG,
    logo_SM: skw_SM,
  },
  {
    name: '緯創資通',
    character: '合作招募廠商',
    logo_LG: wistron_LG,
    logo_SM: wistron_SM,
  },
];

function Organizer() {
  return (
    <section className="bg-neutral-200">
      <div className=" relative pb-4 pt-9 lg:pb-10 lg:pt-14">
        <p className="h3 absolute left-12 top-0 -translate-y-1/2 lg:left-[72px]">
          主辦、協辦單位
        </p>

        <Marquee speed={40}>
          <ul className="flex">
            {organizers.map(({ name, character, logo_LG, logo_SM }) => {
              return (
                <li className="mr-5">
                  <li className="mb-3 flex h-[120px] w-[156px] items-center justify-center rounded-xl bg-white lg:mb-4 lg:h-[148px] lg:w-[196px]">
                    <Image
                      src={logo_LG}
                      alt="rocket"
                      width={100}
                      height={100}
                      className="hidden lg:block"
                    />

                    <Image
                      src={logo_SM}
                      alt="rocket"
                      width={80}
                      height={80}
                      className="lg:hidden"
                    />
                  </li>

                  <p className="text-sm font-bold">{character}</p>
                  <p className="text-sm">{name}</p>
                </li>
              );
            })}
          </ul>
        </Marquee>
      </div>
    </section>
  );
}

export default Organizer;
