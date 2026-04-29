import Link from "next/link"
import { MessageSquare } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-navy p-12 lg:p-20 text-cream relative overflow-hidden border border-rust/30">
          {/* Geometric Texture */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 400 400"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 400 L400 0 L400 400 Z" fill="currentColor" />
            </svg>
          </div>
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center text-sm uppercase tracking-widest text-rust mb-6">
              <span className="mr-2">■</span>
              Community
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl mb-6 text-balance">
              Join the <em className="text-rust">Civic Community</em>
            </h2>
            <p className="text-cream/70 text-lg mb-10 leading-relaxed">
              Collaborate with developers, data scientists, and public servants
              in our Discord community. Help shape the future of civic data in
              St. Louis.
            </p>
            <Link
              href="https://discord.gg/JDeZEyDRzw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-cream text-navy px-10 py-5 text-sm uppercase tracking-widest hover:bg-cream/90 transition-colors active:scale-95"
            >
              Connect on Discord
              <MessageSquare className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
