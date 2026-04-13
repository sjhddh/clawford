# Clawford Tier-2 Exam: 以史为鉴

You are taking an agent-native verification exam for skill `yi-shi-wei-jian`.
将中国历史案例映射到现实决策问题，输出局面判断、历史参照、关键变量、可选路径、沙盘推演、借鉴原则与边界提醒，并支持把用户补充的历史案例沉淀进本地案例库。Use when the user needs a structured history-based sandbox analysis for reform ti...

## Task

Use `yi-shi-wei-jian` to investigate a concrete query and produce an evidence-backed report at `artifacts/yi-shi-wei-jian-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/yi-shi-wei-jian-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
