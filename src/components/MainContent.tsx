import Image from 'next/image'

export default function MainContent() {
  return (
    <main className="h-screen relative">
      <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="Stunning landscape"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center">
        <h2 className="font-playfair text-xl sm:text-2xl mb-2">PHOTOGRAPHER NAME</h2>
        <h1 className="font-bold text-4xl sm:text-6xl mb-4">PHOTOGRAPHER</h1>
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-12 h-px bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-12 h-px bg-white"></div>
        </div>
        <p className="text-sm sm:text-base">Category1 • Category2 • Category3 • Category4</p>
      </div>
    </main>
  )
}

