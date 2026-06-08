export default function BrandLogo({ compact = false, className = "" }) {
  return (
    <a
      href="#inicio"
      className={`inline-flex items-center gap-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan ${className}`}
      aria-label="Forja Labs - voltar ao início"
    >
      <img
        src="/assets/forja-labs-logo.svg"
        alt=""
        className={compact ? "h-10 w-10" : "h-12 w-12"}
        width={48}
        height={48}
      />
      {!compact && (
        <span className="leading-none">
          <span className="block text-base font-black tracking-normal text-white">Forja Labs</span>
          <span className="mt-1 block text-xs font-medium text-cyan">Sites profissionais</span>
        </span>
      )}
    </a>
  );
}
