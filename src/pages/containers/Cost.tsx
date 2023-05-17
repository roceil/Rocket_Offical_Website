import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import promotion_LG from 'public/images/cost/promotion-lg.svg';
import promotion_SM from 'public/images/cost/promotion-sm.svg';
import fillFormNowBtn from 'public/images/cost/fillFormNowBtn.svg';
import CostCardPC from '../components/CostCardPC';
import OrderBtn from '../components/OrderBtn';

const costCardData = [
  {
    title: '進駐者',
    price: '$ 3,200 / Month',
    optional: true,
    service: [
      {
        text: '進駐區域',
        highlight: true,
      },
      {
        text: '9:00-18:00 可使用',
        highlight: false,
      },
      {
        text: '固定座位',
        highlight: true,
      },
      {
        text: '專屬置物櫃',
        highlight: true,
      },
      {
        text: '免費無線網路',
        highlight: false,
      },
      {
        text: '免費咖啡茶水',
        highlight: false,
      },
      {
        text: '原價｜3,500 / Month',
        highlight: false,
      },
    ],
  },
  {
    title: '單日使用（暫不提供）',
    price: '$ 300 / Day',
    optional: false,
    service: [
      {
        text: '培訓區域',
        highlight: false,
      },
      {
        text: '9:00-18:00 可使用',
        highlight: false,
      },
      {
        text: '非固定座位',
        highlight: false,
      },
      {
        text: '共用置物櫃',
        highlight: false,
      },
      {
        text: '免費無線網路',
        highlight: false,
      },
      {
        text: '免費咖啡茶水',
        highlight: false,
      },
      {
        text: '原價｜300 / Day',
        highlight: false,
      },
    ],
  },
];

export function Cost() {
  return (
    <section className="group/promotion bg-[#EEE5FF]">
      <div className="container pb-12 pt-9  lg:flex lg:justify-center lg:pb-20 lg:pt-[60px]">
        <div className="lg:max-w-[1075px]">
          {/* 這裡要放裝飾對話框 */}
          <div className="mb-4 lg:mb-3 lg:overflow-hidden">
            <Image
              src={promotion_SM}
              alt="2023 年為試營運階段，進駐可享有限定優惠價！"
              className="lg:hidden"
            />
            <Image
              src={promotion_LG}
              alt="2023 年為試營運階段，進駐可享有限定優惠價！"
              className="ml-20 hidden translate-y-[100%] transform duration-300 group-hover/promotion:translate-y-0 lg:block"
            />
          </div>

          <p className="h2 mb-2">進駐費用</p>
          <p className="mb-5 lg:mb-9 lg:text-xl">
            進駐區域共分兩區塊：<span className="font-bold">培訓區域</span> 及
            <span className="font-bold">進駐區域</span>
            ，目前僅接受租期 1 個月以上，單日暫不開放。
          </p>

          {/* 方案卡片_手機版 */}
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            className="mySwiper mb-8 lg:!hidden"
          >
            <SwiperSlide className='!h-[448px] '>
              <div className="mb-8 w-full h-full rounded-2xl bg-red-300 lg:hidden"></div>
            </SwiperSlide>
            <SwiperSlide className='!h-[448px] !w-[333px]'>
              <div className="mb-8 w-full h-full rounded-2xl bg-red-300 lg:hidden"></div>
            </SwiperSlide>
          </Swiper>

          {/* 方案卡片_桌機版 */}
          <ul className=" hidden lg:mb-10 lg:flex lg:space-x-6">
            {costCardData.map(({ title, price, optional, service }) => (
              <CostCardPC
                key={title}
                title={title}
                price={price}
                optional={optional}
                service={service}
              />
            ))}
          </ul>

          {/* 填表單_按鈕 */}
          <OrderBtn
            text="馬上填表單！"
            bgColor="#F5F1FF"
            image={fillFormNowBtn}
          />
        </div>
      </div>
    </section>
  );
}
