import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed w-full z-20 p-6 flex justify-between items-center">
      <h1 className="font-serif text-2xl text-white bg-gradient-to-r from-black px-10">
        <Link href="/">Oksana Zub</Link>
      </h1>
    </header>
  )
}

