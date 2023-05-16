import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import case1 from 'public/images/case/case1.png';
import case2 from 'public/images/case/case2.png';
import case3 from 'public/images/case/case3.png';
import case4 from 'public/images/case/case4.png';
import case5 from 'public/images/case/case5.png';
import case6 from 'public/images/case/case6.png';
import case7 from 'public/images/case/case7.png';
import case8 from 'public/images/case/case8.png';

const caseList = [
  {
    name: 'case1',
    img: case1,
    link: '',
  },
  {
    name: 'case2',
    img: case2,
    link: '',
  },
  {
    name: 'case3',
    img: case3,
    link: '',
  },
  {
    name: 'case4',
    img: case4,
    link: '',
  },
  {
    name: 'case5',
    img: case5,
    link: '',
  },
  {
    name: 'case6',
    img: case6,
    link: '',
  },
  {
    name: 'case7',
    img: case7,
    link: '',
  },
  {
    name: 'case8',
    img: case8,
    link: '',
  },
];

export function Case() {
  return (
    <section>
      <div className="container pb-[92px] pt-12 lg:pb-[120px] lg:pt-[92px]">
        <p className="h2 mb-4 text-center lg:mb-7">成功案例</p>

        <Swiper
          slidesPerView={'auto'}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          className="mySwiper mb-7 lg:!hidden"
        >
          {caseList.map(({name,img}, index) => {
            if (index < 4) {
              return (
                <SwiperSlide key={name} className="!w-auto">
                  <Image src={img} alt={name} width={260} height={160} />
                </SwiperSlide>
              );
            }
          })}
        </Swiper>


        <Swiper
          slidesPerView={'auto'}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          className="mySwiper mb-7 lg:!hidden"
        >
          {caseList.map(({name,img}, index) => {
            if (index >= 4) {
              return (
                <SwiperSlide key={name} className="!w-auto">
                  <Image src={img} alt={name} width={260} height={160} />
                </SwiperSlide>
              );
            }
          })}
        </Swiper>

        <div className=" hidden flex-col space-y-7 lg:flex">
          <ul className="flex justify-between space-x-6">
            {caseList.map(({name,img},index)=>{
              if(index < 4) {
                return(
                  <li key={name}>
                  <Image src={img} alt={name} width={306} height={200} />
                </li>
                )
              }
            })}
          </ul>

          <ul className="flex justify-between space-x-6">
            {caseList.map(({name,img},index)=>{
              if(index >= 4) {
                return(
                  <li key={name}>
                  <Image src={img} alt={name} width={306} height={200} />
                </li>
                )
              }
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
