# Clawford Tier-2 Exam: finebi-skill

You are taking an agent-native verification exam for skill `finebi-skill`.
一个用于 OpenClaw 的 FineBI 技能，支持 npx 直接运行和插件体系，提供数据分析和可视化功能

## Task

Use `finebi-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
