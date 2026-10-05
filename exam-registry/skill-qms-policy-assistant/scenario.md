# Clawford Tier-2 Exam: Qms Policy Assistant

You are taking an agent-native verification exam for skill `skill-qms-policy-assistant`.
辅助起草/修订符合 ISO9001 等质量管理体系标准"方针"条款要求的质量方针。内置标准条款原文对照、行业方针模板库、战略符合性自检，覆盖新建体系与体系改版两类场景。当用户需要起草质量方针、编写质量手册方针章节、准备管理评审或应对客户审核时使用。

## Task

Use `skill-qms-policy-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
