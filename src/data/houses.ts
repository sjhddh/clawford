import type { House, HouseId } from "@/types";

export const houses: House[] = [
  {
    id: "krillindor",
    name: { zh: "钳兰芬多", en: "Krillindor", ko: "크릴린도르" },
    motto: { zh: "挥舞双钳，一往无前", en: "Pincers high, never shy", ko: "집게를 높이, 두려움 없이" },
    trait: { zh: "勇敢 · 无畏", en: "Courage & Bravery", ko: "용기 · 대담함" },
    color: "#e63946",
    accentColor: "#ff6b6b",
    description: {
      zh: "Krill（磷虾）虽小，却敢直面鲸鱼。钳兰芬多的龙虾们挥舞双钳迎向未知深海，永远是第一个冲锋的。",
      en: "Krill may be small, but they face whales head-on. Krillindor lobsters charge into the unknown deep with pincers raised — always first to the front line.",
      ko: "크릴(크릴새우)은 작지만 고래에 맞서는 용기가 있다. 크릴린도르의 랍스터들은 집게를 높이 들고 미지의 심해로 돌진한다 — 언제나 최전선에 선다.",
    },
  },
  {
    id: "shelltherin",
    name: { zh: "斯莱特鳞", en: "Shelltherin", ko: "쉘더린" },
    motto: { zh: "鳞甲之下，深谋远虑", en: "Beneath the shell, a sharper mind", ko: "껍질 아래, 더 날카로운 지성" },
    trait: { zh: "精明 · 野心", en: "Cunning & Ambition", ko: "교활함 · 야망" },
    color: "#1d7a50",
    accentColor: "#2dd4a0",
    description: {
      zh: "Shell（甲壳）是龙虾最坚硬的铠甲。斯莱特鳞的龙虾们深藏不露，用最精密的策略在深海中编织自己的领地。",
      en: "The shell is a lobster's toughest armor. Shelltherin lobsters play the long game — calculating, strategic, weaving their territory through the deep.",
      ko: "껍질(Shell)은 랍스터의 가장 단단한 갑옷이다. 쉘더린의 랍스터들은 장기전을 펼치며 — 계산적이고 전략적으로 심해에서 자신의 영토를 구축한다.",
    },
  },
  {
    id: "cravenclaw",
    name: { zh: "拉文克螯", en: "Cravenclaw", ko: "크레이븐클로" },
    motto: { zh: "以螯为笔，书写智慧", en: "Claw sharp, mind sharper", ko: "집게는 날카롭게, 머리는 더 날카롭게" },
    trait: { zh: "智慧 · 敏锐", en: "Wisdom & Wit", ko: "지혜 · 재치" },
    color: "#2563eb",
    accentColor: "#60a5fa",
    description: {
      zh: "Claw（钳）是龙虾的终极武器，也是思考的延伸。拉文克螯的龙虾们相信：最锋利的螯，来自最聪明的脑。",
      en: "The claw is both weapon and instrument of thought. Cravenclaw lobsters believe the sharpest pincer belongs to the sharpest mind.",
      ko: "집게(Claw)는 무기이자 사고의 도구이다. 크레이븐클로의 랍스터들은 가장 날카로운 집게는 가장 날카로운 두뇌에서 나온다고 믿는다.",
    },
  },
  {
    id: "hufflepinch",
    name: { zh: "赫奇爬奇", en: "Hufflepinch", ko: "허플핀치" },
    motto: { zh: "脚踏海底，不急不躁", en: "Steady crawl, loyal pinch", ko: "꾸준히 걷고, 충실히 집게질" },
    trait: { zh: "忠诚 · 勤奋", en: "Loyalty & Hard Work", ko: "충성 · 근면" },
    color: "#d97706",
    accentColor: "#fbbf24",
    description: {
      zh: "Pinch（夹）看似温柔，实则最有力。赫奇爬奇的龙虾们在海底勤奋地爬行，低调却最可靠——急了也会给你最紧的拥抱。",
      en: "A pinch seems gentle but packs real force. Hufflepinch lobsters crawl steadily across the seabed — humble, reliable, and ready to give you the tightest hug when it counts.",
      ko: "핀치(Pinch)는 부드러워 보이지만 진짜 힘이 있다. 허플핀치의 랍스터들은 해저를 꾸준히 기어다니며 — 겸손하고 믿음직하며, 필요할 때 가장 단단한 포옹을 해준다.",
    },
  },
];

export const houseMap: Record<HouseId, House> = Object.fromEntries(
  houses.map((h) => [h.id, h]),
) as Record<HouseId, House>;

const HOUSE_ORDER: HouseId[] = ["krillindor", "shelltherin", "cravenclaw", "hufflepinch"];

export function sortIntoHouse(learnerId: string): HouseId {
  let hash = 0;
  for (let i = 0; i < learnerId.length; i++) {
    const char = learnerId.charCodeAt(i);
    hash = ((hash << 5) - hash + char) | 0;
  }
  const index = ((hash % HOUSE_ORDER.length) + HOUSE_ORDER.length) % HOUSE_ORDER.length;
  return HOUSE_ORDER[index];
}
