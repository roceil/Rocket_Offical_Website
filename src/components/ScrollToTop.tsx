import Image from 'next/image';
import scrollToTop_icon from 'public/images/scrollToTop/scrollToTop.svg';

export default function ScrollToTop() {
  // ====== Scroll to top ======
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      className="fixed bottom-7 right-7 z-50 hover:opacity-70"
      onClick={scrollToTop}
    >
      <Image
        src={scrollToTop_icon}
        alt="scroll to top"
        width={60}
        height={60}
      />
    </button>
  );
}
