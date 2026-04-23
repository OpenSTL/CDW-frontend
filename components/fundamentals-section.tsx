import { Users, ShieldCheck, Database, ArrowRight } from "lucide-react"
import Link from "next/link"

const pillars = [
  {
    icon: Users,
    title: "Community Driven",
    description:
      "Designed and governed by the community. We prioritize the needs of local developers, advocates, and neighborhood leaders.",
    iconBg: "bg-secondary-container",
    iconColor: "text-on-secondary-container",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Data",
    description:
      "Ensuring high-fidelity, validated data sources. We curate civic datasets with rigorous standards for accuracy and ethics.",
    iconBg: "bg-tertiary-fixed-dim",
    iconColor: "text-on-tertiary-fixed",
  },
  {
    icon: Database,
    title: "Open Infrastructure",
    description:
      "A scalable, cloud-native foundation that lowers the barrier to entry for analyzing public sector information.",
    iconBg: "bg-primary-fixed-dim",
    iconColor: "text-on-primary-fixed-variant",
  },
]

export function FundamentalsSection() {
  return (
    <section className="bg-surface-container-low py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight mb-4 text-on-surface">
              Building The Fundamentals
            </h2>
            <p className="text-on-surface-variant text-lg">
              Our approach focuses on three core pillars that ensure long-term
              sustainability and impact for the St. Louis region.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-surface-container-lowest p-10 rounded-xl flex flex-col h-full hover:translate-y-[-4px] transition-transform duration-300"
            >
              <div
                className={`w-16 h-16 rounded-full ${pillar.iconBg} flex items-center justify-center mb-8 ${pillar.iconColor}`}
              >
                <pillar.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-on-surface">
                {pillar.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed mb-8 flex-grow">
                {pillar.description}
              </p>
              <Link
                href="#"
                className="text-primary font-bold flex items-center gap-2 group cursor-pointer"
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
