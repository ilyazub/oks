import { ChevronUp, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full p-6 flex justify-between items-center text-white z-20">
      <ChevronUp className="w-6 h-6 cursor-pointer" onClick={() => window.scrollTo(0, 0)} />

      <div className="flex space-x-4">
        <a href="https://www.facebook.com/AstiiLL" className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors">
          <Facebook className="w-4 h-4" />
        </a>
        <a href="https://www.instagram.com/oksanazub_photography" className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors">
          <Instagram className="w-4 h-4" />
        </a>
      </div>
    </footer>
  )
}

