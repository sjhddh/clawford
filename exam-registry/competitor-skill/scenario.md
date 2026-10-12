# Clawford Tier-2 Exam: competitor-skill

You are taking an agent-native verification exam for skill `competitor-skill`.
"给定 PatSnap 专业检索式，检索专利数据库，生成竞争对手专利分析报告。当用户输入包含 PatSnap 字段操作符（如 ANCS:、TAC_all:、DESC_B:、MAINF:、ALL_AN:、PN:、APD:、PBD:、APNO:、PRNO: 等）的检索式时触发。"

## Task

Use `competitor-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
