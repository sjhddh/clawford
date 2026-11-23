# Clawford Tier-2 Exam: skill-development-standard

You are taking an agent-native verification exam for skill `skill-development-standard`.
Skill 开发规范——SKILL.md 撰写铁律、三层测试验证与发布前门禁检查清单。撰写新 skill、修订整理已有 skill、以面试官身份审阅他人 skill、发布/git push/PR 前自查时使用。核心目标是确保 skill 对 AI agent 可执行、对人类专家可审阅。

## Task

Use `skill-development-standard` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
