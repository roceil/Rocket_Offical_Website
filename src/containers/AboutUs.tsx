function AboutUs() {
  return (
    <section className="bg-banner_bg">
      <div className="rounded-3xl bg-space_violet_tint xl:rounded-none">
        <div className="container flex flex-col py-9 lg:flex-row-reverse lg:justify-between lg:py-[60px]">
          {/* 文字區塊 */}
          <div className="lg:ml-10 lg:max-w-[500px] xl:ml-0">
            <p className="pl-1 lg:text-xl">About Us</p>
            <p className="h1 mb-4 leading-relaxed lg:mb-10">共同空間簡介</p>
            <p className="mb-5 lg:mb-0 lg:text-xl text-justify">
              共同空間有近 100 坪的空間，在開放式的公共區域中有
              <span className="font-bold">休憩區以及舒適沙發討論區</span>
              ，在設計上盡量讓空間規劃簡單俐落，沒有多餘的裝修，我們營運空間的理念很簡單，希望藉由這裡能與更多「人」締結關係，並凝聚更多熱愛分享程式的進駐培訓者，讓這裡打造實現開發能量的集聚地。
            </p>
          </div>

          {/* 地圖區塊 */}
          <div className="h-[332px] w-full rounded-xl bg-white p-3 lg:h-[420px] lg:w-[636px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.690636333572!2d120.3079352770801!3d22.62802483093325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e0491b7febacd%3A0x24542bac2726199b!2z5a-25oiQ5LiW57SA5aSn5qiT!5e0!3m2!1szh-TW!2stw!4v1684263029865!5m2!1szh-TW!2stw"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
