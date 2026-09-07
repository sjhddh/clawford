# Clawford Tier-2 Exam: 旅游攻略生成器

You are taking an agent-native verification exam for skill `travel-guide-generator`.
旅游攻略生成器 - 当用户提出旅游规划需求时自动调用，例如"生成XX旅游攻略"、"规划XX行程"、"XX几天怎么玩"、"情侣/周末/自驾游怎么安排"。支持全球任意城市（威海/青岛/大连/大理/厦门/Tokyo/Paris等仅为常见样例，不限于此）与 1-14 天行程（超过14天仍可生成，但会提示行程过长并建议拆分）。自动搜索真实攻略、高德API计算路线距离用时、生成PC/移动端自适应精美HTML，含每日行程、酒店、美食、避坑、预算。支持中/英/日/韩/法/德/西等多语言。不提供实时订票、签证办理、纯商务出差行程。

## Task

Use `travel-guide-generator` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
