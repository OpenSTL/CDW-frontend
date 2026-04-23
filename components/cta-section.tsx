import Link from "next/link"
import { MessageSquare } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="signature-gradient rounded-3xl p-12 lg:p-20 text-white relative overflow-hidden shadow-2xl">
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
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tighter mb-6 text-balance">
              Join the Civic Community
            </h2>
            <p className="text-white/80 text-xl lg:text-2xl mb-10 leading-relaxed">
              Collaborate with developers, data scientists, and public servants
              in our Discord community. Help shape the future of civic data in
              St. Louis.
            </p>
            <Link
              href="https://discord.gg/JDeZEyDRzw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 rounded-lg text-xl font-bold shadow-xl hover:bg-surface-container-lowest transition-colors active:scale-95"
            >
              Connect on Discord
              <MessageSquare className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
