import Icon from "@/components/ui/icon";
import { THEORY_BLOCKS } from "@/components/data";

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md border-b border-white/5 bg-[#0f0f0f]/80">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#" className="font-display text-lg italic" style={{ color: "hsl(345,60%,78%)" }}>
          Физика каблука
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm font-body text-[hsl(0,0%,55%)]">
          <a href="#theory" className="hover:text-white transition-colors">Теория</a>
          <a href="#calculator" className="hover:text-white transition-colors">Калькулятор</a>
          <a href="#guide" className="hover:text-white transition-colors">Гид</a>
          <a href="#analysis" className="hover:text-white transition-colors">Анализ</a>
        </div>
        <a
          href="#calculator"
          className="px-4 py-2 rounded-full text-sm font-body transition-all"
          style={{
            border: "1px solid hsl(345,60%,78%,0.4)",
            color: "hsl(345,60%,78%)",
          }}
        >
          Калькулятор
        </a>
      </div>
    </nav>
  );
}

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 pb-32 overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(220,150,170,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(220,150,170,0.04) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    >
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(220,130,160,0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto" style={{ animation: "fadeIn 0.8s ease forwards" }}>
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-body mb-8"
          style={{
            border: "1px solid hsl(345,60%,78%,0.3)",
            color: "hsl(345,60%,78%)",
            background: "hsl(345,60%,78%,0.05)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full inline-block"
            style={{ background: "hsl(345,60%,78%)", animation: "pulse 2s infinite" }}
          />
          Образовательный проект · Физика и биомеханика
        </div>

        <h1 className="font-display font-light leading-[1.05] tracking-tight mb-6" style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}>
          Физика
          <br />
          <em className="not-italic" style={{ color: "hsl(345,60%,78%)" }}>твоего</em>
          <br />
          каблука
        </h1>

        <p className="font-body text-[hsl(0,0%,55%)] text-lg md:text-xl max-w-2xl mx-auto mb-3 leading-relaxed">
          Как законы давления работают в твоей обуви — наглядно, с формулами и живым калькулятором
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <a
            href="#calculator"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-body font-semibold text-base transition-all hover:opacity-90 hover:scale-105 active:scale-95"
            style={{
              background: "hsl(345,60%,78%)",
              color: "#0f0f0f",
              boxShadow: "0 8px 32px rgba(220,130,160,0.3)",
            }}
          >
            <Icon name="Calculator" size={18} />
            Перейти к калькулятору
          </a>
          <a
            href="#theory"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-body text-base text-white transition-all"
            style={{ border: "1px solid hsl(0,0%,25%)" }}
          >
            <Icon name="BookOpen" size={18} />
            Читать теорию
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[hsl(0,0%,40%)] text-xs font-body"
        style={{ animation: "bounce 2s infinite" }}
      >
        <span>Скролл вниз</span>
        <Icon name="ChevronDown" size={16} />
      </div>
    </section>
  );
}

export function TheorySection() {
  return (
    <section id="theory" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-sm font-body uppercase tracking-widest" style={{ color: "hsl(345,60%,78%)" }}>
            01 · Теория
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-light mt-3">
            Три закона физики
            <br />
            <em className="not-italic" style={{ color: "hsl(345,60%,78%)" }}>в твоей обуви</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {THEORY_BLOCKS.map((block) => (
            <div
              key={block.title}
              className="relative p-8 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                border: "1px solid hsl(0,0%,16%)",
                background: "hsl(0,0%,9%)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(220,130,160,0.08) 0%, transparent 70%)",
                  transform: "translate(30%, -30%)",
                }}
              />
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-6"
                style={{
                  border: "1px solid hsl(345,60%,78%,0.3)",
                  background: "hsl(345,60%,78%,0.1)",
                }}
              >
                <Icon name={block.icon as "Gauge" | "Crosshair" | "Activity"} size={18} style={{ color: "hsl(345,60%,78%)" }} />
              </div>
              <div className="font-mono text-sm mb-3 opacity-80" style={{ color: "hsl(345,60%,78%)" }}>
                {block.formula}
              </div>
              <h3 className="font-display text-2xl font-semibold mb-3">{block.title}</h3>
              <p className="font-body text-[hsl(0,0%,55%)] text-sm leading-relaxed">{block.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
