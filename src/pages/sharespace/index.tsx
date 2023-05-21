import AboutUs from '@/containers/AboutUs';
import Description from '@/containers/Description';
import Cost from '@/containers/Cost';
import CustomHead from '@/components/CustomHead';

export default function index() {
  const 共同空間 = '共同空間是一個提供辦公位租賃服務的共享工作空間。無論是個人創業者還是小型團隊，共同空間都提供彈性的辦公空間解決方案。我們的設施包括現代化的辦公環境、高速網路連接。租戶可以享受靈活的租賃選項，並與火箭隊共享資源和交流合作的機會。';

  return (
    <>
      <CustomHead pageTitle='共同空間' pageDescription={共同空間}/>
      <AboutUs />
      <Description />
      <Cost />
    </>
  );
}
