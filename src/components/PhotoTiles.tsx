import Image from 'next/image'

const photos = [
  { src: '/placeholder.svg?height=400&width=300', width: 300, height: 400 },
  { src: '/placeholder.svg?height=300&width=400', width: 400, height: 300 },
  { src: '/placeholder.svg?height=500&width=300', width: 300, height: 500 },
  { src: '/placeholder.svg?height=350&width=400', width: 400, height: 350 },
  { src: '/placeholder.svg?height=450&width=300', width: 300, height: 450 },
  { src: '/placeholder.svg?height=400&width=400', width: 400, height: 400 },
  { src: '/placeholder.svg?height=300&width=300', width: 300, height: 300 },
  { src: '/placeholder.svg?height=500&width=400', width: 400, height: 500 },
]

export default function PhotoTiles() {
  return (
    <section className="w-full p-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Photo Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {photos.map((photo, index) => (
            <div key={index} className={`relative overflow-hidden ${index % 5 === 0 ? 'row-span-2' : ''}`}>
              <Image
                src={photo.src || "/placeholder.svg"}
                alt={`Photo ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

