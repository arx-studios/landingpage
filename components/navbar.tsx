import Link from "next/link"

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 w-full h-16 flex items-center justify-center bg-black/20 backdrop-blur-md border-b border-white/[0.08]">
      <Link
        href="/"
        className="text-white font-semibold tracking-[0.25em] uppercase text-sm hover:text-white/70 transition-colors duration-200"
      >
        ARX Studios
      </Link>
    </header>
  )
}
