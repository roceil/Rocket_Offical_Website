import React from 'react';

export function AboutUs() {
  return (
    <section className='bg-banner_bg'>
      <div className="bg-space_violet_tint rounded-3xl xl:rounded-none">
        <div className="container flex flex-col py-9 lg:flex-row-reverse lg:justify-between lg:py-[60px]">
          {/* 文字區塊 */}
          <div className="lg:ml-10 lg:max-w-[500px] xl:ml-0">
            <p className="pl-1 lg:text-xl">About Us</p>
            <p className="h1 mb-4 leading-relaxed lg:mb-10">共同空間簡介</p>
            <p className="mb-5 lg:mb-0 lg:text-xl">
              共同空間有近 100 坪的空間，在開放式的公共區域中有
              <span className="font-bold">休憩區以及舒適沙發討論區</span>
              ，在設計上盡量讓空間規劃簡單俐落，沒有多餘的裝修，我們營運空間的理念很簡單，希望藉由這裡能與更多「人」締結關係，並凝聚更多熱愛分享程式的進駐培訓者，讓這裡打造實現開發能量的集聚地。
            </p>
          </div>

          {/* 地圖區塊 */}
          <div className="h-[332px] w-[332px] rounded-xl bg-white p-3 lg:h-[420px] lg:w-[636px]">
            <div className="h-full w-full rounded-lg bg-red-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
