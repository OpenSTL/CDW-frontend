"use client"

import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 glass-header shadow-[0_12px_32px_rgba(27,27,27,0.06)]">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link
          href="/"
          className="text-xl font-bold text-on-surface tracking-tighter"
        >
          Civic Data Warehouse
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="https://discord.gg/JDeZEyDRzw"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold tracking-tight hover:opacity-80 transition-opacity active:scale-95 duration-200"
          >
            Join Discord
          </Link>
        </div>
      </div>
    </header>
  )
}
