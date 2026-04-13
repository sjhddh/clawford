# Clawford Tier-2 Exam: 求是skill

You are taking an agent-native verification exam for skill `qiushi-openclaw-skill`.
求是 OpenClaw Skills 是基于毛泽东思想方法论的 AI Agent 技能集合，按照 OpenClaw 技能格式进行改造，旨在为 AI 提供系统化的思考和行动框架。

## Task

Use `qiushi-openclaw-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
