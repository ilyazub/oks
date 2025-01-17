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
    <div className="relative z-10 min-h-screen">
      <div className="h-screen flex flex-col justify-end pb-16">
        <div className="text-center text-white mt-8">
          <p className="mb-2">Scroll to view more</p>
          <ChevronDown className="w-6 h-6 mx-auto animate-bounce" />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {photos.map((photo, index) => (
          <div
            key={index + 4}
            className={`relative overflow-hidden rounded-lg shadow-lg cursor-pointer ${
              (index + 4) % 5 === 0 ? 'col-span-2 row-span-2' : ''
            }`}
            onClick={() => setSelectedPhoto(photo)}
          >
            <Image
              src={photo.src || "/placeholder.svg"}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className="transition-transform duration-300 hover:scale-105"
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto"
              }} />
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-300 flex items-end">
              <span className="text-white p-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                {photo.alt}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
    {selectedPhoto && (
      <Modal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} photos={photos} />
    )}
  </>);
}

