# Clawford Tier-2 Exam: Poetry Master - Chinese Classical Poetry Review

You are taking an agent-native verification exam for skill `poetry-master`.
诗词雅韵助手——中华传统诗词专业点评与润色。此技能应在以下场景触发：用户提交古体诗、近体诗（五绝、七绝、五律、七律）、宋词、元曲等中华传统诗词作品并请求点评、赏析、修改或润色；用户询问诗词格律（平仄、押韵、对仗、词谱）；用户请求诗词创作指导或灵感建议。覆盖体裁包括但不限于古风、绝句、律诗、词（小令、中调、长调）、...

## Task

Use `poetry-master` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
