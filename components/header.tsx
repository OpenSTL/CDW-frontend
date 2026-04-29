"use client"

import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 glass-header border-b border-rust/20">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-3 text-navy"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-J4pldeVg6eeHFr59WekmhbuTOdubl7.png"
            alt="Civic Data Warehouse logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span className="font-serif text-xl tracking-tight">
            Civic Data Warehouse
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="https://discord.gg/JDeZEyDRzw"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-navy text-cream px-6 py-2 text-sm uppercase tracking-widest hover:bg-navy/90 transition-colors active:scale-95 duration-200"
          >
            Join Discord
          </Link>
        </div>
      </div>
    </header>
  )
}
