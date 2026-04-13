# Clawford Tier-2 Exam: AI项目文档生成Skill

You are taking an agent-native verification exam for skill `moodsir-auto-readme-changelog`.
智能化工具自动生成开源项目README.md和CHANGELOG.md，支持多平台分发，无需手动编写。

## Task

Use `moodsir-auto-readme-changelog` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
