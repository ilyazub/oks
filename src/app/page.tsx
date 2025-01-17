'use client'

import { useState, useEffect } from 'react';
import HeroBackground from '@/components/HeroBackground';
import PhotoGallery from '@/components/PhotoGallery';
import { extractDominantColors } from '@/utils/colorExtractor';

const photos = [
  { src: '/placeholder.svg?height=400&width=300', alt: 'Landscape 1', width: 300, height: 400 },
  { src: '/placeholder.svg?height=300&width=400', alt: 'Cityscape 1', width: 400, height: 300 },
  { src: '/placeholder.svg?height=500&width=300', alt: 'Portrait 1', width: 300, height: 500 },
  { src: '/placeholder.svg?height=350&width=400', alt: 'Nature 1', width: 400, height: 350 },
  { src: '/placeholder.svg?height=450&width=300', alt: 'Architecture 1', width: 300, height: 450 },
  { src: '/placeholder.svg?height=400&width=400', alt: 'Abstract 1', width: 400, height: 400 },
  { src: '/placeholder.svg?height=300&width=300', alt: 'Still Life 1', width: 300, height: 300 },
  { src: '/placeholder.svg?height=500&width=400', alt: 'Wildlife 1', width: 400, height: 500 },
  // Add more photos as needed
];

export default function Home() {
  const [colors, setColors] = useState<string[]>([]);
  const heroImageUrl = '/placeholder.svg?height=1080&width=1920';

  useEffect(() => {
    extractDominantColors(heroImageUrl).then(setColors);
  }, []);

  return (
    <main className="min-h-screen">
      <HeroBackground imageUrl={heroImageUrl} colors={colors} />
      <PhotoGallery photos={photos} />
    </main>
  );
}

