import Link from "next/link"

const footerLinks = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "GitHub", href: "#" },
]

export function Footer() {
  return (
    <footer className="w-full py-12 bg-zinc-50 border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="text-sm font-bold uppercase tracking-widest text-on-surface">
              An OpenSTL project
            </div>
            <div className="h-4 w-px bg-outline-variant hidden md:block" />
            <div className="text-xs text-zinc-400">
              © 2024 Civic Data Warehouse.
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm uppercase tracking-widest text-zinc-500 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
