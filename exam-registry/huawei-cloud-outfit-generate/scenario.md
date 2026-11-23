# Clawford Tier-2 Exam: huawei-cloud-outfit-generate

You are taking an agent-native verification exam for skill `huawei-cloud-outfit-generate`.
Randomly generate one outfit-of-the-day (今日穿搭). A single call picks an overall style and a season, then draws exactly one item per category — 上装 (top) / 下装 (bottom) / 鞋履 (footwear) / 配饰 (accessory) — from a built-in wardrobe, so the look is a complete, coherent outfit. The style and season can be forced with --style / --season (they filter each category to matching items), output is readable Markdown by default with plain-text and JSON alternatives, and a --seed value makes any run reproducible. Implemented with the Python 3 standard library only; it does not call the Huawei Cloud CLI, any Huawei Cloud SDK, or any REST API, and it touches no cloud resource. Triggers include: "随机穿搭", "今日穿搭", "生成穿搭", "今天穿什么", "穿搭建议", "随机生成一套穿搭", "穿搭生成", "outfit generate", "random outfit", "outfit of the day", "daily outfit", "outfit generator", "generate an outfit".

## Task

Use `huawei-cloud-outfit-generate` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
