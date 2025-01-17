import Image from 'next/image';
import { useParallaxBlur } from '../hooks/useParallaxBlur';

interface HeroBackgroundProps {
  imageUrl: string;
  colors: string[];
}

export default function HeroBackground({ imageUrl, colors }: HeroBackgroundProps) {
  const { scrollY, blur, backgroundColor } = useParallaxBlur(colors);

  return (
    <div className="fixed inset-0 z-0">
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
        layout="fill"
        objectFit="cover"
        quality={100}
        style={{
          filter: `blur(${blur}px)`,
          // transform: `translateY(${scrollY * 0.5}px)`, // Parallax effect
        }}
      />
    </div>
  );
}

