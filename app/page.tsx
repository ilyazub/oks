'use client'

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroBackground from '@/components/HeroBackground';
import PhotoGallery from '@/components/PhotoGallery';
import Footer from '@/components/Footer';
import { extractDominantColors } from '@/utils/colorExtractor';

const photos = [
  { src: 'https://picsum.photos/300/400', alt: 'Landscape 1', width: 300, height: 400 },
  { src: 'https://picsum.photos/400/300', alt: 'Cityscape 1', width: 400, height: 300 },
  { src: 'https://picsum.photos/300/500', alt: 'Portrait 1', width: 300, height: 500 },
  { src: 'https://picsum.photos/400/350', alt: 'Nature 1', width: 400, height: 350 },
  { src: 'https://picsum.photos/300/450', alt: 'Architecture 1', width: 300, height: 450 },
  { src: 'https://picsum.photos/400/400', alt: 'Abstract 1', width: 400, height: 400 },
  { src: 'https://picsum.photos/300/300', alt: 'Still Life 1', width: 300, height: 300 },
  { src: 'https://picsum.photos/400/500', alt: 'Wildlife 1', width: 400, height: 500 },
  { src: 'https://picsum.photos/300/400', alt: 'Landscape 2', width: 300, height: 400 },
  { src: 'https://picsum.photos/400/300', alt: 'Cityscape 2', width: 400, height: 300 },
  { src: 'https://picsum.photos/300/500', alt: 'Portrait 2', width: 300, height: 500 },
  { src: 'https://picsum.photos/400/350', alt: 'Nature 2', width: 400, height: 350 },
];

export default function Home() {
  const [colors, setColors] = useState<string[]>([]);
  const heroImageUrl = 'https://picsum.photos/1920/1080';

  useEffect(() => {
    extractDominantColors(heroImageUrl).then(setColors);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroBackground imageUrl={heroImageUrl} colors={colors} />
      <PhotoGallery photos={photos} />
      <Footer />
    </main>
  );
}

