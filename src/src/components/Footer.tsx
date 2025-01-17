import { ChevronUp, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full p-6 flex justify-between items-center text-white bg-gradient-to-t from-black to-transparent z-20">
      <ChevronUp className="w-6 h-6 cursor-pointer" onClick={() => window.scrollTo(0, 0)} />
      <div className="space-x-2">
        <span className="inline-block w-2 h-2 bg-white rounded-full"></span>
        <span className="inline-block w-2 h-2 bg-white rounded-full opacity-50"></span>
        <span className="inline-block w-2 h-2 bg-white rounded-full opacity-50"></span>
      </div>
      <div className="flex space-x-4">
        <a href="#" className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors">
          <Facebook className="w-4 h-4" />
        </a>
        <a href="#" className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors">
          <Instagram className="w-4 h-4" />
        </a>
        <a href="#" className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors">
          <Twitter className="w-4 h-4" />
        </a>
      </div>
    </footer>
  )
}

