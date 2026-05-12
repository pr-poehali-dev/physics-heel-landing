import { COMPARISONS, Comparison } from "@/components/data";

export function getPressureComparison(kpa: number): {
  phrase: string;
  detail: string;
  nearest: Comparison;
} {
  if (kpa < 5) {
    return {
      phrase: "Мягче перышка ✦",
      detail: `${kpa.toFixed(1)} кПа — это меньше, чем у лыжника на снегу (~5 кПа).`,
      nearest: COMPARISONS[0],
    };
  } else if (kpa < 30) {
    const times = (kpa / 5).toFixed(1);
    return {
      phrase: `В ${times}× сильнее лыжника ⛷️`,
      detail: `${kpa.toFixed(1)} кПа — давление как у обычного пешехода. В ${times} раз больше, чем у лыжника (~5 кПа).`,
      nearest: COMPARISONS[1],
    };
  } else if (kpa < 60) {
    const times = (kpa / 30).toFixed(1);
    return {
      phrase: `Как гусеничный трактор 🚜`,
      detail: `${kpa.toFixed(1)} кПа ≈ давление трактора (~60 кПа). В ${times}× больше, чем у пешехода.`,
      nearest: COMPARISONS[2],
    };
  } else if (kpa < 400) {
    const times = (kpa / 60).toFixed(1);
    return {
      phrase: `В ${times}× мощнее трактора 💥`,
      detail: `${kpa.toFixed(1)} кПа — между трактором (~60 кПа) и слоном (~400 кПа). Асфальт, берегись!`,
      nearest: COMPARISONS[3],
    };
  } else if (kpa < 809) {
    const times = (kpa / 400).toFixed(1);
    return {
      phrase: `Давишь как ${times} слона 🐘`,
      detail: `${kpa.toFixed(1)} кПа — в ${times} раз больше, чем давление слона (~400 кПа).`,
      nearest: COMPARISONS[3],
    };
  } else {
    const times = (kpa / 400).toFixed(0);
    return {
      phrase: `Сильнее ${times} слонов вместе! 🐘🐘`,
      detail: `${kpa.toFixed(1)} кПа — максимум из нашего эксперимента. Это в ${times} раза больше давления слона (~400 кПа).`,
      nearest: COMPARISONS[4],
    };
  }
}

export function getPressureBarPosition(kpa: number): number {
  const maxKpa = 900;
  return Math.min((kpa / maxKpa) * 100, 100);
}
