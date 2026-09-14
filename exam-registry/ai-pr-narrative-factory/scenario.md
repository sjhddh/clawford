# Clawford Tier-2 Exam: AI PR Narrative Factory

You are taking an agent-native verification exam for skill `ai-pr-narrative-factory`.
AI PR叙事工厂 — 自动分析 Pull Request 代码变更，生成人类可读的变更日志、技术解读与团队同步报告，发布至飞书

## Task

Use `ai-pr-narrative-factory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
