import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronRight,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import BrandLogo from "./components/BrandLogo";
import Button from "./components/Button";
import Header from "./components/Header";
import HeroMockup from "./components/HeroMockup";
import SectionHeading from "./components/SectionHeading";
import {
  benefits,
  deliveries,
  faqItems,
  navItems,
  painPoints,
  phone,
  plans,
  portfolioItems,
  processSteps,
  services,
  whatsappLink,
} from "./data";

const mainCta = whatsappLink(
  "Olá, vim pelo site da Forja Labs e quero criar um site para minha empresa."
);

const contactCta = whatsappLink(
  "Olá, vim pelo site da Forja Labs e quero saber mais sobre criação de sites."
);

function Card({ children, className = "" }) {
  return <div className={`glass rounded-[8px] ${className}`}>{children}</div>;
}

function IconBox({ icon: Icon, className = "" }) {
  return (
    <span
      className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-cyan/10 text-cyan ring-1 ring-cyan/20 ${className}`}
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
    </span>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-forge-radial pt-24 sm:pt-28">
      <div className="absolute inset-0 grid-pattern opacity-35" aria-hidden="true" />
      <div className="section-shell relative grid min-h-[calc(100vh-170px)] items-center gap-12 py-10 lg:grid-cols-[1fr_.92fr] lg:py-14">
        <div className="max-w-3xl">
          <div className="reveal mb-6 inline-flex items-center gap-2 rounded-md border border-cyan/25 bg-cyan/10 px-3 py-2 text-sm font-bold text-cyan">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            Criação de sites para negócios que precisam vender melhor
          </div>
          <h1 className="reveal reveal-delay-1 text-balance text-4xl font-black tracking-normal text-white sm:text-5xl lg:text-6xl">
            Sites profissionais para empresas que querem{" "}
            <span className="gradient-text">vender mais</span>
          </h1>
          <p className="reveal reveal-delay-2 mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            A Forja Labs cria sites modernos, rápidos e estratégicos para negócios que querem
            passar mais confiança, atrair clientes e fechar vendas pelo WhatsApp.
          </p>
          <div className="reveal reveal-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={mainCta} className="sm:min-w-44" ariaLabel="Quero criar meu site pelo WhatsApp">
              Quero meu site
            </Button>
            <Button href="#servicos" variant="secondary" icon={ArrowDown} className="sm:min-w-40">
              Ver serviços
            </Button>
          </div>
          <div className="reveal reveal-delay-3 mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
            {["Sites rápidos", "Visual premium", "Pronto para divulgar"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-cyan" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <HeroMockup />
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="bg-ink py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Presença digital"
          title="Sua empresa pode estar perdendo clientes por não ter um site profissional"
        >
          Quando as informações não aparecem com clareza, o cliente hesita. Um site bem feito
          transforma sua presença digital em uma ferramenta de vendas.
        </SectionHeading>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {painPoints.map(([text, Icon]) => (
            <Card key={text} className="p-5 transition hover:-translate-y-1 hover:border-cyan/35">
              <IconBox icon={Icon} />
              <h3 className="mt-5 text-base font-bold leading-6 text-white">{text}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="servicos" className="bg-[#070b18] py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Serviços" title="Tudo que sua empresa precisa para aparecer melhor">
          Criamos páginas pensadas para gerar confiança, facilitar contato e mostrar o valor do seu
          negócio em poucos segundos.
        </SectionHeading>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map(([name, description, Icon]) => (
            <Card key={name} className="group p-5 transition hover:-translate-y-1 hover:border-cyan/35">
              <IconBox icon={Icon} className="transition group-hover:bg-cyan group-hover:text-ink" />
              <h3 className="mt-5 text-lg font-black text-white">{name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeliveriesSection() {
  return (
    <section className="bg-ink py-20 sm:py-24">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[.85fr_1.15fr]">
        <SectionHeading eyebrow="O que entregamos" title="Uma presença digital completa e bem apresentada" align="left">
          Seu site fica pronto para divulgar a empresa, receber visitantes e direcionar contatos para
          o WhatsApp de forma simples.
        </SectionHeading>
        <div className="grid gap-3 sm:grid-cols-2">
          {deliveries.map(([text, Icon]) => (
            <div key={text} className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.035] p-4">
              <Icon className="h-5 w-5 shrink-0 text-cyan" aria-hidden="true" />
              <span className="text-sm font-semibold text-slate-100">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="processo" className="bg-[#070b18] py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Processo" title="Como funciona">
          Um fluxo direto, sem complicar: entendemos seu negócio, criamos a estrutura e ajustamos
          até o site ficar pronto para apresentar sua empresa.
        </SectionHeading>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map(([title, description], index) => (
            <Card key={title} className="relative overflow-hidden p-6">
              <span className="absolute right-5 top-4 text-5xl font-black text-white/[0.05]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-gradient-to-br from-forgeBlue to-forgeViolet text-sm font-black text-white">
                {index + 1}
              </span>
              <h3 className="mt-5 text-xl font-black text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-ink py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Portfólio" title="Modelos de sites que podemos criar">
          Exemplos demonstrativos para diferentes tipos de negócios. Não são clientes reais, são
          referências de direção visual e estrutura.
        </SectionHeading>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map(([type, description, tag, Icon]) => (
            <Card key={type} className="overflow-hidden transition hover:-translate-y-1 hover:border-cyan/35">
              <div className="h-36 border-b border-white/10 bg-gradient-to-br from-forgeBlue/30 via-cyan/15 to-forgeViolet/30 p-5">
                <div className="flex h-full items-end justify-between">
                  <Icon className="h-12 w-12 text-white" aria-hidden="true" />
                  <span className="rounded-md border border-white/15 bg-ink/50 px-3 py-1 text-xs font-bold text-cyan">
                    Exemplo de projeto
                  </span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan">{tag}</p>
                <h3 className="mt-2 text-xl font-black text-white">{type}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
                <Button
                  href={whatsappLink(`Olá, quero um site para ${type.toLowerCase()} como os modelos da Forja Labs.`)}
                  variant="dark"
                  icon={ChevronRight}
                  className="mt-5 w-full"
                >
                  Quero algo assim
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlansSection() {
  return (
    <section id="planos" className="bg-[#070b18] py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Planos" title="Escolha o tipo de site ideal para sua empresa">
          Sem valores fixos na página: cada orçamento é alinhado pelo WhatsApp conforme escopo,
          urgência e necessidade do negócio.
        </SectionHeading>
        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col p-6 ${plan.featured ? "border-cyan/45 shadow-glow" : ""}`}
            >
              {plan.featured && (
                <span className="mb-4 w-fit rounded-md bg-cyan px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-ink">
                  Mais procurado
                </span>
              )}
              <h3 className="text-2xl font-black text-white">{plan.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{plan.description}</p>
              <ul className="mt-6 grid gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm text-slate-200">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button href={whatsappLink(plan.message)} className="mt-7 w-full" ariaLabel={`Consultar ${plan.name} no WhatsApp`}>
                Consultar no WhatsApp
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="bg-ink py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Benefícios" title="Mais clareza, confiança e contato para sua empresa" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex min-h-24 items-center gap-3 rounded-md border border-white/10 bg-white/[0.035] p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-cyan/10 text-cyan">
                <Check className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="text-sm font-bold text-slate-100">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section id="faq" className="bg-[#070b18] py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="FAQ" title="Perguntas frequentes" />
        <div className="mx-auto grid max-w-4xl gap-3">
          {faqItems.map(([question, answer]) => (
            <details key={question} className="group rounded-[8px] border border-white/10 bg-white/[0.035] p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-white">
                {question}
                <ArrowRight className="h-5 w-5 shrink-0 text-cyan transition group-open:rotate-90" aria-hidden="true" />
              </summary>
              <p className="mt-4 text-sm leading-7 text-slate-300">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contato" className="bg-ink py-20 sm:py-24">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-[8px] border border-cyan/25 bg-gradient-to-br from-forgeBlue/18 via-cyan/10 to-forgeViolet/18 p-6 sm:p-10 lg:p-14">
          <div className="absolute inset-0 grid-pattern opacity-25" aria-hidden="true" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-cyan">
                Vamos conversar
              </p>
              <h2 className="text-balance text-3xl font-black text-white sm:text-5xl">
                Pronto para ter um site profissional?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Chame a Forja Labs no WhatsApp e vamos criar uma presença digital mais profissional
                para sua empresa.
              </p>
              <p className="mt-5 flex items-center gap-2 text-sm font-bold text-white">
                <Phone className="h-4 w-4 text-cyan" aria-hidden="true" />
                WhatsApp: {phone}
              </p>
            </div>
            <Button href={contactCta} className="w-full px-7 sm:w-auto" ariaLabel="Falar com a Forja Labs no WhatsApp">
              Falar com a Forja Labs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#040713] py-10">
      <div className="section-shell grid gap-8 md:grid-cols-[1.1fr_.9fr_.8fr]">
        <div>
          <BrandLogo />
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-300">
            Sites profissionais para empresas que querem crescer no digital.
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-2 text-sm" aria-label="Links rápidos do rodapé">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="rounded-md py-1 font-semibold text-slate-300 hover:text-cyan">
              {label}
            </a>
          ))}
        </nav>
        <div className="md:text-right">
          <p className="text-sm font-bold text-white">WhatsApp</p>
          <a href={contactCta} target="_blank" rel="noreferrer" className="mt-2 inline-flex text-sm font-semibold text-cyan">
            {phone}
          </a>
          <p className="mt-5 text-xs text-slate-500">© 2026 Forja Labs. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsapp() {
  return (
    <a
      href={contactCta}
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir conversa com a Forja Labs no WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-ink shadow-[0_18px_45px_rgba(37,211,102,.32)] transition hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <ServicesSection />
        <DeliveriesSection />
        <ProcessSection />
        <PortfolioSection />
        <PlansSection />
        <BenefitsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}
