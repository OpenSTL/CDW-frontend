"use client"

import Image from "next/image"
import { Play } from "lucide-react"

export function VisionSection() {
  return (
    <section className="py-24 px-6 bg-cream">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <div className="inline-flex items-center text-sm uppercase tracking-widest text-rust mb-6">
          <span className="mr-2">■</span>
          Our Vision
        </div>
        <h2 className="font-serif text-4xl lg:text-5xl text-navy mb-4">
          See the <em className="text-rust">Vision</em>
        </h2>
        <p className="text-navy/70 text-lg max-w-2xl mx-auto">
          Discover how the Civic Data Warehouse will transform regional
          collaboration and policy-making.
        </p>
      </div>
      <div className="max-w-5xl mx-auto relative group">
        <div className="aspect-video bg-navy overflow-hidden relative flex items-center justify-center border border-rust/30">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG8-J177ohKe3yPamZJPQSEPtR3oAHE8nfjDgpxUZbU5Uyu33ldY5dFKf5Z8RRdqAkufeOaerY9KMej2VSn8plAdDjAN7tOTL4NglAAMC5NbAcZe_vxdp3nMp1ep_9yzaMyzgZC7s6aa1PMSGO3YaUCHimf28uPHf5hewQEFKmcJlZ1tP9iYhAxJtCOslQD2tqHpUQ6D8dX0SgJBDncJ0XAYJnQkZKDLbr0jXFWZIO1a1C8VWm55QpbNi_q14lDjN5Q8LUzXLy7Gyd"
            alt="Vision teaser background"
            fill
            className="object-cover opacity-40"
          />
          <button
            className="z-10 w-24 h-24 bg-cream/20 backdrop-blur-md flex items-center justify-center border border-cream/30 hover:scale-110 transition-transform active:scale-95 group cursor-pointer"
            aria-label="Play video"
          >
            <Play className="w-12 h-12 text-cream fill-cream translate-x-1" />
          </button>
          <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-navy to-transparent">
            <div className="text-cream text-sm uppercase tracking-widest">
              Civic Tech: The Foundation (3:42)
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
