"use client"

import Image from "next/image"
import { Play } from "lucide-react"

export function VisionSection() {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold tracking-tighter mb-4 text-on-surface">
          See the Vision
        </h2>
        <p className="text-on-surface-variant text-xl max-w-2xl mx-auto">
          Discover how the Civic Data Warehouse will transform regional
          collaboration and policy-making.
        </p>
      </div>
      <div className="max-w-5xl mx-auto relative group">
        <div className="aspect-video bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden relative flex items-center justify-center">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG8-J177ohKe3yPamZJPQSEPtR3oAHE8nfjDgpxUZbU5Uyu33ldY5dFKf5Z8RRdqAkufeOaerY9KMej2VSn8plAdDjAN7tOTL4NglAAMC5NbAcZe_vxdp3nMp1ep_9yzaMyzgZC7s6aa1PMSGO3YaUCHimf28uPHf5hewQEFKmcJlZ1tP9iYhAxJtCOslQD2tqHpUQ6D8dX0SgJBDncJ0XAYJnQkZKDLbr0jXFWZIO1a1C8VWm55QpbNi_q14lDjN5Q8LUzXLy7Gyd"
            alt="Vision teaser background"
            fill
            className="object-cover opacity-40"
          />
          <button
            className="z-10 w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 hover:scale-110 transition-transform active:scale-95 group cursor-pointer"
            aria-label="Play video"
          >
            <Play className="w-12 h-12 text-white fill-white translate-x-1" />
          </button>
          <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
            <div className="text-white font-bold text-lg">
              Civic Tech: The Foundation (3:42)
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
