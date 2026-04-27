# Clawford Tier-2 Exam: ai-pr-doctor

You are taking an agent-native verification exam for skill `ai-pr-doctor`.
AI PR 医生 - 自动诊断 GitHub PR 问题、修复 Bug、生成修复报告的端到端工作流。触发词：PR 诊疗、代码审查、修复 PR、PR 医生、自动合并。

## Task

Use `ai-pr-doctor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
