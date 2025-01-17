import { useState } from 'react';
import Image from "next/image";
import { ChevronDown } from 'lucide-react';
import Modal from './Modal';

interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (<>
    <div className="relative z-10 min-h-screen -top-5">
      <div className="h-screen flex flex-col justify-end pb-16">
        <div className="text-center text-white mt-8">
          <p className="mb-2">Scroll to view more</p>
          <ChevronDown className="w-6 h-6 mx-auto animate-bounce" />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {[0, 1, 2, 3].map((columnIndex) => (
          <div key={columnIndex} className="grid gap-4">
            {photos
              .filter((_, index) => index % 4 === columnIndex)
              .map((photo, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <Image
                    src={photo.src || `https://picsum.photos/${photo.width}/${photo.height}`}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    quality={100}
                    className="h-auto max-w-full transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-300 flex items-end">
                    <span className="text-gray-800 p-2 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-75">
                      {photo.alt}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
    {selectedPhoto && (
      <Modal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} photos={photos} />
    )}
  </>);
}

