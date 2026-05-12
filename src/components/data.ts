export const THEORY_BLOCKS = [
  {
    icon: "Gauge",
    title: "Давление",
    formula: "P = F / S",
    text: "Давление — это сила, приходящаяся на единицу площади. Чем меньше площадь контакта, тем выше давление при той же силе. Именно поэтому шпилька давит на пол сильнее, чем слон.",
  },
  {
    icon: "Crosshair",
    title: "Центр тяжести",
    formula: "τ = r × F",
    text: "Высокий каблук смещает центр тяжести вперёд. Тело компенсирует это, изгибая позвоночник и нагружая поясницу — это и есть биомеханика «походки на шпильке».",
  },
  {
    icon: "Activity",
    title: "Биомеханика",
    formula: "W = F · d · cos θ",
    text: "При ходьбе на каблуках мышцы голени работают постоянно в укороченном состоянии. Это увеличивает риск травм и усталость — особенно при длительной носке.",
  },
];

export const HEEL_MODELS = [
  {
    name: "Широкий каблук",
    height: "7 см",
    area: 12.5,
    pressure: 108,
    emoji: "👠",
    image: "https://cdn.poehali.dev/projects/261e28b1-bf79-45b2-b694-e4397fedc880/files/ae8057a6-f993-4548-93e2-93fbdc849be6.jpg",
    color: "#d4a0b0",
    tag: "Комфорт",
  },
  {
    name: "Шпилька",
    height: "10 см",
    area: 0.8,
    pressure: 809,
    emoji: "👡",
    image: "https://cdn.poehali.dev/projects/261e28b1-bf79-45b2-b694-e4397fedc880/files/91a2d9bc-1d39-4941-b203-918ef2e996d2.jpg",
    color: "#e87f9f",
    tag: "Экстрим",
  },
  {
    name: "Танкетка",
    height: "6.5 см",
    area: 54,
    pressure: 28,
    emoji: "👟",
    image: null,
    color: "#a0c4b8",
    tag: "Лучший выбор",
  },
  {
    name: "Плоская подошва",
    height: "0 см",
    area: 49.5,
    pressure: 54,
    emoji: "🥿",
    image: "https://cdn.poehali.dev/projects/261e28b1-bf79-45b2-b694-e4397fedc880/files/5cb6c545-a211-4204-96b2-c1cd6356e99c.jpg",
    color: "#b0b8d4",
    tag: "Классика",
  },
];

export const HEEL_PRESETS = [
  { label: "Шпилька", area: 0.8 },
  { label: "Широкий каблук", area: 12.5 },
  { label: "Танкетка", area: 54 },
  { label: "Плоская подошва", area: 49.5 },
];

export interface Comparison {
  label: string;
  kpa: number;
  emoji: string;
  color: string;
}

export const COMPARISONS: Comparison[] = [
  { label: "Лыжник", kpa: 5, emoji: "⛷️", color: "#8ecae6" },
  { label: "Пешеход", kpa: 30, emoji: "🚶", color: "#95d5b2" },
  { label: "Трактор", kpa: 60, emoji: "🚜", color: "#f4a261" },
  { label: "Слон", kpa: 400, emoji: "🐘", color: "#e76f51" },
  { label: "Шпилька", kpa: 809, emoji: "👡", color: "#e87f9f" },
];