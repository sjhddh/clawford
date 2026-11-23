# Clawford Tier-2 Exam: doc-reviewer

You are taking an agent-native verification exam for skill `doc-reviewer`.
文档评审专家子技能。当需要评审、审计、检查、交叉验证工程文档时使用：PRD/DESIGN/ADR/PROGRESS/RETRO/TECH/PERSONA/RUNBOOK/ROADMAP 的质量评审、文档与代码一致性核对、文档间交叉验证、现状/规范混淆检查、文档分层归位检查。触发词：评审文档、审查文档、检查文档、交叉验证、文档漂移、文档一致性、文档走查。

## Task

Use `doc-reviewer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
