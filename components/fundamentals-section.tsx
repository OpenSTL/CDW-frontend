import { Users, ShieldCheck, Database, ArrowRight } from "lucide-react"
import Link from "next/link"

const pillars = [
  {
    icon: Users,
    title: "Community Driven",
    description:
      "Designed and governed by the community. We prioritize the needs of local developers, advocates, and neighborhood leaders.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Data",
    description:
      "Ensuring high-fidelity, validated data sources. We curate civic datasets with rigorous standards for accuracy and ethics.",
  },
  {
    icon: Database,
    title: "Open Infrastructure",
    description:
      "A scalable, cloud-native foundation that lowers the barrier to entry for analyzing public sector information.",
  },
]

export function FundamentalsSection() {
  return (
    <section className="bg-surface-container-low py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center text-sm uppercase tracking-widest text-rust mb-6">
              <span className="mr-2">■</span>
              Core Pillars
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl text-navy mb-4">
              Building The <em className="text-rust">Fundamentals</em>
            </h2>
            <p className="text-navy/70 text-lg">
              Our approach focuses on three core pillars that ensure long-term
              sustainability and impact for the St. Louis region.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-cream p-10 border border-rust/20 flex flex-col h-full hover:border-rust/50 transition-colors duration-300"
            >
              <div className="w-16 h-16 border border-navy/20 flex items-center justify-center mb-8 text-navy">
                <pillar.icon className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-navy mb-4">
                {pillar.title}
              </h3>
              <p className="text-navy/70 leading-relaxed mb-8 flex-grow">
                {pillar.description}
              </p>
              <Link
                href="#"
                className="text-rust text-sm uppercase tracking-widest flex items-center gap-2 group cursor-pointer"
              >
                Learn more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
