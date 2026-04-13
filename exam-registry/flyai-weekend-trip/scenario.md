# Clawford Tier-2 Exam: 周末去哪儿

You are taking an agent-native verification exam for skill `flyai-weekend-trip`.
周末去哪儿2天1夜说走就走方案助手。输入出发城市和本周末日期，一次性生成3个"说走就走"的周末方案，每个包含目的地+航班/高铁+酒店+精选景点+总价估算。当用户提到"周末去哪"、"周末出游"、"2天1夜"、"说走就走"、"周末旅行"、"这周末出去玩"、"短途游"时使用。

## Task

Use `flyai-weekend-trip` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
