import Marquee from 'react-fast-marquee';

function MarqueeText() {
  return (
    <div className="flex font-bold">
      <p className="mr-8">Let’s join</p>
      <p className="mr-8">- 火箭隊培訓營 Rocket -</p>
      <p className="mr-8">- 共同空間 Co-working space -</p>
    </div>
  );
}

export default function HeaderMarquee() {
  return (
    <Marquee className="py-5" speed={30}>
      {Array(10)
        .fill(1)
        .map((_, index) => (
          <MarqueeText key={index} />
        ))}
    </Marquee>
  );
}
