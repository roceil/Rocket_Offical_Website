import { RocketCardMobile } from '@/components/RocketCardMobile';
import { SpaceCardMobile } from '@/components/SpaceCardMobile';

export default function Banner() {
  return (
    <div className="bg-banner_bg">
      {/* 手機版 banner */}
      <div className="container py-16 space-y-12 lg:hidden">
        {/* 火箭隊 */}
        <RocketCardMobile />

        {/* 共同空間 */}
        <SpaceCardMobile />
      </div>

      {/* 桌機版 banner */}
      <div className="hidden lg:block">
        <h1>123</h1>
      </div>
    </div>
  );
}
