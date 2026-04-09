import Image from 'next/image';

export default function ImageStack() {
  return (
    <div className="relative h-[190px] w-[240px]">
      <div className="absolute bottom-[3px] left-[5px] h-[119px] w-[37%] rotate-[-4deg] overflow-hidden rounded-[4px] border-2 border-white shadow-[0px_1px_2px_rgba(39,39,42,0.05)]">
        <Image
          src="/images/mMoURYYueCdDyehNl0vTkkNnXCE.jpeg"
          alt="Art stack 1"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute left-1/2 top-[6px] h-[109px] w-[45%] -translate-x-1/2 rotate-[6deg] overflow-hidden rounded-[4px] border-2 border-white shadow-[0px_1px_2px_rgba(39,39,42,0.05)]">
        <Image
          src="/images/ubz4WeURpVIw21ZYzcvg7j6U.jpeg"
          alt="Art stack 2"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute bottom-[26px] left-[120px] h-[89px] w-[50%] rotate-[2deg] overflow-hidden rounded-[4px] border-2 border-white shadow-[0px_1px_2px_rgba(39,39,42,0.05)]">
        <Image
          src="/images/tlOx7jYbJvcq92rhR0rUri0lRQ.jpg"
          alt="Art stack 3"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
