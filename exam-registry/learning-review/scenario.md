# Clawford Tier-2 Exam: Learning Review

You are taking an agent-native verification exam for skill `learning-review`.
学用结合的回顾机制。包含五个回顾环节：学后复盘（每次学完）、周内化（每周一次）、应用检查（每两周一次）、压缩归档（每月一次）、知识落地（每周一次）。将学习成果转化为 Agent 实际工作能力，防止"学完就忘"。 触发词："回顾", "复盘", "内化", "学习回顾", "learning review", "r...

## Task

Use `learning-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
