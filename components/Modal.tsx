import { useEffect, useState } from 'react';
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ModalProps {
  photo: Photo;
  onClose: () => void;
  photos: Photo[];
}

export default function Modal({ photo, onClose, photos }: ModalProps) {
  const [currentIndex, setCurrentIndex] = useState(photos.findIndex(p => p.src === photo.src));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') navigateImage(-1);
      if (e.key === 'ArrowRight') navigateImage(1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  const navigateImage = (direction: number) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      if (newIndex < 0) return photos.length - 1;
      if (newIndex >= photos.length) return 0;
      return newIndex;
    });
  };

  const currentPhoto = photos[currentIndex];

  return (
    (<div className="fixed inset-0 bg-opacity-90 flex items-center justify-center z-50">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300"
        aria-label="Close modal"
      >
        <X size={24} />
      </button>
      <button
        onClick={() => navigateImage(-1)}
        className="absolute left-4 text-white hover:text-gray-300"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => navigateImage(1)}
        className="absolute right-4 text-white hover:text-gray-300"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>
      <div className="relative w-full h-full max-w-4xl max-h-full">
        <Image
          src={currentPhoto.src || "/placeholder.svg"}
          alt={currentPhoto.alt}
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "contain"
          }} />
      </div>
      <p className="absolute bottom-4 text-white text-center w-full">{currentPhoto.alt}</p>
    </div>)
  );
}

