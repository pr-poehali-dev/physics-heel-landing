import { useState, useRef } from "react";
import Icon from "@/components/ui/icon";
import { HEEL_MODELS, HEEL_PRESETS, COMPARISONS } from "@/components/data";
import { getPressureComparison, getPressureBarPosition } from "@/components/helpers";

export function CalculatorSection() {
  const [weight, setWeight] = useState(55);
  const [heelHeight, setHeelHeight] = useState(10);
  const [area, setArea] = useState(0.8);
  const [presetIdx, setPresetIdx] = useState(0);
  const [result, setResult] = useState<number | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const selectPreset = (idx: number) => {
    setPresetIdx(idx);
    setArea(HEEL_PRESETS[idx].area);
    setResult(null);
  };

  const calculate = () => {
    const force = weight * 9.81;
    const areaM2 = area * 1e-4;
    const pressure = force / areaM2 / 1000;
    setResult(Math.round(pressure * 10) / 10);
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }), 150);
  };

  const comparison = result !== null ? getPressureComparison(result) : null;
  const barPos = result !== null ? getPressureBarPosition(result) : 0;

  return (
    <section
      id="calculator"
      className="py-24 px-6 relative"
      style={{
        background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(220,130,160,0.04) 0%, transparent 70%)",
      }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-sm font-body uppercase tracking-widest" style={{ color: "hsl(345,60%,78%)" }}>
            02 · Калькулятор
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-light mt-3">
            Рассчитай
            <br />
            <em className="not-italic" style={{ color: "hsl(345,60%,78%)" }}>своё давление</em>
          </h2>
        </div>

        <div
          className="p-8 md:p-10 rounded-3xl"
          style={{
            border: "1px solid hsl(0,0%,16%)",
            background: "hsl(0,0%,9%)",
            boxShadow: "0 0 60px rgba(220,130,160,0.07)",
          }}
        >
          {/* Weight */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <label className="font-body font-medium text-white flex items-center gap-2">
                <Icon name="Weight" size={16} style={{ color: "hsl(345,60%,78%)" }} />
                Вес
              </label>
              <span className="font-mono font-semibold text-lg" style={{ color: "hsl(345,60%,78%)" }}>
                {weight} кг
              </span>
            </div>
            <input
              type="range" min={30} max={130} value={weight}
              onChange={(e) => { setWeight(+e.target.value); setResult(null); }}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-[hsl(0,0%,45%)] mt-1 font-body">
              <span>30 кг</span><span>130 кг</span>
            </div>
          </div>

          {/* Heel height */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <label className="font-body font-medium text-white flex items-center gap-2">
                <Icon name="ArrowUpFromLine" size={16} style={{ color: "hsl(345,60%,78%)" }} />
                Высота каблука
              </label>
              <span className="font-mono font-semibold text-lg" style={{ color: "hsl(345,60%,78%)" }}>
                {heelHeight} см
              </span>
            </div>
            <input
              type="range" min={0} max={15} value={heelHeight}
              onChange={(e) => { setHeelHeight(+e.target.value); setResult(null); }}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-[hsl(0,0%,45%)] mt-1 font-body">
              <span>Плоская</span><span>15 см</span>
            </div>
          </div>

          {/* Area presets */}
          <div className="mb-8">
            <label className="font-body font-medium text-white flex items-center gap-2 mb-3">
              <Icon name="Maximize2" size={16} style={{ color: "hsl(345,60%,78%)" }} />
              Площадь набойки
            </label>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {HEEL_PRESETS.map((p, i) => (
                <button
                  key={p.label}
                  onClick={() => selectPreset(i)}
                  className="px-4 py-3 rounded-xl text-sm font-body text-left transition-all"
                  style={{
                    border: presetIdx === i ? "1px solid hsl(345,60%,78%)" : "1px solid hsl(0,0%,16%)",
                    background: presetIdx === i ? "hsl(345,60%,78%,0.12)" : "transparent",
                    color: presetIdx === i ? "hsl(345,60%,78%)" : "hsl(0,0%,55%)",
                  }}
                >
                  <div className="font-medium">{p.label}</div>
                  <div className="text-xs opacity-70 mt-0.5">{p.area} см²</div>
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[hsl(0,0%,45%)] text-sm font-body shrink-0">Или вручную:</span>
              <div className="relative flex-1">
                <input
                  type="number" min={0.1} max={200} step={0.1} value={area}
                  onChange={(e) => { setArea(+e.target.value); setPresetIdx(-1); setResult(null); }}
                  className="w-full rounded-xl px-4 py-2.5 text-white font-mono text-sm focus:outline-none transition-colors pr-14"
                  style={{
                    background: "hsl(0,0%,13%)",
                    border: "1px solid hsl(0,0%,20%)",
                  }}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[hsl(0,0%,45%)] text-xs font-body">
                  см²
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={calculate}
            className="w-full py-4 rounded-2xl font-body font-semibold text-base transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
            style={{
              background: "hsl(345,60%,78%)",
              color: "#0f0f0f",
              boxShadow: "0 8px 32px rgba(220,130,160,0.3)",
            }}
          >
            <Icon name="Zap" size={18} />
            Рассчитать давление
          </button>
        </div>

        {/* Result */}
        {result !== null && comparison && (
          <div
            ref={resultRef}
            className="mt-8 p-8 md:p-10 rounded-3xl"
            style={{
              border: "1px solid hsl(345,60%,78%,0.3)",
              background: "hsl(0,0%,9%)",
              boxShadow: "0 0 80px rgba(220,130,160,0.1)",
              animation: "scaleIn 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards",
            }}
          >
            <div className="text-center mb-8">
              <div className="font-mono font-light mb-2" style={{ fontSize: "clamp(3rem, 12vw, 6rem)", color: "hsl(345,60%,78%)" }}>
                {result.toFixed(0)}
              </div>
              <div className="text-[hsl(0,0%,55%)] font-body text-lg">кПа</div>
            </div>

            <div
              className="text-center mb-8 px-4 py-5 rounded-2xl"
              style={{
                background: "hsl(345,60%,78%,0.1)",
                border: "1px solid hsl(345,60%,78%,0.2)",
              }}
            >
              <p className="font-display text-2xl md:text-3xl font-semibold" style={{ color: "hsl(345,60%,78%)" }}>
                {comparison.phrase}
              </p>
            </div>

            <p className="text-[hsl(0,0%,55%)] font-body text-sm leading-relaxed text-center mb-10">
              {comparison.detail}
            </p>

            {/* Scale bar */}
            <div className="mb-4">
              <div className="flex justify-between items-end mb-2">
                <span className="text-xs text-[hsl(0,0%,40%)] font-body">0 кПа</span>
                <span className="text-xs text-[hsl(0,0%,40%)] font-body">900 кПа</span>
              </div>
              <div className="relative h-3 rounded-full overflow-hidden" style={{ background: "hsl(0,0%,15%)" }}>
                <div
                  className="absolute inset-y-0 left-0 rounded-full transition-all duration-700"
                  style={{
                    width: `${barPos}%`,
                    background: "linear-gradient(90deg, #8ecae6, #95d5b2, #f4a261, #e76f51, #e87f9f)",
                  }}
                />
              </div>
              <div className="relative mt-1" style={{ height: "20px" }}>
                <div
                  className="absolute -translate-x-1/2 transition-all duration-700"
                  style={{ left: `${barPos}%` }}
                >
                  <div
                    className="w-0 h-0 mx-auto"
                    style={{
                      borderLeft: "4px solid transparent",
                      borderRight: "4px solid transparent",
                      borderTop: "6px solid hsl(345,60%,78%)",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Icons */}
            <div className="grid grid-cols-5 gap-2 mt-6">
              {COMPARISONS.map((c) => {
                const isNearest = c.label === comparison.nearest.label;
                return (
                  <div
                    key={c.label}
                    className="flex flex-col items-center gap-1.5 p-3 rounded-xl transition-all"
                    style={{
                      background: isNearest ? `${c.color}22` : "transparent",
                      border: isNearest ? `1px solid ${c.color}66` : "1px solid transparent",
                      transform: isNearest ? "scale(1.05)" : "scale(1)",
                      opacity: isNearest ? 1 : 0.4,
                    }}
                  >
                    <span className="text-2xl">{c.emoji}</span>
                    <span className="text-xs font-body text-center leading-tight text-[hsl(0,0%,55%)]">
                      {c.label}
                    </span>
                    <span className="text-xs font-mono" style={{ color: c.color }}>
                      ~{c.kpa} кПа
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export function HeelGuideSection() {
  return (
    <section id="guide" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-sm font-body uppercase tracking-widest" style={{ color: "hsl(345,60%,78%)" }}>
            03 · Гид по каблукам
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-light mt-3">
            Что мы
            <br />
            <em className="not-italic" style={{ color: "hsl(345,60%,78%)" }}>протестировали</em>
          </h2>
          <p className="text-[hsl(0,0%,55%)] font-body text-base mt-4 max-w-xl mx-auto">
            Реальные замеры для веса 55 кг. Видишь разницу?
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {HEEL_MODELS.map((model) => (
            <div
              key={model.name}
              className="relative p-7 rounded-2xl flex flex-col transition-all duration-300 hover:-translate-y-1"
              style={{
                border: "1px solid hsl(0,0%,16%)",
                background: "hsl(0,0%,9%)",
              }}
            >
              <div
                className="absolute top-4 right-4 text-[10px] font-body font-semibold px-2.5 py-1 rounded-full"
                style={{
                  background: model.color + "22",
                  color: model.color,
                  border: `1px solid ${model.color}44`,
                }}
              >
                {model.tag}
              </div>

              <div className="text-5xl mb-5">{model.emoji}</div>
              <h3 className="font-display text-xl font-semibold mb-1">{model.name}</h3>
              <p className="text-[hsl(0,0%,45%)] text-xs font-body mb-5">
                Высота: {model.height} · Площадь: {model.area} см²
              </p>

              <div className="mt-auto">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="text-xs text-[hsl(0,0%,45%)] font-body">Давление</span>
                  <span className="font-mono text-2xl font-semibold" style={{ color: model.color }}>
                    {model.pressure}
                  </span>
                </div>
                <div className="text-xs text-[hsl(0,0%,45%)] font-body mb-2 text-right">кПа</div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "hsl(0,0%,18%)" }}>
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${(model.pressure / 900) * 100}%`,
                      background: model.color,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AnalysisSection() {
  const stats = [
    { value: "28×", label: "Разница давления между шпилькой и танкеткой", icon: "TrendingUp" },
    { value: "809 кПа", label: "Максимальное давление — шпилька 10 см", icon: "Flame" },
    { value: "28 кПа", label: "Минимальное давление — танкетка 6.5 см", icon: "Leaf" },
    { value: "5×", label: "Шпилька давит сильнее среднего слона", icon: "Zap" },
  ];

  const sortedModels = [...HEEL_MODELS].sort((a, b) => b.pressure - a.pressure);

  return (
    <section
      id="analysis"
      className="py-24 px-6 relative"
      style={{
        backgroundImage:
          "linear-gradient(rgba(220,150,170,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(220,150,170,0.03) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-sm font-body uppercase tracking-widest" style={{ color: "hsl(345,60%,78%)" }}>
            04 · Анализ
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-light mt-3">
            Выводы
            <br />
            <em className="not-italic" style={{ color: "hsl(345,60%,78%)" }}>эксперимента</em>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{ border: "1px solid hsl(0,0%,16%)", background: "hsl(0,0%,9%)" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ border: "1px solid hsl(345,60%,78%,0.3)", background: "hsl(345,60%,78%,0.1)" }}
              >
                <Icon name={s.icon as "TrendingUp" | "Flame" | "Leaf" | "Zap"} size={18} style={{ color: "hsl(345,60%,78%)" }} />
              </div>
              <div className="font-display text-4xl font-semibold mb-2" style={{ color: "hsl(345,60%,78%)" }}>
                {s.value}
              </div>
              <p className="text-[hsl(0,0%,55%)] text-sm font-body leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>

        <div
          className="p-8 rounded-3xl"
          style={{ border: "1px solid hsl(0,0%,16%)", background: "hsl(0,0%,9%)" }}
        >
          <h3 className="font-display text-2xl mb-8 text-center">
            Сравнение давления по моделям обуви
          </h3>
          <div className="space-y-5">
            {sortedModels.map((m) => (
              <div key={m.name} className="flex items-center gap-4">
                <div className="w-36 text-right text-sm font-body text-[hsl(0,0%,55%)] shrink-0">
                  {m.emoji} {m.name}
                </div>
                <div className="flex-1 h-10 rounded-xl overflow-hidden relative" style={{ background: "hsl(0,0%,14%)" }}>
                  <div
                    className="h-full rounded-xl flex items-center justify-end pr-3 transition-all duration-1000"
                    style={{
                      width: `${Math.max((m.pressure / 900) * 100, 8)}%`,
                      background: `linear-gradient(90deg, ${m.color}77, ${m.color})`,
                    }}
                  >
                    <span className="font-mono text-xs font-semibold" style={{ color: "#0f0f0f" }}>
                      {m.pressure} кПа
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-10 p-6 rounded-2xl"
            style={{ border: "1px solid hsl(345,60%,78%,0.2)", background: "hsl(345,60%,78%,0.05)" }}
          >
            <p className="font-body text-sm text-[hsl(0,0%,55%)] leading-relaxed text-center">
              <span className="font-semibold" style={{ color: "hsl(345,60%,78%)" }}>Вывод:</span>{" "}
              Танкетка оказывает в 28 раз меньше давления, чем шпилька, при большей высоте. Выбор формы
              каблука важнее его высоты — площадь контакта решает всё.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer
      className="py-12 px-6 text-center"
      style={{ borderTop: "1px solid hsl(0,0%,14%)" }}
    >
      <div className="max-w-2xl mx-auto">
        <p className="font-display text-2xl italic mb-2" style={{ color: "hsl(345,60%,78%)" }}>
          Физика твоего каблука
        </p>
        <p className="text-[hsl(0,0%,40%)] text-sm font-body">
          Образовательный проект · Давление · Биомеханика · Осознанный выбор
        </p>
      </div>
    </footer>
  );
}
