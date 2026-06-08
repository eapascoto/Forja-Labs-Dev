import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems, whatsappLink } from "../data";
import BrandLogo from "./BrandLogo";
import Button from "./Button";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const cta = whatsappLink("Olá, vim pelo site da Forja Labs e quero criar um site para minha empresa.");

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/84 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between">
        <BrandLogo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="rounded-md px-3 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/5 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={cta} ariaLabel="Falar com a Forja Labs no WhatsApp">
            Falar no WhatsApp
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ink/96 lg:hidden">
          <nav className="section-shell grid gap-2 py-5" aria-label="Navegação mobile">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-slate-100"
              >
                {label}
              </a>
            ))}
            <Button href={cta} className="mt-2 w-full" ariaLabel="Falar com a Forja Labs no WhatsApp">
              Falar no WhatsApp
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
