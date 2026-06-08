export default function SectionHeading({ eyebrow, title, children, align = "center" }) {
  return (
    <div className={`mx-auto mb-10 max-w-3xl ${align === "left" ? "text-left" : "text-center"}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-cyan">{eyebrow}</p>
      )}
      <h2 className="text-balance text-3xl font-black tracking-normal text-white sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">{children}</p>}
    </div>
  );
}
