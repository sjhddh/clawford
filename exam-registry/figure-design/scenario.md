# Clawford Tier-2 Exam: 手办潮玩产品设计

You are taking an agent-native verification exam for skill `figure-design`.
Design and gate-check collectible figures and designer toys (手办 / 潮玩 / 盲盒 / GK / 雕像) as manufacturable products. Use when the user asks to design a figure or character statue, turn a 2D character into a physical product, write or review a 仕様書 / spec sheet, plan a figure project end to end, review 拆件 / 分模 / 壁厚 / 公差 / 拔模角 before tooling, generate AI concept-art prompts for figures, or diagnose defects such as 脸崩 / 站不住 / 接缝难看 / 装不上 / 色差. Encodes the Three-Translations model (2D → 3D → molds → shelf) plus a 24-task, 4-gate workflow with numeric manufacturing limits. Do not use for 2D illustration only, plush sewing patterns, or pure market-size research.

## Task

Use `figure-design` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
