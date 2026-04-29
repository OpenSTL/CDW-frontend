import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pt-28 pb-32 lg:pt-40 lg:pb-48 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 z-10">
          <div className="inline-flex items-center text-sm uppercase tracking-widest text-rust mb-6">
            <span className="mr-2">■</span>
            Early Stage Vision
          </div>
          <h1 className="font-serif text-5xl lg:text-7xl leading-[1.1] mb-8 text-navy text-balance">
            Democratizing <em className="text-rust">Civic Data</em> for Everyone
          </h1>
          <p className="text-navy/70 text-lg leading-relaxed mb-10 max-w-2xl">
            We are building the foundation for open civic data—creating a
            trusted repository designed to empower researchers, developers, and
            citizens with the tools they need to build a better future.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://github.com/jonathanleek/civic-data-warehouse"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy text-cream px-8 py-4 text-sm uppercase tracking-widest hover:bg-navy/90 transition-all active:scale-95 flex items-center gap-3"
            >
              Explore Repository
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="border border-rust/30 p-2">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZyDgQ141amdbRE9Jv7Dv0WrmT4k1W2olz0SrgYdmGP8YXppWIXY6dhzHChi860yIJ38CdSKu8u_mq2Jh8fbKwQxsdJZiJz32GKM6GsTO99-k_Cb06tr54dUR75IxNjvxkcN7B9_131sUntuS8i5Vk2uN5BBP8KkvTY3_yeEhGSx2WtnfLTGiCBVK-zFuwMV-DawBbmTWqSrrG0A6qVXfOk5BJDo5tNimX3echtnBbMEZ6oaVl2NjgIX65_7wsNU681_oe8AfvQQu0"
              alt="Data visualization interface showing charts and graphs"
              width={600}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
