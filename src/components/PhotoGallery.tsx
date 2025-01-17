import Image from 'next/image';

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
  return (
    <div className="relative z-10 pt-screen grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {photos.map((photo, index) => (
        <div
          key={index}
          className={`relative overflow-hidden rounded-lg shadow-lg ${
            index % 5 === 0 ? 'col-span-2 row-span-2' : ''
          }`}
        >
          <Image
            src={photo.src || "/placeholder.svg"}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            layout="responsive"
            className="transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-300 flex items-end">
            <span className="text-white p-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
              {photo.alt}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

