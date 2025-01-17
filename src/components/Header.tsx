import { Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="absolute w-full z-10 p-6 flex justify-between items-center">
      <h1 className="font-playfair text-2xl text-white">Photographer Name</h1>
      <div className="flex items-center space-x-2 text-white">
        <span className="hidden sm:inline">MENU</span>
        <Menu className="w-6 h-6" />
      </div>
    </header>
  )
}

