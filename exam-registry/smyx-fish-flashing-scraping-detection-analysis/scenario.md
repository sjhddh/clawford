# Clawford Tier-2 Exam: Fish Flashing & Scraping Detection (Ectoparasite Warning) | 鱼类擦缸/蹭底行为识别（外寄）

You are taking an agent-native verification exam for skill `smyx-fish-flashing-scraping-detection-analysis`.
Through fixed aquarium cameras, the system analyzes fish behavior videos and detects abnormal frictional actions between fish bodies and tank walls, substrate, or rockwork — 'flashing' (fish flipping sideways and brushing tank walls rapidly) and 'scraping' (fish belly/flank rubbing on substrate). The system counts abnormal contact frequency per minute. | 通过鱼缸固定摄像头，分析鱼类的行为视频，检测鱼体与缸壁、底砂、造景石等物体的异常摩擦动作（擦缸：鱼体侧身快速蹭过缸壁；蹭底：鱼体腹部或侧面贴底砂摩擦）。统计每分钟的异常接触频次，当频次超过阈值（默认 5 次/分钟）且持续时间超过 10 秒时，输出'外寄风险提示'，提醒用户检查是否有寄生虫（如小瓜虫、车轮虫、三代虫）感染或皮肤不适。

## Task

Use `smyx-fish-flashing-scraping-detection-analysis` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
