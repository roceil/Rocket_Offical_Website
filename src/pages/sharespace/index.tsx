import { AboutUs } from '../containers/AboutUs';

export default function index() {
  return (
    <>
      <AboutUs />

      <section className="container lg:flex lg:justify-center">
        <div className="w-full py-12 lg:max-w-[1060px] lg:py-20">
          <p className="h2 mb-4 text-center">場域說明</p>

          {/* 標題 */}
          <p className="mb-4 text-xl font-bold lg:mb-6 lg:text-[28px]">#硬體</p>
          {/* 硬體 */}
          <ul className="flex flex-col space-y-10">
            {new Array(3).fill(0).map((_, index) => (
              <li
                key={index}
                className="lg:flex lg:items-center lg:justify-between "
              >
                {/* 圖片 */}
                <div className="mb-4 h-[222px] w-[332px] rounded-2xl p-2 ring-1 lg:mb-0 lg:h-[372px] lg:w-[510px]">
                  <div className="h-full w-full rounded-xl bg-red-300"></div>
                </div>

                {/* 文字敘述 */}
                <div className="lg:max-w-[494px]">
                  <p className="mb-2 text-xl font-bold lg:mb-5 lg:text-2xl">
                    \ 很 chill 的休憩區 /
                  </p>
                  <p className="text-neutral-600">
                    我們貼心提供
                    <span className="font-bold">
                      飲水機、冰箱、微波爐、果汁機、膠囊咖啡機
                    </span>
                    及不定時茶包及小餅乾零食，我們想讓在工作認真打拼之餘的你也是需要中場休息補充能量，然後再輕鬆泡上一杯咖啡坐在吧台或懶骨頭放空冥想，讓自己
                    chill 一下轉換心情！
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
