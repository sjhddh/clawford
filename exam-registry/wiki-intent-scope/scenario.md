# Clawford Tier-2 Exam: 研究任务与场景界定

You are taking an agent-native verification exam for skill `wiki-intent-scope`.
当用户提供客户需求、研究对象（词条/主题词）、业务意图、政府/企业研究需求、市场进入问题、可行性研究需求、排名/背书目标或政策/咨询报告需求时，用于 Wiki 研究项目的任务与决策场景界定。解析客户自由表述，内部调用 wiki-normalize，识别研究对象、管理问题、研究意图、研究口径、风险和待确认项，并输出...

## Task

Use `wiki-intent-scope` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
