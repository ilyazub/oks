'use client'

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroBackground from '@/components/HeroBackground';
import PhotoGallery from '@/components/PhotoGallery';
import Footer from '@/components/Footer';
import { extractDominantColors } from '@/utils/colorExtractor';

const photos = [
  { src: 'https://picsum.photos/600/800', alt: 'Landscape 1', width: 600, height: 800 },
  { src: 'https://picsum.photos/800/600', alt: 'Cityscape 1', width: 800, height: 600 },
  { src: 'https://picsum.photos/600/1000', alt: 'Portrait 1', width: 600, height: 1000 },
  { src: 'https://picsum.photos/800/700', alt: 'Nature 1', width: 800, height: 700 },
  { src: 'https://picsum.photos/600/900', alt: 'Architecture 1', width: 600, height: 900 },
  { src: 'https://picsum.photos/800/800', alt: 'Abstract 1', width: 800, height: 800 },
  { src: 'https://picsum.photos/600/600', alt: 'Still Life 1', width: 600, height: 600 },
  { src: 'https://picsum.photos/800/1000', alt: 'Wildlife 1', width: 800, height: 1000 },
  { src: 'https://picsum.photos/600/800', alt: 'Landscape 2', width: 600, height: 800 },
  { src: 'https://picsum.photos/800/600', alt: 'Cityscape 2', width: 800, height: 600 },
  { src: 'https://picsum.photos/600/1000', alt: 'Portrait 2', width: 600, height: 1000 },
  { src: 'https://picsum.photos/800/700', alt: 'Nature 2', width: 800, height: 700 },
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

