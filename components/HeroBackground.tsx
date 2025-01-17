import Image from "next/image";
import { useParallaxBlur } from '@/hooks/useParallaxBlur';

interface HeroBackgroundProps {
  imageUrl: string;
  colors: string[];
}

export default function HeroBackground({ imageUrl, colors }: HeroBackgroundProps) {
  const { scrollY, blur, backgroundColor } = useParallaxBlur(colors);

  return (
    (<div className="fixed inset-0 z-0">
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          backgroundColor,
          opacity: blur / 20, // Fade in the color as blur increases
        }}
      />
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt="Hero Background"
        quality={100}
        priority
        fill
        sizes="100vw"
        style={{
          // transform: `translateY(${scrollY * 0.5}px)`, // Parallax effect
          filter: `blur(${blur}px)`,

          objectFit: "cover"
        }} />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10">
        <h2 className="font-serif text-xl sm:text-2xl mb-2">Oksana Zub</h2>
        <h1 className="font-bold text-4xl sm:text-6xl mb-4">PHOTOGRAPHER</h1>
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-12 h-px bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-12 h-px bg-white"></div>
        </div>
        <p className="text-sm sm:text-base">Category1 • Category2 • Category3 • Category4</p>
      </div>
    </div>)
  );
}

