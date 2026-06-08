import { MessageCircle } from "lucide-react";

const variants = {
  primary:
    "bg-gradient-to-r from-forgeBlue via-cyan to-forgeViolet text-white shadow-glow hover:scale-[1.02]",
  secondary:
    "border border-cyan/30 bg-white/5 text-white hover:border-cyan/70 hover:bg-cyan/10",
  dark: "border border-white/10 bg-ink/70 text-white hover:border-cyan/40 hover:bg-panel",
};

export default function Button({
  href,
  children,
  variant = "primary",
  icon: Icon = MessageCircle,
  className = "",
  ariaLabel,
}) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan ${variants[variant]} ${className}`}
      aria-label={ariaLabel}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
    >
      {Icon ? <Icon className="h-4 w-4 shrink-0" aria-hidden="true" /> : null}
      <span>{children}</span>
    </a>
  );
}
