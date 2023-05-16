import { useRouter } from 'next/router';
import { RocketCardMobile } from '@/pages/components/RocketCardMobile';
import { SpaceCardMobile } from '@/pages/components/SpaceCardMobile';
import { RocketCardPC } from '@/pages/components/RocketCardPC';
import { SpaceCardPC } from '@/pages/components/SpaceCardPC';





export default function Banner() {
  const router = useRouter();
  // 取得當前頁面路由
  const { pathname } = router;
  console.log(pathname)
  return (
    <section>
      <div className="bg-banner_bg">
        {/* 手機版 banner */}
        <div className="container py-16 space-y-12 lg:hidden">
          {/* 火箭隊 */}
          <RocketCardMobile pathname={pathname}/>

          {/* 共同空間 */}
          <SpaceCardMobile/>
        </div>

        {/* 桌機版 banner */}
        <div className="hidden lg:block lg:py-[91px]">
          <div className="container flex justify-between items-center max-w-[1171px]">
            {/* 火箭隊 */}
            <RocketCardPC pathname={pathname}/>

            {/* 中間叉叉 */}
            <p className="text-5xl font-bold">X</p>

            {/* 共同空間 */}
            <SpaceCardPC pathname={pathname}/>
          </div>
        </div>
      </div>
    </section>
  );
}
