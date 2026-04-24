import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-32 lg:pt-32 lg:pb-48 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 z-10">
          <div className="inline-block bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded text-sm font-bold tracking-widest uppercase mb-6">
            Early Stage Vision
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tighter leading-[1.1] mb-8 text-on-surface text-balance">
            Democratizing Civic Data for Everyone
          </h1>
          <p className="text-on-surface-variant text-xl lg:text-2xl leading-relaxed mb-10 max-w-2xl">
            We are building the foundation for open civic data—creating a
            trusted repository designed to empower researchers, developers, and
            citizens with the tools they need to build a better future.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://github.com/jonathanleek/civic-data-warehouse"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-bold shadow-lg hover:opacity-90 transition-all active:scale-95 flex items-center gap-2"
            >
              Explore Repository
              <ExternalLink className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="aspect-square signature-gradient rounded-full opacity-10 absolute -top-20 -right-20 blur-3xl" />
          <div className="bg-surface-container-low p-2 rounded-xl">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZyDgQ141amdbRE9Jv7Dv0WrmT4k1W2olz0SrgYdmGP8YXppWIXY6dhzHChi860yIJ38CdSKu8u_mq2Jh8fbKwQxsdJZiJz32GKM6GsTO99-k_Cb06tr54dUR75IxNjvxkcN7B9_131sUntuS8i5Vk2uN5BBP8KkvTY3_yeEhGSx2WtnfLTGiCBVK-zFuwMV-DawBbmTWqSrrG0A6qVXfOk5BJDo5tNimX3echtnBbMEZ6oaVl2NjgIX65_7wsNU681_oe8AfvQQu0"
              alt="Data visualization interface showing charts and graphs"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
