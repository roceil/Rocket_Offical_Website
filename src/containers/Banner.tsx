import { useRouter } from 'next/router';
import RocketCardMobile from '@/components/RocketCardMobile';
import SpaceCardMobile from '@/components/SpaceCardMobile';
import RocketCardPC from '@/components/RocketCardPC';
import SpaceCardPC from '@/components/SpaceCardPC';


export default function Banner() {
  const router = useRouter();
  // ====== 取得當前頁面路由 ======
  const { pathname } = router;

  return (
    <section>
      <div className="bg-banner_bg">
        {/* 手機版 banner */}
        <div className="container space-y-12 py-16 lg:hidden">
          {/* 火箭隊 */}
          <RocketCardMobile pathname={pathname} />

          {/* 共同空間 */}
          <SpaceCardMobile pathname={pathname} />
        </div>

        {/* 桌機版 banner */}
        <div className="hidden lg:block lg:py-[91px]">
          <div className="container flex max-w-[1171px] items-center justify-between">
            {/* 火箭隊 */}
            <RocketCardPC pathname={pathname} />

            {/* 中間叉叉 */}
            <p className="text-5xl font-bold">X</p>

            {/* 共同空間 */}
            <SpaceCardPC pathname={pathname} />
          </div>
        </div>
      </div>
    </section>
  );
}
