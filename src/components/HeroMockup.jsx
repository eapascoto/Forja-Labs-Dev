import { CheckCircle2, MessageCircle, MonitorSmartphone } from "lucide-react";

function FloatingBadge({ icon: Icon, text, className }) {
  return (
    <div className={`glass absolute flex items-center gap-2 rounded-md px-3 py-2 text-xs font-bold text-white shadow-glow ${className}`}>
      <Icon className="h-4 w-4 text-cyan" aria-hidden="true" />
      {text}
    </div>
  );
}

export default function HeroMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] reveal reveal-delay-2">
      <div className="glass relative rounded-[8px] p-3 shadow-violet">
        <div className="overflow-hidden rounded-[8px] border border-white/10 bg-[#070c1d]">
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-rose-400" />
            <span className="h-3 w-3 rounded-full bg-amber-300" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
            <span className="ml-3 h-6 flex-1 rounded-md bg-white/[0.06]" />
          </div>
          <div className="grid gap-5 p-5 sm:grid-cols-[1.05fr_.95fr] sm:p-7">
            <div>
              <div className="mb-4 h-3 w-24 rounded bg-cyan/70" />
              <div className="mb-3 h-8 w-full rounded bg-white/90" />
              <div className="mb-4 h-8 w-4/5 rounded bg-cyan/55" />
              <div className="space-y-2">
                <div className="h-3 rounded bg-slate-500/40" />
                <div className="h-3 w-5/6 rounded bg-slate-500/30" />
                <div className="h-3 w-3/4 rounded bg-slate-500/25" />
              </div>
              <div className="mt-6 flex gap-3">
                <span className="h-10 w-32 rounded-md bg-gradient-to-r from-forgeBlue to-cyan" />
                <span className="h-10 w-20 rounded-md border border-white/15 bg-white/[0.04]" />
              </div>
            </div>
            <div className="grid gap-3">
              <div className="rounded-md border border-cyan/20 bg-cyan/10 p-4">
                <div className="mb-5 h-20 rounded-md bg-gradient-to-br from-cyan/50 to-forgeViolet/40" />
                <div className="h-3 w-2/3 rounded bg-white/60" />
                <div className="mt-2 h-3 w-1/2 rounded bg-white/20" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-md border border-white/10 bg-white/[0.04] p-3">
                  <div className="mb-3 h-7 w-7 rounded bg-forgeBlue/80" />
                  <div className="h-2 rounded bg-white/35" />
                </div>
                <div className="rounded-md border border-white/10 bg-white/[0.04] p-3">
                  <div className="mb-3 h-7 w-7 rounded bg-forgeViolet/80" />
                  <div className="h-2 rounded bg-white/35" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FloatingBadge
        icon={MonitorSmartphone}
        text="Site responsivo"
        className="-left-1 top-9 hidden sm:flex"
      />
      <FloatingBadge
        icon={CheckCircle2}
        text="Entrega profissional"
        className="-right-1 bottom-16 hidden sm:flex"
      />
      <FloatingBadge
        icon={MessageCircle}
        text="Contato direto pelo WhatsApp"
        className="bottom-4 left-6 right-6 justify-center sm:left-16 sm:right-auto"
      />
    </div>
  );
}
